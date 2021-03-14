<template>
  <component :is="layout">
    <slot></slot>
  </component>
</template>

<script>

export default {
   name:"AppLayout",
    computed:{
        layout(){
         
            const layout=this.$route.meta.layout || 'appDefaultLayout';
            console.log(layout)
            return ()=>import(`@/layouts/${layout}.vue`);
        }
    },
  
}
</script>

<style>
</style>