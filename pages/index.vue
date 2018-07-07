
<template>
  <div class="all-in-container">
    <p class="title">LOGIN</p>
    <input class="id" v-model="id" type="text" placeholder="ID">
    <input class="pass" v-model="pass" type="text" placeholder="PASS">
    <button class="send-button" @click="postLoginData()">login?</button>
    <button class="send-button" @click="getUsers()">User</button>
    <nuxt-link to="/IL" class="send-button">GO</nuxt-link>
  </div>
</template>

<script>
import Cookies from "universal-cookie";
let cookies;
export default {
  layout: "login",
  data: function() {
    return {
      id: "",
      pass: ""
    };
  },
  mounted() {
    cookies = new Cookies();
  },
  methods: {
    addCredential() {
      cookies.set("credential", "1");
    },
    removeCredential() {
      console.log("remove");

      cookies.set("credential", "");
    },
    async postLoginData() {
      const data = {
        name: 'demouser',
        password: 'password'
      };
      try {
          const params = new URLSearchParams();
          params.append('name', 'demouser');
          params.append('password', 'password');
          const res = await this.$axios.post("https://quattorroserver.herokuapp.com/api/authenticate", data);
          console.log(res);
          console.log(res.data.token);
          if(res.data.success){
            cookies.set('dockhack-x-access-token',res.data.token,{ path: '/', maxAge: 1440 });

          }
        } catch (error) {
          console.log(error);
        }
    },
    async getUsers(){
      const data = {
        userId: 1,
      };
      const token = cookies.get('dockhack-x-access-token');
      const res = await this.$axios.get('https://quattorroserver.herokuapp.com/api/users', data, { headers: {'x-access-token': token} })
      console.log(token);
      console.log(res.data);
      if(!res.success){
        this.$nuxt.$router.replace({ path: '/' })
      }
    }
  }
};
</script>

<style>
.all-in-container {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.title {
  margin-bottom: 45px;
  color: #ffffff;
  font-size: 36px;
  font-family: "Hiragino Sans";
  line-height: 54px;
}

input {
  border: none;
  border-bottom: 4px solid rgba(255, 255, 255, 0.4);
  background: none;
  font-size: 24px;
  line-height: 36px;
  color: #ffffff;
}

.id {
  margin-bottom: 90px;
}

.pass {
  margin-bottom: 80px;
}

.send-button {
  height: 42px;
  width: 232px;
  border-radius: 21px;
  border: none;
  background-color: #2b5876;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  color: #ffffff;
  font-family: Helvetica;
  font-size: 36px;
  font-weight: bold;
  line-height: 43px;
  text-align: center;
}

a {
  text-decoration: none;
}
</style>
