<template>
  <v-content>
    <router-view />
    <dashboard-core-footer />
  </v-content>
</template>

<script>
  export default {
    name: 'DashboardCoreView',

    components: {
      DashboardCoreFooter: () => import('./Footer'),
    },
  }
</script>
<style scoped>
@media (max-width: 458px){
  .v-content{
    padding-top: 205px !important;
  }
}
@media (min-width: 459px){
  .v-content{
    padding-top: 140px !important;
  }
}
@media (min-width: 607px){
  .v-content{
    padding-top: 50px !important;
  }
}
</style>
