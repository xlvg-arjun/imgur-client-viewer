<style lang="scss" scoped>
.dialog-submit {
  position: fixed;
  top: 30%;
  /* height: 500px; */
  width: 500px;
  left: calc((100% - 500px) / 2);
  background: linear-gradient(#ccc, #eee);
  z-index: 5;
  /* padding: 1rem; */
  font-family: Helvetica;
  color: #555;

  .title {
    font-size: 2rem;
    border-bottom: 1px solid #ccc;
    padding: 1rem;
    margin: 0;
    /* margin-bottom: 0.5rem; */
  }

  .content {
    padding: 1rem;
    text-align: left;
    line-height: 2;
  }

  .input-container {
    padding: 1rem;
    display: flex;
    /* justify-content: flex-end; */
  }

  .id-input {
    margin-left: auto;
    display: block;
    padding: 0.5rem 0.5rem;
    flex: 0 0 75%;
    color: #555;
    letter-spacing: 3px;
    border: 2px solid #888888;
    text-align: right;
  }

  .actions {
    padding: 1rem;
    display: flex;
    border-top: 1px solid #ccc;
  }

  .actions > button:first-child {
    margin-left: auto;
  }

  .actions > button {
    border: none;
    background-color: transparent;
    font-family: inherit;
    padding: 0;
    cursor: pointer;
    border: 1px solid #777;
    border-radius: 5%;

    padding: 0.5rem;
    font-size: 1.25rem;
    color: #444;
    letter-spacing: 2px;
    transition: all 0.1 ease;
  }

  & > * {
    text-align: right;
    /* margin-bottom: 1rem; */
  }
}
</style>

<template>
  <div class="dialog-submit-container">
    <div class="dialog-submit">
      <h3 class="title">{{ title }}</h3>
      <p class="content">{{ content }}</p>
      <!-- <div class="input-container">
        <input type="text" class="id-input" placeholder="Enter CLIENT ID" v-model="clientId" />
      </div> -->
      <div class="actions">
        <button v-on:click="continueClicked">Continue</button>
      </div>
    </div>
    <dimmer></dimmer>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";

import { pingImgur } from "../../ts/api";

import Dimmer from "./Dimmer.vue";

@Component({
  components: {
    dimmer: Dimmer
  },
  methods: {
    check() {
      const vm = this;
      console.log("Nothing");
      pingImgur(this.$data.clientId);
    }
  },
})
export default class DialogSubmit extends Vue {
  @Prop({ required: true }) readonly title: string;
  @Prop({ required: true }) readonly content: string;
  private clientId: string = "";

  @Emit('continue-clicked')
  continueClicked() {
  }
}
</script>