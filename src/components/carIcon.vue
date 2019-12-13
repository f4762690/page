<template>
    <div class="container">
      <i class="icon-car" @click="shopCar()"></i>
      <span class="num-wrap">{{goods.length}}</span>
    </div>
</template>

<script>
    import { mapGetters  } from 'vuex'
    "use strict";
    export default {
        name: "carIcon",
        methods:{
          shopCar(){
            this.$router.push({name:'shopCar'})
          }
        },
        computed:{
          ...mapGetters(['goods'])
        }
    }
</script>

<style scoped lang="less">
  .container{
    position:fixed;
    right:15px;
    top:15px;
    .icon-car{
      font-size:25px;
      cursor:pointer;
    }
    .num-wrap{
      position: relative;
      width: 25px;
      height: 25px;
      background-color: red;
      top: -15px;
      right: 15px;
      border-radius: 50%;
      display: inline-block;
      text-align: center;
      line-height: 25px;
      color: #fff;
    }
  }
</style>
