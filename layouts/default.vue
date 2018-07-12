<template>
  <div>
    <div class="background-default"></div>
    <AppNav />
    <nuxt/>
    <button class="logout-button" @click="logOut()"></button>
  </div>
</template>
<script>
import AppNav from "~/components/AppNav.vue";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default {
  components: {
    AppNav
  },
  methods: {
    logOut() {
      console.log('logout')
      this.$store.dispatch("deleteIdeas")
      cookies.remove('dockhack-x-access-token')
      cookies.remove('dockhack-userId')
      this.$router.push('/logOut')
    }
  }
};
</script>


<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

button{
        background-color: transparent;
        border: none;
        cursor: pointer;
        outline: none;
        padding: 0;
}

input:focus {
  outline: 0;
}

.background-default {
  z-index: -1;
  position: fixed;
  height: 200%;
  width: 100%;
  background: linear-gradient(180deg, #2b5876 0%, #ffffff 100%);
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.logout-button {
  position: fixed;
  left: 5px;
  bottom: 5px;
  width: 40px;
  height: 40px;
  display: block;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(../assets/door.svg);
}
</style>
