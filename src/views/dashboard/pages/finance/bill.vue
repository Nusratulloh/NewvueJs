<template>
  <v-container
    id="regular-tables"
    fluid
    tag="section"
  >
   <v-row>
      <v-col
        style="padding:10px;
        background:white;
        border: 1px solid #e7eaec !important"
      >
        <div
          id="btn_group"
          app
        >
        <v-btn
          :to="'/tables/finance-tables'"
          class="btn-top"
        >
            <v-icon>mdi-cash</v-icon>
        </v-btn>
        <v-btn
          :to="'#'"
          class="btn-top active2"
        >
            <v-icon>mdi-ticket</v-icon>
        </v-btn>
    <v-dialog
      v-model="dialog1"
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
           @click="dialog1 = false"
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
            @click="dialog1 = false"
          >
            Отмена
          </v-btn>
          <v-btn
            id="save"
            text
            @click="dialog1 = false"
          >
            <v-icon>mdi-save</v-icon>
             Сохранить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
        </div>
      </v-col>
    <v-col
     cols="12"
     style="padding-top: 0px"
    >
      <v-simple-table>
        <thead>
          <tr>
            <th>
              Клиент
            </th>
            <th>
              Тип
            </th>
            <th>
              Статус
            </th>
            <th>
              Сумма
            </th>
            <th>
              Начало периода
            </th>
            <th>
              Конец периода
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
              <td><span>Ничего не найдено.</span></td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
        dialog1: false,
      }
    },
  }
</script>
<style  scoped>
#btn_group .v-btn{
    padding: 5px 10px !important;
    margin-right: 2px;
    font-size: 12px ;
    height: auto !important;
    font-weight: 500;
    border-radius: 1px!important;
    color: #FFFFFF;
    margin-bottom: 0px;
}
#btn_group .btn-top{
color: black;
background: white;
border: 1px solid #d2d2d2 ;
width: 0px !important;
padding: 2px 10px !important;
box-shadow: none;
margin: 0;
margin-right: 3px;
}
#btn_group .active2{
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15) inset !important;
}
.v-btn:not(.v-btn--round).v-size--default {
    height: 41px;
    min-width: 35px !important;
    padding: 0 18.2222222222px;
}
#buttons{
  padding: 10px 0px;
  margin-right: 10px;
  display: flex;
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
ul{
  list-style: none;
  display: flex;
  padding: 0px;
}
ul li{
    padding: 10px 15px;
    margin: 0;
    border-radius: 1px;
    font-size: 13px;
    color: #555555;
}
ul li a{
  text-decoration: none;
  color: black !important;
  font-weight: 300;
}
ul .active{
   border: 1px solid #e7eaec;
   border-bottom-color: transparent;
   background: white;
}
#data{
    float: right;
    color: #656565;
    font-size: 88%;
    margin-top: 5px;
}
#data span{
   border-bottom: 1px dashed;
   text-decoration: none !important;
   color: #226895;
}
#data .v-btn{
  padding: 0px !important;
  font-size: 88%;
  height: 20px !important;
  margin-left: 5px;
}
</style>
