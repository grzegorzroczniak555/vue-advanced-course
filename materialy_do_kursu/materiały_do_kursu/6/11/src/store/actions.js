import axios from "axios"

export default {
  async register({ commit }, { email, username, password }) {
    const { data } = await axios.post("/api/signup", {
      email, username, password
    })

    commit("signIn", data.isAuth)
  }
}