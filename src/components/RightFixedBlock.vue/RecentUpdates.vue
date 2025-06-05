<template>
  <div class="classic_block">
    <h6>
      <b-icon
        icon="arrow-clockwise
"
      ></b-icon>
      Recent Updates
    </h6>
    <ul class="updates-list">
      <li v-for="item in updates" :key="item.text">
        <span class="data">{{ item.data }}</span>
        <span class="text fs-12"
          >{{ item.text }} <span class="version">{{ item.version }}</span></span
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      updates: [
        { data: 'Q2 2025', text: 'Updated UserControl1', version: '0.5' },
        { data: 'Q3 2025', text: 'Updated UserControl', version: '0.5' },
      ],
    };
  },
};
</script>
