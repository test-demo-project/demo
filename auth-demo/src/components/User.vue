<template>
  <div class="container">
    <div class="table-wrapper">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(post,postid) in posts" :key="postid">
            <td>{{post.id}}</td>
            <td>{{post.first_name}}</td>
            <td>{{post.last_name}}</td>
            <td>{{post.email}}</td>
            <td>
              <img :src="post.avatar" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
          <div class="row">
        <input
          class="btn col-md-2 btn-info"
          id="submitted"
          value="Logout"
          type="submit"
          @click.prevent="logOut"
        />
      </div>
  </div>
</template>

<script>
/*eslint-disable*/
const url = "https://reqres.in/api/users?page=2";
import axios from "axios";
export default {
  data() {
    return {
      posts: []
    };
  },
  async created() {
    this.posts = await this.getPosts();
  },
  methods: {
    async getPosts() {
      return (await axios.get(url)).data.data;
    },
    logOut() {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      this.$router.push({ name: "Home" });
    }
  }
};
</script>


<style scoped>
.card {
  width: 30rem;
  font-size: 22px;
  font-family: sans-serif;
  /* margin-left: 37%; */
  /* ?text-align: center */
}
.container {
  margin-top: 5%;
  justify-content: center;
}
.btn-info {
  margin-top: 5%;
    font-size: 18px;
  justify-content: center;
  margin-left: 40%;
  margin-bottom: 10%
}
th {
  font-size: 20px;
}
tbody {
  font-weight: normal;
  font-size: 20px;
}
</style>
