<template>
  <b-sidebar id="sidebar-1" :visible="true" no-header :backdrop="false" :class="sidebarClass">
    <div class="logo col-auto p-0">
      <img src="../assets/logo_full.svg" alt="logo" height="30px" />
      <img src="../assets/logo_small.svg" alt="logo" height="30px" />
    </div>
    <b-button
      @click="$emit('toggle-sidebar')"
      variant="link"
      class="ms-auto p-0 mb-3"
      id="toggleSidebar"
    >
      <div class="animated-hamburger open">
        <span></span><span></span><span></span><span></span>
      </div>
    </b-button>

    <div class="menu mt-1">
      <ul class="px-0 m-0">
        <li v-for="item in menuItems" :key="item.id" @click="handleLinkClick(item.id)">
          <div class="menu-item" style="cursor: pointer">
            <span class="menu-icon">
              <b-icon :icon="item.icon"></b-icon>
            </span>
            <span class="text">{{ item.text }}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="my-1">
      <hr class="m-0 opacity-50" />
    </div>
  </b-sidebar>
</template>

<script>
import { BButton, BSidebar, BIcon } from 'bootstrap-vue';

export default {
  components: {
    BButton,
    BSidebar,
    BIcon,
  },
  data() {
    return {
      menuItems: this.links,
    };
  },
  props: {
    isExpanded: {
      type: Boolean,
      default: true,
    },
    links: {
      type: Array,
    },
  },
  computed: {
    sidebarClass() {
      return this.isExpanded
        ? 'custom-sidebar full-width d-flex'
        : 'small-width custom-sidebar d-flex';
    },
  },
  methods: {
    toggleSidebar() {
      this.$emit('toggle-sidebar');
    },
    handleLinkClick(id) {
      if (window.innerWidth <= 768) {
        this.$emit('toggle-sidebar');
      }
      const element = document.getElementById(id);
      if (element) {
        element.closest('.d-flex').childNodes.forEach(element => {
          element.style.order = '';
        });
        element.style.order = '-1';
        element.closest('.d-flex').scrollTop = 0;
        element.classList.add('highlight');
        setTimeout(() => {
          element.classList.remove('highlight');
        }, 1000);
      }
    },
  },
};
</script>
