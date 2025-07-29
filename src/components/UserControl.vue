<template>
  <div class="row">
    <div class="col-12 col-md-auto tree-structure">
      <span class="red-color">Projects Space / Browser Extensions / UserControl </span><br />
      ├── <span class="five-color">Concept</span><br />
      │&nbsp;&nbsp; ├── <span class="sec-color" @click="selectItem('qwerty')">Vision Statement</span><br/>
      │&nbsp;&nbsp; ├── <span class="sec-color" @click="selectItem('qwerty')">Scope</span><br/>
      │&nbsp;&nbsp; ├── <span class="sec-color" @click="selectItem('qwerty')">Target Audience</span><br/>
      │&nbsp;&nbsp; └── <span class="sec-color" @click="selectItem('qwerty')">Unique Value Prop</span><br/>
      ├── <span class="five-color">Requirements</span><br />
      │&nbsp;&nbsp; ├── <span class="sec-color" @click="selectItem('qwerty')">Functional</span><br/>
      │&nbsp;&nbsp; ├── <span class="sec-color" @click="selectItem('qwerty')">Non-Functional</span><br/>
      │&nbsp;&nbsp; └── <span class="sec-color" @click="selectItem('qwerty')">Regulatory Requirements</span><br/>
      ├── <span class="five-color">Roadmap & Improvements</span><br />
      │&nbsp;&nbsp; ├── <span class="sec-color" @click="selectItem('qwerty')">Product Roadmap</span><br/>
      │&nbsp;&nbsp; └── <span class="sec-color" @click="selectItem('qwerty')">Feature Prioritization</span><br/>
      ├── <span class="five-color">Monetization & Metrics</span><br />
      │&nbsp;&nbsp; ├── <span class="sec-color" @click="selectItem('qwerty')">Business Models</span><br/>
      │&nbsp;&nbsp; ├── <span class="sec-color" @click="selectItem('qwerty')">KPIs</span><br/>
      │&nbsp;&nbsp; ├── <span class="sec-color" @click="selectItem('qwerty')">Pricing Strategy</span><br/>
      │&nbsp;&nbsp; └── <span class="sec-color" @click="selectItem('qwerty')">Revenue Projections</span><br/>
      ├── <span class="five-color">Competitive Analysis</span><br />
      │&nbsp;&nbsp; ├── <span class="sec-color" @click="selectItem('qwerty')">Direct Competitors</span><br/>
      │&nbsp;&nbsp; ├── <span class="sec-color" @click="selectItem('qwerty')">SWOT Analysis</span><br/>
      │&nbsp;&nbsp; └── <span class="sec-color" @click="selectItem('qwerty')">Unique Selling Proposition (USP)</span><br/>
      ├── <span class="five-color">Infrastructure & Access</span><br />
      │&nbsp;&nbsp; ├── <span class="sec-color" @click="selectItem('qwerty')">Server Access</span><br/>
      │&nbsp;&nbsp; ├── <span class="sec-color" @click="selectItem('qwerty')">Security Policies</span><br/>
      │&nbsp;&nbsp; └── <span class="sec-color" @click="selectItem('qwerty')">Access Management Process</span><br/>
      ├── <span class="five-color">Technical Architecture</span><br />
      │&nbsp;&nbsp; ├── <span class="sec-color" @click="selectItem('qwerty')">System Architecture</span><br/>
      │&nbsp;&nbsp; ├── <span class="sec-color" @click="selectItem('qwerty')">Tech Stack</span><br/>
      │&nbsp;&nbsp; └── <span class="sec-color" @click="selectItem('qwerty')">Deployment Pipeline</span><br/>
      ├── <span class="five-color">Testing & QA</span><br />
      │&nbsp;&nbsp; ├── <span class="sec-color" @click="selectItem('qwerty')">Test Plan</span><br/>
      │&nbsp;&nbsp; ├── <span class="sec-color" @click="selectItem('qwerty')">Tools</span><br/>
      │&nbsp;&nbsp; └── <span class="sec-color" @click="selectItem('qwerty')">Bug Tracking</span><br/>
      ├── <span class="five-color">Go-to-Market Strategy</span><br />
      │&nbsp;&nbsp; ├── <span class="sec-color" @click="selectItem('qwerty')">Marketing Plan</span><br/>
      │&nbsp;&nbsp; ├── <span class="sec-color" @click="selectItem('qwerty')">Launch Plan</span><br/>
      │&nbsp;&nbsp; └── <span class="sec-color" @click="selectItem('qwerty')">User Acquisition</span><br/>
      ├── <span class="five-color">Project Management</span><br />
      │&nbsp;&nbsp; ├── <span class="sec-color" @click="selectItem('qwerty')">Roadmap</span><br/>
      │&nbsp;&nbsp; ├── <span class="sec-color" @click="selectItem('qwerty')">Team & Roles</span><br/>
      │&nbsp;&nbsp; └── <span class="sec-color" @click="selectItem('qwerty')">Risks</span><br/>
      └── <span class="five-color">Support & Maintenance</span><br />
      &nbsp; &nbsp; ├── <span class="sec-color" @click="selectItem('qwerty')">Support Process</span><br/>
      &nbsp; &nbsp; ├── <span class="sec-color" @click="selectItem('qwerty')">Update Schedule</span><br/>
      &nbsp; &nbsp; └── <span class="sec-color" @click="selectItem('qwerty')">Monitoring</span><br/>
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
      </div>





      <!-- Contracts -->
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
          <span class="desc col">Блокчейн-платформа для автоматизації договорів оренди комерційної нерухомості завтоматичною перевіркою умов.</span><br />
        </div>
        <div class="row mx-0">
          <span class="green-color col-2 p-0 align-self-center">Target audience:</span>
          <span class="desc col"> Малий бізнес і орендодавці комерційної нерухомості (B2B). </span><br />
        </div>
        <div class="row mx-0">
          <span class="green-color col-2 p-0 align-self-center">Problem:</span>
          <span class="desc col">Складність і витрати на юридичне оформлення договорів оренди, ризик невідповідностіумов.</span><br />
        </div>
        <div class="row mx-0">
          <span class="green-color col-2 p-0 align-self-center">Technologies:</span>
          <span class="desc col">Блокчейн для смарт-контрактів, AI для аналізу договорів, low-code для кастомізаціїшаблонів.</span><br />
        </div>
        <div class="row mx-0">
          <span class="green-color col-2 p-0 align-self-center">Model of monetization:</span>
          <span class="desc col">Разова оплата за створення договору, підписка на додаткові юридичні консультації.</span><br />
        </div>
        <div class="row mx-0">
          <span class="green-color col-2 p-0 align-self-center">Uniqueness:</span>
          <span class="desc col">Локалізовані шаблони під законодавство різних країн, інтеграція з платіжнимисистемами.</span>
        </div>
      </div>



















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
