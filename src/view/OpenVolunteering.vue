<template>
  <div class="main-block open-volunteering">
    <h4 class="">Open Volunteering</h4>
    <div class="scrollable-block">
      <div class="col-12 row mt-3 m-0 p-0">
        <b-card-group columns>
          <RequestCard v-for="(card, index) in cards" :key="index" :index="index + 1" />
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<script>
import RequestCard from '@/components/RequestCard.vue';
export default {
  components: {
    RequestCard,
  },
  data() {
    return {
      cards: Array(2).fill({}),
    };
  },
};
</script>
