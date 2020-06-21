<template>
  <HomeComponent name="Shippokun" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { HomeComponent } from "../components";

@Component({
  components: {
    HomeComponent
  }
})
export class HomeContainer extends Vue {}
</script>
