<template>
  <div class="row">
    <div class="col-12 col-md-auto tree-structure">
      <span class="red-color">Company Guidelines / Templates & Checklists / Internal Templates</span><br />
      └── <span class="sec-color" @click="selectItem('Projects_Space')">Projects Space </span><br />
    </div>

    <div class="col mt-3">
      <div v-if="selectedItem === 'Projects_Space'" class="content">
        <b-breadcrumb>
          <b-breadcrumb-item active>/ Projects Space</b-breadcrumb-item>
        </b-breadcrumb>
        <span class="red-color">Projects Space / Browser Extensions / NameProject </span><br />
        ├── <span class="five-color pointer-mouse" @click="selectItem2('Concept')">Concept</span><br />
        │ &nbsp; &nbsp; ├── <span class="sec-color pointer-mouse" @click="selectItem2('Vision_Statement')">Vision Statement</span><br/>
        │ &nbsp; &nbsp; ├── <span  class="sec-color pointer-mouse" @click="selectItem2('Scope')">Scope</span><br/>
        │ &nbsp; &nbsp; ├── <span  class="sec-color pointer-mouse" @click="selectItem2('Target_Audience')">Target Audience</span><br/>
        │ &nbsp; &nbsp; └── <span  class="sec-color pointer-mouse" @click="selectItem2('Unique_Value_Prop')">Unique Value Prop (UVP)</span><br/>
        ├── <span class="five-color pointer-mouse" @click="selectItem2('Requirements')">Requirements</span><br />
        │ &nbsp; &nbsp; ├── <span  class="sec-color pointer-mouse" @click="selectItem2('Functional_Requirements')">Functional Requirements</span><br/>
        │ &nbsp; &nbsp; ├── <span  class="sec-color pointer-mouse" @click="selectItem2('Non_Functional')">Non-Functional</span><br/>
        │ &nbsp; &nbsp; └── <span  class="sec-color pointer-mouse" @click="selectItem2('Regulatory_Requirements')">Regulatory Requirements</span><br/>
        ├── <span class="five-color pointer-mouse" @click="selectItem2('Roadmap_Improvements')">Roadmap & Improvements</span><br />
        │ &nbsp; &nbsp; ├── <span  class="sec-color pointer-mouse" @click="selectItem2('Product_Roadmap')">Product Roadmap</span><br/>
        │ &nbsp; &nbsp; └── <span  class="sec-color pointer-mouse" @click="selectItem2('Feature_Prioritization')">Feature Prioritization</span><br/>
        ├── <span class="five-color pointer-mouse" @click="selectItem2('Monetization_Metrics')">Monetization & Metrics</span><br />
        │ &nbsp; &nbsp; ├── <span  class="sec-color pointer-mouse" @click="selectItem2('Business_Models')">Business Models</span><br/>
        │ &nbsp; &nbsp; ├── <span  class="sec-color pointer-mouse" @click="selectItem2('KPIs')">KPIs (Key Performance Indicators)</span><br/>
        │ &nbsp; &nbsp; ├── <span  class="sec-color pointer-mouse" @click="selectItem2('Pricing_Strategy')">Pricing Strategy</span><br/>
        │ &nbsp; &nbsp; └── <span  class="sec-color pointer-mouse" @click="selectItem2('Revenue_Projections')">Revenue Projections</span><br/>
        ├── <span class="five-color pointer-mouse" @click="selectItem2('Competitive_Analysis')">Competitive Analysis</span><br />
        │ &nbsp; &nbsp; ├── <span  class="sec-color pointer-mouse" @click="selectItem2('Direct_Competitors')">Direct Competitors</span><br/>
        │ &nbsp; &nbsp; ├── <span  class="sec-color pointer-mouse" @click="selectItem2('SWOT_Analysis')">SWOT Analysis</span><br/>
        │ &nbsp; &nbsp; └── <span  class="sec-color pointer-mouse" @click="selectItem2('USP')">Unique Selling Proposition (USP)</span><br/>
        ├── <span class="five-color pointer-mouse" @click="selectItem2('Infrastructure_Access')">Infrastructure & Access</span><br />
        │ &nbsp; &nbsp; ├── <span  class="sec-color pointer-mouse" @click="selectItem2('Server_Access')">Server Access</span><br/>
        │ &nbsp; &nbsp; ├── <span  class="sec-color pointer-mouse" @click="selectItem2('Security_Policies')">Security Policies</span><br/>
        │ &nbsp; &nbsp; └── <span  class="sec-color pointer-mouse" @click="selectItem2('Access_Management_Process')">Access Management Process</span><br/>
        ├── <span class="five-color pointer-mouse" @click="selectItem2('Technical_Architecture')">Technical Architecture</span><br />
        │ &nbsp; &nbsp; ├── <span  class="sec-color pointer-mouse" @click="selectItem2('System_Architecture')">System Architecture</span><br/>
        │ &nbsp; &nbsp; ├── <span  class="sec-color pointer-mouse" @click="selectItem2('Tech_Stack')">Tech Stack</span><br/>
        │ &nbsp; &nbsp; └── <span  class="sec-color pointer-mouse" @click="selectItem2('Deployment_Pipeline')">Deployment Pipeline</span><br/>
        ├── <span class="five-color pointer-mouse" @click="selectItem2('Testing_QA')">Testing & QA</span><br />
        │ &nbsp; &nbsp; ├── <span  class="sec-color pointer-mouse" @click="selectItem2('Test_Plan')">Test Plan</span><br/>
        │ &nbsp; &nbsp; ├── <span  class="sec-color pointer-mouse" @click="selectItem2('Tools')">Tools</span><br/>
        │ &nbsp; &nbsp; └── <span  class="sec-color pointer-mouse" @click="selectItem2('Bug_Tracking')">Bug Tracking</span><br/>
        ├── <span class="five-color pointer-mouse" @click="selectItem2('Market_Strategy')">Go-to-Market Strategy</span><br />
        │ &nbsp; &nbsp; ├── <span  class="sec-color pointer-mouse" @click="selectItem2('Marketing_Plan')">Marketing Plan</span><br/>
        │ &nbsp; &nbsp; ├── <span  class="sec-color pointer-mouse" @click="selectItem2('Launch_Plan')">Launch Plan</span><br/>
        │ &nbsp; &nbsp; └── <span  class="sec-color pointer-mouse" @click="selectItem2('User_Acquisition')">User Acquisition</span><br/>
        ├── <span class="five-color pointer-mouse" @click="selectItem2('Project_Management')">Project Management</span><br />
        │ &nbsp; &nbsp; ├── <span  class="sec-color pointer-mouse" @click="selectItem2('Roadmap')">Roadmap</span><br/>
        │ &nbsp; &nbsp; ├── <span  class="sec-color pointer-mouse" @click="selectItem2('Team_Roles')">Team & Roles</span><br/>
        │ &nbsp; &nbsp; └── <span  class="sec-color pointer-mouse" @click="selectItem2('Risks')">Risks</span><br/>
        └── <span class="five-color pointer-mouse" @click="selectItem2('Support_Maintenance')">Support & Maintenance</span><br />
        &nbsp; &nbsp; &nbsp;&nbsp; ├── <span  class="sec-color pointer-mouse" @click="selectItem2('Support_Process')">Support Process</span><br/>
        &nbsp; &nbsp; &nbsp;&nbsp; ├── <span  class="sec-color pointer-mouse" @click="selectItem2('Update_Schedule')">Update Schedule</span><br/>
        &nbsp; &nbsp; &nbsp;&nbsp; └── <span  class="sec-color pointer-mouse" @click="selectItem2('Monitoring')">Monitoring</span><br/>
        <br />
      </div>
      <div v-if="!selectedItem" class="text-muted"></div>
    </div>

    <div class="col mt-3">
      <div v-if="selectedItem2 === 'Concept'" class="content">
        <span class="five-color">Concept</span><br /> Розділ визначає основну ідею та рамки проєкту, надаючи чітке бачення продукту, його межі, цільову аудиторію та унікальну цінність.
      </div>
      <div v-if="selectedItem2 === 'Vision_Statement'" class="content">
        <span class="five-color">Vision Statemen</span><br />
        Мета сформулювати коротке, бачення продукту, яке відображає його мету, вплив і довгострокові цілі.<br><br>
        <span class="sec-color">Основна ідея продукту:</span> <br> • Що продукт робить і чому існує (наприклад, забезпечення безпечного веб-досвіду).<br><br>
        <span class="sec-color">Довгострокова мета:</span> <br> • Який вплив продукт матиме на користувачів або ринок (наприклад, стати лідером у parental control).<br><br>
        <span class="sec-color">Цінності:</span> <br> • Які принципи лежать в основі продукту (наприклад, простота, доступність, безпека).<br><br>
        <span class="sec-color">Короткість і чіткість:</span> <br> • Формулювання має бути лаконічним (1–2 речення), щоб легко запам’ятовувалося.<br><br>
        <span class="sec-color">Посилання на Business Research:</span> <br> • Дані про ринкові потреби з Business Research → Market Analysis → Pain Points.<br> • Тренди з Business Research → Technology Trends.<br><br>
        <span class="green-color">Приклад:</span> <br>
        UserControl empowers parents and businesses to create a safe and productive web environment with a simple, AI-driven Chrome extension, aligning with IRIS_MAN’s mission to deliver accessible, high-impact tools for passive income (Company Guidelines → Mission). Our goal is to become the go-to solution for intuitive web control by 2027, addressing the growing need for online safety (Business Research → Market Analysis → Pain Points).<br><br>
        <span class="sec-color">Формат:</span> <br>• Посилайтеся на Business Research для обґрунтування ринкової потреби. <br> • Vision Statement узгоджується з C-level або формулюють Person A і Person B спільно.
      </div>
      <div v-if="selectedItem2 === 'Scope'" class="content">
        <span class="five-color">Scope</span><br />
        Мета визначити чіткі межі – що входить у продукт, а що нi (щоб уникнути "feature creep"). <br><br>
        <span class="sec-color">Що входить (In-Scope):</span> <br> • Основні функції (наприклад, блокування сайтів, Vue.js дашборд, Requirements → Functional → FR-001, FR-005).<br> • Платформи (наприклад, Chrome browser).<br> • Ринки (наприклад, US, EU, Business Research → Target Audience). <br> • Початкові релізи (наприклад, v1.0 із базовими функціями).<br><br>
        <span class="sec-color">Що не входить (Out-of-Scope):</span> <br> • Функції, відкладені на майбутнє (наприклад, AI-фільтрація для v2.0, Roadmap & Improvements → Product Roadmap).<br> • Непідтримувані платформи (наприклад, Firefox, мобільні браузери).<br> • Некритичні ринки (наприклад, країни без GDPR).<br><br>
        <span class="sec-color">Обмеження:</span> <br> • Технічні (наприклад, Firebase free-tier, Resource → Servers → Firebase).<br> • Ресурсні (наприклад, команда з двох осіб).<br> • Часові (наприклад, запуск у Q4 2025, Project Management → Roadmap).<br><br>
        <span class="sec-color">Фази розвитку:</span> <br> • Початковий реліз (наприклад, v1.0 із базовим блокуванням).<br> • Майбутні релізи (посилання на Roadmap & Improvements → Product Roadmap).<br><br>
        <span class="sec-color">Посилання на Requirements та Roadmap:</span> <br> • Функції з Requirements → Functional і Non-Functional.<br> • Таймлайн із Project Management → Roadmap.<br><br>
        <span class="green-color">Приклад:</span> <br>
        Scope:<br><br>
        In-Scope:<br>
            • Chrome extension for site blocking by category (Requirements → Functional → FR-001).<br>• Vue.js dashboard for filter configuration and reports (Requirements → Functional → FR-005).<br>• Firebase backend for user data and authentication (Technical Architecture → System Architecture).<br>• Target markets: US, EU parents and HR managers (Business Research → Target Audience).<br>• v1.0: Basic blocking, freemium model (Q4 2025, Project Management → Roadmap).<br><br>
        Out-of-Scope:<br>
            • AI content filtering (planned for v2.0, Roadmap & Improvements → Product Roadmap).<br>• Firefox, Safari, mobile browser support.<br>• Non-GDPR markets (e.g., Asia, Business Research → Market Analysis).<br><br>
        Constraints:<br>
            • Technical: Firebase free-tier (10K users, Resource → Servers → Firebase).<br>• Resource: 2-person team, 20 hours/week each (Project Management → Team & Roles).<br>• Timeline: Full launch by Q4 2025 (Project Management → Roadmap).<br><br>
        Phases:<br>
            • v1.0: Basic blocking, dashboard (Q4 2025).<br>• v2.0: AI filtering, advanced reports (Q1 2026, Roadmap & Improvements → Product Roadmap).<br><br>
        Reference: Functional requirements (Requirements → Functional); roadmap (Project Management → Roadmap).<br><br>
        <span class="sec-color">Формат:</span> <br>• Чітко розмежуйте in-scope/out-of-scope, щоб уникнути розростання. <br> • Посилайтеся на Requirements для функцій і Project Management для таймлайну. <br> • Scope фіксується в PRD, Project Space.
      </div>
      <div v-if="selectedItem2 === 'Target_Audience'" class="content">
        <span class="five-color">Target Audience</span><br />
        Мета описати, хто є основними користувачами продукту, їхні потреби та характеристики, щоб сфокусувати розробку та маркетинг.<br><br>
        <span class="sec-color">Сегменти аудиторії:</span> <br> • Основні групи (наприклад, батьки, HR-менеджери).<br> • Демографія (вік, стать, локація, Business Research → Target Audience).<br><br>
        <span class="sec-color">Потреби та больові точки:</span> <br> • Чого хочуть користувачі (наприклад, захист дітей від шкідливого контенту).<br> • Проблеми, які вирішує продукт (наприклад, складність налаштування фільтрів).<br><br>
        <span class="sec-color">Поведінка:</span> <br> • Як аудиторія використовує продукт (наприклад, батьки налаштовують фільтри через дашборд).<br> • Де шукають рішення (наприклад, Chrome Web Store, Google, Go-to-Market Strategy → User Acquisition).<br><br>
        <span class="sec-color">Розмір ринку:</span> <br> • Оцінка аудиторії (наприклад, 10M батьків у US/EU, Business Research → Market Analysis).<br> • Потенціал зростання (наприклад, корпоративний сегмент).<br><br>
        <span class="sec-color">Посилання на Business Research та Go-to-Market:</span> <br> • Дані з Business Research → Target Audience → Pain Points.<br> • Канали залучення з Go-to-Market Strategy → User Acquisition.<br><br>
        <span class="green-color">Приклад:</span> <br>
        Target Audience:<br><br>
        Segments:<br>
            • Parents: 30–50 years, US/EU, seeking child safety solutions (Business Research → Target Audience).<br>• HR Managers: 25–45 years, EU, need employee monitoring tools (Business Research → Market Analysis).<br><br>
        Needs & Pain Points:<br>
            • Parents: Protect kids from adult content, easy setup (Business Research → Target Audience → Pain Points).<br>• HR: Monitor employee browsing, ensure productivity (Concept → Vision Statement).<br><br>
        Behavior:<br>
            • Parents: Search “parental control extension” on Google, use Chrome Web Store (Go-to-Market Strategy → User Acquisition).<br>• HR: Seek tools via LinkedIn, industry blogs (Go-to-Market Strategy → Marketing Plan).<br>• Usage: Parents set filters via dashboard, HR review reports (Requirements → Functional → FR-005).<br><br>
        Market Size:<br>
            • Parents: ~10M in US/EU with kids 5–18 (Business Research → Market Analysis).<br>• HR: ~500K small/medium businesses in EU (Business Research → Target Audience).<br>• Growth: Potential for schools (v2.0, Roadmap & Improvements → Product Roadmap).<br><br>
        Reference: Audience data (Business Research → Target Audience); acquisition channels (Go-to-Market Strategy → User Acquisition).<br><br>
        <span class="sec-color">Формат:</span> <br>• Деталізуйте 2–3 основні сегменти, спираючись на Business Research. <br> • Посилайтеся на Go-to-Market Strategy для поведінки та каналів. <br> • Аудиторія аналізується в CRM (HubSpot) або розділ Business Research.
      </div>
      <div v-if="selectedItem2 === 'Unique_Value_Prop'" class="content">
        <span class="five-color">Unique Value Prop (UVP)</span><br />
        Мета описати чим продукт кращий за аналоги – конкретно і вимірно. Описати чим відрізняємось від конкурентів? (швидше, дешевше, простіше, розумніше).<br><br>
        <span class="sec-color">Основна цінність:</span> <br> • Що робить продукт унікальним (наприклад, найпростіший інтерфейс для батьків).<br><br>
        <span class="sec-color">Переваги над конкурентами:</span> <br> • Порівняння з конкурентами (наприклад, дешевший за Qustodio, Competitive Analysis → Direct Competitors).<br> • Унікальні функції (наприклад, one-click налаштування).<br><br>
        <span class="sec-color">Користь для користувача:</span> <br> • Як продукт вирішує больові точки (наприклад, швидке блокування без складних налаштувань).<br><br>
        <span class="sec-color">Формулювання UVP:</span> <br> • Коротке речення (наприклад, "UserControl: The simplest way to block harmful sites in one click").<br><br>
        <span class="sec-color">Зв’язок із маркетингом:</span> <br> • Як UVP використовується в промо (наприклад, у Chrome Web Store, Go-to-Market Strategy → Marketing Plan).<br><br>
        <span class="sec-color">Посилання на Competitive Analysis та Business Research:</span> <br> • Порівняння з Competitive Analysis → Direct Competitors.<br> • Потреби з Business Research → Target Audience → Pain Points.<br><br>
        <span class="green-color">Приклад:</span> <br>
        Unique Value Proposition:<br>
        Core Value: UserControl offers the simplest, AI-driven Chrome extension for parental and corporate web control, enabling one-click setup for safe browsing (Requirements → Functional → FR-001).<br>
        Competitive Advantage:<br><br>
             • Simpler UI than Qustodio, cheaper ($5/month vs. $14/month Bark, Competitive Analysis → Direct Competitors).<br>• One-click filter setup, no complex configuration (Business Research → Target Audience → Pain Points).<br><br>
        User Benefit:<br>
             • Parents: Instantly block harmful sites, protect kids (Concept → Target Audience).<br>• HR: Monitor employees with minimal setup (Requirements → Functional → FR-005).<br><br>
        UVP Statement: "UserControl: Block harmful sites in one click – simple, safe, affordable."<br><br>
        Marketing Use:<br>
             • Featured in Chrome Web Store listing, Twitter/X posts, Google Ads (Go-to-Market Strategy → Marketing Plan).<br><br>
        Reference: Competitor pricing (Competitive Analysis → Direct Competitors); user needs (Business Research → Target Audience).<br><br>
        <span class="sec-color">Формат:</span> <br>• Формулюйте UVP як короткий слоган, що підкреслює простоту чи унікальність. <br> • Посилайтеся на Competitive Analysis для порівняння. <br> • UVP тестується з фокус-групами і спирається на Business Research.
      </div>



      <!-- <div v-if="selectedItem2 === 'qwerty'" class="content">
        <span class="five-color">qwerty</span><br />
        Мета <br><br>
        <span class="sec-color">qwerty</span> <br> • <br> • <br> • <br><br>
        <span class="sec-color">qwerty</span> <br> • <br> • <br> • <br><br>
        <span class="sec-color">qwerty</span> <br> • <br> • <br> • <br><br>
        <span class="sec-color">qwerty</span> <br> • <br> • <br> • <br><br>
        <span class="sec-color">qwerty</span> <br> • <br> • <br> • <br><br>
        <span class="sec-color">qwerty</span> <br> • <br> • <br> • <br><br>
        <span class="sec-color">qwerty</span> <br> • <br> • <br> • <br><br>
        <span class="green-color">Приклад:</span> <br>
        <br><br>
        <span class="sec-color">Формат:</span> <br>•  <br> •  <br> •
      </div> -->
      <div v-if="selectedItem2 === 'Requirements'" class="content">
        <span class="five-color">Requirements</span><br />визначає, що саме продукт повинен робити, які стандарти продуктивності та якості він має відповідати, і які регуляторні норми необхідно дотримуватися. <br> Цей розділ служить вихідною точкою для для розробки, тестування та відповідності ринковим і юридичним вимогам.
      </div>
      <div v-if="selectedItem2 === 'Functional_Requirements'" class="content">
        <span class="five-color">Functional Requirements</span><br />
        Мета описати конкретні функції, які продукт повинен виконувати, щоб відповідати потребам користувачів, визначеним у Concept. <br><br>
        <span class="sec-color">Список вимог:</span> <br> • Унікальний ідентифікатор (наприклад, FR-001).<br> • Опис функції.<br> • Пріоритет (наприклад, Must Have, Should Have, Nice to Have). <br> • Зв’язок із потребами користувачів (посилання на Concept → Target Audience).<br><br>
        <span class="sec-color">Деталі реалізації:</span> <br> • Як функція працює (наприклад, Chrome extension блокує URL через API).<br> • Взаємодія з іншими компонентами (наприклад, дашборд зберігає налаштування в Firestore).<br><br>
        <span class="sec-color">Критерії прийняття:</span> <br> • Умови, за яких функція вважається виконаною.<br><br>
        <span class="sec-color">Зв’язок із Scope:</span> <br> • Які функції входять у v1.0, а які відкладено (посилання на Concept → Scope).<br><br>
        <span class="sec-color">Посилання на Concept та Business Research:</span> <br> • Потреби з Concept → Target Audience або Business Research → Target Audience → Pain Points.<br> • Функції, натхненні конкурентами (Competitive Analysis → Direct Competitors).<br><br>
        <span class="green-color">Приклад:</span> <br>
        Functional Requirements:<br><br>

        FR-001: Site Blocking by Category<br>
            • ЯDescription: The Chrome extension must block websites based on predefined categories (e.g., adult content, social media) set by the user.<br>• ЯPriority: Must Have.<br>• ЯUser Need: Parents need to protect kids from harmful content; HR need to restrict non-work sites (Concept → Target Audience).<br>• ЯImplementation: Extension uses Chrome Web Extensions API to intercept and block URLs, retrieves categories from Firestore (Technical Architecture → System Architecture).<br>• ЯAcceptance Criteria:<br>&nbsp;  • ЯBlocks 100% of URLs in selected categories within 100 ms.<br>&nbsp;  • ЯUser can toggle categories on/off in real-time.<br>• ЯScope: Included in v1.0 (Concept → Scope).<br><br>
        FR-002: Custom URL Blocking<br>
            • ЯDescription: Users can add custom URLs to blocklist via the Vue.js dashboard.<br>• ЯPriority: Should Have.<br>• ЯUser Need: HR need to block specific sites (e.g., YouTube) (Business Research → Target Audience → Pain Points).<br>• ЯImplementation: Dashboard sends URLs to Firestore, extension syncs blocklist (Technical Architecture → Tech Stack).<br>• ЯAcceptance Criteria:<br>&nbsp;  • ЯCustom URLs saved in &lt;1s, applied in &lt;100 ms.<br>&nbsp;  • ЯSupports up to 1,000 URLs per user.<br>• ЯScope: Included in v1.0 (Concept → Scope).<br><br>
        FR-003: Usage Reports<br>
            • ЯDescription: Dashboard generates reports on blocked sites and browsing time.<br>• ЯPriority: Nice to Have.<br>• ЯUser Need: HR need analytics for employee productivity (Concept → Target Audience).<br>• ЯImplementation: Firebase Functions processes data, dashboard displays charts (Technical Architecture → System Architecture).<br>• ЯAcceptance Criteria:<br>&nbsp;  • ЯReports generated daily, accessible in dashboard.<br>&nbsp;  • ЯAccuracy within 99%.<br>• ЯScope: Included in v1.0 (Concept → Scope).<br><br>
        FR-004: User Authentication<br>
            • ЯDescription: Users log in via Google SSO to access dashboard and sync settings.<br>• ЯPriority: Must Have.<br>• ЯUser Need: Secure access to settings (Business Research → Target Audience → Pain Points).<br>• ЯImplementation: Firebase Authentication with Google provider (Technical Architecture → Tech Stack).<br>• ЯAcceptance Criteria:<br>&nbsp;  • ЯLogin completes in &lt;2s.<br>&nbsp;  • ЯSettings sync across devices in &lt;5s.<br>• ЯScope: Included in v1.0 (Concept → Scope).<br><br>
        Reference: User needs (Concept → Target Audience); competitive features (Competitive Analysis → Direct Competitors).<br><br>
        <span class="sec-color">Формат:</span> <br>• Нумеруйте вимоги (FR-001, FR-002) для зручного трекінгу в Jira або Trello (Company Guidelines → Development Workflow). <br>• Використовуйте дієслова дії ("дозволяти", "генерувати") для чіткості. <br>• Посилайтеся на Concept → Target Audience для обґрунтування функцій. <br>• Вимоги деталізуються в PRD і уточнюються під час планування спринтів (Agile).
      </div>
      <div v-if="selectedItem2 === 'Non_Functional'" class="content">
        <span class="five-color">Non Functional</span><br />
        Мета описати технічні та якісні характеристики продукту, які не пов’язані з конкретними функціями, але впливають на його продуктивність, безпеку, масштабованість тощо. <br><br>
        <span class="sec-color">Продуктивність:</span> Вимоги до швидкості та ефективності. <br><br>
        <span class="sec-color">Масштабованість:</span> Як система справлятиметься з ростом користувачів.  <br><br>
        <span class="sec-color">Безпека:</span> Вимоги до захисту даних. <br>  <br><br>
        <span class="sec-color">Сумісність:</span> Платформи та середовища.  <br><br>
        <span class="sec-color">Доступність:</span> Вимоги до UI/UX для інклюзивності. <br><br>
        <span class="sec-color">Надійність:</span>  <br><br>
        <span class="sec-color">Посилання на Business Research:</span> <br> Обґрунтуйте вимоги даними з Regulatory Impact (для безпеки) або Market Analysis (для сумісності).  <br><br>
        <span class="green-color">Приклад:</span> <br>
        NFR-001 (Performance): Фільтрація сайтів повинна відбуватися за &lt;100 мс для забезпечення плавного перегляду. <br>
        NFR-002 (Scalability): Система повинна підтримувати до 10,000 активних користувачів на Firebase free-tier (Resource → Servers → Firebase). <br>
        NFR-003 (Security): Усі дані користувачів шифруються (AES-256); підтримка 2FA для входу (Security → Data Privacy and Compliance). <br>
        NFR-004 (Compatibility): Розширення сумісне з Chrome v120+ (64.8–67.1% частки, Statistics & Data → Browser Usage); дашборд responsive для десктопів і планшетів (47.83% планшетів використовують Chrome, Device-Specific Statistics). <br>
        NFR-005 (Accessibility): Дашборд відповідає WCAG 2.1 (AA) для інклюзивності. <br>
        NFR-006 (Reliability): Система забезпечує 99.9% uptime на Firebase hosting.<br><br>
        <span class="sec-color">Формат:</span> <br>• Нумеруйте вимоги (NFR-001) для трекінгу. <br>• Використовуйте вимірювані метрики (наприклад, "&lt;100 мс") для перевірки. <br>• Посилайтеся на Resource → Servers для технічних обмежень і Security для вимог безпеки. <br>• Нефункціональні вимоги перевіряються через тести продуктивності (LoadRunner) і безпеки (OWASP), Lighthouse.
      </div>
      <div v-if="selectedItem2 === 'Regulatory_Requirements'" class="content">
        <span class="five-color">Regulatory Requirements</span><br />
        Мета визначити юридичні та регуляторні вимоги, яким продукт повинен відповідати. <br><br>
        <span class="sec-color">Регуляторні стандарти:</span> Закони та стандарти, які стосуються продукту. <br> <span class="green-color">Приклад:</span> <br> • GDPR (ЄС) для захисту даних користувачів (Business Research → Regulatory Impact).  <br> • CCPA (Каліфорнія, США) для прав на приватність. <br> • COPPA (США) для захисту дітей до 13 років.  <br><br>
        <span class="sec-color">Дотримання вимог:</span> Конкретні дії для відповідності. <br> <span class="green-color">Приклад:</span> <br> • Зберігання даних лише з явної згоди користувача. <br> • Можливість видалення даних на вимогу користувача.  <br><br>
        <span class="sec-color">Аудит і сертифікація:</span> Плани перевірки відповідності (наприклад, внутрішній аудит GDPR).  <br><br>
        <span class="sec-color">Посилання на Business Research:</span> Обґрунтуйте вимоги даними з Regulatory Impact і Target Audience → Pain Points (наприклад, 53% розширень мають доступ до чутливих даних, що викликає занепокоєння).  <br><br>

        <span class="green-color">Приклад:</span> <br>
        RR-001 (GDPR): Система повинна отримувати явну згоду користувачів на обробку даних (наприклад, історія перегляду) і надавати можливість видалення даних (Regulatory Impact). <br>
        RR-002 (CCPA): Користувачі в Каліфорнії мають право на доступ і видалення своїх даних; система повинна підтримувати ці запити протягом 45 днів. <br>
        RR-003 (COPPA): Якщо орієнтована на дітей до 13 років, система повинна отримувати згоду батьків для збору даних (Target Audience → User Personas). <br>
        RR-004 (Audit): Провести внутрішній аудит GDPR-сумісності перед релізом v1.0, використовуючи чекліст OWASP. <br>
        Market Insight: 53% розширень мають доступ до чутливих даних, що вимагає строгих заходів приватності (Statistics & Data → User Behavior).<br><br>
        <span class="sec-color">Формат:</span> <br>• Нумеруйте вимоги (RR-001) для чіткості. <br>• Використовуйте прості чеклісти (наприклад, GDPR Compliance Checklist) для перевірки. <br>• Посилайтеся на Business Research → Regulatory Impact для деталей регуляцій. <br>• Регуляторні вимоги перевіряються юридичним відділом або використовуються онлайн-ресурси (наприклад, GDPR.eu) або консультант для перевірки.
      </div>

      <div v-if="selectedItem2 === 'Roadmap_Improvements'" class="content">
        <span class="five-color">Roadmap & Improvements</span><br />Визначає план розвитку продукту, включаючи майбутні функції, оновлення та пріоритизацію завдань. Він допомагає команді (у вашому випадку — двом особам) зрозуміти, куди рухається проєкт, і як він буде вдосконалюватися після релізу.
      </div>
      <div v-if="selectedItem2 === 'Product_Roadmap'" class="content">
        <span class="five-color">Product Roadmap</span><br />
        Мета надати чіткий план розвитку продукту на коротко- та середньострокову перспективу, визначаючи ключові етапи (релізи) та функції, які будуть додані. Це допомагає синхронізувати команду та орієнтуватися на цілі, визначені в Concept. <br><br>
        <span class="sec-color">Часова шкала:</span> Основні етапи розвитку продукту з датами або періодами (наприклад, Q3 2025, Q4 2025). <br> <span class="green-color">Приклад:</span> <br> • v1.0: Базова версія з фільтрацією сайтів за категоріями.  <br> • v1.1: Додавання таймера для обмеження доступу. <br> • v2.0: Впровадження AI для аналізу контенту в реальному часі. <br><br>
        <span class="sec-color">Релізи та функції:</span> Конкретні функції або вдосконалення для кожного релізу, прив’язані до Requirements → Functional Requirements. <br> <span class="green-color">Приклад:</span> <br> • v1.0: Блокування сайтів, веб-дашборд (FR-001).  <br> • v1.1: Звіти для HR-менеджерів (FR-003). <br><br>
        <span class="sec-color">Цілі релізу:</span> Що кожен реліз має досягти. <br> <span class="green-color">Приклад:</span> <br> • "Залучити 5,000 користувачів" або "забезпечити GDPR-сумісність"). <br><br>
        <span class="sec-color">Залежності:</span> Технічні або ринкові залежності, які впливають на релізи. <br> <span class="green-color">Приклад:</span> <br> • Технічні: Наявність Firebase для дашборда (Resource → Servers → Firebase). <br> • Ринкові: Попит на безпеку (74% користувачів, Business Research → Statistics & Data → User Behavior). <br><br>
        <span class="sec-color">Посилання на Business Research:</span> Обґрунтуйте функції даними з Target Audience → Pain Points  <br> <span class="green-color">Приклад:</span> <br> • Батьків турбує безпека дітей <br> • Зростання попиту на AI <br><br>
        <span class="sec-color">Метрики успіху:</span> Як оцінюватимете успіх релізу. <br> <span class="green-color">Приклад:</span>  <br> • "10,000 установок у Chrome Web Store" або "90% позитивних відгуків"<br><br>
        <span class="green-color">Приклад:</span> <br>
        Q3 2025: v1.0 (Initial Release) <br>
        • Features: Website blocking by category (adult content, social media), web-based dashboard with one-click setup (FR-001, FR-005). <br>
        • Goal: Launch in Chrome Web Store, acquire 5,000 users. <br>
        • Dependencies: Firebase hosting (Resource → Servers → Firebase), Chrome compatibility (Statistics & Data → Browser Usage). <br>
        • Success Metrics: 5,000 installs, 80% user satisfaction (Concept → Success Metrics). <br> <br>
        Q4 2025: v1.1 (Feature Update) <br>
        • Features: Time-limiting feature, basic usage reports for HR (FR-002, FR-003). <br>
        • Goal: Increase user retention by 20%, target HR audience (Target Audience → User Personas). <br>
        • Dependencies: User feedback from v1.0 (Feedback Loop). <br>
        • Success Metrics: 10,000 active users, 50 HR clients. <br> <br>
        Q1 2026: v2.0 (AI Integration) <br>
        • Features: AI-powered real-time content filtering (Trends & Opportunities → Emerging Tech). <br>
        • Goal: Differentiate from competitors like NetNanny (Competitive Analysis → Competitor Profiles). <br>
        • Dependencies: AI API integration (Resource → AI). <br>
        • Success Metrics: 50,000 installs, 85% user satisfaction.<br><br>
        <span class="sec-color">Формат:</span> <br>• Використовуйте часові періоди (квартали) замість точних дат для гнучкості. <br>• Нумеруйте релізи (v1.0, v1.1) для відповідності Company Guidelines → Versioning. <br>• Посилайтеся на Requirements → Functional Requirements для функцій і Business Research для ринкових даних. <br>• Roadmap візуалізується в Jira або Confluence (наприклад, Gantt chart); для IRIS використовуйте таблицю на Vue.js-порталі або Trello.
      </div>
      <div v-if="selectedItem2 === 'Feature_Prioritization'" class="content">
        <span class="five-color">Feature Prioritization</span><br />
        Мета: Визначити, які функції чи вдосконалення реалізовувати першими, на основі їхньої цінності для користувачів, технічної складності та ринкових потреб. Це допомагає ефективно розподілити ресурси. <br><br>
        <span class="sec-color">Методика пріоритизації:</span> Метод, який використовується для оцінки функцій. <br> <span class="green-color">Приклад:</span> <br> • MoSCoW: Must have, Should have, Could have, Won’t have.  <br> • ICE: Impact (вплив на користувачів), Confidence (впевненість у успіху), Ease (легкість реалізації).  <br><br>
        <span class="sec-color">Список функцій:</span> Перелік функцій із Product Roadmap або нових ідей, із оцінкою за методикою. <br> <span class="green-color">Приклад:</span> <br> • Блокування сайтів (Must have, високий вплив).  <br> • AI-фільтрація (Could have, висока складність).  <br><br>
        <span class="sec-color">Критерії оцінки:</span> <br> <span class="green-color">Приклад:</span> <br> •Користь для користувача: На основі Target Audience → Pain Points (наприклад, батьків турбує безпека, 74% користувачів, Statistics & Data).  <br> • Ринковий потенціал: На основі Market Analysis → Browser Extensions (наприклад, попит на прості інструменти). <br>
        • Технічна складність: Оцінка ресурсів ([Resource → Servers](#], Resource → AI). <br> • Монетизація: Вплив на дохід (Monetization Models → Basic).  <br><br>
        <span class="sec-color">Процес перегляду:</span> Як і коли оновлюватимете пріоритети <br> <span class="green-color">Приклад:</span> <br> • Щомісяця, на основі зворотного зв’язку  <br><br>
        <span class="sec-color">Посилання на Business Research:</span> Обґрунтуйте пріоритети даними з Target Audience, Competitive Analysis або Trends & Opportunities.  <br><br>
        <span class="green-color">Приклад:</span> <br>
            Methodology: MoSCoW (Must have, Should have, Could have, Won’t have). <br> <br>
            Feature List: <br>
            Must have: <br>
            &nbsp;&nbsp; • Website blocking by category (FR-001): Critical for parents/HR, high user demand (74% prioritize safety, Statistics & Data → User Behavior), low complexity (uses existing APIs). <br>
            &nbsp;&nbsp; • Web-based dashboard (FR-005): Essential for usability, competitors like NetNanny have it (Competitive Analysis → Competitor Profiles). <br>
            Should have: <br>
            &nbsp;&nbsp; • Time-limiting feature (FR-002): Addresses parent needs (limit screen time, Target Audience → Pain Points), moderate complexity. <br>
            &nbsp;&nbsp; • Usage reports for HR (FR-003): Supports enterprise market, aligns with monetization (Monetization Models → Basic). <br>
            Could have: <br>
            &nbsp;&nbsp; • AI content filtering: High impact (differentiates from Qustodio, Competitive Analysis), but high complexity (Resource → AI). <br>
            &nbsp;&nbsp; • Won’t have (for v1.0): <br>
            &nbsp;&nbsp; • Mobile browser support: Out of scope due to Chrome focus (Concept → Scope). <br> <br>
            Review Process: Reassess priorities monthly based on user feedback from Chrome Web Store (Feedback Loop). <br> <br>
            Criteria: <br>
            • User Benefit: Addresses pain points (Target Audience → Pain Points). <br>
            • Market Fit: Aligns with browser extension trends (Market Analysis → Browser Extensions). <br>
            • Complexity: Feasible with Vue.js, Firebase (Resource → Servers). <br>
            • Monetization: Supports freemium model (Monetization Models → Basic). <br><br>
        <span class="sec-color">Формат:</span> <br>• Нумеруйте функції, посилаючись на Functional Requirements (FR-001). <br>• Оновлюйте пріоритети після кожного спринту (Company Guidelines → Development Workflow.
      </div>

      <div v-if="selectedItem2 === 'Monetization_Metrics'" class="content">
        <span class="five-color">Monetization & Metrics</span><br />Визначає, як проєкт зароблятиме гроші та як вимірюватиметься його успіх. Використовується для планування доходів, оцінки ринкового потенціалу та відстеження прогресу.
      </div>
      <div v-if="selectedItem2 === 'Business_Models'" class="content">
        <span class="five-color">Business Models</span><br />
        Мета описати, які моделі монетизації використовуватимуться для продукту, щоб забезпечити дохід, враховуючи ринкові тренди та потреби аудиторії. <br><br>
        <span class="sec-color">Типи моделей монетизації:</span> Перелік моделей, які підходять для продукту, з обґрунтуванням. <br> <span class="green-color">Приклад:</span> <br> • Freemium: Безкоштовна базова версія з платними преміум-функціями (наприклад, таймер, AI-фільтрація).  <br> • Subscription: Щомісячна/річна підписка за доступ до всіх функцій. <br> • One-time Purchase: Разова оплата за lifetime-доступ (менш популярна, але можлива). <br>
         • Partnerships: Співпраця з іншими сервісами (наприклад, інтеграція з антивірусами). <br><br>
        <span class="sec-color">Обґрунтування вибору:</span> Чому ці моделі підходять, з посиланнями на Business Research → Monetization Models. <br> <span class="green-color">Приклад:</span> <br> • 60% розширень використовують freemium, Market Analysis → Browser Extensions) і Target Audience → Pain Points (наприклад, батьки готові платити за безпеку, 74% цінують безпеку, Statistics & Data → User Behavior). <br><br>
        <span class="sec-color">Реалізація:</span> Як модель буде впроваджена. <br> <span class="green-color">Приклад:</span> <br> • Freemium: Базове блокування сайтів безкоштовно, преміум-функції (AI, звіти) за $5/міс. <br> • Інтеграція платіжних систем (Stripe, PayPal, Resource → Servers). <br><br>
        <span class="sec-color">Конкурентний аналіз:</span> Як моделі порівнюються з конкурентами <br> <span class="green-color">Приклад:</span> <br> • NetNanny — $39.99/рік, Qustodio — $54.95/рік, Competitive Analysis → Competitor Profiles. <br><br>
        <span class="sec-color">Посилання на Business Research:</span> Використовуйте дані з Trends & Opportunities  <br> <span class="green-color">Приклад:</span> <br> • Зростання попиту на підписку і Monetization Models → Basic для обґрунтування. <br><br>
        <span class="green-color">Приклад:</span> <br>
        Freemium:
        • Description: Free basic site blocking (predefined categories); premium features (time limits, AI filtering, reports) for $5/month. <br>
        • Justification: 60% of browser extensions use freemium, high user adoption rate (Market Analysis → Browser Extensions); parents value safety (74%, Statistics & Data → User Behavior). <br>
        • Implementation: Stripe for payments (Resource → Servers), dashboard for subscription management. <br> <br>
        Subscription: <br>
        • Description: Annual plan at $50/year (17% discount vs. monthly). <br>
        • Justification: Aligns with competitors like NetNanny ($39.99/year, Competitive Analysis → Competitor Profiles); HR prefers annual plans (Target Audience → User Personas). <br>
        • Implementation: Auto-renewal via Stripe, email reminders. <br> <br>
        Partnerships: <br>
        • Description: Integration with antivirus software (e.g., Norton) for cross-promotion. <br>
        • Justification: Expands reach, aligns with security trend (Trends & Opportunities → Emerging Tech). <br>
        • Implementation: API integration, revenue-sharing model. <br> <br>
        Market Fit: Freemium drives adoption, subscriptions ensure recurring revenue (Monetization Models → Basic).<br><br>
        <span class="sec-color">Формат:</span> <br>• Вибирайте 2–3 моделі для простоти реалізації (наприклад, freemium + subscription). <br>• Посилайтеся на Business Research → Monetization Models і Competitive Analysis для даних. <br>• моделі тестуються через A/B тестування (наприклад, різні ціни).
      </div>
      <div v-if="selectedItem2 === 'KPIs'" class="content">
        <span class="five-color">KPIs</span><br />
        Мета визначити метрики, які вимірюватимуть успіх продукту з точки зору монетизації та користувацької активності, щоб відстежувати прогрес. <br><br>
        <span class="sec-color">Метрики монетизації:</span> <br> • Monthly Recurring Revenue (MRR): Місячний дохід від підписок. <br> • Conversion Rate: Відсоток користувачів, які переходять із freemium на преміум. <br> • Average Revenue Per User (ARPU): Середній дохід на користувача. <br><br>
        <span class="sec-color">Метрики залучення:</span><br> • Active Users: Кількість активних користувачів (щоденно/місячно). <br> • Retention Rate: Відсоток користувачів, які повертаються через місяць. <br>  • Installs: Кількість установок у Chrome Web Store.  <br><br>
        <span class="sec-color">Метрики якості:</span> <br> • User Satisfaction: Середній рейтинг у Chrome Web Store (ціль: 4.5/5). <br> • Churn Rate: Відсоток користувачів, які скасовують підписку. <br><br>
        <span class="sec-color">Частота вимірювання:</span> Як часто відстежуватимете. <br> <span class="green-color">Приклад:</span> <br> • Щотижня для Installs, щомісяця для MRR. <br><br>
        <span class="sec-color">Інструменти:</span> Які інструменти використовуватимете. <br> <span class="green-color">Приклад:</span> <br> • Google Analytics, Mixpanel, Firebase Analytics, Resource → Servers → Firebase <br><br>
        <span class="sec-color">Посилання на Business Research:</span> Обґрунтуйте метрики даними з Target Audience <br><br>
        <span class="green-color">Приклад:</span> <br>
        Monetization Metrics:<br>
        • MRR: Target $5,000 by Q4 2025 (1,000 premium users at $5/month).<br>
        • Conversion Rate: 5% freemium users upgrade to premium (industry avg. 3–7%, Market Analysis → Browser Extensions).<br>
        • ARPU: $0.50 across all users (free + premium).<br><br>
        Engagement Metrics:<br>
        • Monthly Active Users (MAU): 10,000 by Q4 2025 (Concept → Success Metrics).<br>
        • Retention Rate: 80% after 30 days (Target Audience → Pain Points).<br>
        • Installs: 50,000 by Q1 2026 (Statistics & Data → Market Growth).<br><br>
        Quality Metrics:<br>
        • User Satisfaction: 4.5/5 rating in Chrome Web Store.<br>
        • Churn Rate: &lt;10% monthly for premium users.<br><br>
        Measurement: Weekly Installs/MAU via Firebase Analytics; monthly MRR/Conversion via Stripe (Resource → Servers → Firebase).<br><br>
        Market Fit: High retention aligns with user need for safety (74%, Statistics & Data → User Behavior).<br><br>
        <span class="sec-color">Формат:</span> <br>• Вибирайте 5–7 метрик для простоти відстеження. <br>• Посилайтеся на Concept → Success Metrics для узгодженості. <br>• KPI відстежуються в Mixpanel або Tableau.
      </div>
      <div v-if="selectedItem2 === 'Pricing_Strategy'" class="content">
        <span class="five-color">Pricing Strategy</span><br />
        Мета визначити, як ціноутворюватимете продукт, щоб максимізувати дохід і конкурувати на ринку, враховуючи аудиторію та конкурентів. <br><br>
        <span class="sec-color">Цінові плани:</span>Деталі для кожної моделі монетизації. <br> <span class="green-color">Приклад:</span> <br> • Freemium: Безкоштовно з базовими функціями; $5/міс за преміум. <br> • Subscription: $50/рік (17% знижка). <br><br>
        <span class="sec-color">Обґрунтування цін:</span> Чому обрано такі ціни, з посиланнями на Competitive Analysis і Target Audience <br> <span class="green-color">Приклад:</span> <br> • Competitive Analysis: NetNanny — $39.99/рік. <br> • Target Audience: батьки готові платити за безпеку.  <br><br>
        <span class="sec-color">Цінові експерименти:</span> Плани тестування цін <br> <span class="green-color">Приклад:</span> <br> • A/B тестування $5/міс vs. $7/міс <br><br>
        <span class="sec-color">Знижки та акції:</span> Стратегія залучення. <br> <span class="green-color">Приклад:</span> <br> • 30-денна пробна версія, знижка 20% на річний план <br><br>
        <span class="sec-color">Платіжні системи::</span> Як оброблятимете платежі. <br> <span class="green-color">Приклад:</span> <br> • Stripe, PayPal <br><br>
        <span class="sec-color">Посилання на Business Research:</span> Використовуйте Monetization Models → Basic і Market Analysis для ринкових даних. <br><br>
        <span class="green-color">Приклад:</span> <br>
        Plans: <br>
        • Freemium: Free basic blocking; $5/month for premium (time limits, AI, reports). <br>
        • Subscription: $50/year (17% discount vs. monthly). <br> <br>
        Justification: Competitive with NetNanny ($39.99/year, Competitive Analysis → Competitor Profiles); parents/HR willing to pay for safety (74%, Statistics & Data → User Behavior). <br> <br>
        Experiments: A/B test $5/month vs. $7/month in Q4 2025 to optimize conversion (Monetization Models → Basic). <br> <br>
        Promotions: 30-day free premium trial; 20% discount on annual plan for first 1,000 users. <br> <br>
        Payment Systems: Stripe for subscriptions, PayPal for one-time payments (Resource → Servers). <br> <br>
        Market Fit: Affordable pricing aligns with small business HR budgets (Target Audience → User<br><br>
        <span class="sec-color">Формат:</span> <br>• Посилайтеся на Competitive Analysis для порівняння цін. <br>• ціни тестуються через аналітику Mixpanel, Stripe Analytics.
      </div>
      <div v-if="selectedItem2 === 'Revenue_Projections'" class="content">
        <span class="five-color">Revenue Projections</span><br />
        Спрогнозувати потенційний дохід від продукту на основі моделей монетизації, цінової стратегії та ринкових даних, щоб оцінити фінансову життєздатність. <br><br>
        <span class="sec-color">Прогнози доходу:</span>Очікуваний дохід за періодами (наприклад, Q3 2025, Q4 2025), з розбивкою за моделями. <br> <span class="green-color">Приклад:</span> <br> • Q4 2025: $5,000 MRR (1,000 premium users × $5/міс). <br> • Q1 2026: $15,000 MRR (3,000 premium users). <br><br>
        <span class="sec-color">Припущення:</span> На чому базуються прогнози. <br> <span class="green-color">Приклад:</span> <br> • 5% conversion rate (індустріальна норма, Market Analysis → Browser Extensions). <br> • 50,000 installs by Q1 2026 (Statistics & Data → Market Growth).  <br><br>
        <span class="sec-color">Витрати:</span> Основні витрати, які впливають на чистий дохід. <br> <span class="green-color">Приклад:</span> <br> • A/B тестування $5/міс vs. $7/міс <br><br>
        <span class="sec-color">Сценарії:</span> Оптимістичний, базовий, песимістичний сценарії доходу. <br> <span class="green-color">Приклад:</span> <br> • Оптимістичний: 7% conversion, $20,000 MRR. <br> • Базовий: 5% conversion, $15,000 MRR.<br> • Песимістичний: 3% conversion, $7,500 MRR.<br><br>
        <span class="sec-color">Посилання на Business Research:</span> Використовуйте Statistics & Data → Market Growth і Target Audience для обґрунтування прогнозів. <br><br>
        <span class="green-color">Приклад:</span> <br>
        Q4 2025:<br>
        • Revenue: $5,000 MRR (1,000 premium users × $5/month, 5% conversion from 20,000 installs).<br>
        • Costs: $200/month (Firebase hosting, Stripe fees, Resource → Servers).<br>
        • Net: $4,800/month.<br><br>
        Q1 2026:<br>
        • Revenue: $15,000 MRR (3,000 premium users × $5/month, 6% conversion from 50,000 installs).<br>
        • Costs: $500/month (increased Firebase usage).<br>
        • Net: $14,500/month.<br><br>
        Assumptions:<br>
        • 5–6% conversion rate (Market Analysis → Browser Extensions).<br>
        • 50,000 installs by Q1 2026 (Statistics & Data → Market Growth).<br>
        • 80% retention (KPIs).<br><br>
        Scenarios:<br>
        • Optimistic: 7% conversion, $20,000 MRR.<br>
        • Base: 5% conversion, $15,000 MRR.<br>
        • Pessimistic: 3% conversion, $7,500 MRR.<br><br>
        Market Fit: High demand for security drives adoption (Statistics & Data → User Behavior).<br><br>
        <span class="sec-color">Формат:</span> <br>• Використовуйте реалістичні припущення, базуючись на Business Research. <br> • Враховуйте витрати для точних прогнозів (Firebase, Stripe). <br> • Прогнози створюються в Excel/Tableau, Google Sheets або таблицю на порталі.
      </div>

      <div v-if="selectedItem2 === 'Competitive_Analysis'" class="content">
        <span class="five-color">Competitive Analysis</span><br />Розділ Competitive Analysis потрібен, щоб оцінити позицію продукту на ринку відносно конкурентів, визначити їхні сильні та слабкі сторони, а також сформулювати унікальну цінність продукту.
      </div>
      <div v-if="selectedItem2 === 'Direct_Competitors'" class="content">
        <span class="five-color">Direct Competitors</span><br />
        Мета визначити основних конкурентів, які пропонують схожі продукти чи послуги для тієї ж цільової аудиторії, щоб зрозуміти їхні пропозиції, ринкову позицію та стратегії. <br><br>
        <span class="sec-color">Список конкурентів:</span> Назви компаній/продуктів, які є прямими конкурентами. <br><br>
        <span class="sec-color">Опис продукту:</span> Короткий огляд їхньої пропозиції: <br> <span class="green-color">Приклад:</span> <br> • Основні функції. <br> • Платформи. <br> • Цільова аудиторія  <br><br>
        <span class="sec-color">Ринкова позиція:</span> <br> <span class="green-color">Приклад:</span> <br> • Частка ринку або популярність (наприклад, кількість установок у Chrome Web Store, якщо доступно). <br> • Географічний фокус (США, ЄС).<br> • Цінова категорія (преміум, середній сегмент, бюджетний). <br><br>
        <span class="sec-color">Маркетингові стратегії:</span> <br> <span class="green-color">Приклад:</span> <br> • Канали просування (SEO, соціальні мережі, партнерства). <br> • Унікальні акценти в рекламі (наприклад, "найпростіший інтерфейс").<br><br>
        <span class="sec-color">Сильні та слабкі сторони:</span> <br> <span class="green-color">Приклад:</span> <br> • Сильні: Наприклад, NetNanny має сильний бренд. <br> • Слабкі: Наприклад, Qustodio складний у налаштуванні.<br><br>
        <span class="sec-color">Дані для аналізу:</span> <br> <span class="green-color">Приклад:</span> <br> • Відгуки користувачів (Chrome Web Store, Trustpilot). <br> • SEO-аналітика (за допомогою MozBar, Business Research → Resource → SEO Tools). <br> • Соціальні мережі (аналіз контенту, залучення, Business Research → Statistics & Data → Social Media).<br><br>
        <span class="sec-color">Посилання на Business Research:</span> Використовуйте Market Analysis → Browser Extensions, Competitive Analysis → Competitor Profiles, і Statistics & Data → User Behavior (наприклад, 53% розширень мають доступ до чутливих даних, що викликає занепокоєння, Statistics & Data) для обґрунтування. <br><br>
        <span class="green-color">Приклад:</span> <br>
        Direct Competitors:<br>
        NetNanny:<br>
        • Product: Parental control software with site blocking, time limits, and reports.<br>
        • Platforms: Desktop, mobile, no browser extension.<br>
        • Audience: Parents (30–50, US-focused).<br>
        • Market Position: Premium segment, $39.99/year, strong brand (est. 1998).<br>
        • Marketing: SEO, parenting blogs, social media (Facebook, 50K followers, Statistics & Data → Social Media).<br>
        • Strengths: Established brand, comprehensive features.<br>
        • Weaknesses: No browser extension, complex setup (Competitive Analysis → Competitor Profiles).<br><br>
        Qustodio:<br>
        • Product: Cross-platform monitoring with AI filtering, reports.<br>
        • Platforms: Desktop, mobile, Chrome extension.<br>
        • Audience: Parents, schools (EU/US).<br>
        • Market Position: Mid-range, $54.95/year, 10K+ installs in Chrome Web Store.<br>
        • Marketing: SEO, YouTube tutorials, partnerships with schools.<br>
        • Strengths: AI features, multi-platform.<br>
        • Weaknesses: High price, UI complexity (Market Analysis → Browser Extensions).<br><br>
        Bark:<br>
        • Product: AI-based monitoring for social media and browsing.<br>
        • Platforms: Mobile, Chrome extension.<br>
        • Audience: Parents (US-focused).<br>
        • Market Position: Premium, $14/month, 5K+ installs.<br>
        • Marketing: Social media ads (Instagram, 20K followers), influencer partnerships.<br>
        • Strengths: Strong AI, social media focus.<br>
        • Weaknesses: Limited site-blocking features, high cost.<br><br>
        Data Sources: Chrome Web Store reviews, MozBar for SEO (Resource → SEO Tools), Trustpilot ratings (Statistics & Data → User Behavior).<br><br>
        <span class="sec-color">Формат:</span> <br>• Обмежтеся 2–4 конкурентами для простоти аналізу (NetNanny, Qustodio, Bark). <br> • Використовуйте SEO-інструменти (MozBar, Ahrefs, Resource → SEO Tools) для аналізу сайтів конкурентів. <br> • Аналізуйте відгуки в Chrome Web Store для слабких сторін (наприклад, скарги на складність Qustodio). <br>
         • Посилайтеся на Business Research → Competitive Analysis для загальних даних і Market Analysis для ринкових трендів.<br> • Конкуренти аналізуються щорічно через інструменти, як Semrush, MozBar.
      </div>
      <div v-if="selectedItem2 === 'SWOT_Analysis'" class="content">
        <span class="five-color">SWOT Analysis</span><br />
        Мета провести аналіз сильних і слабких сторін продукту та конкурентів, а також оцінити можливості й загрози на ринку, щоб визначити стратегічні пріоритети. <br><br>
        <span class="sec-color">Strengths:</span> <br> <span class="green-color">Приклад:</span> <br> • Для Our product: Унікальні переваги продукту (наприклад, простота one-click налаштування, GDPR-сумісність).<br> • Для конкурентів: Їхні сильні сторони з Direct Competitors (наприклад, сильний бренд NetNanny).<br><br>
        <span class="sec-color">Weaknesses:</span> <br> <span class="green-color">Приклад:</span> <br> • Для Our product: Обмеження продукту (наприклад, підтримка лише Chrome).<br> • Для конкурентів: Слабкості конкурентів (наприклад, складність UI у Qustodio).<br><br>
        <span class="sec-color">Opportunities:</span> <br> <span class="green-color">Приклад:</span> <br> • Ринкові тренди або ніші, які можна використати (наприклад, зростання попиту на AI-фільтрацію, Trends & Opportunities → Emerging Tech).<br> • Слабкості конкурентів, які можна обернути на свою користь (наприклад, простіший UI, ніж у Qustodio).<br><br>
        <span class="sec-color">Threats:</span> <br> <span class="green-color">Приклад:</span> <br> • Ринкові ризики (наприклад, нові конкуренти, зміни в політиці Chrome).<br> • Сильні сторони конкурентів (наприклад, більший бюджет NetNanny на маркетинг).<br><br>
        <span class="green-color">Приклад:</span> <br>
        Direct Competitors:<br>
        NetNanny:<br>
        • Strengths: Strong brand, comprehensive features, US market dominance (Competitive Analysis → Competitor Profiles).<br>
        • Weaknesses: No browser extension, complex setup (Market Analysis → Browser Extensions).<br>
        • Opportunities: Expand to browser extensions, leverage brand.<br>
        • Threats: Losing market to simpler tools like UserControl.<br><br>
        <span class="sec-color">Формат:</span> <br>• Створюйте окрему SWOT-матрицю лише для Our product, а для конкурентів надайте короткий текстовий опис, щоб уникнути перевантаження. <br> • Використовуйте дані з Direct Competitors для заповнення SWOT конкурентів. <br> •Посилайтеся на Trends & Opportunities для можливостей і Statistics & Data → Regulatory Impact для загроз. <br>
         • SWOT візуалізується в Confluence або Markdown-таблицю на Internal-portal.
      </div>
      <div v-if="selectedItem2 === 'USP'" class="content">
        <span class="five-color">Unique Selling Proposition (USP)</span><br />
        Мета сформулювати унікальну ціннісну пропозицію UserControl, яка відрізнить продукт від конкурентів і приверне увагу цільової аудиторії. <br><br>
        <span class="sec-color">Основна пропозиція:</span> Коротке формулювання USP (1–2 речення), яке відповідає на питання: "Чому користувачі оберуть NameProject замість конкурентів? <br> <span class="green-color">Приклад:</span> <br> • "Найпростіше AI-розширення для батьківського та корпоративного контролю з one-click налаштуванням і GDPR-сумісністю."<br><br>
        <span class="sec-color">Ключові диференціатори:</span> Унікальні функції чи переваги. Порівняння з конкурентами <br> <span class="green-color">Приклад:</span> <br> • Простота UI, AI-фільтрація, низька ціна.<br> • Простіший за Qustodio, дешевший за Bark.<br><br>
        <span class="sec-color">Цільова аудиторія:</span> Для кого цей USP актуальний (батьки, HR, Concept → Target Audience). <br> <span class="green-color">Обґрунтування:</span> <br> • Чому USP відповідає потребам аудиторії (наприклад, 74% батьків цінують безпеку, Statistics & Data → User Behavior).<br> • Чому він сильніший за конкурентів (наприклад, NetNanny не має браузерного розширення, Competitive Analysis → Competitor Profiles).<br><br>
        <span class="sec-color">Маркетингове повідомлення:</span> Як USP використовуватиметься в просуванні <br> <span class="green-color">Приклад:</span> <br> • Слоган для Chrome Web Store: "Control the web with one click".<br><br>
        <span class="sec-color">Посилання на Business Research:</span> Використовуйте Target Audience → Pain Points, Market Analysis → Browser Extensions, і Competitive Analysis → Competitor Profiles для обґрунтування. <br><br>
        <span class="green-color">Приклад:</span> <br>
        Unique Selling Proposition (USP):<br><br>
        Proposition: UserControl is the simplest AI-powered Chrome extension for parental and corporate control, offering one-click setup and GDPR/CCPA compliance at an affordable $5/month.<br><br>
        Differentiators:<br>
            • Simpler UI than Qustodio (fewer steps to configure, Competitive Analysis → Competitor Profiles).<br>
            • Browser-focused vs. NetNanny’s desktop software (Market Analysis → Browser Extensions).<br>
            • Affordable ($5/month vs. Bark’s $14/month, Monetization & Metrics → Pricing Strategy).<br>
            • AI filtering planned for v2.0 (Roadmap & Improvements → Product Roadmap).<br><br>
        Target Audience: Parents (30–50, US/EU), HR managers (25–45, EU), seeking easy-to-use safety tools (Concept → Target Audience).<br><br>
        Justification: 74% of parents prioritize safety, 68% value extension support (Statistics & Data → Browser Usage); competitors’ complex UI is a pain point (Target Audience → Pain Points).<br><br>
        Marketing Message: "Control the web with one click – safe, simple, affordable." (Monetization & Metrics → Business Models).<br><br>
        <span class="sec-color">Формат:</span> <br>• Формулюйте USP коротко і конкретно, уникаючи загальних фраз (наприклад, "найкращий сервіс"). <br> • Порівнюйте з конкурентами, використовуючи дані з Direct Competitors і SWOT Analysis. <br> • Тестуйте USP через відгуки в Chrome Web Store після запуску (Company Guidelines → Development Workflow → Feedback Loop).
      </div>

      <div v-if="selectedItem2 === 'Infrastructure_Access'" class="content">
        <span class="five-color">Infrastructure & Access</span><br /> Описує технічну інфраструктуру, необхідну для роботи продукту (NameProject), а також політики та процеси, що забезпечують безпечний доступ до серверів і даних для хостингу та управління даними, цей розділ є критично важливим, щоб гарантувати безпеку, відповідність регуляторним вимогам.
      </div>
      <div v-if="selectedItem2 === 'Server_Access'" class="content">
        <span class="five-color">Server Access</span><br />
        Мета визначити, які сервери або хмарні сервіси використовуються для проєкту, хто має до них доступ, і як цей доступ налаштований, щоб забезпечити безпечну та ефективну роботу продукту. <br><br>
        <span class="sec-color">Список серверів/сервісів:</span> Перелік хмарних або фізичних серверів, які використовуються для проєкту. <br> <span class="green-color">Приклад:</span> <br> • Назва сервісу (наприклад, Firebase Firestore, Firebase Hosting). <br> • Призначення (наприклад, хостинг дашборда, зберігання даних користувачів).<br><br>
        <span class="sec-color">Технічні деталі доступу:</span> <br> • URL або ендпоінти для адмін-консолей (наприклад, Firebase Console URL).<br> • Протоколи доступу (HTTPS, SSH, API-токени). <br> • Типи автентифікації (наприклад, Google SSO для Firebase).<br><br>
        <span class="sec-color">Ролі доступу:</span>  <br> • Хто з команди має доступ<br> • Рівні доступу.<br><br>
        <span class="sec-color">Обмеження доступу:</span> <br> • Географічні обмеження (наприклад, доступ лише з певних IP, якщо налаштовано). <br> • Часові обмеження (наприклад, доступ лише в робочі години, якщо застосовується).<br><br>
        <span class="sec-color">Інструменти управління:</span> <br> • Як керувати доступом (наприклад, через Firebase IAM). <br> • Де зберігаються облікові дані.<br><br>
        <span class="sec-color">Посилання на Resource та Company Guidelines:</span> <br> • Деталі серверів із Resource → Servers → Firebase (наприклад, free-tier ліміти). <br> • Загальні політики доступу з Company Guidelines → Security → Secure Coding Practices <br><br>
        <span class="green-color">Приклад:</span> <br>
        Server Access:<br><br>
        Services Used:<br>
            • Firebase Firestore: Storage for user data (blocked sites, preferences) (Resource → Servers → Firebase).<br>
            • Firebase Hosting: Hosting for Vue.js dashboard (Resource → Servers → Firebase).<br>
            • AI API (planned for v2.0): Real-time content filtering (Resource → AI).<br><br>
        Access Details:<br>
            • Firebase Console: Accessed via https://console.firebase.google.com, Google SSO.<br>
            • API Tokens: Generated in Firebase, stored in 1Password (Resource → Security Tools).<br>
            • Protocols: HTTPS for console, REST API for programmatic access.<br><br>
        Access Roles:<br>
            • Person A (email: personA@iris-man.com): Owner role, full access to Firebase.<br>
            • Person B (email: personB@iris-man.com): Editor role, access to Firestore and Hosting.<br><br>
        Restrictions:<br>
            • Access limited to team IP addresses (configured in Firebase IAM).<br>
            • 2FA required for all accounts (Company Guidelines → Security → Data Privacy and Compliance).<br><br>
        Management Tools:<br>
            • Firebase IAM for role assignments.<br>
            • 1Password for credential storage (Resource → Security Tools).<br><br>
        Reference: Firebase free-tier limits (10K users, Resource → Servers → Firebase); secure access practices (Company Guidelines → Security → Secure Coding Practices).<br><br>
        <span class="sec-color">Формат:</span> <br>• Вказуйте лише проєктно-специфічні сервіси (Firebase для NameProject), уникаючи загальних деталей із Resource → Servers. <br> • Використовуйте унікальні ідентифікатори для ролей (email), але не розкривайте паролі чи токени. <br> • Посилайтеся на Resource → Servers для технічних лімітів і Company Guidelines → Security для стандартів.
      </div>
      <div v-if="selectedItem2 === 'Security_Policies'" class="content">
        <span class="five-color">Security Policies</span><br />
        Мета описати політики безпеки, які застосовуються до інфраструктури та даних проєкту, щоб забезпечити захист користувацької інформації та відповідність регуляторним вимогам. <br><br>
        <span class="sec-color">Політики захисту даних:</span> <br> • Шифрування даних (наприклад, AES-256 для даних у Firestore).<br> • Анонімізація даних (наприклад, історія перегляду не прив’язується до особи без згоди). <br><br>
        <span class="sec-color">Відповідність регуляціям:</span> <br> • GDPR: Згода користувачів на обробку даних, право на видалення (Requirements → Regulatory → RR-001).<br> • CCPA: Доступ до даних для користувачів у Каліфорнії (Requirements → Regulatory → RR-002).<br> • COPPA: Згода батьків для дітей до 13, якщо актуально (Requirements → Regulatory → RR-003).<br><br>
        <span class="sec-color">Безпека сервісів:</span> <br> • Налаштування безпеки Firebase (наприклад, Firestore rules для обмеження доступу).<br> • Захист від атак (DDoS protection через Firebase, Resource → Servers → Firebase).<br><br>
        <span class="sec-color">Реагування на інциденти:</span> <br> • Процес повідомлення про порушення (наприклад, повідомлення користувачів протягом 72 годин для GDPR).<br> • Контакт для зв’язку (наприклад, email: security@iris.com).<br><br>
        <span class="sec-color">Аудит безпеки:</span> <br> • Періодичність перевірок (наприклад, щоквартальний аудит Firebase IAM).<br> • Інструменти (наприклад, OWASP ZAP для тестування, Resource → Security Tools). <br><br>
        <span class="sec-color">Посилання на Company Guidelines та Requirements:</span> <br> • Загальні політики з Company Guidelines → Security → Data Privacy and Compliance.<br> • Регуляторні вимоги з Requirements → Regulatory (Requirements → Regulatory → RR-001).<br><br>

        <span class="green-color">Приклад:</span> <br>
        Security Policies:<br><br>
        Data Protection:<br>
            • All user data (blocked sites, usage reports) encrypted with AES-256 in Firestore (Requirements → Non-Functional → NFR-003).<br>
            • Browsing history anonymized unless explicit consent given (Requirements → Regulatory → RR-001).<br><br>
        Regulatory Compliance:<br>
            • GDPR: Explicit user consent for data processing, data deletion option in dashboard (Requirements → Regulatory → RR-001).<br>
            • CCPA: Data access/deletion requests processed within 45 days (Requirements → Regulatory → RR-002).<br>
            • COPPA: Parental consent for users under 13, if targeting kids (Requirements → Regulatory → RR-003).<br><br>
        Service Security:<br>
            • Firestore rules restrict access to authenticated users only (Resource → Servers → Firebase).<br>
            • Firebase DDoS protection enabled (Company Guidelines → Security → Secure Coding Practices).<br><br>
        Incident Response:<br>
            • Data breaches reported to users within 72 hours (GDPR).<br>
            • Contact: security@iris-man.com.<br><br>
        Security Audit:<br>
            • Quarterly Firebase IAM review, OWASP ZAP scans (Resource → Security Tools).<br>
            • Pre-launch GDPR audit (Requirements → Regulatory → RR-004).<br><br>
        Team Training:<br>
            • Annual review of secure coding practices (Company Guidelines → Security → Secure Coding Practices).<br><br>
        Reference: GDPR/CCPA policies (Requirements → Regulatory); Firebase security setup (Resource → Servers → Firebase).<br><br>
        <span class="sec-color">Формат:</span> <br>• Фокусуйтеся на проєктно-специфічних політиках (Firebase для UserControl), уникаючи повторення Company Guidelines → Security. <br> • Вказуйте конкретні інструменти (OWASP ZAP) і регуляції (GDPR). <br> • Політики безпеки  деталізуються в SOC 2 або ISO 27001. Або прості чеклісти GDPR.eu.
      </div>
      <div v-if="selectedItem2 === 'Access_Management_Process'" class="content">
        <span class="five-color">Access Management Process</span><br />
        Мета описати процес надання, зміни та скасування доступу до інфраструктури проєкту, щоб забезпечити контроль і безпеку.<br><br>
        <span class="sec-color">Процес надання доступу:</span> <br> • Хто може запросити доступ.<br> • Як подавати запит (наприклад, через email до Owner).<br> • Схвалення (наприклад, Owner підтверджує через Firebase IAM).<br><br>
        <span class="sec-color">Типи доступу:</span> <br> • Ролі та дозволи (наприклад, Owner: повний доступ; Editor: частковий).<br> • Обмеження за функціями (наприклад, Editor не може змінювати billing).<br><br>
        <span class="sec-color">Процес зміни доступу:</span> <br> • Як оновлювати ролі (наприклад, підвищення з Editor до Owner).<br> • Інструменти (Firebase IAM, Resource → Servers → Firebase).<br><br>
        <span class="sec-color">Процес скасування доступу:</span> <br> • Як видаляти доступ (наприклад, при зміні ролей чи звільненні).<br> • Терміни (наприклад, негайно після запиту).<br><br>
        <span class="sec-color">Логування та аудит:</span> <br> • Як відстежувати дії (наприклад, Firebase Audit Logs).<br> • Періодичність перевірки логів (наприклад, щомісяця).<br><br>
        <span class="sec-color">Відповідальність:</span> <br> • Хто керує процесом (наприклад, Person A як Owner).<br><br>
        <span class="sec-color">Посилання на Company Guidelines та Resource:</span> <br> • Процеси з Company Guidelines → Team Collaboration → Onboarding Process.<br> • Інструменти з Resource → Servers → Firebase і Resource → Security Tools.<br><br>
        <span class="green-color">Приклад:</span> <br>
        Access Management Process:<br><br>
        Granting Access:<br>
            • Request: Team member emails Person A (Owner, personA@iris-man.com).<br>
            • Approval: Person A assigns role in Firebase IAM (Owner/Editor).<br>
            • Setup: 2FA enabled, credentials stored in 1Password (Resource → Security Tools).<br><br>
        Access Types:<br>
            • Owner: Full access to Firebase (Person A).<br>
            • Editor: Access to Firestore/Hosting, no billing changes (Person B).<br><br>
        Modifying Access:<br>
            • Role changes requested via email, updated in Firebase IAM.<br>
            • Example: Promoting Person B to Owner requires Person A approval.<br><br>
        Revoking Access:<br>
            • Immediate removal in Firebase IAM upon request or role change.<br>
            • Credentials deleted from 1Password (Resource → Security Tools).<br><br>
        Logging & Audit:<br>
            • Firebase Audit Logs reviewed monthly for unauthorized access.<br>
            • Tool: Firebase Console (Resource → Servers → Firebase).<br><br>
        Responsibility: Person A manages access (Company Guidelines → Team Collaboration → Onboarding Process).<br><br>
        Reference: Firebase IAM setup (Resource → Servers → Firebase); secure onboarding (Company Guidelines → Team Collaboration).<br><br>
        <span class="sec-color">Формат:</span> <br>• Вкажіть чіткі ролі (Owner, Editor) і інструменти (1Password).<br> • Посилайтеся на Company Guidelines → Team Collaboration для загальних процесів.<br> • IAM-система (Okta); Firebase IAM
      </div>

      <div v-if="selectedItem2 === 'Technical_Architecture'" class="content">
        <span class="five-color">Technical Architecture</span><br /> описує технічну основу продукту (UserControl), включаючи структуру системи, технологічний стек і процес розгортання. Розділ є ключовим для забезпечення масштабованості, безпеки та ефективної розробки.
      </div>
      <div v-if="selectedItem2 === 'System_Architecture'" class="content">
        <span class="five-color">System Architecture</span><br />
        Мета надати огляд архітектури системи, описуючи компоненти, їхню взаємодію та потоки даних, щоб забезпечити розуміння, як продукт функціонує на технічному рівні.<br><br>
        <span class="sec-color">Компоненти системи:</span> Перелік основних модулів або сервісів, які складають продукт. <br> • Браузерне розширення (Chrome extension).<br> • Бекенд (Firebase Firestore/Functions).<br> • AI API (планується для v2.0, Roadmap & Improvements → Product Roadmap).<br><br>
        <span class="sec-color">Схема взаємодії:</span> <br> • Як компоненти комунікують (наприклад, розширення надсилає запити до Firestore через REST API).<br> • Протоколи (HTTPS, WebSocket, якщо застосовується).<br> • Потоки даних (наприклад, користувач налаштовує фільтри в дашборді → дані зберігаються в Firestore → розширення блокує сайти).<br><br>
        <span class="sec-color">Архітектурний підхід:</span> <br> • Тип архітектури (наприклад, serverless для Firebase, client-side для розширення).<br> • Принципи дизайну (наприклад, loosely coupled компоненти, Company Guidelines → Development Workflow → Software Design Principles).<br><br>
        <span class="sec-color">Масштабованість і продуктивність:</span> <br> • Як система справляється з навантаженням (наприклад, Firebase free-tier підтримує 10K користувачів, Resource → Servers → Firebase).<br> • Обмеження (наприклад, затримки API для AI-фільтрації).<br><br>
        <span class="sec-color">Безпека</span> <br> • Захист даних (наприклад, шифрування в Firestore, Infrastructure & Access → Security Policies).<br> • Аутентифікація (наприклад, Firebase Authentication).<br><br>
        <span class="sec-color">Посилання на Resource та Requirements:</span> <br> • Технічні деталі з Resource → Servers → Firebase або Resource → AI.<br> • Вимоги з Requirements → Non-Functional (наприклад, обробка запитів за &lt;100 мс, NFR-001).<br><br>
        <span class="green-color">Приклад:</span> <br>
        System Architecture:<br><br>
        Components:<br>
            • Chrome Extension: Client-side logic for site blocking, communicates with Firebase (Requirements → Functional → FR-001).<br><br>
            • Vue.js Dashboard: Web interface for filter configuration, reports (Requirements → Functional → FR-005).<br><br>
            • Firebase Backend:<br>
                &nbsp; • Firestore: Stores user settings, blocked sites.<br>
                &nbsp; • Functions: Processes usage reports (Requirements → Functional → FR-003).<br>
                &nbsp; • Authentication: Google SSO for user login (Requirements → Functional → FR-004).<br>
            • AI API (v2.0): Real-time content filtering (Roadmap & Improvements → Product Roadmap).<br><br>
        Interaction:<br>
            • Extension sends HTTPS requests to Firestore for filter rules.<br>
            • Dashboard updates Firestore via REST API.<br>
            • Functions generate reports, triggered by Firestore changes.<br>
            • Data Flow: User sets filter in Dashboard → Firestore saves rules → Extension applies filter.<br><br>
        Architecture Approach:<br>
            • Serverless (Firebase Functions, Hosting).<br>
            • Client-side rendering for Extension and Dashboard.<br>
            • Loosely coupled via Firestore (Company Guidelines → Development Workflow → Software Design Principles).<br><br>
        Scalability & Performance:<br>
            • Supports 10K users on Firebase free-tier (Resource → Servers → Firebase).<br>
            • Filtering latency &lt;100 ms (Requirements → Non-Functional → NFR-001).<br>
            • AI API latency TBD for v2.0 (Resource → AI).<br><br>
        Security:<br>
            • AES-256 encryption in Firestore (Infrastructure & Access → Security Policies).<br>
            • Firebase Authentication with 2FA (Requirements → Non-Functional → NFR-003).<br><br>
        Diagram:<br>
            • [Extension] ↔ [Firestore/Functions] ↔ [Vue.js Dashboard]; AI API integration planned (Engineering Assets → Diagrams).<br><br>
        Reference: Firebase limits (Resource → Servers → Firebase); performance requirements (Requirements → Non-Functional).<br><br>
        <span class="sec-color">Формат:</span> <br>• Описуйте лише проєктно-специфічні компоненти, посилаючись на Resource → Servers для загальних деталей.<br> • Посилайтеся на Requirements → Non-Functional для продуктивності та безпеки.<br> •
      </div>
      <div v-if="selectedItem2 === 'Tech_Stack'" class="content">
        <span class="five-color">Tech_Stack</span><br />
        Мета перелічити технології, бібліотеки та інструменти, які використовуються для розробки, тестування та підтримки продукту, щоб забезпечити чітке розуміння технічної бази.<br><br>
        <span class="sec-color">Фронтенд:</span> <br> • Технології для клієнтської частини.<br> • Бібліотеки.<br><br>
        <span class="sec-color">Бекенд:</span> <br> • Серверні технології.<br> • Бази даних.<br><br>
        <span class="sec-color">Інтеграції:</span> <br> • Зовнішні сервіси.<br> • API або SDK (наприклад, Chrome Web Extensions API).<br><br>
        <span class="sec-color">Інструменти розробки:</span> <br> • IDE<br> • Контроль версій<br> • Лінтери/форматтери<br><br>
        <span class="sec-color">Тестування:</span> <br> • Фреймворки<br> • Інструменти безпеки (OWASP ZAP, Resource → Security Tools).<br><br>
        <span class="sec-color">Моніторинг і аналітика:</span> <br> • Інструменти для відстеження (Firebase Analytics, Resource → Servers → Firebase).<br><br>
        <span class="sec-color">Обґрунтування вибору:</span> <br> • Чому обрано технології (наприклад, Vue.js для швидкої розробки, Firebase для простоти).<br> • Посилання на Resource → Frameworks або Business Research → Technology Trends.<br><br>
        <span class="sec-color">Версії:</span> <br> • Конкретні версії технологій (наприклад, Vue.js 3.2, Node.js 18).<br><br>
        <span class="sec-color">Посилання на Resource та Company Guidelines:</span> <br> • Технології з Resource → Frameworks або Resource → Servers.<br> • Стандарти з Company Guidelines → Development Workflow → Software Design Principles.<br><br>
        <span class="green-color">Приклад:</span> <br>
        Tech Stack:<br><br>
        Frontend:<br>
            • Vue.js (v3.2): Dashboard for filter configuration (Requirements → Functional → FR-005).<br><br>
            • JavaScript (ES6): Chrome extension logic (Requirements → Functional → FR-001).<br>
            • Libraries: Vue Router (navigation), Axios (API requests), Tailwind CSS (styling).<br><br>
        Backend:<br>
            • Firebase Functions (Node.js 18): Report generation (Requirements → Functional → FR-003).<br>
            • Firestore: User settings, blocked sites storage (Resource → Servers → Firebase).<br><br>
        Integrations:<br>
            • Firebase Authentication: Google SSO (Requirements → Functional → FR-004).<br>
            • Chrome Web Extensions API: Site blocking (Requirements → Functional → FR-001).<br>
            • AI API (v2.0): Content filtering (Roadmap & Improvements → Product Roadmap).<br><br>
        Development Tools:<br>
            • VS Code: IDE for coding.<br>
            • Git: Version control (Company Guidelines → Versioning).<br>
            • ESLint/Prettier: Code linting/formatting (Company Guidelines → Development Workflow).<br><br>
        Testing:<br>
            • Jest: Unit tests for Vue.js components.<br>
            • Mocha: Tests for Firebase Functions.<br>
            • OWASP ZAP: Security scans (Resource → Security Tools).<br><br>
        Monitoring & Analytics:<br>
            • Firebase Analytics: Tracks installs, usage (Monetization & Metrics → KPIs).<br><br>
        Justification:<br>
            • Vue.js: Fast development, small team (Resource → Frameworks).<br>
            • Firebase: Serverless, free-tier supports 10K users (Resource → Servers → Firebase).<br>
            • Tailwind: Rapid UI styling (Business Research → Technology Trends).<br><br>
        Reference: Firebase setup (Resource → Servers → Firebase); coding standards (Company Guidelines → Development Workflow).<br><br>
        <span class="sec-color">Формат:</span> <br>• Вказуйте конкретні версії (Vue.js 3.2) для відтворюваності. <br> • Обґрунтовуйте вибір, посилаючись на Resource → Frameworks або Business Research. <br> •
      </div>
      <div v-if="selectedItem2 === 'Deployment_Pipeline'" class="content">
        <span class="five-color">Deployment Pipeline</span><br />
        Мета описати процес розгортання продукту, включаючи автоматизацію, інструменти та етапи, щоб забезпечити швидке й надійне оновлення.<br><br>
        <span class="sec-color">Етапи розгортання:</span> <br> • Підготовка (наприклад, збірка Vue.js, пакування розширення).<br> • Тестування (автоматизовані тести, ручне QA).<br> • Розгортання (публікація в Chrome Web Store, Firebase Hosting).<br><br>
        <span class="sec-color">Інструменти CI/CD:</span> <br> • Системи автоматизації (наприклад, GitHub Actions, Firebase CLI).<br> • Конфігурація (наприклад, .yml-файли для GitHub Actions).<br><br>
        <span class="sec-color">Репозиторії:</span> <br> • Де зберігається код (наприклад, GitHub, Company Guidelines → Versioning).<br> • Структура (монорепозиторій чи окремі для розширення/дашборда).<br><br>
        <span class="sec-color">Середовища:</span> <br> • Staging (наприклад, Firebase Preview Channels).<br> • Production (Firebase Hosting, Chrome Web Store).<br><br>
        <span class="sec-color">Релізний процес:</span> <br> • Версіонування (semver, наприклад, v1.0.0, Company Guidelines → Versioning).<br> • Частота релізів (наприклад, щомісяця, Roadmap & Improvements → Product Roadmap).<br> • Хто схвалює (наприклад, Person A).<br><br>
        <span class="sec-color">Робота з помилками:</span> <br> • Відкат (наприклад, Firebase Hosting rollbacks).<br> • Логування (Firebase Crashlytics, Resource → Servers → Firebase).<br><br>
        <span class="sec-color">Посилання на Company Guidelines та Resource:</span> <br> • CI/CD стандарти з Company Guidelines → Version Control and Release Management.<br> • Інструменти з Resource → Servers → Firebase.<br><br>
        <span class="green-color">Приклад:</span> <br>
        Deployment Pipeline:<br><br>
        Stages:<br>
            • Build:<br>
              &nbsp;  • Vue.js dashboard built with npm run build.<br>
              &nbsp;  • Chrome extension packed with npm run pack (Requirements → Functional → FR-001).<br>
            • Test:<br>
              &nbsp;  • Jest unit tests for Vue.js, Mocha for Functions.<br>
              &nbsp;  • Manual QA for extension in Chrome (Company Guidelines → Development Workflow).<br>
            • Deploy:<br>
              &nbsp;  • Dashboard to Firebase Hosting via Firebase CLI.<br>
              &nbsp;  • Extension to Chrome Web Store via Developer Dashboard.<br><br>
        CI/CD Tools:<br>
            • GitHub Actions: Automates build/test/deploy for dashboard.<br>
            • Firebase CLI: Deploys Functions/Hosting.<br>
            • Config: .github/workflows/deploy.yml for CI/CD (Engineering Assets → Configs).<br><br>
        Repositories:<br>
            • GitHub: Mono-repo (iris-man/usercontrol) for extension, dashboard, Functions (Company Guidelines → Versioning).<br><br>
        Environments:<br>
            • Staging: Firebase Preview Channels for dashboard testing.<br>
            • Production: Firebase Hosting, Chrome Web Store.<br><br>
        Release Process:<br>
            • Semantic versioning (v1.0.0, Company Guidelines → Versioning).<br>
            • Monthly releases per roadmap (Roadmap & Improvements → Product Roadmap).<br>
            • Approved by Person A (personA@iris-man.com).<br><br>
        Error Handling:<br>
            • Rollbacks via Firebase Hosting console.<br>
            • Crashlytics for error tracking (Resource → Servers → Firebase).<br><br>
        Reference: CI/CD setup (Company Guidelines → Version Control and Release Management); Firebase CLI (Resource → Servers → Firebase).<br><br>
        <span class="sec-color">Формат:</span> <br>• Посилайтеся на Company Guidelines → Versioning для релізних стандартів. <br> • Вкажіть інструменти для відкатів і логування (Crashlytics). <br> •
      </div>


      <div v-if="selectedItem2 === 'Testing_QA'" class="content">
        <span class="five-color">Testing & QA</span><br /> Описує підхід до тестування та забезпечення якості продукту, включаючи план тестування, інструменти та процес відстеження помилок. Розділ є критично важливим для забезпечення стабільності, безпеки та відповідності вимогам
      </div>
      <div v-if="selectedItem2 === 'Test_Plan'" class="content">
        <span class="five-color">Test Plan</span><br />
        Мета описати стратегію та процес тестування продукту, щоб переконатися, що він відповідає функціональним (Requirements → Functional) і нефункціональним вимогам (Requirements → Non-Functional), а також забезпечує високу якість для користувачів. <br><br>
        <span class="sec-color">Типи тестування:</span> <br> • Unit Testing: Тестування окремих компонентів.<br> • Integration Testing: Перевірка взаємодії компонентів.<br> • End-to-End (E2E) Testing: Перевірка повного користувацького сценарію. <br> • Security Testing: Перевірка безпеки<br> • Performance Testing: Перевірка швидкості<br> • Usability Testing: Оцінка зручності UI<br><br>
        <span class="sec-color">Тестові сценарії:</span> <br> • Конкретні випадки для кожної вимоги.<br> • Позитивні (очікувані дії) та негативні (помилкові сценарії) тести.<br><br>
        <span class="sec-color">Охоплення:</span> <br> • Які вимоги тестуються (посилання на Requirements → Functional і Non-Functional).<br> • Процент охоплення коду (наприклад, 80% для unit-тестів). <br><br>
        <span class="sec-color">Тестові середовища:</span> <br> • Де проводяться тести (наприклад, локально, Firebase Preview Channels).<br> • Браузери (Chrome, Concept → Scope).<br><br>
        <span class="sec-color">Частота тестування:</span> <br> • Перед кожним релізом (Roadmap & Improvements → Product Roadmap).<br> • Щотижневі перевірки для критичних функцій.<br><br>
        <span class="sec-color">Відповідальність:</span> <br> • Хто проводить тести (наприклад, Person A для unit-тестів, Person B для E2E).<br><br>
        <span class="sec-color">Критерії завершення:</span> <br> • Умови для релізу (наприклад, 0 критичних багів, 80% тестів пройдено).<br><br>
        <span class="sec-color">Посилання на Requirements та Company Guidelines:</span> <br> • Вимоги з Requirements → Functional (наприклад, FR-001) і Non-Functional (наприклад, NFR-001).<br> • Стандарти тестування з Company Guidelines → Development Workflow → Testing and Quality Assurance. <br><br>
        <span class="green-color">Приклад:</span> <br>
        Test Plan:<br><br>
        Test Types:<br>
            • Unit Testing: Test site-blocking logic in Chrome extension (Requirements → Functional → FR-001).<br>
            • Integration Testing: Verify extension-Firestore interaction (Requirements → Functional → FR-005).<br>
            • E2E Testing: User sets filter in Vue.js dashboard, extension blocks site (Requirements → Functional → FR-001, FR-005).<br>
            • Security Testing: Check GDPR compliance, XSS protection (Requirements → Regulatory → RR-001).<br>
            • Performance Testing: Ensure filtering latency &lt;100 ms (Requirements → Non-Functional → NFR-001).<br>
            • Usability Testing: Validate one-click setup (Concept → Unique Value Proposition).<br><br>
        Test Scenarios:<br>
            • FR-001 (Site Blocking):<br>
              &nbsp;  • Positive: Block adult content site, confirm blocked.<br>
              &nbsp;  • Negative: Attempt to block invalid URL, confirm error.<br>
            • FR-005 (Dashboard):<br>
              &nbsp;  • Positive: Save filter in dashboard, confirm in Firestore.<br>
              &nbsp;  • Negative: Submit empty filter, confirm validation error.<br><br>
        Coverage:<br>
            • 80% code coverage for unit tests (extension, dashboard).<br>
            • All functional requirements (Requirements → Functional) tested.<br><br>
        Environments:<br>
            • Local: Chrome browser, VS Code.<br>
            • Staging: Firebase Preview Channels (Technical Architecture → Deployment Pipeline).<br><br>
        Frequency:<br>
            • Before releases (monthly, Roadmap & Improvements → Product Roadmap).<br>
            • Weekly for critical features (site blocking, FR-001).<br><br>
        Responsibility:<br>
            • Person A: Unit and security tests.<br>
            • Person B: Integration and E2E tests.<br><br>
        Completion Criteria:<br>
            • 0 critical/high bugs, 80% test coverage, all FR/NFR tests passed.<br><br>
        Reference: Test standards (Company Guidelines → Development Workflow → Testing and Quality Assurance); requirements (Requirements → Functional, Non-Functional).<br><br>
        <span class="sec-color">Формат:</span> <br>• Посилайтеся на Requirements для тестів і Company Guidelines для стандартів. <br> • Тест-план деталізується в TestRail або Project Space <br> •
      </div>
      <div v-if="selectedItem2 === 'Tools'" class="content">
        <span class="five-color">Tools</span><br />
        Мета перелічити інструменти для тестування та QA, щоб забезпечити ефективне виконання тест-плану та відстеження якості.<br><br>
        <span class="sec-color">Інструменти для тестування:</span> <br> • Unit Testing.<br> • Integration Testing.<br> • E2E Testing.<br> • Security Testing.<br> • Performance Testing.<br> • Usability Testing.<br><br>
        <span class="sec-color">Інструменти автоматизації:</span> <br> • CI/CD для тестів.<br> • Скрипти для тестування.<br><br>
        <span class="sec-color">Інструменти моніторингу якості:</span> <br> • Логування помилок.<br> • Аналітика.<br><br>
        <span class="sec-color">Обґрунтування вибору:</span> <br> • Чому інструмент підходить (наприклад, Jest для Vue.js через швидкість).<br> • Посилання на Resource → Security Tools або Business Research → Technology Trends.<br><br>
        <span class="sec-color">Конфігурація:</span> <br> • Як налаштовані інструменти<br><br>
        <span class="sec-color">Посилання на Resource та Company Guidelines:</span> <br> • Інструменти з Resource → Security Tools або Resource → Frameworks.<br> • Стандарти з Company Guidelines → Development Workflow → Testing and Quality Assurance.<br><br>
        <span class="green-color">Приклад:</span> <br>
        Testing Tools:<br>
            • Unit Testing: Jest (Vue.js components), Mocha (Firebase Functions) (Technical Architecture → Tech Stack).<br>
            • Integration Testing: Postman (Firestore API endpoints, Requirements → Functional → FR-005).<br>
            • E2E Testing: Cypress (dashboard-to-extension flow, Requirements → Functional → FR-001, FR-005).<br>
            • Security Testing: OWASP ZAP (XSS, CSRF checks, Resource → Security Tools).<br>
            • Performance Testing: Chrome DevTools, Lighthouse (latency &lt;100 ms, Requirements → Non-Functional → NFR-001).<br>
            • Usability Testing: Manual feedback via Chrome Web Store (Monetization & Metrics → KPIs).<br><br>
        Automation Tools:<br>
            • GitHub Actions: Runs Jest/Mocha tests on push (Technical Architecture → Deployment Pipeline).<br>
            • npm scripts: npm test for local testing.<br><br>
        Monitoring Tools:<br>
            • Firebase Crashlytics: Tracks runtime errors (Resource → Servers → Firebase).<br>
            • Firebase Analytics: Tracks test pass rates, user issues (Monetization & Metrics → KPIs).<br><br>
        Justification:<br>
            • Jest: Industry standard for Vue.js, fast (Resource → Frameworks).<br>
            • Cypress: Reliable for E2E, browser-focused (Business Research → Technology Trends).<br>
            • OWASP ZAP: Free, GDPR-compliant (Resource → Security Tools).<br><br>
        Configuration:<br>
            • Jest in package.json: { "scripts": { "test": "jest" } }.<br>
            • GitHub Actions: .github/workflows/test.yml (Engineering Assets → Configs).<br><br>
        Reference: Tool setup (Resource → Security Tools); testing standards (Company Guidelines → Development Workflow → Testing and Quality Assurance).<br><br>
        <span class="sec-color">Формат:</span> <br>• Посилайтеся на Resource → Security Tools для безпеки та Technical Architecture для CI/CD.<br> •  Використовується TestRail, Selenium, Jest, Cypress.
      </div>
      <div v-if="selectedItem2 === 'Bug_Tracking'" class="content">
        <span class="five-color">Bug Tracking</span><br />
        Мета описати процес виявлення, документування та виправлення помилок, щоб забезпечити швидке реагування та високу якість продукту.<br><br>
        <span class="sec-color">Процес виявлення:</span> <br> • Як виявляються баги (автоматизовані тести, користувацькі відгуки, Crashlytics).<br> • Джерела (наприклад, Chrome Web Store, Firebase Crashlytics).<br><br>
        <span class="sec-color">Документування:</span> <br> • Де фіксуються баги (наприклад, Trello, GitHub Issues).<br> • Формат (наприклад, ID, опис, пріоритет, репродукція, компонент).<br><br>
        <span class="sec-color">Пріоритизація:</span> <br> • Критерії (наприклад, Critical: блокує реліз; High: впливає на UX; Low: косметична).<br> • Хто визначає пріоритет (наприклад, Person A).<br><br>
        <span class="sec-color">Процес виправлення:</span> <br> • Як баги призначаються (наприклад, Person B для фронтенду, Person A для бекенду).<br> • Терміни виправлення (наприклад, Critical: 24 години, Low: 7 днів).<br><br>
        <span class="sec-color">Відстеження та звітність:</span> <br> • Як моніториться статус (наприклад, Trello-дощечка: To Do, In Progress, Done).<br> • Звіти (наприклад, щотижневий звіт про баги).<br><br>
        <span class="sec-color">Інструменти:</span> <br> • Системи управління (Trello, GitHub Issues, Resource → Project Management).<br> • Логування (Firebase Crashlytics, Resource → Servers → Firebase).<br><br>
        <span class="sec-color">Посилання на Company Guidelines та Resource:</span> <br> • Інструменти з Resource → Project Management або Resource → Servers.<br> • Процеси з Company Guidelines → Development Workflow → Bug Triage Process.<br><br>
        <span class="green-color">Приклад:</span> <br>
        Detection:<br>
            • Automated: Jest/Mocha failures, Cypress E2E errors (Test Plan).<br>
            • Manual: User feedback from Chrome Web Store (Monetization & Metrics → KPIs).<br>
            • Monitoring: Firebase Crashlytics for runtime errors (Resource → Servers → Firebase).<br><br>
        Documentation:<br>
            • Tool: Trello board (iris-man/usercontrol-bugs).<br>
            • Format: [Bug ID], Description, Priority (Critical/High/Medium/Low), Steps to Reproduce, Component (Extension/Dashboard/Firestore).<br>
            • Example: [BUG-001] Dashboard filter save fails, Priority: High, Steps: Click Save with empty input, Component: Dashboard.<br><br>
        Prioritization:<br>
            • Critical: Blocks functionality (e.g., site blocking fails, FR-001).<br>
            • High: Impacts UX (e.g., dashboard lag).<br>
            • Medium/Low: Cosmetic issues (e.g., misaligned button).<br>
            • Assigned by Person A (Company Guidelines → Team Collaboration).<br><br>
        Resolution Process:<br>
            • Bugs assigned in Trello: Person B (frontend), Person A (backend).<br>
            • Timelines: Critical (24 hours), High (3 days), Medium/Low (7 days).<br>
            • Fixes merged via Git pull requests (Company Guidelines → Versioning).<br><br>
        Tracking & Reporting:<br>
            • Trello statuses: To Do, In Progress, Done.<br>
            • Weekly bug reports emailed to team (Company Guidelines → Development Workflow → Bug Triage Process).<br><br>
        Tools:<br>
            • Trello for tracking (Resource → Project Management).<br>
            • Firebase Crashlytics for logs (Resource → Servers → Firebase).<br><br>
        Reference: Bug triage process (Company Guidelines → Development Workflow → Bug Triage Process); Trello setup (Resource → Project Management).<br><br>
        <span class="sec-color">Формат:</span> <br>•  Встановіть чіткі терміни для пріоритетів (Critical: 24 години).<br> • Посилайтеся на Company Guidelines → Bug Triage Process для стандартів. <br> • Баги відстежуються в Jira, Trello.
      </div>


      <div v-if="selectedItem2 === 'Market_Strategy'" class="content">
        <span class="five-color">Go-to-Market Strategy</span><br /> Описує план виведення продукту (UserControl) на ринок, включаючи маркетингові стратегії, план запуску та методи залучення користувачів. Розділ є ключовим для просування продукту до цільової аудиторії.
      </div>
      <div v-if="selectedItem2 === 'Marketing_Plan'" class="content">
        <span class="five-color">Marketing Plan</span><br />
        Мета описати маркетингові стратегії та канали для просування продукту, щоб підвищити впізнаваність і залучити цільову аудиторію.<br><br>
        <span class="sec-color">Цільова аудиторія:</span> <br> • Опис сегментів.<br> • Потреби та больові точки.<br><br>
        <span class="sec-color">Канали просування:</span> <br> • Основні канали.<br> • Додаткові канали.<br><br>
        <span class="sec-color">Маркетингові повідомлення:</span> <br> • Ключові меседжі, засновані на USP.<br> • Слогани чи CTA.<br><br>
        <span class="sec-color">Контент-стратегія:</span> <br> • Типи контенту.<br> • Частота публікацій.<br><br>
        <span class="sec-color">Бюджет:</span> <br> • Очікувані витрати.<br> • Безкоштовні методи.<br><br>
        <span class="sec-color">Метрики успіху:</span> <br> • Як оцінювати ефективність.<br><br>
        <span class="sec-color">Конкурентний контекст:</span> <br> • Як конкуренти просуваються. <br> • Як відрізнитися<br><br>
        <span class="sec-color">Посилання на Business Research та Monetization:</span> <br> • Дані про аудиторію з Business Research → Target Audience. <br> • Метрики з Monetization & Metrics → KPIs<br> • Конкурентні стратегії з Competitive Analysis → Direct Competitors.<br><br>
        <span class="green-color">Приклад:</span> <br>
        Target Audience:<br>
        Parents (30–50, US/EU), need child safety solutions (Business Research → Target Audience → Pain Points).<br>
        HR managers (25–45, EU), need employee monitoring (Concept → Target Audience).<br><br>
        Channels:<br>
            • Chrome Web Store: Optimized listing with screenshots, keywords (Resource → Marketing → SEO).<br>• SEO: Blog posts on "child safety online" (target keywords: "parental control extension").<br>• Social Media: Twitter/X, Reddit (r/parenting, r/smallbusiness), 2 posts/week.<br>• Partnerships: Cross-promotion with antivirus blogs (Competitive Analysis → Direct Competitors).<br><br>
        Messaging:<br>
            • USP: "Simplest AI-powered Chrome extension for parental and corporate control" (Competitive Analysis → Unique Selling Proposition).<br>• CTA: "Try UserControl Free Today!"<br><br>
        Content Strategy:<br>
            • Chrome Web Store: Detailed description, 3 screenshots, 1 demo video.<br>• Blog: 2 posts/month on Medium ("How to Protect Kids Online").<br>• Social: Twitter/X threads on safety tips, Reddit AMAs.<br><br>
        Budget:<br>
            • $100/month on Google Ads (target: parents, HR).<br>• Free: SEO, Reddit, Twitter/X (Resource → Marketing).<br><br>
        Success Metrics:<br>
            • 5,000 installs in Q4 2025 (Monetization & Metrics → KPIs).<br>• 2% CTR on Google Ads, 10% conversion from blog visits.<br><br>
        Competitive Context:<br>
            • NetNanny: Heavy SEO, parenting blogs (Competitive Analysis → Direct Competitors).<br>• Differentiation: Simpler UI, lower price ($5/month vs. $14/month Bark).<br><br>
        Reference: Audience data (Business Research → Target Audience); metrics (Monetization & Metrics → KPIs).<br><br>
        <span class="sec-color">Формат:</span> <br>• Використовуйте USP із Competitive Analysis для меседжів. <br> • Посилайтеся на Business Research → Market Analysis для трендів і Monetization & Metrics для метрик. <br> • Маркетинг планується в HubSpot, Google Ads, Medium.
      </div>
      <div v-if="selectedItem2 === 'Launch_Plan'" class="content">
        <span class="five-color">Launch Plan</span><br />
        Мета описати стратегію та кроки для офіційного запуску продукту, щоб забезпечити успішний вихід на ринок і залучення перших користувачів. <br><br>
        <span class="sec-color">Таймлайн запуску:</span> <br> • Основні етапи (наприклад, бета-тестування, офіційний реліз).<br> • Дати (наприклад, бета в Q3 2025, реліз у Q4 2025, Roadmap & Improvements → Product Roadmap).<br><br>
        <span class="sec-color">Тип запуску:</span> <br> • М’який запуск (наприклад, бета для 100 користувачів).<br> • Повний запуск (публікація в Chrome Web Store).<br><br>
        <span class="sec-color">Підготовка до запуску:</span> <br> • Технічна готовність (тести пройдено, Testing & QA → Test Plan).<br> • Маркетингові матеріали (описи, скріншоти, відео).<br> • Інфраструктура (Firebase налаштовано, Infrastructure & Access → Server Access).<br><br>
        <span class="sec-color">Канали запуску:</span> <br> • Де продукт з’явиться (Chrome Web Store, соціальні мережі).<br> • Промо-акції (наприклад, 30-денна безкоштовна преміум-версія, Monetization & Metrics → Pricing Strategy).<br><br>
        <span class="sec-color">Цільові метрики:</span> <br> • Очікувані результати (наприклад, 1,000 встановлень у перший місяць, Monetization & Metrics → KPIs).<br><br>
        <span class="sec-color">Відповідальність:</span> <br> • Хто керує запуском (наприклад, Person A для публікації, Person B для маркетингу).<br><br>
        <span class="sec-color">Ризики та пом’якшення:</span> <br> • Потенційні проблеми (наприклад, відхилення в Chrome Web Store).<br> • Рішення (наприклад, перевірка Chrome policies, Business Research → Statistics & Data → Regulatory Impact).<br><br>
        <span class="sec-color">Посилання на Roadmap та Testing:</span> <br> • Таймлайн із Roadmap & Improvements → Product Roadmap.<br> • Технічна готовність із Testing & QA → Test Plan. <br><br>
        <span class="green-color">Приклад:</span> <br>
        Timeline:<br>
            • Q3 2025: Beta testing (100 users, feedback via Trello).<br>• Q4 2025: Full launch in Chrome Web Store (Roadmap & Improvements → Product Roadmap).<br><br>
        Launch Type:<br>
            • Soft launch: Beta for early adopters (parents via Reddit).<br>• Full launch: Public release with freemium model (Monetization & Metrics → Business Models).<br><br>
        Preparation:<br>
            • Technical: 80% test coverage, 0 critical bugs (Testing & QA → Test Plan).<br>• Marketing: Chrome Web Store listing (3 screenshots, video), Medium post, Twitter/X campaign (Marketing Plan).<br>• Infrastructure: Firebase Hosting/Firestore ready, 2FA enabled (Infrastructure & Access → Server Access).<br><br>
        Channels:<br>
            • Chrome Web Store: Public listing with keywords ("parental control").<br>• Social: Twitter/X announcement, Reddit post in r/parenting.<br>• Promo: 30-day premium trial for first 1,000 users (Monetization & Metrics → Pricing Strategy).<br><br>
        Metrics:<br>
            • 1,000 installs in first month (Q4 2025).<br>• 5% conversion to premium (Monetization & Metrics → KPIs).<br><br>
        Responsibility:<br>
            • Person A: Publishes to Chrome Web Store, manages Firebase.<br>• Person B: Prepares marketing materials, posts on social media.<br><br>
        Risks & Mitigation:<br>
            • Risk: Chrome Web Store rejection (Business Research → Statistics & Data → Regulatory Impact).<br>• Mitigation: Pre-check Chrome policies, test with Chrome Reviewer Tools.<br>• Risk: Low initial adoption.<br>• Mitigation: Free trial, Reddit outreach (Marketing Plan).<br>
        Reference: Release timeline (Roadmap & Improvements → Product Roadmap); testing status (Testing & QA → Test Plan).<br><br>
        <span class="sec-color">Формат:</span> <br>• Плануйте м’який запуск для збору зворотного зв’язку. <br> • Посилайтеся на Monetization & Metrics → Pricing Strategy для промо-акцій. <br> • Запуск планується в Asana, Trello.
      </div>
      <div v-if="selectedItem2 === 'User_Acquisition'" class="content">
        <span class="five-color">User Acquisition</span><br />
        Мета описати стратегії залучення користувачів, щоб досягти цільових показників встановлень і конверсій, з фокусом на цільову аудиторію.<br><br>
        <span class="sec-color">Стратегії залучення:</span> <br> • Органічні (SEO, Chrome Web Store, соціальні мережі).<br> • Платні (Google Ads, спонсорські пости).<br> • Партнерства.<br><br>
        <span class="sec-color">Цільові канали:</span> <br> • Деталі для кожного каналу (наприклад, SEO: 5 ключових слів, Reddit: пости в r/parenting).<br><br>
        <span class="sec-color">Тактики для аудиторії:</span> <br> • Як залучити клієнта.<br><br>
        <span class="sec-color">Воронка конверсії:</span> <br> • Етапи (Awareness → Install → Premium Conversion).<br> • Очікувані показники (наприклад, 10% відвідувачів встановлюють, 5% купують преміум, Monetization & Metrics → KPIs).<br><br>
        <span class="sec-color">Бюджет:</span> <br> • Витрати на залучення (наприклад, $50/міс на Google Ads).<br> • CPA (Cost Per Acquisition, наприклад, $2 за встановлення).<br><br>
        <span class="sec-color">Метрики успіху:</span> <br> • Кількість встановлень, конверсії, Retention Rate (Monetization & Metrics → KPIs).<br><br>
        <span class="sec-color">Конкурентний контекст:</span> <br> • Як конкуренти залучають користувачів.<br> • Як відрізнитися.<br><br>
        <span class="sec-color">Посилання на Marketing Plan та Monetization:</span> <br> • Канали з Marketing Plan.<br> • Метрики з Monetization & Metrics → KPIs.<br><br>
        <span class="green-color">Приклад:</span> <br>
        Strategies:<br>
            • Organic: SEO (keywords: "parental control extension"), Chrome Web Store optimization, Twitter/X, Reddit (Marketing Plan).<br>• Paid: Google Ads ($50/month, target: parents/HR).<br>• Partnerships: Guest posts on antivirus blogs (Competitive Analysis → Direct Competitors).<br><br>
        Channels:<br>
            • Chrome Web Store: Optimized listing, 5 keywords, 3 screenshots.<br>• SEO: 2 blog posts/month on Medium, target "child safety online".<br>• Social Media: Twitter/X (2 posts/week), Reddit (r/parenting, r/smallbusiness, 1 post/month).<br>• LinkedIn: Posts for HR managers (employee monitoring).<br><br>
        Audience Tactics:<br>
            • Parents: Reddit AMAs on child safety, Twitter/X tips (Business Research → Target Audience → Pain Points).<br>• HR: LinkedIn posts on productivity tools (Concept → Target Audience).<br><br>
        Conversion Funnel:<br>
            • Awareness: 10,000 visits to Chrome Web Store.<br>• Install: 10% (1,000 installs).<br>• Premium: 5% (50 premium users, Monetization & Metrics → KPIs).<br><br>
        Budget:<br>
            • $50/month on Google Ads.<br>• CPA: $2/install (based on industry avg., Business Research → Market Analysis → Browser Extensions).<br><br>
        Metrics:<br>
            • 5,000 installs by Q4 2025, 5% premium conversion, 80% retention (Monetization & Metrics → KPIs).<br><br>
        Competitive Context:<br>
            • Qustodio: YouTube tutorials, school partnerships (Competitive Analysis → Direct Competitors).<br>• Differentiation: Simpler UI, $5/month vs. $14/month Bark (Monetization & Metrics → Pricing Strategy).<br><br>
        Reference: Marketing channels (Marketing Plan); metrics (Monetization & Metrics → KPIs).<br><br>
        <span class="sec-color">Формат:</span> <br>• Використовуйте дані з Competitive Analysis для тактик. <br> • Посилайтеся на Monetization & Metrics → KPIs для метрик. <br> • Воронка аналізується в Mixpanel, Firebase Analytics.
      </div>


      <div v-if="selectedItem2 === 'Project_Management'" class="content">
        <span class="five-color">Project Management</span><br /> Описує організацію та управління проєктом (UserControl), включаючи план розробки, розподіл ролей у команді та управління ризиками. Розділ є ключовим для координації зусиль, дотримання термінів і мінімізації ризиків.
      </div>
      <div v-if="selectedItem2 === 'Roadmap'" class="content">
        <span class="five-color">Roadmap</span><br />
        Мета описати ключові етапи та терміни розробки, тестування, запуску та подальшого розвитку продукту, щоб забезпечити чіткий план виконання проєкту.<br><br>
        <span class="sec-color">Ключові етапи (milestones):</span> <br> • Основні фази проєкту (наприклад, планування, розробка, тестування, бета-запуск, повний запуск).<br> • Конкретні завдання (наприклад, "Розробка Chrome extension", "Налаштування Firebase").<br><br>
        <span class="sec-color">Таймлайн:</span> <br> • Дати або періоди для кожного етапу (наприклад, Q3 2025 для бета-тестування).<br> • Тривалість<br><br>
        <span class="sec-color">Залежності:</span> <br> • Завдання, які залежать від інших (наприклад, тестування залежить від завершення розробки).<br> • Зовнішні залежності (наприклад, схвалення Chrome Web Store).<br><br>
        <span class="sec-color">Доставки (deliverables):</span> <br> • Що буде готово на кожному етапі (наприклад, v1.0 Chrome extension, Vue.js дашборд).<br><br>
        <span class="sec-color">Метрики успіху:</span> <br> • Як оцінювати прогрес (наприклад, завершення 80% тестів, Testing & QA → Test Plan).<br> • Посилання на Monetization & Metrics → KPIs<br><br>
        <span class="sec-color">Оновлення roadmap:</span> <br> • Частота перегляду (наприклад, щомісяця).<br> • Хто відповідальний (наприклад, Person A).<br><br>
        <span class="sec-color">Посилання на Roadmap & Improvements та Go-to-Market:</span> <br> • Деталі з Roadmap & Improvements → Product Roadmap для уникнення дублювання.<br> • Запуск із Go-to-Market Strategy → Launch Plan.<br><br>
        <span class="green-color">Приклад:</span> <br>
        Milestones:<br>
            • Planning (Q2 2025): Finalize requirements, design architecture (Requirements → Functional, Non-Functional).<br>• Development (Q2–Q3 2025): Chrome extension (site blocking, FR-001), Vue.js dashboard (FR-005), Firebase setup (Technical Architecture → System Architecture).<br>• Testing (Q3 2025): Unit, integration, E2E tests, 80% coverage (Testing & QA → Test Plan).<br>• Beta Launch (Q3 2025): 100 users, feedback via Trello (Go-to-Market Strategy → Launch Plan).<br>• Full Launch (Q4 2025): Chrome Web Store, freemium model (Monetization & Metrics → Business Models).<br>• Post-Launch (Q1 2026): AI filtering (v2.0, Roadmap & Improvements → Product Roadmap).<br><br>
        Timeline:<br>
            • Planning: 1 month (May 2025).<br>• Development: 3 months (Jun–Aug 2025).<br>• Testing: 1 month (Sep 2025).<br>• Beta: 1 month (Oct 2025).<br>• Full Launch: Nov 2025.<br><br>
        Dependencies:<br>
            • Development depends on finalized requirements (Requirements → Functional).<br>• Launch depends on Chrome Web Store approval (Business Research → Statistics & Data → Regulatory Impact).<br><br>
        Deliverables:<br>
            • Q2 2025: Requirements doc, architecture diagram (Engineering Assets → Diagrams).<br>• Q3 2025: Chrome extension v1.0, Vue.js dashboard, Firebase backend.<br>• Q4 2025: Public Chrome Web Store listing.<br><br>
        Success Metrics:<br>
            • Q3 2025: 80% test coverage, 0 critical bugs (Testing & QA → Test Plan).<br>• Q4 2025: 1,000 installs, 5% premium conversion (Monetization & Metrics → KPIs).<br><br>
        Updates:<br>
            • Reviewed monthly by Person A (Company Guidelines → Team Collaboration).<br><br>
        Reference: Detailed roadmap (Roadmap & Improvements → Product Roadmap); launch details (Go-to-Market Strategy → Launch Plan).<br><br>
        <span class="sec-color">Формат:</span> <br>• Синхронізуйте roadmap із Roadmap & Improvements і Go-to-Market Strategy, щоб уникнути дублювання. <br> • Використовуйте чіткі дати (наприклад, Q3 2025) і прив’язку до вимог (FR-001). <br> • Roadmap ведеться у Jira, Project Space
      </div>
      <div v-if="selectedItem2 === 'Team_Roles'" class="content">
        <span class="five-color">Team & Roles</span><br />
        Мета описати склад команди, їхні ролі та обов’язки, щоб забезпечити чіткий розподіл завдань і ефективну співпрацю.<br><br>
        <span class="sec-color">Склад команди:</span> <br> • Хто входить до команди.<br> • Контакти.<br><br>
        <span class="sec-color">Ролі та обов’язки:</span> <br> • Конкретні задачі для кожного (наприклад, Person A: бекенд, Person B: фронтенд). <br> • Обов’язки з інших розділів (наприклад, тестування, маркетинг, [Testing & QA → Test Plan](#], Go-to-Market Strategy → Launch Plan). <br><br>
        <span class="sec-color">Навички:</span> <br> • Ключові компетенції (наприклад, Vue.js, Firebase для Person B).<br> • Додаткові навички (наприклад, SEO для маркетингу).<br><br>
        <span class="sec-color">Координація:</span> <br> • Як команда комунікує (наприклад, щотижневі дзвінки, Trello).<br> • Інструменти (Trello, Slack, Resource → Project Management).<br><br>
        <span class="sec-color">Розподіл часу:</span> <br> • Скільки часу кожен виділяє на проєкт.<br><br>
        <span class="sec-color">Ескалація:</span> <br> • Хто вирішує конфлікти чи блокує задачі (наприклад, Person A як лід).<br><br>
        <span class="sec-color">Посилання на Company Guidelines:</span> <br> • Процеси з Company Guidelines → Team Collaboration → Onboarding Process або Development Workflow.<br><br>
        <span class="green-color">Приклад:</span> <br>
        Team:<br>
            • Person A (personA@iris-man.com): Project lead, backend developer.<br>• Person B (personB@iris-man.com): Frontend developer, marketing.<br><br>
        Roles & Responsibilities:<br>
            • Person A:<br>
              &nbsp;  • Backend: Firebase Functions, Firestore setup (Technical Architecture → System Architecture).<br>
              &nbsp;  • Security: OWASP ZAP tests, GDPR compliance (Testing & QA → Test Plan).<br>
              &nbsp;  • Launch: Chrome Web Store publishing (Go-to-Market Strategy → Launch Plan).<br>
            • Person B:<br>
              &nbsp;  • Frontend: Vue.js dashboard, Chrome extension UI (Technical Architecture → Tech Stack).<br>
              &nbsp;  • Marketing: SEO, Twitter/X, Reddit posts (Go-to-Market Strategy → Marketing Plan).<br>
              &nbsp;  • Testing: E2E tests with Cypress (Testing & QA → Test Plan).<br><br>
        Skills:<br>
            • Person A: Node.js, Firebase, security auditing.<br>• Person B: Vue.js, JavaScript, SEO basics (Resource → Frameworks).<br><br>
        Coordination:<br>
            • Weekly calls via Google Meet (Company Guidelines → Team Collaboration).<br>• Task tracking in Trello (iris-man/usercontrol) (Resource → Project Management).<br><br>
        Time Allocation:<br>
            • Person A: 20 hours/week (50% backend, 30% security, 20% launch).<br>• Person B: 20 hours/week (60% frontend, 30% marketing, 10% testing).<br><br>
        Escalation:<br>
            • Person A resolves conflicts, approves roadmap changes (Company Guidelines → Team Collaboration).<br><br>
        Reference: Collaboration process (Company Guidelines → Team Collaboration); tools (Resource → Project Management).<br><br>
        <span class="sec-color">Формат:</span> <br>• Вкажіть чіткі ролі для двох осіб, уникаючи перевантаження. <br> • Посилайтеся на Company Guidelines → Team Collaboration для процесів. <br> • Ролі фіксуються в Jira, Trello.
      </div>
      <div v-if="selectedItem2 === 'Risks'" class="content">
        <span class="five-color">Risks</span><br />
        Мета визначити потенційні ризики для проєкту, оцінити їхній вплив і запропонувати способи їх пом’якшення, щоб мінімізувати затримки чи невдачі.<br><br>
        <span class="sec-color">Список ризиків:</span> <br> • Технічні (наприклад, збої Firebase, Technical Architecture → System Architecture).<br> • Операційні (наприклад, затримки через обмежену команду).<br> • Ринкові (наприклад, низька конверсія, Monetization & Metrics → KPIs). <br> • Регуляторні (наприклад, відхилення Chrome Web Store, Business Research → Statistics & Data → Regulatory Impact).<br><br>
        <span class="sec-color">Оцінка ризиків:</span> <br> • Ймовірність (Low/Medium/High).<br> • Вплив (Low/Medium/High).<br> • Приклад: "Firebase outage: Low probability, High impact."<br><br>
        <span class="sec-color">Пом’якшення:</span> <br> • Як уникнути або зменшити ризик.<br> • Дії в разі настання.<br><br>
        <span class="sec-color">Відповідальність:</span> <br> • Хто моніторить і вирішує (наприклад, Person A для технічних ризиків).<br><br>
        <span class="sec-color">Моніторинг:</span> <br> • Як відстежувати (наприклад, щотижневий огляд у Trello).<br><br>
        <span class="sec-color">Посилання на Business Research та Go-to-Market:</span> <br> • Ринкові ризики з Business Research → Market Analysis.<br> • Запускові ризики з Go-to-Market Strategy → Launch Plan.<br><br>
        <span class="green-color">Приклад:</span> <br>
        Risk List:<br><br>
            Technical: Firebase outage disrupts dashboard (Technical Architecture → System Architecture).<br>
                • Probability: Low, Impact: High.<br>• Mitigation: Use Cloudflare for caching, monitor via Firebase Status (Resource → Servers → Firebase).<br>• Action: Rollback to previous version (Technical Architecture → Deployment Pipeline).<br>• Responsible: Person A.<br><br>
            Operational: Development delays due to small team (Company Guidelines → Team Collaboration).<br>
                • Probability: Medium, Impact: Medium.<br>• Mitigation: Prioritize critical features (Requirements → Functional → FR-001).<br>• Action: Adjust roadmap (Roadmap).<br>• Responsible: Person A.<br><br>
            Market: Low adoption due to competition (Competitive Analysis → Direct Competitors).<br>
                • Probability: Medium, Impact: High.<br>• Mitigation: Optimize Chrome Web Store listing, free trial (Go-to-Market Strategy → User Acquisition).<br>• Action: Increase ad budget to $150/month (Go-to-Market Strategy → Marketing Plan).<br>• Responsible: Person B.<br><br>
            Regulatory: Chrome Web Store rejection (Business Research → Statistics & Data → Regulatory Impact).<br>
                • Probability: Low, Impact: High.<br>• Mitigation: Pre-check with Chrome Reviewer Tools (Testing & QA → Tools).<br>• Action: Revise extension per feedback.<br>• Responsible: Person A.<br><br>
        Monitoring:<br>
            • Weekly risk review in Trello (iris-man/usercontrol-risks).<br>• Firebase Crashlytics for technical issues (Testing & QA → Bug Tracking).<br><br>
        Reference: Market risks (Business Research → Market Analysis); launch risks (Go-to-Market Strategy → Launch Plan).<br><br>
        <span class="sec-color">Формат:</span> <br>• Посилайтеся на Business Research і Go-to-Market Strategy для ринкових ризиків. <br> • Ризики ведуться в Risk Register,Trello.
      </div>


      <div v-if="selectedItem2 === 'Support_Maintenance'" class="content">
        <span class="five-color">Support & Maintenance</span><br /> Описує процеси підтримки користувачів, розклад оновлень і моніторинг продукту після запуску, щоб забезпечити стабільну роботу, задоволеність користувачів і відповідність вимогам (Requirements → Non-Functional. Розділ є ключовим для управління зворотним зв’язком, виправлення помилок і підтримки масштабованості.
      </div>
      <div v-if="selectedItem2 === 'Support_Process'" class="content">
        <span class="five-color">Support Process</span><br />
        Мета описати, як IRIS оброблятиме запити користувачів, вирішуватиме проблеми та надаватиме підтримку, щоб забезпечити позитивний користувацький досвід і відповідність регуляторним вимогам (наприклад, GDPR, Requirements → Regulatory → RR-001).<br><br>
        <span class="sec-color">Канали підтримки:</span> <br> • Як користувачі звертаються за допомогою (наприклад, email, форма в Chrome Web Store, Twitter/X).<br> • Основний контакт (наприклад, support@iris.com).br><br>
        <span class="sec-color">Типи запитів:</span> <br> • Категорії (наприклад, технічні помилки, питання щодо функцій, повернення коштів).<br> • Приклади (наприклад, "Розширення не блокує сайт", "Як активувати преміум").<br><br>
        <span class="sec-color">Процес обробки:</span> <br> • Етапи (отримання → класифікація → відповідь → вирішення).<br> • SLA (час відповіді, наприклад, 24 години для критичних запитів).<br><br>
        <span class="sec-color">Інструменти:</span> <br> • Системи управління запитами (наприклад, Trello для тікетів, Resource → Project Management).<br> • Логування (Firebase Crashlytics для технічних помилок, Testing & QA → Bug Tracking).<br><br>
        <span class="sec-color">Відповідальність:</span> <br> • Хто обробляє запити (наприклад, Person B для початкової відповіді, Person A для технічних питань).<br><br>
        <span class="sec-color">Ескалація:</span> <br> • Як обробляти складні запити (наприклад, GDPR-видалення даних до Person A).<br><br>
        <span class="sec-color">Зворотний зв’язок:</span> <br> • Як збирати відгуки (наприклад, опитування після вирішення, Chrome Web Store відгуки).<br><br>
        <span class="sec-color">Регуляторні вимоги:</span> <br> • Дотримання GDPR/CCPA (наприклад, обробка запитів на видалення даних, Requirements → Regulatory → RR-001).<br><br>
        <span class="sec-color">Посилання на Company Guidelines та Testing:</span> <br> • Процеси з Company Guidelines → Team Collaboration → Customer Support Guidelines.<br> • Баги з Testing & QA → Bug Tracking.<br><br>
        <span class="green-color">Приклад:</span> <br>
        Support Process:<br><br>
        Channels:<br>
            • Email: support@iris-man.com.<br>• Chrome Web Store: Support form in listing.<br>• Twitter/X: @IrisManSupport for quick queries (Go-to-Market Strategy → Marketing Plan).<br><br>
        Request Types:<br>
            • Technical: Extension fails to block sites (Requirements → Functional → FR-001).<br>• Functional: How to set up filters in dashboard (Requirements → Functional → FR-005).<br>• Billing: Refund requests for premium (Monetization & Metrics → Pricing Strategy).<br>• Regulatory: GDPR data deletion (Requirements → Regulatory → RR-001).<br><br>
        Process:<br>
            • Receive: Email/form to Trello board (iris-man/usercontrol-support).<br>• Classify: Technical/Billing/Other, prioritize (Critical: 24h, Normal: 48h).<br>• Respond: Person B sends initial reply within SLA.<br>• Resolve: Person A fixes technical issues, logs in Trello (Testing & QA → Bug Tracking).<br><br>
        Tools:<br>
            • Trello for ticket tracking (Resource → Project Management).<br>• Firebase Crashlytics for error logs (Testing & QA → Bug Tracking).<br>• Gmail for email management.<br><br>
        Responsibility:<br>
            • Person B: Initial responses, functional queries.<br>• Person A: Technical fixes, GDPR requests.<br><br>
        Escalation:<br>
            • GDPR/complex issues to Person A within 24 hours (Requirements → Regulatory → RR-001).<br><br>
        Feedback:<br>
            • Post-resolution survey via email.<br>• Monitor Chrome Web Store reviews (Monetization & Metrics → KPIs).<br><br>
        Regulatory:<br>
            • GDPR: Data deletion processed within 72 hours (Requirements → Regulatory → RR-001).<br>• CCPA: Data access requests within 45 days (Requirements → Regulatory → RR-002).<br><br>
        Reference: Support guidelines (Company Guidelines → Team Collaboration → Customer Support Guidelines); bug tracking (Testing & QA → Bug Tracking).<br><br>
        <span class="sec-color">Формат:</span> <br>• Встановіть чіткі SLA (24 години для критичних). <br> • Посилайтеся на Testing & QA → Bug Tracking для технічних проблем. <br> • Підтримка ведеться в Zendesk,Trello та email.
      </div>
      <div v-if="selectedItem2 === 'Update_Schedule'" class="content">
        <span class="five-color">Update Schedule</span><br />
        Мета описати графік випуску оновлень для продукту, щоб забезпечити регулярне вдосконалення, виправлення помилок і впровадження нових функцій.<br><br>
        <span class="sec-color">Частота оновлень:</span> <br> • Регулярні оновлення (наприклад, щомісяця для патчів, щокварталу для фіч).<br> • Позапланові оновлення (наприклад, для критичних багів).<br><br>
        <span class="sec-color">Типи оновлень:</span> <br> • Багфікси (виправлення помилок, виявлених у Testing & QA → Bug Tracking).<br> • Нові функції (з Roadmap & Improvements → Product Roadmap).<br> • Оптимізації (наприклад, покращення продуктивності, Requirements → Non-Functional → NFR-001).<br><br>
        <span class="sec-color">Процес оновлення:</span> <br> • Як плануються оновлення (наприклад, через Trello, прив’язка до roadmap).<br> • Як розгортаються (GitHub Actions, Firebase CLI, Technical Architecture → Deployment Pipeline).<br><br>
        <span class="sec-color">Тестування перед релізом:</span> <br> • Які тести проводяться (unit, E2E, Testing & QA → Test Plan).<br> • Критерії релізу (наприклад, 0 критичних багів).<br><br>
        <span class="sec-color">Комунікація з користувачами:</span> <br> • Як повідомляти про оновлення (наприклад, Chrome Web Store changelog, Twitter/X).<br><br>
        <span class="sec-color">Відповідальність:</span> <br> • Хто планує та виконує (наприклад, Person A для релізу, Person B для changelog).<br><br>
        <span class="sec-color">Посилання на Roadmap та Technical Architecture:</span> <br> • Функції з Roadmap & Improvements → Product Roadmap.<br> • Розгортання з Technical Architecture → Deployment Pipeline.<br><br>
        <span class="green-color">Приклад:</span> <br>
        Update Schedule:<br><br>
        Frequency:<br>
            • Monthly: Bug fixes, minor improvements (Testing & QA → Bug Tracking).<br>• Quarterly: New features (e.g., AI filtering in Q1 2026, Roadmap & Improvements → Product Roadmap).<br>• Ad-hoc: Critical bug fixes within 24 hours (Testing & QA → Bug Tracking).<br><br>
        Update Types:<br>
            • Bug Fixes: Address issues like filter failures (Requirements → Functional → FR-001).<br>• Features: Add AI content filtering (v2.0, Roadmap & Improvements → Product Roadmap).<br>• Optimizations: Reduce dashboard latency (&lt;100 ms, Requirements → Non-Functional → NFR-001).<br><br>
        Process:<br>
            • Plan: Prioritize tasks in Trello (iris-man/usercontrol-updates) based on roadmap.<br>• Deploy: Use GitHub Actions for dashboard, Firebase CLI for backend, Chrome Web Store for extension (Technical Architecture → Deployment Pipeline).<br><br>
        Pre-Release Testing:<br>
            • Jest unit tests, Cypress E2E tests, 80% coverage (Testing & QA → Test Plan).<br>• Criteria: 0 critical bugs, all functional tests passed.<br><br>
        User Communication:<br>
            • Changelog in Chrome Web Store (e.g., "v1.0.1: Fixed filter bug").<br>• Twitter/X post for major updates (@IrisManSupport).<br><br>
        Responsibility:<br>
            • Person A: Plans updates, manages deployments.<br>• Person B: Writes changelog, posts updates.<br><br>
        Reference: Feature roadmap (Roadmap & Improvements → Product Roadmap); deployment process (Technical Architecture → Deployment Pipeline).<br><br>
        <span class="sec-color">Формат:</span> <br>• Використовуйте автоматизацію (GitHub Actions) для спрощення. <br> • Посилайтеся на Testing & QA → Test Plan для тестування. <br> • Оновлення плануються в Jira, Trello.
      </div>
      <div v-if="selectedItem2 === 'Monitoring'" class="content">
        <span class="five-color">Monitoring</span><br />
        Мета описати, як відстежується продуктивність, помилки та поведінка користувачів, щоб забезпечити стабільність продукту та швидке реагування на проблеми.<br><br>
        <span class="sec-color">Моніторингові метрики:</span> <br> • Технічні (наприклад, uptime Firebase, помилки в Crashlytics).<br> • Користувацькі (наприклад, кількість встановлень, Retention Rate, Monetization & Metrics → KPIs).<br><br>
        <span class="sec-color">Інструменти моніторингу:</span> <br> • Технічні (Firebase Crashlytics, Firebase Performance Monitoring, Resource → Servers → Firebase).<br> • Аналітика (Firebase Analytics для поведінки користувачів).<br> • Безпека (OWASP ZAP для періодичних сканів, Testing & QA → Tools).<br><br>
        <span class="sec-color">Частота моніторингу:</span> <br> • Регулярна (наприклад, щотижневий огляд Crashlytics).<br> • Реальний час (наприклад, сповіщення про збої Firebase).<br><br>
        <span class="sec-color">Реагування на проблеми:</span> <br> • Як обробляються помилки (наприклад, критичні баги до Trello, Testing & QA → Bug Tracking).<br> • SLA для реагування (наприклад, 24 години для критичних збоїв).<br><br>
        <span class="sec-color">Відповідальність:</span> <br> • Хто моніторить (наприклад, Person A для технічних метрик).<br><br>
        <span class="sec-color">Звітність:</span> <br> • Як і коли звітувати<br><br>
        <span class="sec-color">Посилання на Testing & Monetization:</span> <br> • Баги з Testing & QA → Bug Tracking.<br> • Метрики з Monetization & Metrics → KPIs.<br><br>
        <span class="green-color">Приклад:</span> <br>
        Monitoring:<br><br>
        Metrics:<br>
            • Technical: Firebase uptime (>99.9%, Requirements → Non-Functional → NFR-002), Crashlytics errors.<br>• User: Installs, Retention Rate, premium conversions (Monetization & Metrics → KPIs).<br>• Security: XSS/CSRF vulnerabilities (Testing & QA → Test Plan).<br><br>
        Tools:<br>
            • Firebase Crashlytics: Tracks runtime errors (Resource → Servers → Firebase).<br>• Firebase Analytics: Tracks installs, filter usage (Monetization & Metrics → KPIs).<br>• Firebase Performance: Monitors dashboard latency (&lt;100 ms, Requirements → Non-Functional → NFR-001).<br>• OWASP ZAP: Quarterly security scans (Testing & QA → Tools).<br><br>
        Frequency:<br>
            • Weekly: Review Crashlytics, Analytics in Trello (iris-man/usercontrol-monitoring).<br>• Real-time: Firebase alerts for outages.<br><br>
        Response:<br>
            • Critical errors to Trello, fixed within 24 hours (Testing & QA → Bug Tracking).<br>• Security issues escalated to Person A (Infrastructure & Access → Security Policies).<br><br>
        Responsibility:<br>
            • Person A: Technical and security monitoring.<br>• Person B: User analytics, feedback analysis.<br><br>
        Reporting:<br>
            • Monthly report in Trello: Errors, installs, retention (Monetization & Metrics → KPIs).<br><br>
        Reference: Bug tracking (Testing & QA → Bug Tracking); metrics (Monetization & Metrics → KPIs).<br><br>
        <span class="sec-color">Формат:</span> <br>• Посилайтеся на Monetization & Metrics → KPIs для користувацьких метрик. <br> • Моніторинг ведеться в Datadog,Firebase.
      </div>
    </div>

    <div class="back-arrow">
      <router-link to="/dashboard">
        <b-icon icon="arrow-left-square" class="icon-style"></b-icon>
      </router-link>
    </div>
  </div>
</template>


<!-- <div v-if="selectedItem2 === 'qwerty'" class="content">
  <span class="five-color">qwerty</span><br />
  Мета <br><br>
  <span class="sec-color">qwerty</span> <br> • <br> • <br> • <br><br>
  <span class="sec-color">qwerty</span> <br> • <br> • <br> • <br><br>
  <span class="sec-color">qwerty</span> <br> • <br> • <br> • <br><br>
  <span class="sec-color">qwerty</span> <br> • <br> • <br> • <br><br>
  <span class="sec-color">qwerty</span> <br> • <br> • <br> • <br><br>
  <span class="sec-color">qwerty</span> <br> • <br> • <br> • <br><br>
  <span class="sec-color">qwerty</span> <br> • <br> • <br> • <br><br>
  <span class="green-color">Приклад:</span> <br>
  <br><br>
  <span class="sec-color">Формат:</span> <br>•  <br> •  <br> •
</div> -->

<script>
export default {
  data() {
    return {
      selectedItem: null,
      selectedItem2: null,
    };
  },
  methods: {
    selectItem(item) {
      this.selectedItem = item;
      this.selectedItem2 = null;
    },
    selectItem2(item) {
      this.selectedItem2 = item;
    },
  },
};
</script>
