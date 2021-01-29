<template>
  <v-container
    id="user-profile"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
          style="padding:10px;
          background:white;
          border: 1px solid #e7eaec !important"
      >
        <div
          id="btn_group"
        >
        <v-btn
        :to="'#'"
        class="topbtn active"
        >
          <v-icon>mdi-calendar</v-icon>
        </v-btn>
        <v-app-bar-nav-icon
          class="navicon"
          :to="'/other/list1'"
        >
        </v-app-bar-nav-icon>
        <v-btn
        padding="0"
        class="topbtn"
        :to="'/other/list2'"
        >
          <v-icon>mdi-school</v-icon>
        </v-btn>
         <v-menu
      bottom
      offset-y
      transition="scale-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#1c84c6"
          dark
          v-bind="attrs"
          v-on="on"
        >
       <v-icon>mdi-plus</v-icon>
       <h4 class="d-none d-md-block">Добавить</h4>
        </v-btn>
      </template>
      <v-list style="padding: 0px">
        <v-list-item>
          <v-list-item-title>
            <v-icon>mdi-history</v-icon>
             История изменений
             </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
     <v-menu
      bottom
      offset-y
      transition="scale-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#23c6c8"
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-printer</v-icon>
           <h4 class="d-none d-md-block">Отчеты</h4>
          <v-icon>mdi-menu-down</v-icon>
        </v-btn>
      </template>
      <v-list style="padding: 0px">
        <v-list-item>
          <v-list-item-title>
            <v-icon>mdi-history</v-icon>
             История изменений
             </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
     <v-menu
      bottom
      offset-y
      transition="scale-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#c2c2c2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-more</v-icon>
           <h4 class="d-none d-md-block">Другое</h4>
          <v-icon>mdi-menu-down</v-icon>
        </v-btn>
      </template>
      <v-list style="padding: 0px">
        <v-list-item>
          <v-list-item-title>
            <v-icon>mdi-history</v-icon>
             История изменений
             </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="500px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          style="float: right !important"
          color="#1ab394"
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-filter</v-icon>
          <h4 class="d-none d-md-block">Фильтр</h4>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Фильтрация данных
          <v-icon
           style="font-size: 25px"
           @click="dialog = false"
          >mdi-backspace-outline</v-icon>
          </span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                class="col-sm-6"
              >
                <v-subheader>
                 Текстовый фильтр
                </v-subheader>
              </v-col>
      <v-col
         cols="12"
         class="col-sm-6"
      >
        <input
        type="text"
        id="text"
        placeholder="По клиенту, группе, предмету или педагогу"
        >
      </v-col>
      <v-col
         cols="12"
         class="col-sm-6"
      >
        <v-subheader>
          Статус
        </v-subheader>
      </v-col>
      <v-col
         cols="12"
         class="col-sm-6"
      >
        <label title="Отображать запланированные">
          <input
          type="checkbox"
          value="1"
          checked
          >
          запланирован
        </label>
        <label title="Отображать запланированные">
          <input
          type="checkbox"
          value="2"
          checked
          >
           проведён
        </label>
        <label title="Отображать запланированные">
          <input
          type="checkbox"
          value="3"
          checked
          >
           отменён
        </label>
      </v-col>
      <v-col
                cols="12"
                class="col-sm-6"
              >
        <v-subheader>
          Тип урока
        </v-subheader>
      </v-col>
      <v-col
        cols="12"
        class="col-sm-6"
      >
        <label title="Отображать запланированные">
          <input
          type="checkbox"
          value="1"
          checked
          >
          Групповой
        </label>
        <label title="Отображать запланированные">
          <input
          type="checkbox"
          value="2"
          checked
          >
           Индивидуальный
        </label>
        <label title="Отображать запланированные">
          <input
          type="checkbox"
          value="3"
          checked
          >
            Пробный
        </label>
        <label title="Отображать запланированные">
          <input
          type="checkbox"
          value="4"
          checked
          >
           Отработка
        </label>
      </v-col>
      <v-col
        cols="12"
        class="col-sm-6"
              >
        <v-subheader>
          Аудитории
        </v-subheader>
      </v-col>
      <v-col
        cols="12"
        class="col-sm-6 d-flex flex-column"
      >
        <label title="Отображать запланированные">
          <input
          type="checkbox"
          value="1"
          checked
          onchange="$('input.loc-1').prop('checked', $(this).is(':checked'));"
          >
          <v-icon>mdi-location</v-icon>
          Китай-город
        </label>
        <label
          title="Отображать запланированные"
          class="ml-2"
        >
          <input
          type="checkbox"
          value="2"
          checked
          class="loc-1"
          data-type="room"
          >
          <v-icon>mdi-location</v-icon>
          Китай-город
        </label>
        <label
          title="Отображать запланированные"
          class="ml-2"
        >
          <input
          type="checkbox"
          value="3"
          checked
          class="loc-1"
          data-type="room"
          >
          <v-icon>mdi-location</v-icon>
          Китай-город
        </label>
        <label
          title="Отображать запланированные"
          class="ml-2"
        >
          <input
          type="checkbox"
          value="4"
          checked
          class="loc-1"
          data-type="room"
          >
          <v-icon>mdi-location</v-icon>
          Китай-город
        </label>
        <label title="Отображать запланированные">
          <input
          type="checkbox"
          value="1"
          checked
          >
          <v-icon>mdi-location</v-icon>
          Китай-город
        </label>
        <label
          title="Отображать запланированные"
          class="ml-2"
          >
          <input
          type="checkbox"
          value="2"
          checked
          >
          <v-icon>mdi-location</v-icon>
          Китай-город
        </label>
        <label
          title="Отображать запланированные"
          class="ml-2"
        >
          <input
          type="checkbox"
          value="3"
          checked
          >
          <v-icon>mdi-location</v-icon>
          Китай-город
        </label>
        <label
          title="Отображать запланированные"
          class="ml-2"
          >
          <input
          type="checkbox"
          value="4"
          checked
          >
          <v-icon>mdi-location</v-icon>
          Китай-город
        </label>
        <label
          title="Отображать запланированные"
          class="mt-2"
          >
          <input
          type="checkbox"
          value="5"
          checked
          >
          <v-icon>mdi-location</v-icon>
          Китай-город
        </label>
      </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            id="close"
            style="background: white"
            text
            @click="dialog = false"
          >
            Отмена
          </v-btn>
          <v-btn
            id="save"
            text
            @click="dialog = false"
          >
            <v-icon>mdi-save</v-icon>
             Сохранить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
     <v-chip
      label
      class="mr-2"
      style="float: right; border: 1px solid #d2d2d2; background: white; height: 26px;"
     >
      <label
       style="font-size: 12px;"
       for="input"
       >
       Выстроить
       </label>
      <input
       class="ml-1"
       id="input"
       type="checkbox"
       >
    </v-chip>
        </div>
        <table
        width="100%"
        class="m-t-sm hidden-xs mt-2 d-none d-sm-block"
        >
        <tbody>
        <tr
        style="font-size: 10px"
        >
          <td
          style="border-bottom-width: 3px; overflow: hidden; padding: 2px; width: 14.29%;
          background-color: #fff;
          border: 1px solid #1a7bb9;
          border-bottom: 6px solid #1a7bb9;
          color: #1d2129;
          "
          >
          Китай-город / Ауд 1
          </td>
          <td
          style="border-bottom-width: 3px; overflow: hidden; padding: 2px; width: 14.29%;
          background-color: #fff;
          border: 1px solid #00aa00;
          border-bottom: 6px solid #00aa00;
          color: #1d2129;
          "
          >
          Китай-город / Ауд 2
          </td>
          <td
          style="border-bottom-width: 3px; overflow: hidden; padding: 2px; width: 14.29%;
          background-color: #fff;
          border: 1px solid #9acfea;
          border-bottom: 6px solid #9acfea;
          color: #1d2129;
          "
          >
          Китай-город / Ауд 3
          </td>
          <td
          style="border-bottom-width: 3px; overflow: hidden; padding: 2px; width: 14.29%;
          background-color: #fff;
          border: 1px solid #ffc6c6;
          border-bottom: 6px solid #ffc6c6;
          color: #1d2129;
          "
          >
          Митино / Ауд 1
          </td>
          <td
          style="border-bottom-width: 3px; overflow: hidden; padding: 2px; width: 14.29%;
          background-color: #fff;
          border: 1px solid #ffcd70;
          border-bottom: 6px solid #ffcd70;
          color: #1d2129;"
          >
          Митино / Ауд 2
          </td>
          <td
          style="border-bottom-width: 3px; overflow: hidden; padding: 2px; width: 14.29%;
          background-color: #fff;
          border: 1px solid #4a4a4a;
          border-bottom: 6px solid #4a4a4a;
          color: #1d2129;
          "
          >
          Митино / Ауд 3
          </td>
          <td
          style="border-bottom-width: 3px; overflow: hidden; padding: 2px; width: 14.29%;
          background-color: #fef1ec;
          border: 1px solid #a8a8a8;
          border-bottom: 6px solid #a8a8a8;
          color: #1d2129;
          "
          >
          Митино / Ауд 4
          </td>
        </tr>
        </tbody>
        </table>
      </v-col>
       <v-col
       cols="12"
       >
      <v-row
        style="background: white"
        class="d-flex
        align-center m-0
        pa-2"
      >
       <v-col
        cols="6"
        class="col-md-4"
       >
          <v-btn
            text
            small
            outlined
            id="iconclick"
            @click="prev"
          >
            <v-icon small>
              mdi-chevron-left
            </v-icon>
          </v-btn>
          <v-btn
            text
            small
            outlined
            id="iconclick"
            @click="next"
          >
            <v-icon small>
              mdi-chevron-right
            </v-icon>
          </v-btn>
          <v-btn
            outlined
            class="mr-4 ml-2"
            style="padding: 0px 8px !important; height: 25px !important; border: 1px solid #e7eaec"
            @click="setToday"
          >
            Today
          </v-btn>
       </v-col>
       <v-col
        cols="6"
        class="col-md-4"
       >
          <h2 v-if="$refs.calendar">
            {{ $refs.calendar.title }}
          </h2>
       </v-col>
       <v-col
        cols="12"
        class="col-md-4"
       >
          <v-tabs
           class="d-flex justify-end"
          >
            <v-tab
              @click="type = 'month'"
            >Month</v-tab>
            <v-tab
              @click="type = 'week'"
            >Week</v-tab>
            <v-tab
              @click="type = 'day'"
            >Day</v-tab>
          </v-tabs>
        </v-col>
      </v-row>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="primary"
          :events="events"
          :event-color="getEventColor"
          :type="type"
          @click:event="showEvent"
          @click:more="viewDay"
          @click:date="viewDay"
          @change="updateRange"
        ></v-calendar>
        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-x
        >
          <v-card
            color="grey lighten-4"
            min-width="350px"
            flat
          >
            <v-toolbar
              :color="selectedEvent.color"
              dark
            >
              <v-btn icon>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <span v-html="selectedEvent.details"></span>
            </v-card-text>
            <v-card-actions>
              <v-btn
                text
                color="secondary"
                @click="selectedOpen = false"
              >
                Cancel
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-sheet>
    </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      e1: 'Florida',
      e2: 'Texas',
      e3: null,
      e4: null,
      items: [
        { text: 'State 1' },
        { text: 'State 2' },
        { text: 'State 3' },
        { text: 'State 4' },
        { text: 'State 5' },
        { text: 'State 6' },
        { text: 'State 7' },
      ],
      states: [
        'Alabama', 'Alaska', 'American Samoa', 'Arizona',
        'Arkansas', 'California', 'Colorado', 'Connecticut',
        'Delaware', 'District of Columbia', 'Federated States of Micronesia',
        'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
      ],
      focus: '',
      type: 'month',
      typeToLabel: {
        month: 'Month',
        week: 'Week',
        day: 'Day',
        '4day': '4 Days',
      },
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: [],
      colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
      names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
    }),
    mounted () {
      this.$refs.calendar.checkChange()
    },
    methods: {
      viewDay ({ date }) {
        this.focus = date
        this.type = 'day'
      },
      getEventColor (event) {
        return event.color
      },
      setToday () {
        this.focus = ''
      },
      prev () {
        this.$refs.calendar.prev()
      },
      next () {
        this.$refs.calendar.next()
      },
      showEvent ({ nativeEvent, event }) {
        const open = () => {
          this.selectedEvent = event
          this.selectedElement = nativeEvent.target
          setTimeout(() => {
            this.selectedOpen = true
          }, 10)
        }

        if (this.selectedOpen) {
          this.selectedOpen = false
          setTimeout(open, 10)
        } else {
          open()
        }

        nativeEvent.stopPropagation()
      },
      updateRange ({ start, end }) {
        const events = []

        const min = new Date(`${start.date}T00:00:00`)
        const max = new Date(`${end.date}T23:59:59`)
        const days = (max.getTime() - min.getTime()) / 86400000
        const eventCount = this.rnd(days, days + 20)

        for (let i = 0; i < eventCount; i++) {
          const allDay = this.rnd(0, 3) === 0
          const firstTimestamp = this.rnd(min.getTime(), max.getTime())
          const first = new Date(firstTimestamp - (firstTimestamp % 900000))
          const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
          const second = new Date(first.getTime() + secondTimestamp)

          events.push({
            name: this.names[this.rnd(0, this.names.length - 1)],
            start: first,
            end: second,
            color: this.colors[this.rnd(0, this.colors.length - 1)],
            timed: !allDay,
          })
        }

        this.events = events
      },
      rnd (a, b) {
        return Math.floor((b - a + 1) * Math.random()) + a
      },
    },
  }
</script>
<style  scoped>
#btn_group .v-btn{
    padding: 5px 10px !important;
    margin-right: 2px;
    font-size: 13px !important;
    height: auto !important;
    font-weight: 500;
    border-radius: 1px!important;
    color: #FFFFFF;
}
#btn_group .v-icon{
  font-size: 15px !important
}
#btn_group .topbtn{
color: black;
background: white;
border: 1px solid #d2d2d2;
width: 0px !important;
padding: 3px 0px !important;
box-shadow: none;
margin: 0;
margin-right: 3px ;
}
.active{
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15) inset !important;
}
.v-btn:not(.v-btn--round).v-size--default {
    height: 41px;
    min-width: 35px !important;
    padding: 0 18.2222222222px;
}
#btn_group .navicon{
  color: black !important;
  border: 1px solid #d2d2d2;
  padding: 0px !important;
  height: 23px !important;
  width: 33px;
}
#buttons{
  padding: 10px 0px;
  margin-right: 10px;
  display: flex;
}
#buttons .v-tab{
    padding: 0px !important;
    font-size: 10px;
    height: 30px !important;
    box-shadow: none;
    border: 1px solid #e7eaec;
    margin-left: 1px;
    padding: 0px 4px !important ;
}
.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
    background-color: white;
    color: black;
}
#iconclick{
    height: 25px;
    font-size: 20px;
    width: 30px;
    color: black !important;
    border-radius: 0px !important;
}
.v-application .headline {
    font-size: 14px !important;
    padding-bottom: 0;
    font-weight: 700;
    align-items: center;
}
.v-dialog .v-card .v-card__title {
    font-weight: 300;
    font-size: 18px;
    display: inline-block;
    text-align: center;
    width: auto;
    padding: 12px 24px 0;
}
.v-card__text #text{
    width: 100%;
    font-size: 11px;
    height: 80%;
    margin-top: 4px;
    padding: 2px;
}
.v-tabs-bar {
    border-radius: inherit;
    height: 0px !important;
}
</style>
