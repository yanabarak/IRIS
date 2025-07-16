<template>
  <div class="row">
    <div class="col-12 col-md-auto tree-structure">
      <span class="red-color">Business Research / Product Pipeline / Ideation </span><br />
      ├── <span class="red-color">By Technology </span><br />
      │&nbsp;&nbsp; ├── <span class="five-color">Extensions</span><br />
      │&nbsp;&nbsp; │&nbsp;&nbsp; └── <span class="sec-color" @click="selectItem('Alphabet')">Alphabet</span><br/>
      │&nbsp;&nbsp; ├── <span class="five-color">Blockchains</span><br />
      │&nbsp;&nbsp; │&nbsp;&nbsp; └── <span class="sec-color" @click="selectItem('Contracts')">Contracts</span><br/>
      │&nbsp;&nbsp; ├── <span class="five-color">IoT</span><br />
      │&nbsp;&nbsp; │&nbsp;&nbsp; └── <span class="sec-color" @click="selectItem('Monitoring')">Monitoring</span><br/>
      │&nbsp;&nbsp; ├── <span class="five-color">AI</span><br />
      │&nbsp;&nbsp; │&nbsp;&nbsp; └── <span class="sec-color" @click="selectItem('Analysis')">Analysis</span><br/>
      └── <span class="red-color">By Business Segments </span><br />
      &nbsp; &nbsp; ├── <span class="sec-color" @click="selectItem('Legal_Services')">Legal Services</span><br />
      &nbsp; &nbsp; ├── <span class="sec-color" @click="selectItem('Agricultural_Technology')">Agricultural Technology</span><br />
      &nbsp; &nbsp; ├── <span class="sec-color" @click="selectItem('CleanTech')">CleanTech / Renewable Energy Tech</span><br />
    </div>

    <div class="mt-3 font-monospace col">
      <div v-if="selectedItem === 'Alphabet'" class="content">
        <b-breadcrumb>
          <b-breadcrumb-item>Business Research / Product Pipeline</b-breadcrumb-item>
          <b-breadcrumb-item>Ideation </b-breadcrumb-item>
          <b-breadcrumb-item>By Technology </b-breadcrumb-item>
          <b-breadcrumb-item>Extensions</b-breadcrumb-item>
          <b-breadcrumb-item active>Alphabet</b-breadcrumb-item>
        </b-breadcrumb>
        <br />
        Alphabet info Alphabet info
      </div>

      <div v-if="selectedItem === 'Contracts'" class="content">
        <b-breadcrumb>
          <b-breadcrumb-item>Business Research / Product Pipeline</b-breadcrumb-item>
          <b-breadcrumb-item>Ideation </b-breadcrumb-item>
          <b-breadcrumb-item>By Technology </b-breadcrumb-item>
          <b-breadcrumb-item>Blockchains</b-breadcrumb-item>
          <b-breadcrumb-item active>Contracts</b-breadcrumb-item>
        </b-breadcrumb>
        <br />
        <span class="sec-color">SmartLease</span> <br />

        <div class="row mx-0">
          <span class="green-color col-2 p-0 align-self-center">Description:</span>
          <span class="desc col">
            Блокчейн-платформа для автоматизації договорів оренди комерційної нерухомості з
            автоматичною перевіркою умов.</span
          >

          <br />
        </div>
        <div class="row mx-0">
          <span class="green-color col-2 p-0 align-self-center">Target audience:</span>
          <span class="desc col"> Малий бізнес і орендодавці комерційної нерухомості (B2B). </span
          ><br />
        </div>
        <div class="row mx-0">
          <span class="green-color col-2 p-0 align-self-center">Problem:</span>
          <span class="desc col">
            Складність і витрати на юридичне оформлення договорів оренди, ризик невідповідності
            умов.</span
          >

          <br />
        </div>
        <div class="row mx-0">
          <span class="green-color col-2 p-0 align-self-center">Technologies:</span>
          <span class="desc col">
            Блокчейн для смарт-контрактів, AI для аналізу договорів, low-code для кастомізації
            шаблонів.</span
          >
          <br />
        </div>
        <div class="row mx-0">
          <span class="green-color col-2 p-0 align-self-center">Model of monetization:</span>
          <span class="desc col">
            Разова оплата за створення договору, підписка на додаткові юридичні консультації.</span
          >

          <br />
        </div>
        <div class="row mx-0">
          <span class="green-color col-2 p-0 align-self-center">Uniqueness:</span>
          <span class="desc col">
            Локалізовані шаблони під законодавство різних країн, інтеграція з платіжними
            системами.</span
          >
        </div>
      </div>

      <div v-if="selectedItem === 'Monitoring'" class="content">
        <b-breadcrumb>
          <b-breadcrumb-item>Business Research / Product Pipeline</b-breadcrumb-item>
          <b-breadcrumb-item>Ideation </b-breadcrumb-item>
          <b-breadcrumb-item>By Technology </b-breadcrumb-item>
          <b-breadcrumb-item>IoT</b-breadcrumb-item>
          <b-breadcrumb-item active>Monitoring</b-breadcrumb-item>
        </b-breadcrumb>
        <br />
        <span class="sec-color">AgroTrack</span> <br />

        <div class="row mx-0">
          <span class="green-color col-2 p-0 align-self-center">Description:</span>
          <span class="desc col">
            Простий вебінтерфейс для моніторингу агросенсорів (вологість, температура, pH ґрунту) із
            сповіщеннями та рекомендаціями.</span
          >

          <br />
        </div>
        <div class="row mx-0">
          <span class="green-color col-2 p-0 align-self-center">Target audience:</span>
          <span class="desc col"> Малі та середні фермери, аграрні кооперативи.</span> <br />
        </div>
        <div class="row mx-0">
          <span class="green-color col-2 p-0 align-self-center">Problem:</span>
          <span class="desc col">
            Відсутність дешевих рішень для моніторингу стану полів у реальному часі.</span
          >

          <br />
        </div>
        <div class="row mx-0">
          <span class="green-color col-2 p-0 align-self-center">Technologies:</span>
          <span class="desc col">
            IoT (LoRaWAN, NB-IoT), AI-передбачення (наприклад, ризик грибків), PWA.</span
          >

          <br />
        </div>
        <div class="row mx-0">
          <span class="green-color col-2 p-0 align-self-center">Model of monetization:</span>
          <span class="desc col"> SaaS-доступ + продаж/партнерство з виробниками сенсорів.</span>
          <br />
        </div>
        <div class="row mx-0">
          <span class="green-color col-2 p-0 align-self-center">Uniqueness:</span>
          <span class="desc col">
            Фокус на “простих фермерів” — легкий старт, мобільна оптимізація, офлайн-режим.</span
          >
        </div>
      </div>

      <div v-if="selectedItem === 'Analysis'" class="content">
        <b-breadcrumb>
          <b-breadcrumb-item>Business Research / Product Pipeline</b-breadcrumb-item>
          <b-breadcrumb-item>Ideation </b-breadcrumb-item>
          <b-breadcrumb-item>By Technology </b-breadcrumb-item>
          <b-breadcrumb-item>AI</b-breadcrumb-item>
          <b-breadcrumb-item active>Analysis</b-breadcrumb-item>
        </b-breadcrumb>
        <br />
        <span class="sec-color">WindAnalyzer</span> <br />
        <div class="row mx-0">
          <span class="green-color col-2 p-0 align-self-center">Description:</span>
          <span class="desc col">
            AI-система для аналізу ефективності використання вітрової енергії у певному регіоні.
            Розраховує потенційні заощадження на електроенергії та оптимізує роботу вітрових
            установок.</span
          >

          <br />
        </div>
        <div class="row mx-0">
          <span class="green-color col-2 p-0 align-self-center">Target audience:</span>
          <span class="desc col">
            Власники вітрових електростанцій (ВЕС). Енергетичні компанії та державні організації.
            Інвестори у відновлювану енергетику.</span
          >

          <br />
        </div>
        <div class="row mx-0">
          <span class="green-color col-2 p-0 align-self-center">Problem:</span>
          <span class="desc col">
            Відсутність точних та доступних інструментів для оцінки ефективності вітрової генерації
            в конкретних локаціях, що ускладнює прийняття рішень щодо інвестицій та оптимізації
            виробництва.</span
          >

          <br />
        </div>
        <div class="row mx-0">
          <span class="green-color col-2 p-0 align-self-center">Technologies:</span>
          <span class="desc col">
            AI/ML (прогнозування вітрового потенціалу на основі історичних даних). GIS-аналіз
            (оцінка рельєфу та інших географічних факторів). PWA (доступ до даних з будь-якого
            пристрою).</span
          >

          <br />
        </div>
        <div class="row mx-0">
          <span class="green-color col-2 p-0 align-self-center">Model of monetization:</span>
          <span class="desc col">
            SaaS-підписка для доступу до аналітики. Індивідуальні консультації для великих
            енергокомпаній. Партнерства з виробниками вітрових турбін.</span
          >

          <br />
        </div>
        <div class="row mx-0">
          <span class="green-color col-2 p-0 align-self-center">Uniqueness:</span>
          <span class="desc col">
            Комплексний підхід: від оцінки потенціалу до розрахунку економії. Інтуїтивний інтерфейс
            для не-технічних користувачів. Інтеграція з даними метеорологічних служб та
            IoT-сенсорів.</span
          >
        </div>
      </div>

      <div v-if="selectedItem === 'Legal_Services'" class="content">
        <b-breadcrumb>
          <b-breadcrumb-item>Business Research / Product Pipeline</b-breadcrumb-item>
          <b-breadcrumb-item>Ideation </b-breadcrumb-item>
          <b-breadcrumb-item>By Business Segments </b-breadcrumb-item>
          <b-breadcrumb-item active>Legal Services</b-breadcrumb-item>
        </b-breadcrumb>
        <br />
        <span class="sec-color">SmartLease</span> <br />
        <div class="row mx-0">
          <span class="green-color col-2 p-0 align-self-center">Description:</span>
          <span class="desc col">
            Блокчейн-платформа для автоматизації договорів оренди комерційної нерухомості з
            автоматичною перевіркою умов.</span
          >

          <br />
        </div>
        <div class="row mx-0">
          <span class="green-color col-2 p-0 align-self-center">Target audience:</span>
          <span class="desc col"> Малий бізнес і орендодавці комерційної нерухомості (B2B).</span>
          <br />
        </div>
        <div class="row mx-0">
          <span class="green-color col-2 p-0 align-self-center">Problem:</span>
          <span class="desc col">
            Складність і витрати на юридичне оформлення договорів оренди, ризик невідповідності
            умов.</span
          >

          <br />
        </div>
        <div class="row mx-0">
          <span class="green-color col-2 p-0 align-self-center">Technologies:</span>
          <span class="desc col">
            Блокчейн для смарт-контрактів, AI для аналізу договорів, low-code для кастомізації
            шаблонів.</span
          >

          <br />
        </div>
        <div class="row mx-0">
          <span class="green-color col-2 p-0 align-self-center">Model of monetization:</span>
          <span class="desc col">
            Разова оплата за створення договору, підписка на додаткові юридичні консультації.</span
          >

          <br />
        </div>
        <div class="row mx-0">
          <span class="green-color col-2 p-0 align-self-center">Uniqueness:</span>
          <span class="desc col">
            Локалізовані шаблони під законодавство різних країн, інтеграція з платіжними
            системами.</span
          >
        </div>
      </div>

      <div v-if="selectedItem === 'Agricultural_Technology'" class="content">
        <b-breadcrumb>
          <b-breadcrumb-item>Business Research / Product Pipeline</b-breadcrumb-item>
          <b-breadcrumb-item>Ideation </b-breadcrumb-item>
          <b-breadcrumb-item>By Business Segments </b-breadcrumb-item>
          <b-breadcrumb-item active>Agricultural Technology</b-breadcrumb-item>
        </b-breadcrumb>
        <br />
        <span class="sec-color">AgroTrack</span> <br />
        <div class="row mx-0">
          <span class="green-color col-2 p-0 align-self-center">Description:</span>
          <span class="desc col">
            Простий вебінтерфейс для моніторингу агросенсорів (вологість, температура, pH ґрунту) із
            сповіщеннями та рекомендаціями.</span
          >

          <br />
        </div>
        <div class="row mx-0">
          <span class="green-color col-2 p-0 align-self-center">Target audience:</span>
          <span class="desc col"> Малі та середні фермери, аграрні кооперативи.</span> <br />
        </div>
        <div class="row mx-0">
          <span class="green-color col-2 p-0 align-self-center">Problem:</span>
          <span class="desc col">
            Відсутність дешевих рішень для моніторингу стану полів у реальному часі.</span
          >

          <br />
        </div>
        <div class="row mx-0">
          <span class="green-color col-2 p-0 align-self-center">Technologies:</span>
          <span class="desc col">
            IoT (LoRaWAN, NB-IoT), AI-передбачення (наприклад, ризик грибків), PWA.</span
          >

          <br />
        </div>
        <div class="row mx-0">
          <span class="green-color col-2 p-0 align-self-center">Model of monetization:</span>
          <span class="desc col"> SaaS-доступ + продаж/партнерство з виробниками сенсорів.</span>
          <br />
        </div>
        <div class="row mx-0">
          <span class="green-color col-2 p-0 align-self-center">Uniqueness:</span>
          <span class="desc col">
            Фокус на “простих фермерів” — легкий старт, мобільна оптимізація, офлайн-режим.</span
          >
        </div>
      </div>

      <div v-if="selectedItem === 'CleanTech'" class="content">
        <b-breadcrumb>
          <b-breadcrumb-item>Business Research / Product Pipeline</b-breadcrumb-item>
          <b-breadcrumb-item>Ideation </b-breadcrumb-item>
          <b-breadcrumb-item>By Business Segments </b-breadcrumb-item>
          <b-breadcrumb-item active>Analysis</b-breadcrumb-item>
        </b-breadcrumb>
        <br />
        <span class="sec-color">WindAnalyzer</span> <br />
        <div class="row mx-0">
          <span class="green-color col-2 p-0 align-self-center">Description:</span>
          <span class="desc col">
            AI-система для аналізу ефективності використання вітрової енергії у певному регіоні.
            Розраховує потенційні заощадження на електроенергії та оптимізує роботу вітрових
            установок.</span
          >

          <br />
        </div>
        <div class="row mx-0">
          <span class="green-color col-2 p-0 align-self-center">Target audience:</span>
          <span class="desc col">
            Власники вітрових електростанцій (ВЕС). Енергетичні компанії та державні організації.
            Інвестори у відновлювану енергетику.</span
          >

          <br />
        </div>
        <div class="row mx-0">
          <span class="green-color col-2 p-0 align-self-center">Problem:</span>
          <span class="desc col">
            Відсутність точних та доступних інструментів для оцінки ефективності вітрової генерації
            в конкретних локаціях, що ускладнює прийняття рішень щодо інвестицій та оптимізації
            виробництва.</span
          >

          <br />
        </div>
        <div class="row mx-0">
          <span class="green-color col-2 p-0 align-self-center">Technologies:</span>
          <span class="desc col">
            AI/ML (прогнозування вітрового потенціалу на основі історичних даних). GIS-аналіз
            (оцінка рельєфу та інших географічних факторів). PWA (доступ до даних з будь-якого
            пристрою).</span
          >

          <br />
        </div>
        <div class="row mx-0">
          <span class="green-color col-2 p-0 align-self-center">Model of monetization:</span>
          <span class="desc col">
            SaaS-підписка для доступу до аналітики. Індивідуальні консультації для великих
            енергокомпаній. Партнерства з виробниками вітрових турбін.</span
          >

          <br />
        </div>
        <div class="row mx-0">
          <span class="green-color col-2 p-0 align-self-center">Uniqueness:</span>
          <span class="desc col">
            Комплексний підхід: від оцінки потенціалу до розрахунку економії. Інтуїтивний інтерфейс
            для не-технічних користувачів. Інтеграція з даними метеорологічних служб та
            IoT-сенсорів.</span
          >
        </div>
      </div>

      <!-- List of areas of activity
Агробізнес (сільське господарство, тваринництво, садівництво)
Будівництво (житлове, промислове, дорожнє)
Медицина та фармацевтика (лікування, дослідження, виробництво ліків)
Освіта (школи, університети, курси, тренінги)
Наука та дослідження (фундаментальні та прикладні науки)
IT та телекомунікації (програмування, кібербезпека, інтернет-послуги)
Фінанси та банкінг (банківські послуги, страхування, інвестиції)
Транспорт і логістика (автомобільний, залізничний, морський, авіаперевезення)
Промисловість (машинобудування, металургія, хімічна промисловість)
Харчова промисловість (виробництво продуктів харчування)
Легка промисловість (текстиль, взуття, одяг)
Космічна промисловість
Торгівля (роздрібна, оптова, електронна комерція)
Енергетика (атомна, сонячна, вітрова, традиційна енергетика)
Туризм і готельний бізнес (готелі, ресторани, туристичні агенції)
Наука та дослідження
Мистецтво та культура (музика, кіно, театр, література)
Спорт і фітнес (професійний спорт, тренажерні зали, здоров’я)
Ресторанний бізнес і громадське харчування
Юриспруденція (адвокатура, нотаріат, корпоративне право)
Нерухомість (продаж, оренда, девелопмент)
Маркетинг і реклама
Медіа та журналістика
Соціальні послуги
Екологія та охорона довкілля, переробка відходів
Архітектура і дизайн
Соціальні послуги (благодійність, соціальний захист)
Психологія -->

      <!--
Технології та інновації
    Штучний інтелект (AI) та машинне навчання
    Робототехніка та автоматизація
    Віртуальна (VR) та доповнена реальність (AR)
    Блокчейн та криптовалюти
    Кібербезпека
    Нанотехнології
    Біотехнології та генна інженерія

Креативні та медійні сфери
    Геймдев (розробка відеоігор)
    Подкасти та аудіоконтент
    Блогінг та влогінг
    Графічний дизайн та ілюстрація
    Фотографія та відеозйомка
    Анімація та 3D-моделювання
    Копірайтинг та контент-маркетинг

Охорона здоров’я та благополуччя
    Психологія та психотерапія
    Дієтологія та здорове харчування
    Альтернативна медицина (наприклад, аюрведа, гомеопатія)
    Фізіотерапія та реабілітація
    Стоматологія
    Ветеринарія

Сфера послуг
    Персональний коучинг та менторінг
    Організація подій (event-менеджмент)
    Клінінг та професійне прибирання
    Ремонт та обслуговування техніки
    Персональні покупки (шопінг-асістент)
    Охорона та детективні послуги

Екологія та сталий розвиток
    Відновлювана енергетика
    Екотуризм
    Урбаністика та розумні міста
    Переробка та zero waste проекти
    Органічне землеробство

Творчі та мистецькі ніші:
    Сценічне мистецтво (перформанси, інсталяції)
    Боді-арт та татуаж
    Створення мініатюр та ляльок
    Музична терапія
    Реставрація мистецьких творів

Технічні та інженерні спеціалізації:
    Підводна інженерія
    Криогенні технології
    Акустична інженерія
     Біонічні протези
    Розробка дронів

Сільське господарство та природа:
    Агролісівництво
    Вермікультура (вирощування черв'яків)
    Апітерапія (лікування продуктами бджільництва)
    Гідропоніка та аеропоніка
    Мікологія (вивчення грибів)

Медичні спеціалізації:
    Гериатрія (лікування літніх людей)
    Сомнологія (вивчення сну)
    Спортивна медицина

Соціальні та освітні сфери:
    Кризове консультування
    Ергономіка (оптимізація робочих місць)

Наукові ніші:
    Палеогенетика
    Космічна медицина
    Соціобіологія
    Нейроархітектура (проектування просторів для мозку)

Традиційні ремесла:
    Ковальство
    Гончарство
    Лозоплетіння
    Вишивка та ткацтво
    Бондарство (виготовлення бочок)
 -->
    </div>
    <div class="row mx-0">
      <span class="green-color col-2 p-0 align-self-center"></span>
      <div v-if="!selectedItem" class="text-muted"></div>
    </div>

    <div class="back-arrow">
      <router-link to="/dashboard">
        <b-icon icon="arrow-left-square" class="icon-style"></b-icon>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedItem: null,
    };
  },
  methods: {
    selectItem(item) {
      this.selectedItem = item;
    },
  },
};
</script>
