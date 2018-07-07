
<template>
  <div class="all-in-container">
    <p class="title">LOGIN</p>
    <p>{{ message }}</p>
    <input class="id" v-model="name" type="text" placeholder="ID">
    <input class="pass" v-model="pass" type="text" placeholder="PASS">
    <button class="send-button" @click="postLoginData()">LOGIN</button>
  </div>
</template>

<script>
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default {
  layout: "login",
  data: function() {
    return {
      name: "",
      pass: "",
      message: ""
    };
  },
  methods: {
    async postLoginData() {
      console.log(this.name);
      console.log(this.pass);
      const data = {
        name: this.name,
        password: this.pass
      };
      try {
          const params = new URLSearchParams();
          params.append('name', 'demouser');
          params.append('password', 'password');
          const res = await this.$axios.post("https://quattorroserver.herokuapp.com/api/authenticate", data);
          console.log(res);
          console.log(res.data.token);
          if(res.data.success){
            cookies.set('dockhack-x-access-token',res.data.token,{ path: '/', maxAge: 14400 });
            cookies.set('dockhack-userId',res.data.userId,{ path: '/', maxAge: 14400 });
            this.message = 'logeed in !'
            this.$router.push('/IL')
          } else {
            this.message = 'cannot logged in .'
          }
        } catch (error) {
          this.message = 'error!'
          console.log(error);
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
