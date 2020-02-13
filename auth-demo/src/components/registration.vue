<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="text-center">Registration Form</h1>
        </div>
      </div>
      <div class="row">
        <label class="label col-md-2 control-label">Name</label>
        <div class="col-md-10">
          <input
            required
            type="name"
            class="form-control"
            v-model.trim="user.name"
            placeholder="Enter Your Name"
          />
        </div>
      </div>
      <div class="row">
        <label class="label col-md-2 control-label">Email</label>
        <div class="col-md-10">
          <input
            required
            type="email"
            class="form-control"
            v-model.trim="user.email"
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
            v-model.trim="user.password"
            placeholder="Enter Your Password"
          />
        </div>
      </div>
      <div class="row">
        <input
          class="btn col-md-2 btn-info"
          id="submitted"
          value="Register"
          type="submit"
          @click.prevent="registration"
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
        name: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    registration() {
      localStorage.setItem("email", this.user.email);
      localStorage.setItem("password", this.user.password);
      this.$router.push({ name: "Login" });
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
  color: black;
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
  border-radius: 1px;
  border: 0px;
  border-bottom: 1px solid black;
  font-size: 18px;
  margin-top: 15px;
  height: 40px;
  color: black;
}
.btn-info {
  margin-top: 50px;
  font-size: 18px;
  justify-content: center;
  margin-left: 40%;
}
.container {
  margin-top: 12%;
  padding: 50px;
  border: 5px solid gray;
}
</style>
