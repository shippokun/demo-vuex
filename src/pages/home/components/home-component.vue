<template>
  <div class="home">
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: "home-component",
  props: {
    name: {
      type: String,
      default: ""
    }
  }
};
</script>
