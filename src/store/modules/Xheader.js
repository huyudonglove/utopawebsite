const state = {
  isShowHeader: false,
}
const mutations = {
  setIsShowHeader (state, val) {
    state.isShowHeader = val// 设置点击页
  }
}
const actions = {
  getIsShowHeader ({commit}, val) {
    // console.log(val,88888)
    commit('isShowHeader', val)
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}
