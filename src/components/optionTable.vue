<template>
  <section class="container">
    <carIcon></carIcon>
    <table>
      <tr>
        <th>
          编号
        </th>
        <th>
          图标
        </th>
        <th>
          宝可梦
        </th>
        <th>
          属性
        </th>
        <th>
          生蛋分组
        </th>
        <th>
          特性
        </th>
        <th>
          特性2
        </th>
        <th>
          隐藏特性
        </th>
        <th>
          HP
        </th>
        <th>
          物攻
        </th>
        <th>
          物防
        </th>
        <th>
          特攻
        </th>
        <th>
          特防
        </th>
        <th>
          速度
        </th>
      </tr>
      <tr v-for="(item,index) in tableData" :key="index" @click="detail(item)">
        <td>
          {{index+=1}}
        </td>
        <td>
          <img :src="getImg(item)" class="img-wrap">
        </td>
        <td>
          {{item.name}}
        </td>
        <!--<td v-if="item.type_b == 0" :style="{background:colors[item.color],color:'#fff'}">-->
          <!--{{types[item.type][currentLanguage]}}-->
        <!--</td>-->
        <!--<td v-else>-->
          <!--<span :style="{background:colors[item.color],color:'#fff'}">{{types[item.type][currentLanguage]}}</span>-->
          <!--<span :style="{background:colors[item.color],color:'#fff'}">{{types[item.type_b][currentLanguage]}}</span>-->
        <!--</td>-->

        <td style="display:flex">
          <span :style="{background:'red',color:'#fff',display:'inline-block',flex:1,lineHeight:'40px',borderRight:'1px solid white'}">{{types[item.type][currentLanguage]}}</span>
          <span :style="{background:'green',color:'#fff',display:'inline-block',flex:1,lineHeight:'40px'}">{{types[item.type][currentLanguage]}}</span>
        </td>
        <td>
          {{`${eggGroups[item.egg_group][currentLanguage]}${item.egg_group_b == 0?'':"+"+eggGroups[item.egg_group_b][currentLanguage]}`}}
        </td>
        <td>
          {{abilityValue(item.ability+1)}}
        </td>
        <td>
          {{abilityValue(item.ability_b+1)}}
        </td>
        <td>
          {{abilityValue(item.ability_hidden+1)}}
        </td>
        <td>
          {{item.bs_hp}}
        </td>
        <td>
          {{item.bs_atk}}
        </td>
        <td>
          {{item.bs_def}}
        </td>
        <td>
          {{item.bs_spatk}}
        </td>
        <td>
          {{item.bs_spdef}}
        </td>
        <td>
          {{item.bs_spd}}
        </td>

      </tr>
    </table>

  </section>
    
</template>

<script>
    import { mapGetters } from 'vuex'
    import carIcon  from './carIcon';
    "use strict";
    export default {
        name: "optionTable",
        data(){
          return {
            tableData:[]
          }
        },
        components:{
          carIcon
        },
        computed:{
          ...mapGetters(['eggGroups','types','currentLanguage','colors','ability'])
        },
        methods:{
          abilityValue(id){
            let lan;
            switch (this.currentLanguage) {
              case 'en-US':
                lan = 'name_en';
                break;
              case 'zh-CN':
                lan = 'name_zh';
                break;
              case 'name_jp':
                lan = 'name_en';
                break;
              default:
                lan = 'name_en';
                break;
            }
            return this.ability[id][lan];
          },
          getImg(item){
            return `http://assets.thinkskysoft.com/galar/img/${item.nat_id}.png `
          },
          detail(item){
            this.$router.push({ name:'pokemonDetail',params:item})
          },
          addCar(){
            this.$router.push({ name:'shopCar'})
          }
        },
        mounted(){
          let vm = this;
          this.$axios.get('/api/v1/recommend').then((res)=>{
            if(res.data.code == 200){
              vm.tableData = res.data.data
            }
        })
        }
    }
</script>

<style scoped lang="less">
  .container{
    table{
      width:100%;
      background-color:#ccc;
      tr{
        cursor:pointer;
        th{
          background-color:#eee;
        }
        td{
          background-color:#fff;
          height:40px;
        }
        .img-wrap{
          width:30px;
          height:30px;
        }
      }
    }
  }

</style>
