import axios from 'axios';

const state = {
  user: undefined,
};

const getters = {
  user(state) {
    return state.user;
  },
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
};

const actions = {
  async signUp({ commit }, payload) {
    try {
      let result = await axios.post("http://localhost:3000/users", {
        name: payload.name,
        last_name: payload.last_name,
        email: payload.email,
        country: payload.country,
        password: payload.password,
        profile: {
          birthday: "",
          location: "",
          languages: [],
          hobby: [],
          bio: "",
          personality: [],
          skills: [],
          notes: "",
          social_media: [],
        },
      });

      if (result.status === 201) {
        localStorage.setItem("user", JSON.stringify(result.data));
        commit('setUser', result.data);
      
      }
    } catch (error) {
      console.error("Error during user sign up:", error);
      // Handle error appropriately here, such as setting an error state
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
