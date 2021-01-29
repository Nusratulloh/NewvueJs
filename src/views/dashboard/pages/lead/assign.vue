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
          app
        >
    <v-dialog
      v-model="dialog"
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
            @click="dialog = false"
            id="close"
            style="background: white"
          >
            Отмена
          </v-btn>
          <v-btn
            @click="dialog = false"
            id="save"
          >
            <v-icon>mdi-save</v-icon>
             Сохранить
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
          color="#1c84c6"
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-pencil</v-icon>
           <h4 class="d-none d-md-block">Править</h4>
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
          color="#1dc5a3"
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-send-outline</v-icon>
           <h4 class="d-none d-md-block">Рассылка</h4>
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
     <v-menu
      bottom
      offset-y
      transition="scale-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#1ab394"
          style="float: right"
          dark
          v-bind="attrs"
          v-on="on"
        >
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
        </div>
      </v-col>
       <v-col
       cols="12"
       style="padding-bottom: 0px; padding-left: 0px"
       >
       <ul>
         <li>
          <router-link
            :to="'/components/leads'"
          >
            Текущие
          </router-link>
          </li>
         <li
           class="active"
         >
           <router-link
            :to="'#'"
           >
             Я — ответственный
           </router-link>
         </li>
         <li>
           <router-link
            :to="'/lead-archive'"
           >
             Архив (отказы)
           </router-link>
         </li>
       </ul>
    </v-col>
    <v-col
      cols="12"
      style="background: white;
       padding-top: 0px;
       margin-left: 1px;
      "
    >
    <v-row
      style="padding: 15px;"
      id="cards"
    >
     <v-col
      cols="12"
     >
    <div
      id="data"
    >
      Отображено 5 этапов.
    <v-menu
      bottom
      offset-y
      transition="scale-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
        >
          <span>Настройка полей</span>
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
      . Сортировка
    <v-menu
      bottom
      offset-y
      transition="scale-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
        >
          <span>Вручную</span>
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
    </div>
      </v-col>
      <v-col
       cols="12"
       class="col-sm-3"
      >
        <h3
          style="width: 95%; color: #6a6a6a;"
        >
        <strong
          style="float: right"
        >
          <input type="checkbox">
        </strong>
        <span>
          Не разобрано
        </span>
        <span
          style="opacity: 0.7"
        >
          19
        </span>
        </h3>
       <v-card
         style="border-left-width: 4px !important;
                border-color: #1a7bb9;"
         width="95%"
       >
         <v-card-text
          style="padding: 5px"
         >
           <p
             style="color: #6a6a6a;
                   font-size: 12px;"
           >
             <span
              style="float: right"
             >23:31</span>
              <router-link
                style="color: #6a6a6a !important"
                :to="'#'"
              >
                Миронова Диана
              </router-link>
           </p>
           <label for="selection_1">
             <small
               class="task-text"
             >
             <v-icon>
               mdi-crosshairs
             </v-icon>
               Рекомендация
             <br>
               Английский язык - Профессиональный
             <br>
               Екатерина Орлова
             </small>
           </label>
           <div
            style="margin-top: 5px"
           >
           <small>
             <v-icon>
               mdi-wechat
             </v-icon>
               2
             <input
               style="float: right;
                margin-top: 5px;"
               type="checkbox"
               value="1"
               id="selection_1"
               >
           </small>
           </div>
         </v-card-text>
       </v-card>
       <v-card
         style="border-left-width: 4px;
                border-color: #9acfea;"
         width="95%"
       >
         <v-card-text
          style="padding: 5px"
         >
           <p
             style="color: #6a6a6a;
                   font-size: 12px;"
           >
             <span
              style="float: right"
             >23:31</span>
              <router-link
                style="color: #c26629 !important"
                :to="'#'"
              >
                Миронова Диана
              </router-link>
           </p>
           <label for="selection_1">
             <small
               class="task-text"
             >
             <v-icon>
               mdi-crosshairs
             </v-icon>
               Рекомендация
             <br>
               Английский язык - Профессиональный
             <br>
               Екатерина Орлова
             </small>
           </label>
           <div
            style="margin-top: 5px"
           >
           <small>
             <v-icon>
               mdi-wechat
             </v-icon>
               2
             <input
               style="float: right;
                margin-top: 5px;"
               type="checkbox"
               value="1"
               id="selection_1"
               >
           </small>
           </div>
         </v-card-text>
       </v-card>
      </v-col>
      <v-col
       cols="12"
       class="col-sm-3"
      >
       <h3
          style="width: 95%; color: #c26629;"
        >
        <strong
          style="float: right"
        >
          <input type="checkbox">
        </strong>
        <span>
          Установлен контакт
        </span>
        <span
          style="opacity: 0.7"
        >
          4
        </span>
        </h3>
       <v-card
         style="border-left-width: 4px;
                border-color: #9acfea;"
         width="95%"
       >
         <v-card-text
          style="padding: 5px"
         >
           <p
             style="color: #6a6a6a;
                   font-size: 12px;"
           >
             <span
              style="float: right"
             >23:31</span>
              <router-link
                style="color: #c26629 !important"
                :to="'#'"
              >
                Миронова Диана
              </router-link>
           </p>
           <label for="selection_1">
             <small
               class="task-text"
             >
             <v-icon>
               mdi-crosshairs
             </v-icon>
               Рекомендация
             <br>
               Английский язык - Профессиональный
             <br>
               Екатерина Орлова
             </small>
           </label>
           <div
            style="margin-top: 5px"
           >
           <small>
             <v-icon>
               mdi-wechat
             </v-icon>
               2
             <input
               style="float: right;
                margin-top: 5px;"
               type="checkbox"
               value="1"
               id="selection_1"
               >
           </small>
           </div>
         </v-card-text>
       </v-card>
       <v-card
         style="border-left-width: 4px;
                border-color: #ffff00;"
         width="95%"
       >
         <v-card-text
          style="padding: 5px"
         >
           <p
             style="color: #6a6a6a;
                   font-size: 12px;"
           >
             <span
              style="float: right"
             >23:31</span>
              <router-link
                style="color: #c26629 !important"
                :to="'#'"
              >
                Миронова Диана
              </router-link>
           </p>
           <label for="selection_1">
             <small
               class="task-text"
             >
             <v-icon>
               mdi-crosshairs
             </v-icon>
               Рекомендация
             <br>
               Английский язык - Профессиональный
             <br>
               Екатерина Орлова
             </small>
           </label>
           <div
            style="margin-top: 5px"
           >
           <small>
             <v-icon>
               mdi-wechat
             </v-icon>
               2
             <input
               style="float: right;
                margin-top: 5px;"
               type="checkbox"
               value="1"
               id="selection_1"
               >
           </small>
           </div>
         </v-card-text>
       </v-card>
      </v-col>
       <v-col
       cols="12"
       class="col-sm-3"
      >
       <h3
          style="width: 95%; color: #1a7bb9;"
        >
        <strong
          style="float: right"
        >
          <input type="checkbox">
        </strong>
        <span>
          Назначено пробное
        </span>
        <span
          style="opacity: 0.7"
        >
          11
        </span>
        </h3>
       <v-card
         style="border-left-width: 4px;
                border-color: #3C578C;"
         width="95%"
       >
         <v-card-text
          style="padding: 5px"
         >
           <p
             style="color: #6a6a6a;
                   font-size: 12px;"
           >
             <span
              style="float: right"
             >23:31</span>
              <router-link
                style="color: #1a7bb9 !important"
                :to="'#'"
              >
                Миронова Диана
              </router-link>
           </p>
           <label for="selection_1">
             <small
               class="task-text"
             >
             <v-icon>
               mdi-crosshairs
             </v-icon>
               Рекомендация
             <br>
               Английский язык - Профессиональный
             <br>
               Екатерина Орлова
             </small>
           </label>
           <div
            style="margin-top: 5px"
           >
           <small>
             <v-icon>
               mdi-wechat
             </v-icon>
               2
             <input
               style="float: right;
                margin-top: 5px;"
               type="checkbox"
               value="1"
               id="selection_1"
               >
           </small>
           </div>
         </v-card-text>
       </v-card>
       <v-card
         style="border-left-width: 4px;
                border-color: #1a7bb9;"
         width="95%"
       >
         <v-card-text
          style="padding: 5px"
         >
           <p
             style="color: #6a6a6a;
                   font-size: 12px;"
           >
             <span
              style="float: right"
             >23:31</span>
              <router-link
                style="color: #1a7bb9 !important"
                :to="'#'"
              >
                Миронова Диана
              </router-link>
           </p>
           <label for="selection_1">
             <small
               class="task-text"
             >
             <v-icon>
               mdi-crosshairs
             </v-icon>
               Рекомендация
             <br>
               Английский язык - Профессиональный
             <br>
               Екатерина Орлова
             </small>
           </label>
           <div
            style="margin-top: 5px"
           >
           <small>
             <v-icon>
               mdi-wechat
             </v-icon>
               2
             <input
               style="float: right;
                margin-top: 5px;"
               type="checkbox"
               value="1"
               id="selection_1"
               >
           </small>
           </div>
         </v-card-text>
       </v-card>
      </v-col>
             <v-col
       cols="12"
       class="col-sm-3"
      >
       <h3
          style="width: 95%; color: #3C578C;"
        >
        <strong
          style="float: right"
        >
          <input type="checkbox">
        </strong>
        <span>
          Проведено пробное
        </span>
        <span
          style="opacity: 0.7"
        >
          7
        </span>
        </h3>
       <v-card
         style="border-left-width: 4px;
                border-color: #00aa00;"
         width="95%"
       >
         <v-card-text
          style="padding: 5px"
         >
           <p
             style="color: #6a6a6a;
                   font-size: 12px;"
           >
             <span
              style="float: right"
             >23:31</span>
              <router-link
                style="color: #3C578C !important"
                :to="'#'"
              >
                Миронова Диана
              </router-link>
           </p>
           <label for="selection_1">
             <small
               class="task-text"
             >
             <v-icon>
               mdi-crosshairs
             </v-icon>
               Рекомендация
             <br>
               Английский язык - Профессиональный
             <br>
               Екатерина Орлова
             </small>
           </label>
           <div
            style="margin-top: 5px"
           >
           <small>
             <v-icon>
               mdi-wechat
             </v-icon>
               2
             <input
               style="float: right;
                margin-top: 5px;"
               type="checkbox"
               value="1"
               id="selection_1"
               >
           </small>
           </div>
         </v-card-text>
       </v-card>
       <v-card
         style="border-left-width: 4px;
                border-color: #ea394c;"
         width="95%"
       >
         <v-card-text
          style="padding: 5px"
         >
           <p
             style="color: #6a6a6a;
                   font-size: 12px;"
           >
             <span
              style="float: right"
             >23:31</span>
              <router-link
                style="color: #3C578C !important"
                :to="'#'"
              >
                Миронова Диана
              </router-link>
           </p>
           <label for="selection_1">
             <small
               class="task-text"
             >
             <v-icon>
               mdi-crosshairs
             </v-icon>
               Рекомендация
             <br>
               Английский язык - Профессиональный
             <br>
               Екатерина Орлова
             </small>
           </label>
           <div
            style="margin-top: 5px"
           >
           <small>
             <v-icon>
               mdi-wechat
             </v-icon>
               2
             <input
               style="float: right;
                margin-top: 5px;"
               type="checkbox"
               value="1"
               id="selection_1"
               >
           </small>
           </div>
         </v-card-text>
       </v-card>
      </v-col>
    </v-row>
    </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      dialog1: false,
      dialog2: false,
      dialog3: false,
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
    }),
  }
</script>
<style  scoped>
ul li a{
  color: black !important;
  text-decoration-line: none;
  font-weight: 300;
}
#btn_group .v-btn{
    padding: 5px 10px !important;
    margin-right: 2px;
    font-size: 12px ;
    height: auto !important;
    font-weight: 500;
    border-radius: 1px!important;
    color: #FFFFFF;
}
#btn_group .v-icon{
    font-size: 15px !important;
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
ul .active{
   border: 1px solid #e7eaec;
   border-bottom-color: transparent;
   background: white;
}
#data{
    float: right;
    color: #656565;
    font-size: 88%;
    padding: 0 5px 7px 5px;
    margin-top: 15px;
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

}
#cards .col{
  padding: 0px
}
.v-card__text .v-icon{
  font-size: 13px;
  margin-right: 2px;
  color: #6a6a6a !important;
}
.v-card{
  box-shadow: none !important;
  margin: 0px;
  background: #FAFAFB;
  margin-top: 8px;
  border: 1px solid;
}
.v-application p {
    background-color: #f3f3f4;
    padding: 5px;
    color: #6a6a6a !important;
    font-size: 12px;
}
h3{
    cursor: text;
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 600;
    font-size: 16px;
}
</style>
