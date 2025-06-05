<template>
  <div class="main-block personal-details">
    <h4>Personal details</h4>
    <div class="scrollable-block">
      <b-form @submit.stop.prevent="onSubmit" class="col-12 col-md-6 mx-auto p-0">
        <div class="mb-3">
          <label for="fullName">Your full name <span class="mandatory">*</span></label>
          <b-form-input
            v-model="fullName"
            :state="showError ? isValid : null"
            id="fullName"
            required
          >
          </b-form-input>

          <b-form-invalid-feedback v-if="showError && !isValid">
            Your full name must be longer than 5 characters.
          </b-form-invalid-feedback>
        </div>
        <div class="mb-3">
          <label for="Phone" :class="computedState">Phone <span class="mandatory">*</span></label>

          <vue-tel-input
            v-model="Phone"
            required
            :state="showError ? isValidPhone : null"
            id="Phone"
            :validCharactersOnly="true"
            :inputOptions="inputOptions"
            @validate="isValidPhone"
          ></vue-tel-input>

          <b-form-invalid-feedback :state="computedState != 'wrong-number'">
            Your Phone must be longer than 5 characters.
          </b-form-invalid-feedback>
        </div>

        <div class="mb-3">
          <label for="Email">Email</label>
          <b-form-input v-model="Email" id="Email"> </b-form-input>
        </div>
        <div class="mb-3">
          <label for="Needs">Information about accessibility and disability needs</label>
          <b-form-textarea v-model="Needs" id="Needs" rows="3" max-rows="6"></b-form-textarea>
        </div>
        <div class="mb-3">
          <label for="ResidentialAddress"
            >Residential address <span class="mandatory">*</span></label
          >
          <b-form-input
            v-model="ResidentialAddress"
            id="ResidentialAddress"
            required
            :state="showError ? isValidA : null"
          >
          </b-form-input>
          <b-form-invalid-feedback v-if="showError && !isValidA">
            Your Residential Address must be longer than 5 characters
          </b-form-invalid-feedback>
        </div>

        <div class="mb-3">
          <label for="CurrentAddress">Current address</label>
          <b-form-input
            v-model="CurrentAddress"
            id="CurrentAddress"
            placeholder="Required only if different from residential address"
          >
          </b-form-input>
        </div>
        <div class="mb-3">
          <b-form-group label="You can contact me at">
            <b-form-checkbox-group
              v-model="selectedMethods"
              :options="options"
              name="selectedMethods"
            ></b-form-checkbox-group>
          </b-form-group>
        </div>
        <hr class="mb-3" />
        <div class="mb-3">
          <b-form-checkbox
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >
            Send me SMS notifications about new requests
          </b-form-checkbox>
        </div>
        <b-button type="submit" variant="primary" class="mb-3 w-100">Update Details</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullName: '',
      Phone: '',
      isValidP: null,
      Email: '',
      Needs: '',
      ResidentialAddress: '',
      CurrentAddress: '',
      status: '',
      selectedMethods: [],
      options: [
        { text: 'Phone', value: 'phone' },
        { text: 'WhatsApp', value: 'whatsApp' },
      ],
      inputOptions: {
        placeholder: '',
      },
      showError: false, // Track whether form was submitted
    };
  },
  computed: {
    isValid() {
      return this.fullName.length >= 5;
    },
    isValidA() {
      return this.ResidentialAddress.length >= 5;
    },

    computedState() {
      if (!this.showError) return 'no-result';
      return this.isValidP ? 'correct' : 'wrong-number';
    },
  },
  methods: {
    isValidPhone(object) {
      if (object.valid != undefined) {
        this.isValidP = object.valid;
        console.log(this.isValidP);
      }
    },
    onSubmit() {
      this.showError = true; // Show error only after submit
      if (this.isValid && this.isValidA && this.computedState != 'wrong-number') {
        this.showToast();
      }
    },
    showToast() {
      const h = this.$createElement;
      const vNodesMsg = h('p', { class: ['text-center', 'mb-0'] }, [` Form was succesfully sent `]);
      // Create the title
      const vNodesTitle = h(
        'div',
        { class: ['d-flex', 'flex-grow-1', 'align-items-baseline', 'mr-2'] },
        [h('strong', { class: 'mr-2' }, 'Form was sent')]
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
