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
         flex-direction: column; padding-bottom: 0px"
      >
      <div class="tabs-container">
        <ul class="navtabs">
          <li>
           <router-link
            :to="'/'"
           >
             Рабочий стол
           </router-link>
          </li>
          <li
            id="active"
          >
           <router-link
             :to="'#'"
           >
             Отчёты
           </router-link>
          </li>
        </ul>
       </div>
      </v-col>
      <v-col
        cols="12"
        style="background: white"
      >
        <v-row>
          <v-col
            cols="12"
            class="col-sm-4"
          >
           <h3>
             <v-icon>
                 mdi-rocket-launch
             </v-icon>
              Продажи
           </h3>
           <ul>
             <li>
                <router-link
                  :to="'#'"
                >
                  Новые лиды
                </router-link>
             </li>
             <li>
                <router-link
                  :to="'#'"
                >
                  Источники лидов
                </router-link>
             </li>
             <li>
                <router-link
                  :to="'#'"
                >
                  Воронка продаж
                </router-link>
             </li>
             <li>
                <router-link
                  :to="'#'"
                >
                  Конверсии лидов
                </router-link>
             </li>
             <li>
                <router-link
                  :to="'#'"
                >
                  Причины потери лидов
                </router-link>
             </li>
             <li>
                <router-link
                  :to="'#'"
                >
                  Эффективность менеджеров
                </router-link>
             </li>
             <li>
                <router-link
                  :to="'#'"
                >
                  Результативность менеджеров
                </router-link>
             </li>
           </ul>
           <h3>
             <v-icon>
                 mdi-cash
             </v-icon>
               Финансы
           </h3>
           <ul>
             <li>
                <router-link
                  :to="'#'"
                >
                  Отчет управляющего
                </router-link>
             </li>
             <li>
                <router-link
                  :to="'#'"
                >
                  Оборотная ведомость
                </router-link>
             </li>
             <li>
                <router-link
                  :to="'#'"
                >
                  Доход от реализации
                </router-link>
             </li>
             <li>
                <router-link
                  :to="'#'"
                >
                  Доход от реализации по локациям
                </router-link>
             </li>
             <li>
                <router-link
                  :to="'#'"
                >
                  Обороты по статьям
                </router-link>
             </li>
             <li>
                <router-link
                  :to="'#'"
                >
                  Обороты по счетам (кассам)
                </router-link>
             </li>
             <li>
                <router-link
                  :to="'#'"
                >
                  История бонусных компенсаций
                </router-link>
             </li>
           </ul>
          </v-col>
          <v-col
            cols="12"
            class="col-sm-4"
          >
           <h3>
             <v-icon>
                 mdi-account
             </v-icon>
               Клиенты
           </h3>
           <ul>
             <li>
                <router-link
                  :to="'#'"
                >
                  Новые лиды
                </router-link>
             </li>
             <li>
                <router-link
                  :to="'#'"
                >
                  Источники лидов
                </router-link>
             </li>
             <li>
                <router-link
                  :to="'#'"
                >
                  Воронка продаж
                </router-link>
             </li>
             <li>
                <router-link
                  :to="'#'"
                >
                  Конверсии лидов
                </router-link>
             </li>
             <li>
                <router-link
                  :to="'#'"
                >
                  Причины потери лидов
                </router-link>
             </li>
             <li>
                <router-link
                  :to="'#'"
                >
                  Эффективность менеджеров
                </router-link>
             </li>
             <li>
                <router-link
                  :to="'#'"
                >
                  Результативность менеджеров
                </router-link>
             </li>
             <li>
                <router-link
                  :to="'#'"
                >
                  Причины потери лидов
                </router-link>
             </li>
             <li>
                <router-link
                  :to="'#'"
                >
                  Эффективность менеджеров
                </router-link>
             </li>
             <li>
                <router-link
                  :to="'#'"
                >
                  Результативность менеджеров
                </router-link>
             </li>
           </ul>
           <h3>
             <v-icon>
                 mdi-calendar
             </v-icon>
                Уроки
           </h3>
           <ul>
             <li>
                <router-link
                  :to="'#'"
                >
                  Отчет управляющего
                </router-link>
             </li>
             <li>
                <router-link
                  :to="'#'"
                >
                  Оборотная ведомость
                </router-link>
             </li>
             <li>
                <router-link
                  :to="'#'"
                >
                  Доход от реализации
                </router-link>
             </li>
             <li>
                <router-link
                  :to="'#'"
                >
                  Доход от реализации по локациям
                </router-link>
             </li>
           </ul>
          </v-col>
          <v-col
            cols="12"
            class="col-sm-4"
          >
           <h3>
             <v-icon>
                 mdi-account-multiple
             </v-icon>
                Группы
           </h3>
           <ul>
             <li>
                <router-link
                  :to="'#'"
                >
                  Новые лиды
                </router-link>
             </li>
             <li>
                <router-link
                  :to="'#'"
                >
                  Источники лидов
                </router-link>
             </li>
             <li>
                <router-link
                  :to="'#'"
                >
                  Воронка продаж
                </router-link>
             </li>
           </ul>
           <h3>
             <v-icon>
                 mdi-school
             </v-icon>
                Педагоги
           </h3>
           <ul>
             <li>
                <router-link
                  :to="'#'"
                >
                  Отчет управляющего
                </router-link>
             </li>
             <li>
                <router-link
                  :to="'#'"
                >
                  Оборотная ведомость
                </router-link>
             </li>
             <li>
                <router-link
                  :to="'#'"
                >
                  Доход от реализации
                </router-link>
             </li>
             <li>
                <router-link
                  :to="'#'"
                >
                  Доход от реализации по локациям
                </router-link>
             </li>
             <li>
                <router-link
                  :to="'#'"
                >
                  Доход от реализации по локациям
                </router-link>
             </li>
           </ul>
           <h3>
             <v-icon>
                 mdi-cart
             </v-icon>
                 ТМЦ
           </h3>
           <ul>
             <li>
                <router-link
                  :to="'#'"
                >
                  Оборачиваемость ТМЦ
                </router-link>
             </li>
             <li>
                <router-link
                  :to="'#'"
                >
                  Инвентаризационная ведомость
                </router-link>
             </li>
           </ul>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Reposts',
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
.navtabs a{
  color: black !important;
  text-decoration-line: none;
}
.tabs-container .navtabs >  #active {
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
ul li{
    list-style-type: none;
    background-color: inherit;
    display: block;
    margin-bottom: -1px;
    padding: 10px 0px;
    position: relative;
}
ul li a{
    color: #226895 !important;
    text-decoration-line: none;
    font-size: 12px;
}
h3{
    margin-left: 20px;
    margin-top: 10px;
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 7px;
}
.v-icon{
    margin-right: 4px;
    color: black;
    font-size: 20px;
}
</style>
