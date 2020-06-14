<template>
  <div>
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
@Component
export default class HomePage extends Vue {
  private msg: string = "Hello HomeWorld";
}
</script>