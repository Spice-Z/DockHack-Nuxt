<template>
  <div class="idea" :class="{ deletedIDea : isDeleted }">
    <span class="button-in-idea" @click="openDeleteModal"></span>
    <nuxt-link :to="{ path: '/IDetail', query: { FIdeaId: idea.id }}">{{idea.idea_text || makeNewLine }}</nuxt-link>
    <div v-if="isShowDelete" class="delete-modal">
      <p>"{{idea.idea_text.substr(0,15)}} ~" is needed?</p>
      <button class="remain-button-in-modal" @click="closeDeleteModal">Remain</button>
      <button class="delete-button-in-modal" @click="deleteIdea">Delete</button>
    </div>
  </div>
</template>
<script>
import deleteIdea from "~/modules/deleteIdea.js";

export default {
  props: ["value"],
  data: function() {
    return {
      idea: this.value,
      isShowDelete: false,
      isDeleted: false
    };
  },
  methods: {
    openDeleteModal: function(event) {
      this.isShowDelete = true;
    },
    closeDeleteModal: function(event) {
      this.isShowDelete = false;
    },
    deleteIdea: async function(event) {
      let result = await deleteIdea(this.idea.id);
      this.$store.dispatch("deleteIdea",this.idea.id);
      this.isDeleted = true;
      this.closeDeleteModal();
    }
  },
  filters:{
    makeNewLine: function (value) {
      return value.replace(/\n/g,'<br />')
    }
  }
};
</script>


<style scoped>
.idea {
  position: relative;
  border-radius: 7px;
  padding: 16px;
  background-color: rgba(255, 255, 255, 0.15);
  color: #ffffff;
  font-family: "Hiragino Sans";
  font-size: 20px;
  line-height: 30px;
}

.deletedIDea {
  display: none;
}

.button-in-idea {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 15px;
  height: 15px;
  background-image: url(../assets/sun.svg);
  background-size: cover;
  opacity: 0.8;
}

.delete-modal {
  z-index: 200;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  line-height: 48px;
  text-align: center;
}
.remain-button-in-modal {
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.5);
  width: 160px;
  height: 60px;
  background-color: #2b5876;
  color: #ffffff;
  font-size: 36px;
  font-weight: 700;
  text-align: center;
}

.delete-button-in-modal {
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.5);
  width: 160px;
  height: 60px;
  background-color: #a63446;
  color: #ffffff;
  font-size: 36px;
  font-weight: 700;
  text-align: center;
}

a {
  color: #ffffff;
  text-decoration: none;
}
</style>
