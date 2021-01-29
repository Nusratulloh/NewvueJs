<template>
  <v-footer
    id="dashboard-core-footer"
    style="padding: 0px; background: white"
  >
    <v-container>
      <v-row
        align="center"
        justify="center"
        no-gutters
      >
        <v-col
          cols="12"
          md="auto"
        >
          <div class="body-1 font-weight-light pt-6 pt-md-0 text-center">
             © <a href="https://www.creative-tim.com">ALFACRM</a>
             <strong>2.0.4</strong>
             <strong>17.12.2020</strong>
             <strong>|</strong>
             <em>0.324ms</em>
             <strong>|</strong>
             <a href="#">Оферта</a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    name: 'DashboardCoreFooter',

    data: () => ({
    }),
  }
</script>

<style lang="sass">
  #dashboard-core-footer
    a
      font-size: .825rem
      font-weight: 500
      text-decoration: none
      text-transform: uppercase
      color: #1c84c6 !important
</style>
