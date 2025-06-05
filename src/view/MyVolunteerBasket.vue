<template>
  <div class="main-block volunteer-basket">
    <div class="div col-12 p-0 d-flex align-items-start">
      <h4 class="">My Volunteer Basket</h4>
      <b-button
        variant="outline-primary"
        class="gap-1 d-flex align-items-center fs-14 ms-auto position-relative"
        v-b-modal.modal-1
        >Filtering <b-icon icon="filter" class="icon-style"></b-icon
        ><b-badge pill variant="primary" class="position-absolute"
          >2<span class="sr-only">applied filters</span></b-badge
        ></b-button
      >
    </div>
    <div class="scrollable-block">
      <div class="col-12 row mt-3 m-0 p-0">
        <b-card-group columns>
          <RequestCard
            v-for="(card, index) in cards"
            :key="index"
            :index="index + 1"
            :selected="true"
          />
        </b-card-group>
      </div>
    </div>

    <b-modal
      id="modal-1"
      title="Filtering"
      :centered="true"
      ok-title="Show volunteers"
      cancel-title="Cancel"
      cancel-variant="outline-primary"
    >
      <b-form @submit.stop.prevent="onSubmit" class="col-12 mx-auto p-0">
        <div class="mb-3">
          <label for="filtering">By category:</label>
          <v-select v-model="filtering" :options="filtering_options" id="filtering"></v-select>
        </div>
        <div class="mb-3">
          <label for="town">By town:</label>
          <v-select v-model="town" :options="town_options" id="town"></v-select>
        </div>
      </b-form>
    </b-modal>
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
      filtering: '',
      town: '',
      cards: Array(1).fill({}),
      filtering_options: [
        { value: '1', label: 'Mobility Impairment' },
        { value: '2', label: 'Visual Impairment' },
        { value: '3', label: 'Hearing Impairment' },
        { value: '4', label: 'Cognitive Disability' },
      ],
      town_options: [
        { value: '1', label: 'Tel-Aviv' },
        { value: '2', label: 'Ashkelon' },
        { value: '3', label: 'Beersheba' },
      ],
    };
  },
};
</script>
