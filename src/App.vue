<template>
  <div id="app">
    <language></language>
    <router-view/>
  </div>
</template>

<script>
  import language from './components/language'
export default {
  name: 'App',
  components:{ language },
  mounted(){
    let vm = this;
    document.onkeydown=function(ev){
      let event=ev ||event;
      if(event.keyCode == 27){
        vm.$router.go(-1)
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 120px;
}
</style>
