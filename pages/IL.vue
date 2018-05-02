<template>
  <div class="container">
    <Idea v-for="(value, key) in ideasx" v-bind:key="key+100" v-bind:value="value" class="idea-box" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Idea from "~/components/Idea.vue";

export default {
  async asyncData({ store }) {
    await store.dispatch("initIdeas");
    return {};
  },
  components: {
    Idea
  },
  layout: "default",
  data: function() {
    return {
      id: "",
      pass: "",
      ideas: [
        { id: 1, idea_text: "これはサンプルのつぶやきです" },
        {
          id: 2,
          idea_text:
            "Nuxt.js では js プラグインを定義することができ、それはルートの Vue.js アプリケーションがインスタンス化される前に実行されます。プラグインとして自前のライブラリを指定することも、外部のモジュールを指定することもできます。"
        },
        {
          id: 3,
          idea_text:
            "現在のところ <nuxt-link> は <router-link> と同じです。したがって、このコンポーネントの使い方を vue-router のドキュメント で確認することをお勧めします。"
        },
        {
          id: 4,
          idea_text:
            "The prop is used to pass in an initial value; the child component wants to use it as a local data property afterwards."
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["ideasx"])
  }
};
</script>

<style>
.container {
  margin-top: 56px;
  padding: 18px 24px 0 24px;
}

.idea-box {
  margin-bottom: 28px;
}
</style>
