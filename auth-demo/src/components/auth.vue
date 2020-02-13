<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav">
          <router-link to="/home" class="nav-item nav-link">Home</router-link>
          <router-link v-if="isLoggedIn" to="/registration" class="nav-item nav-link">Registration</router-link>
          <router-link v-if="isLoggedIn" to="/login" class="nav-item nav-link">Login</router-link>
          <button v-if="isLoggedOut" @click.prevent="logOut" class="nav-item button nav-link">Logout</button>
          <router-link to="/user" class="nav-item nav-link">Users</router-link>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
/*eslint-disable*/
export default {
  data() {
    return {
    };
  },
  computed: {
    isLoggedIn() {
      if(localStorage.getItem("email") !== null){
      return false}
      else return true
    },
    isLoggedOut() {
      if(localStorage.getItem("email") !== null){
      return true}
      else return false      
    }
  },
  methods: {
    logOut() {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style scoped>
.nav-link {
  font-size: 20px;
  margin-right: 5%;
}
.navbar-collapse {
  justify-content: center;
}
.button{
  background: transparent;
  border: 0;
}
</style>
