<template>
  <div class="business-research main-block-general col-12 p-3" id="business-research">
    <h6>Business Research</h6>
    <div class="columns-2">
      <div class="block-type col-12">
        <div class="d-flex gap-2 align-items-center sec-color fs-16">
          <div class="icons-wrapper">
            <b-icon icon="basket" class="icon-style"></b-icon>
          </div>
          Market Analysis
        </div>
        <div>
          <ul class="neutral-color pt-0">
            <li class="pl-2 d-block d-md-flex justify-content-between">
              <router-link to="Desktop_Software">Desktop Software</router-link>
            </li>
            <li class="pl-2 d-block d-md-flex justify-content-between">
              <router-link to="Browser_Extensions_BR">Browser Extensions</router-link>
            </li>
            <li class="pl-2 d-block d-md-flex justify-content-between">
              <router-link to="Mobile_Apps">Mobile Apps</router-link>
            </li>
            <li class="pl-2 d-block d-md-flex justify-content-between">
              <router-link to="SaaS_Trends">SaaS Trends</router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="block-type col-12">
        <div class="d-flex gap-2 align-items-center sec-color fs-16">
          <div class="icons-wrapper">
            <b-icon icon="pie-chart-fill" class="icon-style"></b-icon>
          </div>
          Statistics & Data
        </div>
        <div>
          <ul class="neutral-color pt-0">
            <li class="pl-2 d-block d-md-flex justify-content-between">
              <router-link to="Browser_Usage">Browser Usage</router-link>
            </li>
            <li class="pl-2 d-block d-md-flex justify-content-between">
              <router-link to="User_Behavior">User Behavior</router-link>
            </li>
            <li class="pl-2 d-block d-md-flex justify-content-between">
              <router-link to="Regional_Statistics">Regional Statistics</router-link>
            </li>
            <li class="pl-2 d-block d-md-flex justify-content-between">
              <router-link to="Market_Growth">Market Growth</router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="block-type col-12">
        <div class="d-flex gap-2 align-items-center sec-color fs-16">
          <div class="icons-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-person-arms-up"
              viewBox="0 0 16 16"
            >
              <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
              <path
                d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.5 1.5 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.7.7 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.7.7 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z"
              />
            </svg>
          </div>
          Target Audience
        </div>
        <div>
          <ul class="neutral-color pt-0">
            <li class="pl-2 d-block d-md-flex justify-content-between">
              <router-link to="User_Personas">User Personas</router-link>
            </li>
            <li class="pl-2 d-block d-md-flex justify-content-between">
              <router-link to="Pain_Points">Pain Points</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="block-type col-12">
        <div class="d-flex gap-2 align-items-center sec-color fs-16">
          <div class="icons-wrapper">
            <b-icon icon="cash" class="icon-style"></b-icon>
          </div>
          Monetization Models
        </div>
        <div>
          <ul class="neutral-color pt-0">
            <li class="pl-2 d-block d-md-flex justify-content-between">
              <router-link to="Freemium">Freemium</router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="block-type col-12">
        <div class="d-flex gap-2 align-items-center sec-color fs-16">
          <div class="icons-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-1-circle"
              viewBox="0 0 16 16"
            >
              <path
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z"
              />
            </svg>
          </div>
          Trends & Opportunities
        </div>
        <div>
          <ul class="neutral-color pt-0">
            <li class="pl-2 d-block d-md-flex justify-content-between">
              <router-link to="Technology_Trends">Technology Trends</router-link>
            </li>
            <li class="pl-2 d-block d-md-flex justify-content-between">
              <router-link to="Regulatory_Impact">Regulatory Impact</router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="block-type col-12">
        <div class="d-flex gap-2 align-items-center sec-color fs-16">
          <div class="icons-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-buildings"
              viewBox="0 0 16 16"
            >
              <path
                d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z"
              />
              <path
                d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z"
              />
            </svg>
          </div>
          Competitive Analysis
        </div>
        <div>
          <ul class="neutral-color pt-0">
            <li class="pl-2 d-block d-md-flex justify-content-between">
              <router-link to="Competitor_Profiles">Competitor Profiles</router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="block-type col-12">
        <div class="d-flex gap-2 align-items-center sec-color fs-16">
          <div class="icons-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-lightbulb"
              viewBox="0 0 16 16"
            >
              <path
                d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1"
              />
            </svg>
          </div>
          Product Pipeline
        </div>
        <div>
          <ul class="neutral-color pt-0">
            <li class="pl-2 d-block d-md-flex justify-content-between">
              <router-link :to="{ path: '/Ideation' }"> Ideation </router-link>
            </li>
            <li class="pl-2 d-block d-md-flex justify-content-between">
              <router-link to="In_Development">In Development</router-link>
            </li>
            <li class="pl-2 d-block d-md-flex justify-content-between">
              <router-link to="Released">Released</router-link>
            </li>
            <li class="pl-2 d-block d-md-flex justify-content-between">
              <router-link to="Archived">Archived</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
