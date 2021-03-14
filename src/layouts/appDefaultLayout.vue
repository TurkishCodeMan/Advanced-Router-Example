<template>
  <div class="default-app">
    <h2>Default Layout</h2>
    <div class="container">
      <div class="row">
        <div
          class="col-sm-3 navbar-area"
          :class="{ 'col-2': !navbarToggler, 'col-3': navbarToggler }"
        >
          <Navbar @toggle="navbarToggle"></Navbar>
        </div>
        <div class="col-9 col-md-6 col-sm-6 text-white">
          <MainApp></MainApp>
        </div>
        <div class="col-3 col-sm-3 right-area">
          <Discovery></Discovery>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Discovery from "@/components/Discovery";
import MainApp from "@/components/Main";
export default {
 data(){
    return {
      navbarToggler:true,
    }
  },
      components: {
    Navbar,
    Discovery,
    MainApp,
  },
    methods:{
    navbarToggle(toggle){
      this.navbarToggler=toggle;
    }
  }
};
</script>

<style>
</style>