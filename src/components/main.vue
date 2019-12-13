<template>
  <div class="container">
   <carIcon></carIcon>
    <div class="search-wrap">
      <input type="text" @keyup.enter="searchPokemon" v-model="searchText"><i class="icon-search" @click="searchPokemon"></i>
    </div>

    <ul>
      <li v-for="(item,index) in datas" :key="index">
        <div class="border-wrap">
          <img :src="item.img">
          {{item.testName}}
        </div>
        <div class="mt-15">
          <el-button size="small" type="primary" @click.stop.prevent="addCar(item)">{{trans.buy}}</el-button>
        </div>
      </li>
    </ul>

    <section class="footer">
      <el-button type="primary" @click.stop.prevent="selfDefinition">{{trans.customize}}</el-button>
    </section>

  </div>
</template>

<script>
  import carIcon from './carIcon'
  import { mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      searchText:'',
      datas:[
        {
          img:'http://assets.thinkskysoft.com/vlocapi/pokemon_list_img/376.png',
          testName:'宠物1'
        }, {
          img:'http://assets.thinkskysoft.com/vlocapi/pokemon_list_img/10.png',
          testName:'宠物2'
        }, {
          img:'http://assets.thinkskysoft.com/vlocapi/pokemon_list_img/130.png',
          testName:'宠物3'
        }, {
          img:'http://assets.thinkskysoft.com/vlocapi/pokemon_list_img/242.png',
          testName:'宠物4'
        },
      ]
    }
  },
  components:{
    carIcon
  },
  computed:{
    ...mapGetters(['trans','goods'])
  },
  methods:{
    addCar(goods){
      if(this.goods.length>=30){
        this.$message.error('错了哦，这是一条错误消息');
        return;
      };


      this.$store.commit('addCar',goods);
      this.$router.push({ name:'shopCar'})
    },
    searchPokemon(){
      let vm = this;
      vm.$axios.post('/api/v1/search',{
        word:vm.searchText
      }).then((res)=>{
        if(res.status == 200){
          if(res.data.data&&vm.searchText){
            vm.$router.push({ name:'pokemonDetail',params:res.data.data[0]})
          }else{
            vm.$alert('没有这种宠物', '提示', {
              confirmButtonText: '确定',
              callback: action => {
                // this.$message({
                //   type: 'info',
                //   message: `action: ${ action }`
                // });
              }
            });

          }
        }
      })
    },
    selfDefinition(){
      this.$router.push({ name:'optionTable'  })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .container{
    .icon-car{
      position:fixed;
      font-size:20px;
      right:15px;
      top:5px;
      cursor:pointer;
    }
    .search-wrap{
      margin-bottom:160px;
      display:inline-block;
      position:relative;
      input{
        outline:none;
        border:1px solid #eee;
        height:35px;
        line-height:35px;
        min-width:500px;
      }
      .icon-search{
        position:absolute;
        right:10px;
        top:10px;
      }
    }

    ul{
      width:80%;
      margin:0 auto;
      list-style:none;
      display:flex;
      li{
        text-align:center;
        flex:1;
        display:inline-block;
        .border-wrap{
          width:200px;
          height:200px;
          border:10px solid #ccc;
          margin:0 auto;
        }
      }
    }




    .footer{
      position:fixed;
      bottom:80px;
      left:0;
      right:0;
      margin:auto;
    }
  }


</style>
