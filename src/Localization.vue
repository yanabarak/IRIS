<template>
  <div>
    <div
      class="container-fluid p-3 h-100"
      :locale="locale"
      :dir="$store.state.isRTL ? 'rtl' : 'ltr'"
    >
      <AppHeader
        class="mb-3 d-md-none"
        v-if="$store.state.isUnAuthorized"
        @toggle-sidebar="toggleSidebar"
      />

      <router-view :expanded="isExpanded" @toggle-sidebar="toggleSidebar"></router-view>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import english from './locales/en-US';
import AppHeader from './components/AppHeader.vue';
import { mapState } from 'vuex';

// Localization setup
const locales = {
  'en-US': english,
};

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: 'en-US',
  fallbackLocale: 'en-US',
  silentTranslationWarn: true,
  messages: {
    'en-US': locales['en-US'].messages,
  },
});

export default {
  name: 'Localization',
  components: {
    AppHeader,
  },
  data() {
    return {
      isExpanded: window.innerWidth > 768,
    };
  },
  mounted() {
    // console.log(this.$store.state.isUnAuthorized);
    // this.$i18n.locale = this.locale;
  },
  computed: {
    ...mapState(['locale']),
  },
  methods: {
    toggleSidebar() {
      this.isExpanded = !this.isExpanded;
    },
  },
  watch: {
    locale(val) {
      // this.$i18n.locale = val;
    },
  },
};
</script>
