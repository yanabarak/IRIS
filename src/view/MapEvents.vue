<template>
  <div class="map-events d-flex flex-column flex-sm-row">
    <AzureMap />
    <SideListVolunteer />
    <div class="map-info bg-blur d-flex gap-3 mx-auto">
      <div class="info d-flex align-items-center gap-1">
        <span class="pointer"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="#621E7D"
            stroke="#621E7D"
            stroke-width="2"
            class="bi bi-circle-fill"
            viewBox="0 0 16 16"
          >
            <circle cx="7" cy="7" r="6" />
          </svg>
        </span>
        <span class="text">User</span>
      </div>
      <div class="info d-flex align-items-center gap-1">
        <span class="pointer"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="#fff"
            stroke="#621E7D"
            stroke-width="2"
            class="bi bi-circle-fill"
            viewBox="0 0 16 16"
          >
            <circle cx="7" cy="7" r="6" />
          </svg>
        </span>
        <span class="text">Volunteer</span>
      </div>
    </div>
    <SideListVolunteer class="mt-auto mt-sm-0 ms-sm-auto" />
  </div>
</template>
<script>
import SideListVolunteer from '@/components/NU/SideListVolunteer.vue';
import AzureMap from '@/components/NU/AzureMap.vue';

export default {
  data() {
    return {
      azureMapsKey:
        '1hINXj3kC6I4HcLTx8BoOuQEmFIzqHTFU4jyw757ux0SrUN8UPq9JQQJ99ALACi5Ypz5fxBSAAAgAZMP2Lh0',
    };
  },
  components: {
    SideListVolunteer,
    AzureMap,
  },
};
</script>
<style>
header.main-header,
.custom-sidebar .b-sidebar.bg-light {
  z-index: 1;
  background-color: var(--e-global-color-tert);
}
.special-block {
  overflow: visible;
  box-shadow: none;
}
.map-events {
  @media (max-width: 575.98px) {
    padding-bottom: 15px;
  }
}
</style>
