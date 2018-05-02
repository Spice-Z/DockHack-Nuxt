<template>
  <div class="container">
    <Idea v-for="(value, key) in ideas" v-bind:key="key" v-bind:value="value" v-bind:class="{'second-box':(key!=0)}" class="idea-box" />
    <FocusedIdea class="idea-box FIdea-box" v-bind:idea="getFIdea()"/>
    <Idea v-for="(value, key) in ideas" v-bind:key="key+30" v-bind:value="value" class="idea-box second-box" />
  </div>
</template>

<script>
import Idea from "~/components/Idea.vue";
import FocusedIdea from "~/components/FocusedIdea.vue";

export default {
  components: {
    Idea,
    FocusedIdea
  },
  layout: "default",
  data: function() {
    return {
      FIdea_id: null,
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
      ],
      FIdea: {
        id: 7,
        idea_text: "爆速の開発環境で驚いているそ。これはすごい。"
      }
    };
  },
  asyncData(context) {
    return {
      // asyncDataでreturnすると、dataにマージされる
      FIdea_id: context.query["FIdeaId"]
    };
  },
  methods: {
    getFIdea: function() {
      if (this.FIdea_id) {
        let Fid = this.FIdea_id;
        return this.ideas.find(function(idea) {
          return idea.id == Fid;
        });
      }

      let i = { id: 1, idea_text: "これはサンプルのつぶやきです" };
      return;
    }
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
  position: relative;
}

.FIdea-box::before {
  position: absolute;
  content: "";
  display: block;
  width: 0;
  height: 0;
  top: -40px;
  border: 20px transparent solid;
  border-bottom: 20px rgba(255, 255, 255, 0.3) solid;
}

.first-box::after {
  position: absolute;
  content: "";
  display: block;
  width: 0;
  height: 0;
  top: -40px;
  border: 20px transparent solid;
  border-bottom: 20px rgba(255, 255, 255, 0.15) solid;
}

.second-box ::before {
  position: absolute;
  content: "";
  display: block;
  width: 0;
  height: 0;
  top: -40px;
  border: 20px transparent solid;
  border-bottom: 20px rgba(255, 255, 255, 0.15) solid;
}

.FIdea-box {
  margin: auto -24px 28px -24px;
}
</style>
