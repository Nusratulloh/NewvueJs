<template>
  <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="drawer"
    :expand-on-hover="expandOnHover"
    :right="$vuetify.rtl"
    mobile-break-point="960"
    app
    width="220"
    v-bind="$attrs"
    style=" background: #eee;"
  >
    <v-divider class="mb-1" />
    <v-list
      expand
      nav
    >
      <div />
      <template v-for="(item, i) in computedItems">
        <base-item-group
          v-if="item.children"
          :key="`group-${i}`"
          :item="item"
        >
          <!--  -->
        </base-item-group>

        <base-item
          v-else
          :key="`item-${i}`"
          :item="item"
        />
      </template>

      <!-- Style cascading bug  -->
      <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->
      <div />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import {
    mapState,
  } from 'vuex'

  export default {
    name: 'DashboardCoreDrawer',

    props: {
      expandOnHover: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({
      items: [
        {
          icon: 'mdi-map',
          title: 'Аналитика',
          to: '/',
        },
        {
          icon: 'mdi-calendar',
          title: 'Уроки',
          to: '/pages/lessons',
        },
        {
          title: 'Задачи',
          icon: 'mdi-clipboard',
          to: '/components/materials',
        },
        {
          title: ' Клиенты ',
          icon: 'mdi-account',
          to: '/tables/regular-tables',
        },
        {
          title: 'Группы',
          icon: 'mdi-account-multiple',
          to: '/tables/group-tables',
        },
        {
          title: 'Педагоги',
          icon: 'mdi-school',
          to: '/tables/teacher-tables',
        },
        {
          title: 'Финансы ',
          icon: 'mdi-cash',
          to: '/tables/finance-tables',
        },
        {
          title: 'Лиды ',
          icon: 'mdi-account-plus',
          to: '/components/leads',
        },
        {
          title: 'Юр. лица ',
          icon: 'mdi-briefcase',
          to: '/tables/company-tables',
        },
        {
          title: 'Звонки',
          icon: 'mdi-phone',
          to: '/tables/call-tables',
        },
        {
          title: 'Доступ в CRM',
          icon: 'mdi-lock',
          to: '/tables/access-tables',
        },
        {
          title: 'Абонементы',
          icon: 'mdi-ticket',
          to: '/tables/tariff-tables',
        },
      ],
    }),

    computed: {
      ...mapState(['barColor', 'barImage']),
      drawer: {
        get () {
          return this.$store.state.drawer
        },
        set (val) {
          this.$store.commit('SET_DRAWER', val)
        },
      },
      computedItems () {
        return this.items.map(this.mapItem)
      },
      profile () {
        return {
          avatar: true,
          title: this.$t('avatar'),
        }
      },
    },

    methods: {
      mapItem (item) {
        return {
          ...item,
          children: item.children ? item.children.map(this.mapItem) : undefined,
          title: this.$t(item.title),
        }
      },
    },
  }
</script>

<style lang="sass">
  @import '~vuetify/src/styles/tools/_rtl.sass'

  #core-navigation-drawer
    .v-list-group__header.v-list-item--active:before
      opacity: .24

    .v-list-item
      &__icon--text,
      &__icon:first-child
        justify-content: center
        text-align: center
        width: 20px
        margin: 0px !important
        align-self: auto !important

        +ltr()
          margin-right: 4px !important

        +rtl()
          margin-left: 24px
          margin-right: 12px !important

    .v-list--dense
      .v-list-item
        &__icon--text,
        &__icon:first-child
          margin-top: 10px

    .v-list-group--sub-group
      .v-list-item
        +ltr()
          padding-left: 8px

        +rtl()
          padding-right: 8px

      .v-list-group__header
        +ltr()
          padding-right: 0

        +rtl()
          padding-right: 0
        .v-list-item__icon--text
          margin-top: 19px
          order: 0

        .v-list-group__header__prepend-icon
          order: 2

          +ltr()
            margin-right: 8px

          +rtl()
            margin-left: 8px
</style>
