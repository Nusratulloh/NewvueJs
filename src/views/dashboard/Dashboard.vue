<template>
  <v-container
    id="dashboard"
    fluid
    tag="section"
  >
    <v-row>
      <v-col
        cols="12"
        style=" display: flex;
         flex-direction: column;"
      >
      <div class="tabs-container">
        <ul class="navtabs">
          <li id="left">
           <router-link
            :to="'#'"
           >
             Рабочий стол
           </router-link>
          </li>
          <li>
           <router-link
             :to="'/dashboard/reposts'"
           >
             Отчёты
           </router-link>
          </li>
        </ul>
  </div>
  <div
    id="btn_group"
    style="padding:10px;
    background:white;
    border: 1px solid #e7eaec !important"
  >
    <v-dialog
      v-model="dialog"
      persistent
      max-width="500px"
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
      <v-card>
        <v-card-title
         class="d-flex"
        >
          <span class="headline">Добавить элемент рабочего стола</span>
            <v-icon
           style="font-size: 25px"
           @click="dialog = false"
          >mdi-backspace-outline</v-icon>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                class="col-sm-6"
              >
                <v-subheader>
                 Расположение
                </v-subheader>
              </v-col>
      <v-col
         cols="12"
         class="col-sm-6"
      >
        <v-select
          v-model="e1"
          :items="states"
          menu-props="auto"
          label="Select"
          hide-details
          single-line
          border="none"
        >
        </v-select>
      </v-col>
      <v-col
         cols="12"
         class="col-sm-6"
      >
        <v-subheader>
          Виджет
        </v-subheader>
      </v-col>
      <v-col
         cols="12"
         class="col-sm-6"
      >
        <v-select
          v-model="e2"
          :items="states"
          menu-props="auto"
          hide-details
          label="Select"
          single-line
        ></v-select>
      </v-col>
      <v-col
                cols="12"
                class="col-sm-6"
              >
        <v-subheader>
          Переименовать
        </v-subheader>
      </v-col>
      <v-col
        cols="12"
        class="col-sm-6"
      >
        <v-select
          v-model="e1"
          :items="states"
          menu-props="auto"
          label="Select"
          hide-details
          single-line
        ></v-select>
      </v-col>
      <v-col
                cols="12"
                class="col-sm-6"
              >
        <v-subheader>
          Ширина и высота
        </v-subheader>
      </v-col>
      <v-col
        cols="12"
        class="col-sm-3"
      >
        <v-select
          v-model="e1"
          :items="states"
          menu-props="auto"
          label="Select"
          hide-details
          single-line
        ></v-select>
      </v-col>
      <v-col
        cols="12"
        class="col-sm-3"
      >
        <v-select
          v-model="e1"
          :items="states"
          menu-props="auto"
          label="Select"
          hide-details
          single-line
        ></v-select>
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
     <v-dialog
      v-model="dialog2"
      persistent
      max-width="500px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#1c84c6"
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-pencil</v-icon>
          <h4 class="d-none d-md-block">Править</h4>
        </v-btn>
      </template>
      <v-card>
        <v-card-title
        class="d-flex"
        >
          <span class="headline">Добавить элемент рабочего стола</span>
          <v-icon
           style="font-size: 25px"
           @click="dialog2 = false"
          >mdi-backspace-outline</v-icon>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                class="col-sm-6"
              >
        <v-subheader>
          Расположение
        </v-subheader>
      </v-col>
      <v-col
        cols="12"
        class="col-sm-6"
      >
        <v-select
          v-model="e1"
          :items="states"
          menu-props="auto"
          label="Select"
          hide-details
          single-line
          border="none"
        ></v-select>
      </v-col>
      <v-col
         cols="12"
         class="col-sm-6"
      >
        <v-subheader>
          Виджет
        </v-subheader>
      </v-col>
      <v-col
         cols="12"
         class="col-sm-6"
      >
        <v-select
          v-model="e2"
          :items="states"
          menu-props="auto"
          hide-details
          label="Select"
          single-line
        ></v-select>
      </v-col>
      <v-col
                cols="12"
                class="col-sm-6"
              >
        <v-subheader>
          Переименовать
        </v-subheader>
      </v-col>
      <v-col
        cols="12"
        class="col-sm-6"
      >
        <v-select
          v-model="e1"
          :items="states"
          menu-props="auto"
          label="Select"
          hide-details
          single-line
        ></v-select>
      </v-col>
      <v-col
                cols="12"
                class="col-sm-6"
              >
        <v-subheader>
          Ширина и высота
        </v-subheader>
      </v-col>
      <v-col
        cols="12"
        class="col-sm-3"
      >
        <v-select
          v-model="e1"
          :items="states"
          menu-props="auto"
          label="Select"
          hide-details
          single-line
        ></v-select>
      </v-col>
      <v-col
        cols="12"
        class="col-sm-3"
      >
        <v-select
          v-model="e1"
          :items="states"
          menu-props="auto"
          label="Select"
          hide-details
          single-line
        ></v-select>
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
            @click="dialog2 = false"
          >
            Отмена
          </v-btn>
          <v-btn
            id="save"
            text
            @click="dialog2 = false"
          >
            <v-icon>mdi-save</v-icon>
             Сохранить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
        <v-btn
      color="#ed5565"
      dark
      @click.stop="dialog1 = true"
    >
    <v-icon>mdi-delete</v-icon>
    <h4 class="d-none d-md-block">Удалить</h4>
    </v-btn>

    <v-dialog
      v-model="dialog1"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          Confirm the operation
        </v-card-title>

        <v-card-text>
         Вы уверены, что хотите удалить запись?
        </v-card-text>

        <v-card-actions style="margin-right: 44px">
          <v-spacer></v-spacer>

          <v-btn
            color="white"
            style="background-color: #C1C1C1;"
            @click="dialog1 = false"
          >
            No
          </v-btn>

          <v-btn
            style="background-color: rgb(140, 212, 245)"
            color="white"
            text
            @click="dialog1 = false"
          >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
            <v-menu
      bottom
      offset-y
      transition="scale-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#1ab394"
          id="last"
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-map</v-icon>
           <h4 class="d-none d-md-block">Общий рабочий стол</h4>
          <v-icon>mdi-menu-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title>Something</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
     </div>
      </v-col>
      <v-col
        cols="12"
        lg="6"
      >
        <base-material-chart-card
          flat
          :data="emailsSubscriptionChart.data"
          :options="emailsSubscriptionChart.options"
          :responsive-options="emailsSubscriptionChart.responsiveOptions"
          color="white"
          type="Bar"
        >
        </base-material-chart-card>
      </v-col>

      <v-col
        cols="12"
        lg="6"
      >
        <base-material-chart-card
          flat
          :data="dailySalesChart.data"
          :options="dailySalesChart.options"
          color="white"
          type="Pie"
        >
        </base-material-chart-card>
      </v-col>

      <v-col
        cols="12"
        lg="6"
      >
        <base-material-chart-card
        :data="dataCompletedTasksChart.data"
        :options="dataCompletedTasksChart.options"
         color="white"
         type="Line"
        >
        </base-material-chart-card>
      </v-col>
      <v-col
        cols="12"
        lg="6"
      >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'DashboardDashboard',
    data () {
      return {
        datacollection: null,
        dialog: false,
        dialog1: false,
        dialog2: false,
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
        dailySalesChart: {
          data: {
            labels: ['Team A', 'Team B'],
            series: [66, 34],
            chartOptions: {
              chart: {
                width: 300,
                type: 'pie',
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200,
                  },
                  legend: {
                    position: 'bottom',
                  },
                },
              }],
            },
          },
        },
        dataCompletedTasksChart: {
          data: {
            labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
            series: [
              [230, 750, 450, 300, 280, 240, 200, 190],
            ],
          },
          options: {
            lineSmooth: this.$chartist.Interpolation.cardinal({
              tension: 0,
            }),
            low: 0,
            high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            },
          },
        },
        emailsSubscriptionChart: {
          data: {
            labels: ['Не разобрано', 'Установлен к.', 'Назначено п.', 'Проведено п.', 'Получена о.'],
            series: [
              [20, 4, 3, 9, 7],
            ],
          },
          options: {
            axisX: {
              showGrid: false,
            },
            low: 0,
            high: 20,
          },
          responsiveOptions: [
            ['screen and (width: 50%)', {
              seriesBarDistance: 47,
              axisX: {
                labelInterpolationFnc: function (value) {
                  return value[0]
                },
              },
            }],
          ],
        },
        headers: [
          {
            sortable: false,
            text: 'ID',
            value: 'id',
          },
          {
            sortable: false,
            text: 'Name',
            value: 'name',
          },
          {
            sortable: false,
            text: 'Salary',
            value: 'salary',
            align: 'right',
          },
          {
            sortable: false,
            text: 'Country',
            value: 'country',
            align: 'right',
          },
          {
            sortable: false,
            text: 'City',
            value: 'city',
            align: 'right',
          },
        ],
        tabs: 0,
        tasks: {
          0: [
            {
              text: 'Sign contract for "What are conference organizers afraid of?"',
              value: true,
            },
            {
              text: 'Lines From Great Russian Literature? Or E-mails From My Boss?',
              value: false,
            },
            {
              text: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
              value: false,
            },
            {
              text: 'Create 4 Invisible User Experiences you Never Knew About',
              value: true,
            },
          ],
          1: [
            {
              text: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
              value: true,
            },
            {
              text: 'Sign contract for "What are conference organizers afraid of?"',
              value: false,
            },
          ],
          2: [
            {
              text: 'Lines From Great Russian Literature? Or E-mails From My Boss?',
              value: false,
            },
            {
              text: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
              value: true,
            },
            {
              text: 'Sign contract for "What are conference organizers afraid of?"',
              value: true,
            },
          ],
        },
        list: {
          0: false,
          1: false,
          2: false,
        },
      }
    },

  }
</script>
<style scoped>
body {
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    background-color: #f3f3f4;
    font-size: 13px;
    color: #1d2129;
}
.navtabs {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
}
ul li a{
  color: black !important;
  text-decoration-line: none;
}
.tabs-container .navtabs >  #left {
    float: left;
    margin-bottom: -1px;
    padding: 8px;
    background-color: #fff;
    font-weight: 600;
    border: 1px solid  #f3f3f4;
}
.tabs-container .navtabs >  li {
    float: left;
    margin-bottom: -1px;
    padding: 8px;
    font-weight: 600;
}
#btn_group .v-btn{
    padding: 5px 10px !important;
    margin-right: 2px;
    font-size: 13px ;
    height: auto !important;
    font-weight: 500;
    border-radius: 1px!important;
    color: #FFFFFF;
}
#btn_group #last{
  float: right;
  padding: 5px 30px !important;
}
#close{
  height: auto !important;
  padding: 10px !important;
  width: 100px;
  background: white;
  border: 1px solid #e7eaec;
  border-radius: 1px!important;
  font-size: 12px;
}
#save{
  height: auto !important;
  padding: 10px !important;
  width: 100px;
  background: #1c84c6;
  color: #fff;
  border: 1px solid #1c84c6;
  border-radius: 1px!important;
  font-size: 12px;
}
.v-card__text .col-12{
  padding: 0px;
  margin-bottom: 15px;
}
.v-card__text .v-subheader{
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    background-color: white;
    font-size: 13px;
    color: #1d2129;
}
.v-card__text .v-subheader::after{
  content: " * ";
  color: #ed5565;
}
 .v-card__text  .v-input{
  padding: 0px;
}
.v-card__text  .v-select{
    background-color: #FFFFFF ;
    background-image: none ;
    border: 1px solid #e5e6e7 ;
    border-radius: 1px ;
    color: inherit ;
    display: block;
    padding: 6px 12px ;
    transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s ;
    width: 100% ;
    font-size: 13px ;
}
.theme--dark.v-sheet {
    background-color: #1E1E1E;
    border-color: #1E1E1E;
    color: black !important;
}
@media (max-width: 453px){
  #btn_group .v-btn{
    padding: 0px 0px !important;
    margin-right: 2px;
    font-size: 13px ;
    height: auto !important;
    font-weight: 500;
    border-radius: 1px!important;
    width: 48px !important;
    color: #FFFFFF;
}
.v-btn:not(.v-btn--round).v-size--default {
    height: 41px;
    min-width: 50px !important;
    padding: 0 18.2222222222px;
}
#btn_group #last{
  float: none;
  padding: 0px 0px !important;
}
}
</style>
