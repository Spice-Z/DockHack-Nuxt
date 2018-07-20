<template>
  <div class="all-in-container">
    <p class="tweet-title">I THINK...</p>
    <textarea class="tweet-box" v-model="tweet"></textarea>
    <button v-on:click="postNewIdea" class="send-button">tweet</button>
  </div>
</template>

<script>
import Idea from "~/components/Idea.vue";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default {
  components: {
    Idea
  },
  layout: "tweet",
  data: function() {
    return {
      tweet: "",
      mentionToId: null
    };
  },
  asyncData(context) {
    return {
      mentionToId: context.query["mentionToId"]
    };
  },
  methods: {
    postNewIdea: async function(event) {
      const config = {
        headers: {
          'x-access-token': cookies.get('dockhack-x-access-token')
        }
      };
      if (this.tweet && this.mentionToId) {
        console.log("mentionToId is");
        console.log(this.mentionToId);
        const data = {
          mentionTo: this.mentionToId,
          ideaText: this.tweet,
          userId: cookies.get('dockhack-userId')
        };
        try {
          const addResult = await this.$axios.post( "https://quattorroserver.herokuapp.com/api/tweetNewIdea", data, config);
          const newIdea = {
            date:'',
            id: addResult.data.newId,
            idea_text: this.tweet,
            is_mention_to: this.mentionToId,
            is_mentiond: ''
          }
          this.$store.dispatch("addIdea",newIdea);
        } catch (error) {
          console.log(error);
        }
      }
      if (this.tweet && !this.mentionToId) {
        const data = {
          ideaText: this.tweet,
          userId: cookies.get('dockhack-userId')
          };
        try {
          const addResult = await this.$axios.post("https://quattorroserver.herokuapp.com/api/tweetNewIdea", data, config );
          const newIdea = {
            date:'',
            id: addResult.data.newId,
            idea_text: this.tweet,
            is_mention_to: '',
            is_mentiond: ''
          }
          console.log(newIdea);
          this.$store.dispatch("addIdea",newIdea);
        } catch (error) {
          console.log(error);
        }
      }
      this.tweet = "";
      this.$router.go(-1);
      return;
    }
  }
};
</script>

<style>
textarea:focus {
  outline: 0;
}

button:focus {
  outline: 0;
}
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
  padding: 10px;
  height: 160px;
  width: 278px;
  border: none;
  border-radius: 14px;
  background-color: rgba(255, 255, 255, 0.3);
  color: #ffffff;
  font-size: 20px;
  letter-spacing: 0.3em;
  line-height: 30px;
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
