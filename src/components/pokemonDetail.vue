<template>
    <div class="container">
     <section class="header">
        <carIcon></carIcon>
     </section>

      <section class="header-wrap">
        <div class="left-part">
          <img :src="getImg()"><br>
          <span>{{getName()}}</span>
        </div>
        <div class="center">
          <input class="nameInput" type="text" placeholder="请输入训练师名称">

          <section class="option-wrap">
            <div class="f-1">
              <input class="num" min=0 max=100 type="number" v-model="mValue" @input="mCheck(1,100)" maxlength="30">M<br>
              <input class="num" min=0 max=1000 type="number" v-model="kgValue" @input="kgCheck(1,200)" maxlength="30">KG
            </div>
            <div class="f-1">
              <el-radio v-model="radio" label="1" class="mb-10">普通</el-radio><br>
              <el-radio v-model="radio" label="2" class="mb-10">闪光</el-radio><br>
              <el-radio v-model="radio" label="3">方块闪</el-radio>
            </div>
            <div class="f-1">
              <el-radio v-model="sex" label="1" class="mb-10">雄性</el-radio><br>
              <el-radio v-model="sex" label="2">雌性</el-radio>
            </div>
          </section>
        </div>
      </section>

      <section class="body-wrap">
        <table>
          <tr>
            <th></th><th>种族值</th><th></th><th>基础得点</th><th>个体值</th><th>努力值(510)</th><th>能力值</th>
          </tr>
          <tr>
            <td>HP</td>
            <td>{{info.bs_hp}}</td>
            <td class="wd-200"><el-progress :percentage="info.bs_hp" type='line' show-text=false></el-progress></td>
            <td>0</td>
            <td><input type="number" class="number-style" v-model="p1" min=0 max=31  @input="checkValue('p1',0,31)"></td>
            <td><input type="number" class="number-style" v-model="h1" min=0 max=252  @input="checkValue('h1',0,252)"></td>
            <td>111</td>
          </tr>
          <tr>
            <td>攻击</td>
            <td>{{info.bs_atk}}</td>
            <td class="wd-200"><el-progress :percentage="info.bs_atk"></el-progress></td>
            <td>0</td>
            <td><input type="number" class="number-style" v-model="p2" min=0 max=31  @input="checkValue('p2',0,31)"></td>
            <td><input type="number" class="number-style" v-model="h2" min=0 max=252  @input="checkValue('h2',0,252)"></td>
            <td>125</td>
          </tr>
          <tr>
            <td>防御</td>
            <td>{{info.bs_def}}</td>
            <td class="wd-200"><el-progress :percentage="info.bs_def"></el-progress></td>
            <td>0</td>
            <td><input type="number" class="number-style" v-model="p3" min=0 max=31  @input="checkValue('p3',0,31)"></td>
            <td><input type="number" class="number-style" v-model="h3" min=0 max=252  @input="checkValue('h3',0,252)"></td>
            <td>125</td>
          </tr>
          <tr>
            <td>特攻</td>
            <td>{{info.bs_spatk}}</td>
            <td class="wd-200"><el-progress :percentage="info.bs_spatk"></el-progress></td>
            <td>0</td>
            <td><input type="number" class="number-style" v-model="p4" min=0 max=31  @input="checkValue('p4',0,31)"></td>
            <td><input type="number" class="number-style" v-model="h4" min=0 max=252  @input="checkValue('h4',0,252)"></td>
            <td>125</td>
          </tr>
          <tr>
            <td>特防</td>
            <td>{{info.bs_spdef}}</td>
            <td class="wd-200"><el-progress :percentage="info.bs_spdef"></el-progress></td>
            <td>0</td>
            <td><input type="number" class="number-style" v-model="p5" min=0 max=31  @input="checkValue('p5',0,31)"></td>
            <td><input type="number" class="number-style" v-model="h5" min=0 max=252  @input="checkValue('h5',0,252)"></td>
            <td>125</td>
          </tr>
          <tr>
            <td>速度</td>
            <td>{{info.bs_spd}}</td>
            <td class="wd-200"><el-progress :percentage="info.bs_spd"></el-progress></td>
            <td>0</td>
            <td><input type="number" class="number-style" v-model="p6" min=0 max=31  @input="checkValue('p6',0,31)"></td>
            <td><input type="number" class="number-style" v-model="h6" min=0 max=252  @input="checkValue('h6',0,252)"></td>
            <td>125</td>
          </tr>
          <tr>
            <td>
              总和
            </td>
            <td>
              {{info.bs_hp + info.bs_atk + info.bs_def + info.bs_spatk + info.bs_spdef + info.bs_spd}}
            </td>
            <td>
              觉醒力量属性-恶
            </td>
            <td>
              0
            </td>
            <td>
              等级<input type="number" class="number-style" v-model="level" min=1 max=100  @input="checkValue('level',1,100)">
            </td>
            <td colspan="2">
              <el-select v-model="choseValue" placeholder="请选择" size="mini">
                <el-option
                  v-for="(item,index) in dataNature"
                  :key="index"
                  :label="item[currentLanguage]"
                  :value="index">
                </el-option>
              </el-select>
            </td>

          </tr>
        </table>
      </section>

      <section class="footer">
        <el-button type="primary" @click.stop.prevent="buy">立即购买</el-button>
        <el-button type="primary" @click.stop.prevent="joinCar">加入购物车</el-button>
      </section>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import carIcon from './carIcon';
    "use strict";
    export default {
        name: "pokemonDetail",
        data(){
          return {
            level:1,
            mValue:1,
            kgValue:1,
            p1:1,
            p2:1,
            p3:1,
            p4:1,
            p5:1,
            p6:1,
            h1:1,
            h2:1,
            h3:1,
            h4:1,
            h5:1,
            h6:1,
            info:{},
            options: [{
              value: '选项1',
              label: '黄金糕'
            }, {
              value: '选项2',
              label: '双皮奶'
            }, {
              value: '选项3',
              label: '蚵仔煎'
            }, {
              value: '选项4',
              label: '龙须面'
            }, {
              value: '选项5',
              label: '北京烤鸭'
            }],
            choseValue: '',
            imgSrc:'http://assets.thinkskysoft.com/vlocapi/pokemon_list_img/289.png',
            radio:'1',
            sex:'1'
          }
        },
        components:{
          carIcon
        },

        computed:{
          ...mapGetters(['dataNature','currentLanguage'])
        },

        beforeRouteEnter (to, from, next) {
          next(vm =>{
            vm.info = vm.$route.params;
          });
        },

        methods:{
        //   natureModifier(nature, isText) {
        //   var result = isText ? [] : {1: 1, 2: 1, 3: 1, 4: 1, 5: 1};
        //   if ((nature - 1) % 6 !== 0) {
        //     var checkstr = '00121513142100252324515200535431323500344142454300';
        //     if (!isText) {
        //       result[checkstr[nature * 2 - 2]] = 1.1;
        //       result[checkstr[nature * 2 - 1]] = 0.9;
        //     } else {
        //       result.push('+' + $scope._LANG.pokemon.data_stat_en[checkstr[nature * 2 - 2]]);
        //       result.push('-' + $scope._LANG.pokemon.data_stat_en[checkstr[nature * 2 - 1]]);
        //     }
        //   } else if (isText) {
        //     result.push($scope._LANG.no_modification);
        //   }
        //   return result;
        // },

          abilityValue(base_stat, level, stat, nature, ev, iv, pokemon) {
            if (!base_stat) return '0';
            var ev_factor = Math.floor(Math.min(Math.max(parseInt(ev), 0), 255) / 4);
            var iv_factor = parseInt(iv);
            var modifier  = stat == C.STAT.HP ? 0 : this.natureModifier(nature)[stat];
            var result    = stat == C.STAT.HP ?
              (base_stat == 1 ? 1 : Math.floor((base_stat * 2 + ev_factor + iv_factor) * level / 100) + level + 10) :
              Math.floor((Math.floor((base_stat * 2 + ev_factor + iv_factor) * level / 100) + 5) * modifier);
            if ('undefined' !== typeof pokemon) {
              pokemon.stats[stat] = result;
              if (stat == C.STAT.HP) {
                pokemon.hp_percentage = pokemon.current_hp / result * 100;
                if (!pokemon.current_hp) {
                  pokemon.current_hp = result;
                }
              }
            }
            return result + (stat == C.STAT.SPEED && pokemon && pokemon.status == C.STATUS.PARALYZE ? '→' + Math.floor(result / 2) : '');
          },

          checkValue(value,min,max){
            if(this[value]<min) this[value] = min;
            if(this[value]>max)this[value] = max;
          },
          getImg(){
            return `http://assets.thinkskysoft.com/galar/img/${this.info.nat_id}.png `
          },

          getName(){
            return this.info.name;
          },

          shopCar(){
            this.$router.push({ name:'shopCar'})
          },
          buy(){
            alert(1);
          },
          joinCar(){
            alert(this.choseValue);
            this.$router.push({ name:'shopCar'})
          },
          handleChange(num){
            this.mValue = this.mValue >num?num:this.mValue;
          },
          mCheck(min,max){
            if(this.mValue<min) this.mValue = min;
            if(this.mValue>max)this.mValue = max;
          },
          kgCheck(min,max){
            if(this.kgValue<min) this.kgValue = min;
            if(this.kgValue>max) this.kgValue = max;
          }
        }
    }
</script>

<style scoped lang="less">
  .container{
    .header{
      position: fixed;
      top:15px;
      right:0;
      i{
        font-size:25px;
        margin-right:15px;
      }
    }

    .header-wrap{
      width:60%;
      margin:0 auto;
      margin-bottom:30px;
      display:flex;
      .left-part{
        flex-direction:column;
        display:flex;
        align-items: center;
        justify-content: center;
        width:120px;
        img{
          width:80px;
          height:80px;
        }
      }
      .center{
        text-align:left;
        flex:1;
        .nameInput{
          outline:none;
          border:1px solid #ccc;
          width:80%;
          height:30px;
          line-height:30px;
          font-size:18px;
        }
      }

      .option-wrap{
        margin-top:20px;
        display:flex;
        .f-1{
          flex:1;
          text-align:left;
        }
        .num{
          width:80px;
          height:25px;
          outline:none;
          margin:0 0 15px 0;
          border-radius:5px;
        }

      }
    }

    .body-wrap{
      width:60%;
      margin:0 auto;
      margin-bottom:50px;
      display:flex;
      table{
        width:100%;
        margin: 0 auto;
        border-top:1px solid #eee;
        border-right:1px solid #eee;
        box-shadow:1px 0 3px rgba(7,17,27,.3);
        th{
          border-bottom:1px solid #eee;
        }
        tr{
          height:40px;
          line-height:40px;
          td:first-child{
            border-right:1px solid #eee;
          }
          input{
            width:50px;
          }

        }
      }

    }
  }

</style>
