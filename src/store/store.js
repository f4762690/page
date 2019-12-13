import Vue from 'vue'
import Vuex  from 'vuex'
import langs from './langs'
import {Http} from 'vue-resource'
Vue.use(Vuex)

const state = {
  //语言文字
  ability :[],
  trans:{},
  currentLanguage:'en-US',
  langs:langs,
  goods:[{
    testName:'毛衣'
  },{
    testName:'小火龙'
  },{
    testName:'精灵龟'
  }],

  dataNature:{
    1:{
      'zh-CN':"勤奋",
    },
    2:{
      'zh-CN':"怕寂寞",
    },
    3:{
      'zh-CN':"勇敢",
    },
    4:{
      'zh-CN':"固执",
    },
    5:{
      'zh-CN':"顽皮",
    },
    6:{
      'zh-CN':"大胆",
    },
    7:{
      'zh-CN':"坦率",
    },
    8:{
      'zh-CN':"悠闲",
    },
    9:{
      'zh-CN':"淘气",
    },
    10:{
      'zh-CN':"乐天",
    },
    11:{
      'zh-CN':"胆小",
    },
    12:{
      'zh-CN':"急躁",
    },
    13:{
      'zh-CN':"认真",
    },
    14:{
      'zh-CN':"爽朗",
    },
    15:{
      'zh-CN':"天真",
    },
    16:{
      'zh-CN':"内敛",
    },
    17:{
      'zh-CN':"慢吞吞",
    },
    18:{
      'zh-CN':"冷静",
    },
    19:{
      'zh-CN':"害羞",
    },
    20:{
      'zh-CN':"马虎",
    },
    21:{
      'zh-CN':"温和",
    },
    22:{
      'zh-CN':"温顺",
    },
    23:{
      'zh-CN':"自大",
    },
    24:{
      'zh-CN':"慎重",
    },
    25:{
      'zh-CN':"浮躁",
    },
  },

  types:{
    1:{
      'en-US':"FIRE",
      'zh-CN':"火",
    },
    2:{
      'en-US':"WATER",
      'zh-CN':"水",
    },
    3:{
      'en-US':"GRASS",
      'zh-CN':"草",
    },
    4:{
      'en-US':"ELECTRIC",
      'zh-CN':"电",
    },
    5:{
      'en-US':"NORMAL",
      'zh-CN':"一般",
    },
    6:{
      'en-US':"FIGHTING",
      'zh-CN':"格斗",
    },
    7:{
      'en-US':"FLYING",
      'zh-CN':"飞行",
    },
    8:{
      'en-US':"BUG",
      'zh-CN':"虫",
    },
    9:{
      'en-US':"POISON",
      'zh-CN':"毒",
    },
    10:{
      'en-US':"ROCK",
      'zh-CN':"岩石",
    },
    11:{
      'en-US':"GROUND",
      'zh-CN':"地面",
    },
    12:{
      'en-US':"STEEL",
      'zh-CN':"钢",
    },
    13:{
      'en-US':"ICE",
      'zh-CN':"冰",
    },
    14:{
      'en-US':"PSYCHIC",
      'zh-CN':"超能",
    },
    15:{
      'en-US':"DARK",
      'zh-CN':"恶",
    },
    16:{
      'en-US':"GHOST",
      'zh-CN':"幽灵",
    },
    17:{
      'en-US':"DRAGON",
      'zh-CN':"龙",
    },
    18:{
      'en-US':"FAIRY",
      'zh-CN':"妖精",
    },
  },

  eggGroups:{
    1:{
      'en-US':"Monster",
      'zh-CN':"怪兽",
    },
    2:{
      'en-US':"Monster",
      'zh-CN':"水中1",
    },
    3:{
      'en-US':"Monster",
      'zh-CN':"昆虫",
    },
    4:{
      'en-US':"Monster",
      'zh-CN':"飞行",
    },
    5:{
      'en-US':"Monster",
      'zh-CN':"陆上",
    },
    6:{
      'en-US':"Monster",
      'zh-CN':"妖精",
    },
    7:{
      'en-US':"Monster",
      'zh-CN':"植物",
    },
    8:{
      'en-US':"Monster",
      'zh-CN':"人形",
    },
    9:{
      'en-US':"Monster",
      'zh-CN':"水中3",
    },
    10:{
      'en-US':"Monster",
      'zh-CN':"矿物",
    },
    11:{
      'en-US':"Monster",
      'zh-CN':"不定形",
    },
    12:{
      'en-US':"Monster",
      'zh-CN':"水中2",
    },
    13:{
      'en-US':"Monster",
      'zh-CN':"百变怪",
    },
    14:{
      'en-US':"Monster",
      'zh-CN':"飞龙",
    },
    15:{
      'en-US':"Monster",
      'zh-CN':"未发现",
    },
  },

  colors:{1:"red", 2:"blue",3: "yellow",4: "green",5:"black",6: "brown",7: "purple", 8:"gray", 9:"white",10: "pink"}
};

const getters = {
  dataNature:state => state.dataNature,
  ability:state => state.ability,
  colors:state => state.colors,
  types:state=>state.types,
  langs:state => state.langs,
  trans: (state) => {
    return state.langs.hasOwnProperty(state.currentLanguage)?state.langs[state.currentLanguage]:state.langs['en-US']
  },
  currentLanguage:state => state.currentLanguage,
  goods:state => state.goods,
  eggGroups:state => state.eggGroups,
};

const actions = {

}

const mutations = {
  setLan(state,lan){
    state.currentLanguage = lan;
    localStorage.setItem('language',state.currentLanguage)
  },
  deleteGoods(state,goods){
    state.goods.forEach((item,index)=>{
      if(item.testName == goods.testName){
        state.goods.splice(index,1)
      }
    })
    localStorage.setItem("goods", JSON.stringify(state.goods));
  },

  clearCar(state){
    state.goods = [];
    localStorage.setItem("goods",'');
  },

  addCar(state,good){
    //判断是否包含这个产品,包含的数量+1，不包含添加一个类别。
    let exit;
    exit = state.goods.some((item)=>{
      if(item.testName == good.testName){
        item['number']+=1;
      }
      return item.testName == good.testName;
    });

    if(!exit){
      good['number'] = 1;
      state.goods.push(good)
    }
    localStorage.setItem("goods", JSON.stringify(state.goods));
  },

  saveCar(state,goods){
    localStorage.setItem("goods", JSON.stringify(goods));
  }

}


function  recoverCompression(mode, data) {
  var look_up = [];
  switch (mode) {
    case 'pokemon-list':
      look_up = ['nat_id', 'name', 'name_zh', 'name_en', 'name_jp',
        'type', 'type_b', 'ability', 'ability_b', 'ability_hidden',
        'weight', 'alola_id', 'form', 'egg_group', 'egg_group_b', 'color', 'bs_hp', 'bs_atk',
        'bs_def', 'bs_spatk', 'bs_spdef', 'bs_spd', 'has_evolution', 'galar_id', 'ev_defeated'];
      break;
    case 'move-list':
      look_up = ['move_id', 'name_zh', 'name_en', 'name_jp', 'type', 'class', 'power', 'target',
        'accuracy', 'pp', 'description', 'flags', 'hits', 'gigamax_power', 'gen8_tm_id', 'gen8_tr_id', 'z_move', 'z_power'];
      break;
    case 'item-list':
      look_up = ['item_id', 'name_zh', 'name_en', 'name_jp', 'type',
        'description', 'tm_name_zh', 'img_id', 'obtainable'];
      break;
    case 'ability-list':
      look_up = ['abi_id', 'name_zh', 'name_en', 'name_jp', 'brief_description'];
      break;
  }

  var result = data instanceof Array ? [] : {};
  for (var i in data) {
    if (!data.hasOwnProperty(i)) continue;
    var build = {};
    for (var j in data[i]) {
      if (!data[i].hasOwnProperty(j)) continue;
      build[look_up[j]] = data[i][j];
    }
    result[i] = build;
  }

  return result;
};


mutations.init = function(state){
  Http.get('http://assets.thinkskysoft.com/galar/data/ability-list.json').then((res)=>{
    if(res.status == 200){
      state.ability = recoverCompression('ability-list',res.data)
    }
  })

  state.goods = localStorage.getItem("goods") == ''?[]:JSON.parse(localStorage.getItem("goods"))||[];

  state.currentLanguage = localStorage.getItem("language")||'en-US';
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules:{

  }
})
