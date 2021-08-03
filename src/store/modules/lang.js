  const state = {
    lang: 'en',
  }
  const mutations = {
    setLang (state, val) {
      state.lang = val// 设置点击页
    }
  }

  export default {
    namespaced: true,
    state,

    mutations
  }
  