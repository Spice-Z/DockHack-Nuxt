<template>
  <div class="container">
    <Idea v-for="(value, key) in getUpperIdeas()" v-bind:key="key" v-bind:value="value" v-bind:class="{'second-box':(key!=0)}" class="idea-box" />
    <FocusedIdea class="idea-box FIdea-box" v-bind:idea="getFIdea()"/>
    <Idea v-for="(value, key) in getUnderIdeas()" v-bind:key="key+30" v-bind:value="value" class="idea-box second-box" />
    <router-link :to="{ path: '/Tweet' , query: { FIdeaId: getLastIdeaId() } }" class="mentionButton">+</router-link>
  </div>
</template>

<script>
import Idea from "~/components/Idea.vue";
import FocusedIdea from "~/components/FocusedIdea.vue";
import extractUnderIdea from "~/modules/extractUnderIdea.js";
import extractUpperIdea from "~/modules/extractUpperIdea.js";

export default {
  components: {
    Idea,
    FocusedIdea
  },
  layout: "default",
  data: function() {
    return {
      FIdeaId: null,
      pass: "",
      ideas: this.$store.getters.ideas
    };
  },
  asyncData(context) {
    return {
      FIdeaId: context.query["FIdeaId"]
    };
  },
  methods: {
    getFIdea: function() {
      if (this.FIdeaId) {
        let Fid = this.FIdeaId;
        return this.ideas.find(function(idea) {
          return idea.id == Fid;
        });
      }
      return;
    },
    getUnderIdeas: function() {
      return extractUnderIdea(this.FIdeaId, this.ideas);
    },
    getUpperIdeas: function() {
      return extractUpperIdea(this.FIdeaId, this.ideas);
    },
    getLastIdeaId: function() {
      let lastIdea = this.getUnderIdeas().pop();
      if (lastIdea) {
        return lastIdea.id;
      }
      if (this.FIdeaId) {
        return this.FIdeaId;
      }
      return "";
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
/*
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
*/

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
.mentionButton {
  margin-right: auto;
  margin-left: auto;
  display: block;
  height: 39px;
  width: 156px;
  border-radius: 7px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  color: #2b5876;
  font-size: 36px;
  line-height: 33px;
  text-align: center;
}
</style>
