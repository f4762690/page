<template>
    <div class="container">
      <el-select v-model="value"  size="mini" @change="setLanguage">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    "use strict";
    export default {
        name: "language",
        data(){
          return {
            defaultLan:'',
            options: [{
              value: 'zh-CN',
              label: '中文'
            }, {
              value: '选项2',
              label: '日文'
            }, {
              value: 'en-US',
              label: '英文'
            }, {
              value: '选项4',
              label: '德文'
            }, {
              value: '选项5',
              label: '意大利文'
            }, {
              value: '选项6',
              label: '西文'
            }, {
              value: '选项7',
              label: '法文'
            }, {
              value: '选项8',
              label: '韩文'
            }],
            value: ''
          }
        },
        computed:{
          ...mapGetters(['currentLanguage'])
        },
        mounted(){
          this.value = this.getLan(this.currentLanguage);
        },
        methods:{
          setLanguage(){
            this.$store.commit('setLan',this.value)
          },

          getLan(code){
            let lan;
            switch(code){
              case 'en-US':
                lan = '英文';
                break;
              case 'zh-CN':
                lan = '中文';
                break;
              default:
            }
            return lan;
          },
          getCode(lan){
            let code;
            switch (lan) {
              case '中文':
                code = 'zh-CN';
                break;
              case '英文':
                code = 'en-US';
                break;
            }
            return code;
          }
        }
    }
</script>

<style scoped lang="less">
  .container{
    position:fixed;
    top:15px;
    left:15px;
  }

</style>
