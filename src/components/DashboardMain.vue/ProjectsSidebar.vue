<template>
  <b-sidebar
    id="sidebar-right"
    :visible="true"
    no-header
    :backdrop="false"
    class="custom-sidebar full-width d-flex py-0"
  >
    <ProjectsGeneral />
  </b-sidebar>
</template>

<script>
import { BSidebar } from 'bootstrap-vue';
import ProjectsGeneral from './ProjectsGeneral.vue';

export default {
  components: {
    ProjectsGeneral,
  },
};
</script>
