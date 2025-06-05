<template>
  <div class="classic_block">
    <h6>
      <b-icon icon="bell"></b-icon>
      Notifications
    </h6>
    <ul class="notification-list">
      <li
        v-for="item in notification"
        :key="item.text"
        class="d-flex flex-md-row gap-1 align-items-center"
        :class="item.urgent ? 'urgent' : 'regular'"
      >
        <span v-if="item.urgent"> <b-icon icon="exclamation-circle"></b-icon></span>

        <span class="data">{{ item.data }}</span>
        <span class="text">{{ item.text }} </span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      notification: [
        { data: 'April 4, 10 AM', text: ' Team meeting', urgent: false },
        {
          data: 'April 6, 10 AM',
          text: 'Security training due this week',
          urgent: false,
        },
        { data: 'April 5', text: 'Submit Q2 reports', urgent: true },
      ],
    };
  },
};
</script>
