<template>
  <base-material-card
    class="v-card--material-chart"
    style="background: transparent;
    padding: 0 !important;"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-slot:heading>
      <chartist
        :data="data"
        :event-handlers="eventHandlers"
        :options="options"
        :ratio="ratio"
        :responsive-options="responsiveOptions"
        :type="type"
        style="max-height: 300px;
         padding: 0 !important;"
      />
    </template>

    <slot
      slot="reveal-actions"
      name="reveal-actions"
    />

    <slot />

    <slot
      slot="actions"
      name="actions"
    />
  </base-material-card>
</template>

<script>
  export default {
    name: 'MaterialChartCard',

    inheritAttrs: false,

    props: {
      data: {
        type: Object,
        default: () => ({}),
      },
      eventHandlers: {
        type: Array,
        default: () => ([]),
      },
      options: {
        type: Object,
        default: () => ({}),
      },
      ratio: {
        type: String,
        default: undefined,
      },
      responsiveOptions: {
        type: Array,
        default: () => ([]),
      },
      type: {
        type: String,
        required: true,
        validator: v => ['Bar', 'Line', 'Pie'].includes(v),
      },
    },
  }

</script>

<style lang="sass">
  .v-application .pa-7
    padding: 0px !important

  .v-card .v-card--material__heading
    top: -24px !important

  .v-card--material-chart
    p
      color: #999

    .v-card--material__heading
      height: 300px

      .ct-label
        color: inherit
        opacity: .7
        font-size: 12px
        font-weight: 100

      .ct-grid
        stroke: rgba(230, 230, 230)
        stroke-width: 2px !important
        stroke-dasharray: none

      .ct-series-a .ct-point,
      .ct-series-a .ct-line,
      .ct-series-a .ct-bar,
      .ct-series-a .ct-slice-donut
          stroke: white !important

      .ct-series-a .ct-slice-pie,
      .ct-series-a .ct-area
          fill: rgba(255,255,255,.4)
      .ct-series-a .ct-bar
       stroke-width: 47px !important
       stroke: blue !important
</style>
