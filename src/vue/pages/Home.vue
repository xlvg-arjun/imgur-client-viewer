<template>
  <main class="main-page">
    <header id="main-page-header">
      <div id="main-search">
        <input type="text" />
      </div>
    </header>
    <main id="main-page-main">
      <div id="main-page-gallery">
        <img v-for="image in images" :key="image.link" :src="image.link" />
      </div>
    </main>
    <footer id="main-page-main"></footer>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class HomePage extends Vue {
  private msg: string = "Hello HomeWorld";
  // "https://i.imgur.com/yqrV9d8.jpg"
  private images: object = Array(30).fill(1).map((_filled, index) => ({ link: index % 2 === 0 ? "https://via.placeholder.com/300" : "https://i.imgur.com/yqrV9d8.jpg" }));
}
</script>