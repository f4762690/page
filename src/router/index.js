import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
const options_table = function(resolve) { require(['@/components/optionTable'], resolve) }
const pokemon_detail = function(resolve) { require(['@/components/pokemonDetail'], resolve) }
const shop_car = function(resolve) { require(['@/components/shopCar'], resolve) }

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },{
      path: '/options',
      name: 'optionTable',
      component: options_table
    },{
      path: '/pokemon',
      name: 'pokemonDetail',
      component: pokemon_detail
    },{
      path: '/shopCar',
      name: 'shopCar',
      component: shop_car
    }
  ]
})
