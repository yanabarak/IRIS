<template>
  <header class="row mx-0 align-items-center main-header">
    <div class="logo col-auto p-0">
      <img src="../assets/logo_full.svg" alt="logo" height="30px" class="d-none d-md-flex" />
      <img src="../assets/logo_small.svg" alt="logo" height="30px" class="d-md-none" />
    </div>
    <div class="menu col-auto ms-auto position-relative p-0 gap-3 d-flex">
      <b-button
        @click="$emit('toggle-sidebar')"
        variant="link"
        class="ms-auto p-0 d-lg-none toggleSidebar"
        id="toggleSidebar"
      >
        <b-icon icon="list"></b-icon>
      </b-button>

      <!-- User Dropdown -->
      <b-dropdown right>
        <template #button-content>
          <div class="box image rounded-circle">
            <b-icon icon="person"></b-icon>
          </div>
        </template>
        <router-link to="/basket-menu" class="dropdown-item">
          <b-icon icon="basket"></b-icon>My volunteer basket
        </router-link>
        <router-link to="/personal-details" class="dropdown-item">
          <b-icon icon="gear"></b-icon>Editing my profile
        </router-link>
        <b-dropdown-divider></b-dropdown-divider>
        <span @click="simulateLogout()" class="dropdown-item">
          <b-icon icon="box-arrow-right"></b-icon>Exit from system
        </span>
      </b-dropdown>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  methods: {
    toggleSidebar() {
      this.$emit('toggle-sidebar');
    },
    simulateLogout() {
      this.$store.dispatch('setUnAuthorized', false);
      this.$router.push({ path: 'login', query: { toast: 'Bye bye!' } });
      this.showToast();
    },
    showToast() {
      const h = this.$createElement;
      const vNodesMsg = h('p', { class: ['text-center', 'mb-0'] }, [`Bye bye!`]);
      // Create the title
      const vNodesTitle = h(
        'div',
        { class: ['d-flex', 'flex-grow-1', 'align-items-baseline', 'mr-2'] },
        [h('strong', { class: 'mr-2' }, 'You succesfully login out')]
      );
      // Pass the VNodes as an array for message and title
      this.$bvToast.toast([vNodesMsg], {
        title: [vNodesTitle],
        solid: true,
        variant: 'success',
      });
    },
  },
};
</script>
