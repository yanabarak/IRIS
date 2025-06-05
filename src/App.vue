<template>
  <div id="app">
    <Localization />
  </div>
</template>

<script>
import Localization from '@/Localization';

export default {
  name: 'App',
  components: {
    Localization,
  },
  computed: {
    rtlClass() {
      return this.$store.state.isRTL ? 'rtl' : 'ltr';
    },
  },
  watch: {
    rtlClass(newDir) {
      document.body.setAttribute('dir', newDir);
    },
  },
  mounted() {
    document.body.setAttribute('dir', this.rtlClass);
  },
};
</script>
