import Vue from 'vue'
import Vuex from 'vuex'
import '@/style/index.less'
// 导入本地存储中封装的 setItem, getItem 方法
import { setItem, getItem } from '../store/storage.js'

Vue.use(Vuex)
// 声明 token 的 key 值
const TOKNE_KEY = 'CROWD_USER'

export default new Vuex.Store({
  state: {
    // 存储当前登录的用户信息
    user: getItem(TOKNE_KEY)
  },
  mutations: {
    // 对 user 进行修改
    setUser(state, data) {
      state.user = data
      // 为了防止刷新丢失，我们需要把数据备份到本地存储
      window.localStorage.setItem(TOKNE_KEY, JSON.stringify(state.user))
    }
  },
  actions: {
  },
  modules: {
  }
})
