<template>
  <ul class="tag-list">
    <li
    class="tag-default tag-pill tag-outline"
    v-for="(tag, index) of tags"
    :key="index"
    >
      <span v-text="tag"></span>
    </li>
  </ul>

</template>

<script>
export default {
  name: "TagList",
  props: {
    tags: Array
  }
}
</script>

<style scoped>

</style>