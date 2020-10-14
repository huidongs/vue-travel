import Vue from 'vue'
import Vuex from 'vuex'
// import action from './actions'
// import state from './state'
// import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    city: '南京'
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
    }
  }
})

export default store
// ─ store
//     ├── index.js          # 我们组装模块并导出 store 的地方
//     ├── actions.js        # 根级别的 action
//     ├── mutations.js      # 根级别的 mutation
//     └── modules
//         ├── cart.js       # 购物车模块
//         └── products.js   # 产品模块
