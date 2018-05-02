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
      pass: ""
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
