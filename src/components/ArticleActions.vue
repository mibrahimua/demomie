<template>
<span v-if="canModify"></span>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "RwvArticleActions",
  props: {
    article: {
      type: Object,
      required: true
    },
    canModify: {type: Boolean, required: true}
  },
  computed: {
    ...mapGetters(["profile", "isAuthenticated"]),
    editArticleLink() {
      return {name: "article-edit", params: { slug: this.article.slug}}
    },
    toggleFavoriteButtonClasses() {
      return {
        "btn-primary": this.article.favo
      }
    },
    followUserLabel() {
      return `${this.profile.following ? "Unfollow" : "Follow"} ${
        this.article.author.username
      }`
    }
  }
}
</script>

<style scoped>

</style>