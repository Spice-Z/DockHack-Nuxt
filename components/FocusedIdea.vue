<template>
  <div v-if="FIdea" class="FIdea">
    <p>{{FIdea.idea_text}}</p>
  </div>
</template>
<script>
export default {
  props: ["idea"],
  data: function() {
    return {
      FIdea: this.idea
    };
  }
};
</script>


<style scope>
.FIdea {
  padding: 18px;
  background-color: rgba(255, 255, 255, 0.3);
  color: #ffffff;
  font-family: "Hiragino Sans";
  font-size: 20px;
  line-height: 30px;
}
</style>
