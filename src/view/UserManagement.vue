<template>
  <div class="main-block user-management">
    <div class="div col-12 p-0 d-flex align-items-start">
      <h4 class="">User Management</h4>
    </div>
    <div class="scrollable-block">
      <div class="col-12 row mt-3 m-0 p-0">
        <TableUsersManagement />
      </div>
    </div>
  </div>
</template>

<script>
import TableUsersManagement from '@/components/NU/TableUsersManagement.vue';
export default {
  components: {
    TableUsersManagement,
  },
};
</script>
