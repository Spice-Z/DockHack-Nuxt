<template>
  <nav class="header">
    <div class="header-menu"><nuxt-link to="/IL" class="header-menu-icon home-icon"></nuxt-link></div>
    <!-- <div class="header-menu"><nuxt-link to="/IDetail" class="header-menu-icon idea-icon"></nuxt-link></div>-->
    <div class="header-menu"><nuxt-link to="/Tweet" class="header-menu-icon tweet-icon"></nuxt-link></div>
    <!-- <div class="header-menu"><nuxt-link to="/Profile" class="header-menu-icon profile-icon"></nuxt-link></div>-->
  </nav>
</template>

<style>
.header {
  z-index: 100;
  position: fixed;
  top: 0;
  height: 56px;
  width: 100%;
  background-color: #2b5876;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-around;
}

.header-menu {
  flex-grow: 1;
  display: flex;
}
.header-menu-icon {
  display: block;
  margin: 15%;
  width: 70%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
.home-icon {
  background-image: url(../assets/home.svg);
}

.idea-icon {
  background-image: url(../assets/idea.svg);
}

.tweet-icon {
  background-image: url(../assets/tweet.svg);
}

.profile-icon {
  background-image: url(../assets/profile.svg);
}
</style>
