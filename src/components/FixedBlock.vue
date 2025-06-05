<template>
  <b-sidebar
    id="sidebar-right"
    :visible="true"
    no-header
    :backdrop="false"
    class="custom-sidebar full-width d-flex py-0"
  >
    <QuickAccess />
    <RecentUpdates class="mt-3" />
    <ProjectStatus class="mt-3" />
    <Notifications class="mt-3" />
    <TeamInfo class="mt-3" />

    <div class="my-1">
      <hr class="m-0 opacity-50" />
    </div>
  </b-sidebar>
</template>

<script>
import { BSidebar } from 'bootstrap-vue';
import QuickAccess from './RightFixedBlock.vue/QuickAccess.vue';
import RecentUpdates from './RightFixedBlock.vue/RecentUpdates.vue';
import ProjectStatus from './RightFixedBlock.vue/ProjectStatus.vue';
import TeamInfo from './RightFixedBlock.vue/TeamInfo.vue';
import Notifications from './RightFixedBlock.vue/Notifications.vue';

export default {
  components: {
    QuickAccess,
    RecentUpdates,
    ProjectStatus,
    BSidebar,
    TeamInfo,
    Notifications,
  },
};
</script>
