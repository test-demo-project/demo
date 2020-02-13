<template>
  <div id="app" class="container">
    <center>
      <router-link class="nav-link" to="/posts">Home</router-link>
    </center>
    <div class="card">
      <div>
        <h2>{{post.title}}</h2>
        <br />
        <p>{{post.body}}</p>

        <div>
          <div class="text-center" v-for="(user,userId) in users" :key="userId">
            <span v-if="(post.userId == user.id)">
              <router-link
                :to="'/profile/'+ post.id"
              >{{"@" + user.username}}{{"(" +user.name + ")"}}</router-link>
            </span>
          </div>
        </div>

        <hr />
      </div>
      <div class="text-justify" v-for="postDetail in postDetails" :key="postDetail.id">
        {{postDetail.body}}
        <hr />
      </div>
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
      post: {},
      postDetails: null,
      users: null
    };
  },
  async created() {
    this.post = await this.getPost();
    this.postDetails = await this.getPostDetails();
    this.users = await this.getUser();
  },
  methods: {
    async getPost() {
      let postUrl = url + "/posts/" + this.$route.params.id;
      return (await axios.get(postUrl)).data;
    },
    async getPostDetails() {
      let postDetailUrl = url + "/comments?postId=" + this.$route.params.id;
      // console.log(this.$route.params.id)
      return (await axios.get(postDetailUrl)).data;
    },
    async getUser() {
      return (await axios.get(url + "/users")).data;
    }
  }
};
</script>

<style scoped>
.nav-link{
  color:green
}
.card {
  margin: 30px;
  padding: 10px;
  text-align: center;
  box-shadow: 0px 0px 12px -6px rgba(0, 0, 0, 0.75);
}
h2{
  color: green
}
</style>