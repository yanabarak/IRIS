<template>
  <div :class="$store.state.isUnAuthorized ? 'd-flex gap-3' : 'd-flex gap-3 h-100'">
    <SideBar :is-expanded="isExpandedLocal" @toggle-sidebar="toggleSidebar" :links="this.links" />
    <div class="flex-grow-1 special-block">
      <div class="d-flex flex-column flex-md-row">
        <div class="map-events d-flex flex-column flex-grow-1 align-self-start gap-2">
          <ProjectsGeneral />
          <CompanyGuidelines />
          <Resource />
          <EngineeringAssets />
          <RD />
          <BusinessResearch />
        </div>
        <FixedBlock class="flex-shrink-0" />
      </div>
    </div>
  </div>
</template>
<script>
import ProjectsGeneral from '@/components/DashboardMain.vue/ProjectsGeneral.vue';
import CompanyGuidelines from '@/components/DashboardMain.vue/CompanyGuidelines.vue';
import Resource from '@/components/DashboardMain.vue/Resource.vue';
import EngineeringAssets from '@/components/DashboardMain.vue/EngineeringAssets.vue';
import RD from '@/components/DashboardMain.vue/RD.vue';
import BusinessResearch from '@/components/DashboardMain.vue/BusinessResearch.vue';

import FixedBlock from '@/components/FixedBlock.vue';
import SideBar from '@/components/SideBar.vue';
import { mapState } from 'vuex';

export default {
  components: {
    SideBar,
    ProjectsGeneral,
    FixedBlock,
    CompanyGuidelines,
    Resource,
    EngineeringAssets,
    RD,
    BusinessResearch,
  },
  data() {
    return {
      isExpandedLocal: this.expanded,
      links: [
        { id: 'projects-general', text: 'Projects', icon: 'kanban' },
        { id: 'company-guidelines', text: 'Company Guidelines', icon: 'book' },
        { id: 'resource', text: 'Resource', icon: 'box-seam' },
        { id: 'engineering-assets', text: 'Engineering Assets', icon: 'gear-wide-connected' },
        { id: 'r-d', text: 'R&D', icon: 'lightbulb' },
        { id: 'business-research', text: 'Business Research', icon: 'search' },
      ],
    };
  },
  props: {
    expanded: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    expanded(newVal) {
      this.isExpandedLocal = newVal;
    },
  },
  mounted() {
    const message = this.$route.query.toast;
    if (message) {
      this.$bvToast.toast(message, {
        title: 'Success',
        variant: 'success',
        autoHideDelay: 3000,
      });
    }
  },

  computed: {
    isExpanded() {
      return this.expanded;
    },
  },
  methods: {
    toggleSidebar() {
      this.$emit('toggle-sidebar');
    },
  },
};
</script>
