<template>
  <div class="default-app">
    <h2>Admin Layout</h2>
    <div class="container">
      <div class="row">
        <div
          class="col-12  navbar-area p-0 m-0"
        >
          <Navbar2  @toggle="navbarToggle"></Navbar2>
        </div>
        <div class="col-12  text-white">
          <MainApp></MainApp>
        </div>
        <div class="col-12 col-sm-3 right-area">
       
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar2 from "@/components/AdminComponents/Navbar2";

import MainApp from "@/components/Main";
export default {
  data() {
    return {
      navbarToggler: true,
    };
  },
  components: {
    Navbar2,
    MainApp,
  },
  methods: {
    navbarToggle(toggle) {
      this.navbarToggler = toggle;
    },
  },
};
</script>

<style>
</style>