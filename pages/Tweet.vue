<template>
  <div class="all-in-container">
     <p class="tweet-title">I THINK...</p>
     <input class="tweet-box" v-model="tweet" type="textarea">
     <button class="send-button">tweet</button>
  </div>
</template>

<script>
import Idea from "~/components/Idea.vue";

export default {
  components: {
    Idea
  },
  layout: "tweet",
  data: function() {
    return {
      tweet: ""
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

.tweet-title {
  margin-bottom: 35px;
  color: #ffffff;
  font-family: "Hiragino Sans";
  font-size: 36px;
  font-weight: 700;
  line-height: 54px;
}

.tweet-box {
  margin-bottom: 36px;
  height: 160px;
  width: 278px;
  border: none;
  border-radius: 14px;
  background-color: rgba(255, 255, 255, 0.3);
}

.send-button {
  height: 42px;
  width: 232px;
  border: none;
  border-radius: 52px;
  background-color: #2b5876;
  box-shadow: 0 2px 8px 3px rgba(0, 0, 0, 0.5);
  color: #ffffff;
  font-family: Helvetica;
  font-size: 36px;
  font-weight: bold;
  line-height: 43px;
  text-align: center;
}
</style>
