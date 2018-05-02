<template>
  <div class="idea">
    <router-link :to="{ path: '/IDetail', query: { FIdeaId: idea.id }}">{{idea.idea_text}}</router-link>
  </div>
</template>
<script>
export default {
  props: ["value"],
  data: function() {
    return {
      idea: this.value
    };
  }
};
</script>


<style>
.idea {
  border-radius: 7px;
  padding: 16px;
  background-color: rgba(255, 255, 255, 0.15);
  color: #ffffff;
  font-family: "Hiragino Sans";
  font-size: 20px;
  line-height: 30px;
}

a {
  color: #ffffff;
  text-decoration: none;
}
</style>
