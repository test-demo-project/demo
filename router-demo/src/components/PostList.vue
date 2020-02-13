<template>
  <div id="app" class="container">
    <div class="card" v-for="(post) in posts" :key="post.id">
      <router-link class="nav-link" :to="'/post/'+post.id">
        <h3>{{ post.title }}</h3>
      </router-link>
      <p>{{post.body | formateBody}}</p>
      <div class="text-center" v-for="(user,userId) in users" :key="userId">
        <span v-if="(post.userId == user.id)">
          <router-link  :to="'/profile/'+ post.id">{{"@" + user.username}}{{"(" +user.name + ")"}}</router-link>
        </span>
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
      posts: [],
      users: null
    };
  },
  filters: {
    formateBody(body) {
      if (!body) return "";
      else if (body.length > 100) return body.substring(0, 100) + "...";
      else return body;
    }
  },
  async created() {
    this.posts = await this.getPosts();
    this.users = await this.getUser();
  },
  methods: {
    async getPosts() {
      return (await axios.get(url + "/posts")).data;
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
</style>