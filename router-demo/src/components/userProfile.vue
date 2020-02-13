<template>
  <div id="app" class="container">
    <center>
      <router-link to="/posts" class="nav-link">Home</router-link>
    </center>
    <div class="card">
      <b>{{ "@" + userProfile.username}}</b>
      <br />
      <h5>{{userProfile.name}}</h5>
      <br />
      {{userProfile.email}}
      <br />
      {{userProfile.address.street}} {{" ,"}} {{userProfile.address.suite}} {{" ,"}} {{userProfile.address.city}} {{" ,"}} {{userProfile.address.zipcode}}
      <br />
      {{userProfile.phone}}
      <br />
      {{userProfile.website}}
      <br />
      {{userProfile.company.name}}
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
const url = "https://jsonplaceholder.typicode.com";
import axios from "axios";
export default {
  data() {
    return {
      id: this.$route.params.id,
      userProfile: [],
      address: {
        street: ""
      }
    };
  },
  async created() {
    this.userProfile = await this.getUserProfile();
  },
  methods: {
    async getUserProfile() {
      let profileUrl = url + "/users/" + this.$route.params.id;
      return (await axios.get(profileUrl)).data;
    }
  }
};
</script>

<style scoped>
.nav-link{
  color:green
}
#app {
  line-height: 2;
}
h5 {
  padding: 0px;
  margin: 0px;
}
.card {
  margin: 30px;
  padding: 10px;
  text-align: center;
  box-shadow: 0px 0px 12px -6px rgba(0, 0, 0, 0.75);
}
</style>