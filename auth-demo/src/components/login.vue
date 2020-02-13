<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="text-center">Login</h1>
        </div>
      </div>
      <div class="row">
        <label class="label col-md-2 control-label">Email</label>
        <div class="col-md-10">
          <input
            required
            type="email"
            class="form-control"
            v-model="user.email"
            placeholder="Enter Your Email"
          />
        </div>
      </div>
      <div class="row">
        <label class="label col-md-2 control-label">Password</label>
        <div class="col-md-10">
          <input
            required
            type="password"
            class="form-control"
            v-model="user.password"
            placeholder="Enter Your Password"
          />
        </div>
      </div>
      <div class="row">
        <p class="text-justify col-md-12">
          If you don't have any account then
          <router-link class="link" to="/registration">REGISTER</router-link> yourself first
        </p>
      </div>
      <div class="row">
        <input
          class="btn col-md-2 btn-info"
          id="submitted"
          value="Login"
          type="submit"
          @click.prevent="login"
        />
      </div>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
export default {
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      if(this.user.email == null || this.user.password == null){
        
      }
      this.show = true;
      let authEmail = localStorage.getItem("email");
      let authPass = localStorage.getItem("password");
      if (this.user.email === authEmail && this.user.password === authPass) {
        this.$router.push({ name: "User" });
      } else {
        this.$router.push({ name: "Registration" });
      }
    }
  }
};
</script>

<style scoped>
.container {
  margin-left: 20%;
}
label {
  color: black;
}
h1 {
  font-size: 60px;
  color: balck;
  margin-bottom: 5%;
}
.label {
  font-weight: normal;
  margin-top: 15px;
  color: black;
  font-size: 19px;
}
.form-control {
  background: transparent;
  border-radius: 2px;
  border: 5px;
  border-bottom: 1px solid black;
  font-size: 18px;
  margin-top: 15px;
  height: 40px;
  color: black;
}
.btn-info {
  margin-top: 30px;
  font-size: 18px;
  justify-content: center;
  margin-left: 40%;
}
.text-justify {
  margin-top: 5%;
  font-size: 20px;
  margin-left: 25%;
}
.container {
  margin-top: 12%;
  padding: 50px;
  border: 5px solid gray;
}
.link {
  color: #17a2b8;
}
</style>
