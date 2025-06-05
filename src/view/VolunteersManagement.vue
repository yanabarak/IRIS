<template>
  <div class="main-block request-management">
    <div class="div col-12 p-0 d-flex align-items-start">
      <h4 class="">Volunteesrs Management</h4>
    </div>
    <div class="scrollable-block">
      <div class="col-12 row mt-3 m-0 p-0" style="min-height: 90%">
        <TableVolunteersManagement />
      </div>
    </div>
  </div>
</template>

<script>
import TableVolunteersManagement from '@/components/NU/TableVolunteersManagement.vue';
export default {
  components: {
    TableVolunteersManagement,
  },
};
</script>
