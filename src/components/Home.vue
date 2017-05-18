<template>
  <div class="home">
    <h1>{{ title }}</h1>

  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      title: 'Friend Finder app',
    };
  },
};
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
