<template>
  <main class="main-page">
    <header id="main-page-header">
      <div id="main-search">
        <input type="text" />
      </div>
    </header>
    <main id="main-page-main">
      <div id="main-page-gallery">
        <img v-for="image in images" :key="image.keyy" :src="image.link" />
      </div>
    </main>
    <footer id="main-page-main"></footer>
    <dialog-submit
      title="Authorization Required"
      content="It will be required to authorize this application through imgur in order to access your imgur data through this site. To proceed, click continue"
      @continue-clicked="redirect_to_imgur_auth"
    ></dialog-submit>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import DialogSubmit from "../components/DialogSubmit.vue";

import { saveUserData, retrieveUserData } from "../../ts/api";
import UserData from "../../ts/interfaces/UserData";

@Component({
  components: {
    'dialog-submit': DialogSubmit,
  },
  created() {
    const { query } = this.$route;
    if (query && query.access_token) {
      const { access_token, refresh_token, account_id, account_username } = query;
      const data = { access_token, refresh_token, account_id, account_username };
      saveUserData(data);
      console.table(data);
      this.data_is_set = true;
      this.$emit("user_data_set", data);
    } else {
      const userData = retrieveUserData();
    }
  },
  methods: {
    redirect_to_imgur_auth: function () {
      console.log("Logging!");
      window.location.replace("https://api.imgur.com/oauth2/authorize?client_id=6af12d108e76c03&response_type=token");
    },
  },
})
export default class HomePage extends Vue {
  private msg: string = "Hello HomeWorld";
  // "https://i.imgur.com/yqrV9d8.jpg"
  private images: object = Array(30).fill(1).map((_filled, index) => ({ keyy: 'o' + index, link: index % 2 === 0 ? "https://via.placeholder.com/300" : "https://i.imgur.com/yqrV9d8.jpg" }));
  private data_is_set: boolean = false;
  private userData: UserData;
  // metho
}
</script>