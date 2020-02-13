<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" class="navbar-brand nav-link">Navbar</router-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/Posts" class="nav-link">Posts</router-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">OK</button>
        </form>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
/*eslint-disable*/

export default {
  name: "app",
  components: {
    // postList
    // Home
  }
};
</script>

<style scoped>
.nav-link{
  color: green
}
</style>
