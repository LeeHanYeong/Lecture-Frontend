import axios from 'axios'

export const state = () => ({
  sections: []
})

export const getters = {
  sections: state => state.sections
}

export const mutations = {
  setSections (state, list) {
    state.sections = [...state.sections, ...list]
  }
}

export const actions = {
  async getSections ({ commit }) {
    const res = await axios.get('http://localhost:8000/api/section/')
    commit('setSections', res.data)
  }
}
