<template>
  <div>
    <div class="background-login"></div>
    <nuxt/>
  </div>
</template>

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
  height: 100%;
  width: 100%;
}

body {
  height: 100%;
  width: 100%;
}

.background-login {
  z-index: -1;
  position: fixed;
  height: 100%;
  width: 100%;
  background: linear-gradient(180deg, #2b5876 0%, #ffffff 100%);
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
