<template>
  <div class="all-in-container">
     <p class="title">LOGIN</p>
     <input class="id" v-model="id" type="text" placeholder="ID">
     <input class="pass" v-model="pass" type="text" placeholder="PASS">
     <router-link to="/IL" class="send-button">GO</router-link>
  </div>
</template>

<script>
export default {
  layout: "login",
  data: function() {
    return {
      id: "",
      pass: ""
    };
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
  font-family: "Hiragino Sans";
  font-size: 36px;
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
