<template>
  <div class="home">
    <h1>{{ name }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export class HomeComponent extends Vue {
  @Prop()
  // !はrequired, ?はそれ以外
  public name?: String;
}
</script>
