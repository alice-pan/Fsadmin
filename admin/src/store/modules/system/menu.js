import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
import axios from 'axios';

export default {
  state: {
    topmenu: [],
    children:[]
  },
  
  actions: {
    getTopMenu(context) {
      axios.get(process.env.VUE_APP_API_HOST+'/topmenu').then(response=>{
        context.commit("setTopMenu",response.data)
     })

    },
    getChildMenu(context,data){
      axios.get(process.env.VUE_APP_API_HOST+'/children'+'/'+data).then(response=>{
        context.commit("setChildMenu",response.data)
     })
    }
  },
  mutations: {

    setTopMenu(state,data){
      //console.log(data);
      state.topmenu=data;
    },
    setChildMenu(state,data){
      console.log(data.items);
      state.children=data.items;
    }

  },
  getters: {}
}