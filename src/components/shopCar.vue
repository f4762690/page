<template>
    <div class="container">
      <table>
        <tr>
          <th>编号</th>
          <th>宝可梦</th>
          <th>{{trans.number}}</th>
          <th>操作</th>
        </tr>

        <tr v-for="(item,index) in goods" :key="index">
          <td>{{index}}</td>
          <td>{{item.testName}}</td>
          <td>
            <el-input-number v-model="item.number" @change="handleChange(item)" size='small' :min="1" :max="10"></el-input-number>
          </td>
          <td>
            <i class="icon-edit" @click.stop.prevent="editDetail(item)"></i>
            <i class="icon-delete" @click.stop.prevent="deleteGoods(item)"></i>
          </td>
        </tr>
      </table>

      <section class="footer">
        <el-button type="primary" @click.stop.prevent="buy">现在购买</el-button>
        <el-button type="primary" @click.stop.prevent="clear">清空</el-button>
      </section>
    </div>
</template>

<script>
    import { mapState,mapGetters} from 'vuex'
    "use strict";
    export default {
        name: "shopCar",
        computed:{
          ...mapGetters(['goods','trans'])
        },
        methods:{
          handleChange(goodItem){
            this.goods.forEach((item)=>{
              if(goodItem.testName == item.testName){
                item.number = goodItem.number;
              }
            });
            this.$store.commit('saveCar',this.goods);
          },

          editDetail(goods){
            this.$router.push({ name:'pokemonDetail'})
          },

          clear(){
            this.$confirm('是否清空购物车?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.$store.commit('clearCar');
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              });
            });
          },
          buy(){

          },
          deleteGoods(goods){
            this.$confirm('是否删除?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.$store.commit('deleteGoods',goods)
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              });
            });
          }
        }
    }
</script>

<style scoped lang="less">
  .container{
    table{
      width:60%;
      margin:0 auto;
      background-color:#ccc;
      tr{
        th{
          background-color:#fff;
          height:30px;
          line-height:30px;
          font-weight:200;
        }
        td{
          height:30px;
          line-height:30px;
          background-color:#fff;
        }
        .icon-edit{
          margin-right:10px;
        }
        .icon-delete{
        }
      }
    }


    .footer{
      position:fixed;
      bottom:30px;
      left:0;
      right:0;
      margin:auto;
    }
  }

</style>
