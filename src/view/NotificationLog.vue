<template>
  <div class="main-block notification-log">
    <div class="div col-12 p-0 d-flex align-items-start">
      <h4 class="">Notification Log</h4>
    </div>
    <div class="scrollable-block">
      <div class="col-12 row mt-3 m-0 p-0">
        <TableNotification />
      </div>
    </div>
  </div>
</template>

<script>
import TableNotification from '@/components/NU/TableNotification.vue';
export default {
  components: {
    TableNotification,
  },
};
</script>
