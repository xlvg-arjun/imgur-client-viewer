<style lang="scss" scoped>
  .dimmer {
    z-index: 4;
    background: #000;
    opacity: 0.5;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>

<template>
  <div class="dimmer"></div>  
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class Dimmer extends Vue {
  
}
</script>