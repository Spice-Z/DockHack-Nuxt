<template>
  <div class="FIdea">
    <p>{{FIdea.text}}</p>
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


<style>
.FIdea {
  padding: 18px;
  background-color: rgba(255, 255, 255, 0.3);
  color: #ffffff;
  font-family: "Hiragino Sans";
  font-size: 20px;
  line-height: 30px;
}
</style>
