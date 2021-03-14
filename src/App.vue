<template>
  <body>
    <div id="app">
      <AppLayout>
        <router-view></router-view>
      </AppLayout>
    </div>
  </body>
</template>

<script>
import AppLayout from "@/layouts/appLayout";

export default {
  name: "App",
  components: {
    AppLayout,
  },
};
</script>

<style>
</style>
