<template>
  <v-app-bar
    id="app-bar"
    absolute
    app
    flat
    height="auto !important"
    container
  >

    <v-row
     id="row"
    >
    <div class="d-flex-none d-sm-flex">
     <v-app-bar-nav-icon
      style="border-right: 1px solid #e7eaec;border-right-style: dashed"
      @click="setDrawer(!drawer)"
     ></v-app-bar-nav-icon>
     <v-toolbar-title class="d-none d-md-block">
        <h4 class="blue--text lighten-2">ALFA<span class="green--text lighten-2">CRM</span></h4>
     </v-toolbar-title>
    <v-menu
      bottom
      offset-y
    >
      <template v-slot:activator="{ attrs, on }">
        <v-btn
          min-width="0"
          text
          v-bind="attrs"
          v-on="on"
        >
           <v-icon>mdi-office-building-outline</v-icon>
                 <v-icon>
            mdi-menu-down
          </v-icon>
        </v-btn>
      </template>
      <v-list
        :tile="false"
      >
        <div>
          <app-bar-item
            v-for="(n, i) in notifications"
            :key="`item-${i}`"
          >
            <v-list-item-title v-text="n" />
          </app-bar-item>
        </div>
      </v-list>
    </v-menu>
     <v-menu
      bottom
      offset-y
    >
      <template v-slot:activator="{ attrs, on }">
        <v-btn
          min-width="0"
          text
          v-bind="attrs"
          v-on="on"
        >
             <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-list
        :tile="false"
      >
        <div>
          <app-bar-item
            v-for="(n, i) in notifications"
            :key="`item-${i}`"
          >
            <v-list-item-title v-text="n" />
          </app-bar-item>
        </div>
      </v-list>
    </v-menu>
    <v-btn
      min-width="0"
      text
      to="/pages/user"
    >
      <v-icon>mdi-wrench</v-icon>
    </v-btn>
     <v-btn
      min-width="0"
      text
      to="/pages/user"
    >
      <v-icon>mdi-email</v-icon>
    </v-btn>
     <v-btn
      min-width="0"
      text
      to="/"
    >
      <v-icon>mdi-cellphone-android</v-icon>
    </v-btn>
     <v-btn
      min-width="0"
      text
      to="/"
    >
      <v-icon>mdi-cart</v-icon>
    </v-btn>
     <v-menu
      bottom
      offset-y
    >
      <template v-slot:activator="{ attrs, on }">
        <v-btn
          min-width="0"
          text
          v-bind="attrs"
          v-on="on"
        >
            <v-icon
              class="flashing"
              color="#ed5565"
             >
              mdi-bell-outline
             </v-icon>
        </v-btn>
      </template>
      <v-list
        :tile="false"
      >
        <div>
          <app-bar-item
            v-for="(n, i) in notifications"
            :key="`item-${i}`"
          >
            <v-list-item-title v-text="n" />
          </app-bar-item>
        </div>
      </v-list>
    </v-menu>
      <input
        type="text"
        class="d-none d-sm-block"
        placeholder="Search"
        style="width: 136px;
        padding: 2px;
        height: 30px;
        margin-top: 9px;
        margin-left: 12px"
      >
      </div>
      <div>
                <v-menu
      bottom
      offset-y
    >
      <template v-slot:activator="{ attrs, on }">
        <v-btn
          style="border: none !important;
          float: right"
          min-width="0"
          text
          v-bind="attrs"
          v-on="on"
        >
            <h4 class="d-none d-md-block">Ekatirina</h4>
            <v-avatar
             size="36"
             class="mr-2 ml-2"
            >
               <img
                    alt="Avatar"
                    src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
               >
            </v-avatar>
            <v-icon size="22">mdi-menu-down</v-icon>
        </v-btn>
      </template>
      <v-list
        :tile="false"
      >
        <div>
          <app-bar-item
            v-for="(n, i) in notifications"
            :key="`item-${i}`"
          >
            <v-list-item-title v-text="n" />
          </app-bar-item>
        </div>
      </v-list>
    </v-menu>
      </div>
    </v-row>
    <v-row
      class="d-block d-sm-none"
      style="width: 100%;
      margin: 10px 0px 5px 0px;
      background-color: white;
      border: 1px solid #e7eaec;
      padding: 14px"
    >
   <input
      type="text"
      placeholder="Search
      "
      style="width: 100%;
      padding: 5px
      "
   >
    </v-row>
  </v-app-bar>
</template>

<script>
  // Components
  import { VHover, VListItem } from 'vuetify/lib'

  // Utilities
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'DashboardCoreAppBar',

    components: {
      AppBarItem: {
        render (h) {
          return h(VHover, {
            scopedSlots: {
              default: ({ hover }) => {
                return h(VListItem, {
                  attrs: this.$attrs,
                  class: {
                    'black--text': !hover,
                    'white--text secondary elevation-12': hover,
                  },
                  props: {
                    activeClass: '',
                    dark: hover,
                    link: true,
                    ...this.$attrs,
                  },
                }, this.$slots.default)
              },
            },
          })
        },
      },
    },

    props: {
      value: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({
      notifications: [
        'Mike John Responded to your email',
        'You have 5 new tasks',
        'You\'re now friends with Andrew',
        'Another Notification',
        'Another one',
      ],
    }),

    computed: {
      ...mapState(['drawer']),
    },

    methods: {
      ...mapMutations({
        setDrawer: 'SET_DRAWER',
      }),
    },
  }
</script>
<style  scoped>
.v-btn__content{
  animation: flashing 1s linear infinite;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
    animation-name: flashing;
}
</style>
