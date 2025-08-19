<template>
  <div class="row">
    <div class="col-12 col-md-auto tree-structure">
      <span class="red-color">Product Discovery & Delivery / Browser Extensions / UserControl </span><br />
      ├── <span class="five-color">Concept</span><br />
      │&nbsp;&nbsp; ├── <span class="sec-color" @click="selectItem('Vision_Statement')">Vision Statement</span><br/>
      │&nbsp;&nbsp; ├── <span class="sec-color" @click="selectItem('Scope')">Scope</span><br/>
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
      <div v-if="selectedItem === 'Vision_Statement'" class="content">
        <b-breadcrumb>
          <b-breadcrumb-item>Concept</b-breadcrumb-item>
          <b-breadcrumb-item active>Vision Statement</b-breadcrumb-item>
        </b-breadcrumb>
        <br />
        UserControl delivers a lightweight, privacy-first browser extension that empowers parents to safeguard their children’s online experience with intuitive content filtering and seamless cross-device management via a future mobile app. By leveraging  Progressive Web App (PWA) technology. <br><br>
        <span class="sec-color">Long-term goal:</span> PWA technologies for access without platform.<br><br>
        <span class="sec-color">Values:</span> <br>
        • Simplicity: Low-Code intuitive filter settings (according to Low-Code/No-Code Trends) for parents without technical knowledge.<br>
        • Availability: Free Basic version with premium-based premium-based computers for fast working in a weak Internet (according to EDGE Computing Trends).<br><br>
        <span class="sec-color">Business research Links:</span> <br>
        • Main User needs: performance, ease of use, transparency in data with data, synchronization between devices (Business Research → Market Analysis → Browser Extensions → Customer Needs and Pain Points).<br>
        • Key Pain points: heavy and slow extensions, excessive permissions, problems with browser compatibility (Business Research → Market Analysis → Browser Extensions → Customer Needs and Pain Points).<br><br>
        <span class="sec-color">Technology Trends Links:</span> <br>
        • The PWA approach will provide cross-platform and accessibility for mobile users (Technology Trends → PWAS).<br>
        • Пріоритетом є конфіденційність та безпека, з дотриманням принципів мінімальних дозволів та zero-trust архітектури (Technology Trends → Privacy and Security).<br><br>
      </div>



      <div v-if="selectedItem === 'Scope'" class="content">
        <b-breadcrumb>
          <b-breadcrumb-item>Concept</b-breadcrumb-item>
          <b-breadcrumb-item active>Scope</b-breadcrumb-item>
        </b-breadcrumb>
        <br />
        <span class="sec-color">In-Scope:</span> <br>
        • Chrome extension for website blocking by manual URL and predefined categories (Requirements → Functional → FR-000). <br>
        • Dashboard for filter configuration, usage monitoring, and basic reporting (Requirements → Functional → FR-000). <br>
        • Local browser storage (no cloud backend in v1.0) with offline functionality (Technical Architecture → System Architecture). <br>
        • Target markets: US and EU parents, schools, and SME IT admins (Business Research → Target Audience). <br>
        • v1.0 release: Basic URL blocking + parental dashboard (Q4 2025, Project Management → Roadmap). <br><br>
        <span class="sec-color">Out-of-Scope:</span> <br><br>
        • AI-based content analysis and filtering.<br>
        • Support for Firefox, Safari, Edge, or mobile browsers in initial release.<br>
        • Non-GDPR markets.<br><br>
        <span class="sec-color">Constraints:</span> <br>
        • Technical: Firebase free-tier limits (e.g., 10K active users, Resource → Servers → Firebase).<br>
        • Resource: Small team of 2 developers, each contributing 20 hours/week (Project Management → Team & Roles).<br>
        • Resource: Small team of 2 developers, each contributing 20 hours/week (Project Management → Team & Roles).<br><br>
        <span class="sec-color">Development phases:</span> <br>
        • v1.0 (Q4 2025): Manual/category-based blocking, local-only dashboard, Chrome-only support.<br>
        • v2.0 (Q1 2026): PWA mobile control (Roadmap & Improvements → Product Roadmap).<br><br>
        <span class="sec-color">Requirements and RoadMap Links:</span> <br>
        • Functional requirements: *Requirements → Functional (FR-000, FR-000).<br>
        • Technical backend: Technical Architecture → System Architecture.<br>
        • Market focus: Business Research → Target Audience.<br><br>
      </div>






      <!-- <div v-if="selectedItem === 'qwerty'" class="content">
        <b-breadcrumb>
          <b-breadcrumb-item>qwerty</b-breadcrumb-item>
          <b-breadcrumb-item active>qwerty</b-breadcrumb-item>
        </b-breadcrumb>
        <br />
        <span class="sec-color">qwerty:</span> <br>
        • qwerty <br><br>
        <span class="sec-color">qwerty:</span> <br><br>
        • qwerty<br>
        • qwerty<br><br>
        <span class="sec-color">qwerty:</span> <br>
        • qwerty<br>
        • qwerty<br><br>
        <span class="sec-color">qwerty:</span> <br>
        • qwerty<br>
        • qwerty<br><br>
      </div> -->

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
