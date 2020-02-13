<template>
  <div>
    <div class="container">
      <div class="row">
        <b-form-select
          @change="changeColor($event)"
          :options="optionsColor"
          v-model="selectColor"
          class="m-md-4"
        ></b-form-select>
      </div>

      <div class="row">
        <b-form-select
          @change="changeSize($event)"
          v-model="selectSize"
          :options="optionsSize"
          class="m-md-4"
        ></b-form-select>
      </div>

      <div class="row">
        <b-form-select
          @change="changeBackground($event)"
          :options="optionsBackground"
          v-model="selectBackground"
          class="m-md-4"
        ></b-form-select>
      </div>

      <div class="row">
        <b-form-group class="m-md-4" label="Is Bold">
          <b-form-radio
            v-model="isBold"
            @change="changeFontWeight($event)"
            name="some-radios"
            value="yes"
          >Yes</b-form-radio>
          <b-form-radio
            v-model="isBold"
            @change="changeFontWeight($event)"
            name="some-radios"
            value="no"
          >No</b-form-radio>
        </b-form-group>
      </div>
      <p ref="heading">
        <center>WELCOME</center>
        <br />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
export default {
  data() {
    return {
      optionsColor: [
        { value: null, text: "Please select a Color" },
        { value: "Red", text: "Red" },
        { value: "Orange", text: "Orange" },
        { value: "Green", text: "Green" },
        { value: "Blue", text: "Blue" }
      ],
      selectColor: null,
      selectSize: null,
      selectBackground: null,
      isBold: "",
      optionsSize: [
        { value: null, text: "Please select a size" },
        { value: "5px", text: "5px" },
        { value: "10px", text: "10px" },
        { value: "15px", text: "15px" },
        { value: "20px", text: "20px" }
      ],
      optionsBackground: [
        { value: null, text: "Please select a Background Color" },
        { value: "Red", text: "Red" },
        { value: "Orange", text: "Orange" },
        { value: "Green", text: "Orange" },
        { value: "Blue", text: "Blue" }
      ]
    };
  },
  methods: {
    changeColor(event) {
      this.$refs.heading.style.color = this.optionsColor[
        this.optionsColor.findIndex(p => p.value == this.selectColor)
      ].text;
    },
    changeSize(event) {
      this.$refs.heading.style.fontSize = this.optionsSize[
        this.optionsSize.findIndex(p => p.value == this.selectSize)
      ].text;
    },
    changeBackground(event) {
      this.$refs.heading.style.background = this.optionsBackground[
        this.optionsBackground.findIndex(p => p.value == this.selectBackground)
      ].text;
    },
    changeFontWeight(event) {
      if (this.isBold === "no") {
        this.isBold = "yes";
      } else {
        this.isBold = "no";
      }
      if (this.isBold === "yes") {
        this.$refs.heading.style.fontWeight = "bold";
      } else {
        this.$refs.heading.style.fontWeight = "normal";
      }
    }
  }
};
</script>
<style>
.container {
  justify-content: center;
  margin-top: 7%;
  padding: 0%;
}
</style>
