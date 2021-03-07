

<template>
  <div class="container">
    <div class="row">
      <div class="col-3 col-sm-3">
        <Navbar></Navbar>
      </div>
      <div class="col-6 col-sm-6 text-white">
        <MainApp></MainApp>
      </div>
      <div class="col-3 col-sm-3 right-area">
        <Discovery></Discovery>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Discovery from "@/components/Discovery";
import MainApp from "@/components/Main";
export default {
  components: {
    Navbar,
    Discovery,
    MainApp,
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/scss/global/mixins.scss";

@include mq("tablet") {
  .right-area {
    display: none;
  }
}
</style>