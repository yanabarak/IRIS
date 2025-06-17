<template>
  <div class="classic_block">
    <h6>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-fire"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"
        />
      </svg>
      Project Status Overview
    </h6>
    <ul class="status-list">
      <li v-for="item in status" :key="item.text" class="d-flex flex-row gap-2">
        <span class="text col-5 p-0 align-self-end"
          >{{ item.text }} <span class="version">{{ item.version }}</span></span
        >
        <div class="flex-grow-1">
          <div class="d-flex justify-content-between">
            <span class="percent">{{ item.percent }}%</span>
            <span class="data">{{ item.data }}</span>
          </div>
          <b-progress max="100" :value="item.percent" height="7px"></b-progress>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      status: [
        { data: 'Completed', text: 'UserControl', version: '0.5', percent: '30' },
        { data: 'Q3 2025', text: 'NoteMaster', version: '0.5', percent: '5' },
        { data: 'Q3 2025', text: 'DocA', version: '0.5', percent: '0' },
        { data: 'Q3 2025', text: 'ChordMaster', version: '0.5', percent: '6' },
      ],
    };
  },
};
</script>
