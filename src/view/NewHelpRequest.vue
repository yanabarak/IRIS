<template>
  <div class="main-block new-help-request">
    <div class="div col-12 p-0 d-flex flex-wrap align-items-center">
      <h4>New Help Request</h4>
      <div class="progress-container col-9 col-md-6 row gap-3 m-0 p-0 ms-auto my-4 my-md-0">
        <b-progress
          :value="progress1"
          max="100"
          height="10px"
          class="col p-0"
          :class="`active-progress-${activeStep}`"
        >
        </b-progress>
        <b-progress
          :value="progress2"
          max="100"
          height="10px"
          class="col p-0"
          :class="`active-progress-${activeStep}`"
        >
        </b-progress>
        <b-progress
          :value="progress3"
          max="100"
          height="10px"
          class="col p-0"
          :class="`active-progress-${activeStep}`"
        >
        </b-progress>
      </div>
    </div>
    <div class="scrollable-block">
      <div class="col-12 row mt-3 m-0 p-0">
        <b-form @submit.stop.prevent="onSubmit" class="col-12 col-md-6 mx-auto p-0">
          <div class="mb-3" v-if="!selectedType">
            <label for="type">To get started, choose the type of help you're requesting:</label>
            <v-select v-model="type" :options="type_options" id="type"></v-select>
            <b-button type="submit" variant="primary" class="mt-3 w-100" :disabled="!type"
              >To the next step</b-button
            >
          </div>

          <div v-else-if="transportation_form" class="mb-3">
            <h5>Next step: {{ this.type.label }} details</h5>
            <div class="mb-3">
              <label for="rideTo">I need a ride to <span class="mandatory">*</span></label>
              <b-form-input
                v-model="rideTo"
                id="rideTo"
                required
                :state="showError ? isValidRideTo : null"
              ></b-form-input>
              <b-form-invalid-feedback v-if="showError && !isValidRideTo">
                Your point must be longer than 5 characters.
              </b-form-invalid-feedback>
            </div>

            <div class="mb-3">
              <label for="fromPoint">I am from <span class="mandatory">*</span></label>
              <b-form-input
                v-model="fromPoint"
                id="fromPoint"
                required
                :state="showError ? isValidFromPoint : null"
              ></b-form-input>
              <b-form-invalid-feedback v-if="showError && !isValidFromPoint">
                Your point must be longer than 5 characters.
              </b-form-invalid-feedback>
            </div>

            <div class="mb-3">
              <label for="dateTransportation"
                >I want to be there on <span class="mandatory">*</span></label
              >
              <datetime
                type="datetime"
                input-id="dateTransportation"
                name="dateTransportation"
                :input-class="
                  showError && !isValidDateTransportation
                    ? 'form-control is-invalid'
                    : 'form-control'
                "
                v-model="dateTransportation"
                :min-datetime="new Date().toISOString()"
                :format="{
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric',
                  hour: 'numeric',
                  minute: '2-digit',
                }"
                :phrases="{ ok: 'Ok', cancel: 'Cancel' }"
              ></datetime>
              <b-form-invalid-feedback
                :class="showError && !isValidDateTransportation ? 'd-block' : 'd-none'"
              >
                Please select a future date.
              </b-form-invalid-feedback>
            </div>

            <div>
              <label for="description"
                >Details and description of the request <span class="mandatory">*</span></label
              >
              <b-form-textarea
                v-model="description"
                id="description"
                rows="3"
                max-rows="6"
                required
                :state="showError ? isValidDescription : null"
              ></b-form-textarea>
              <b-form-invalid-feedback v-if="showError && !isValidDescription">
                Your description must be longer than 5 characters.
              </b-form-invalid-feedback>
            </div>
            <b-button type="submit" variant="primary" class="mt-3 w-100">To the next step</b-button>
          </div>

          <div v-else-if="form_2" class="mb-3">
            <h5>Next step: {{ this.type.label }} details</h5>
            <div class="mb-3">
              <label for="description"
                >Details and description of the request <span class="mandatory">*</span></label
              >
              <b-form-textarea
                v-model="description"
                id="description"
                rows="3"
                max-rows="6"
                required
                :state="showError ? isValidDescription : null"
              ></b-form-textarea>
              <b-form-invalid-feedback v-if="showError && !isValidDescription">
                Your description must be longer than 5 characters.
              </b-form-invalid-feedback>
            </div>
            <div class="mb-3">
              <label for="dateRevalent"
                >Until when the request is revalent <span class="mandatory">*</span></label
              >
              <datetime
                input-id="dateRevalent"
                name="dateRevalent"
                type="date"
                :input-class="
                  showError && !isValiddateRevalent ? 'form-control is-invalid' : 'form-control'
                "
                :min-datetime="new Date().toISOString()"
                v-model="dateRevalent"
                :format="{
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric',
                }"
              ></datetime>
              <b-form-invalid-feedback
                :class="showError && !isValiddateRevalent ? 'd-block' : 'd-none'"
              >
                Please select a future date.
              </b-form-invalid-feedback>
            </div>
            <b-button type="submit" variant="primary" class="mb-3 w-100">Go to next step</b-button>
          </div>

          <div v-else class="mb-3">
            <h5>Personal details</h5>
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
              <label for="Phone" :class="computedState"
                >Phone <span class="mandatory">*</span></label
              >

              <vue-tel-input
                v-model="Phone"
                :required="true"
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
              <label for="Comments">Comments:</label>
              <b-form-textarea
                v-model="Comments"
                id="Comments"
                rows="3"
                max-rows="6"
              ></b-form-textarea>
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
              <b-form-group label="You can contact me at">
                <b-form-checkbox-group
                  v-model="selectedMethods"
                  :options="options"
                  name="selectedMethods"
                ></b-form-checkbox-group>
              </b-form-group>
            </div>
            <b-button type="submit" variant="primary" class="mb-3 w-100"
              >Create new help request</b-button
            >
          </div>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showError: false,
      selectedType: false,
      transportation_form: false,
      form_2: false,
      personal_details: false,
      type: null,
      rideTo: '',
      fromPoint: '',
      dateTransportation: '',
      dateRevalent: '',
      description: '',
      residential_address: '',
      type_options: [
        { value: '1', label: 'Transportation' },
        { value: '2', label: 'Transfer of equipment' },
        { value: '3', label: 'Clothing' },
        { value: '4', label: 'Baby equipment' },
        { value: '5', label: 'Toiletries' },
        { value: '6', label: 'Medical equipment' },
      ],
      fullName: '',
      Phone: '',
      isValidP: false,
      Email: '',
      Comments: '',
      ResidentialAddress: '',
      CurrentAddress: '',
      status: '',
      selectedMethods: [],
      options: [
        { text: 'Phone', value: 'phone' },
        { text: 'WhatsApp', value: 'whatsapp' },
      ],
      inputOptions: {
        placeholder: '',
      },
      activeStep: 0,
      progress1: 0,
      progress2: 0,
      progress3: 0,
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
    isValidDateTransportation() {
      return !(this.dateTransportation.length <= 0);
    },
    isValiddateRevalent() {
      return !(this.dateRevalent.length <= 0);
    },
    isValidDescription() {
      return this.description.length >= 5;
    },
    isValidRideTo() {
      return this.rideTo.length >= 5;
    },
    isValidFromPoint() {
      return this.fromPoint.length >= 5;
    },

    progress() {
      const totalFields = this.getTotalFields();
      const filledFields = this.getFilledFields();
      return totalFields > 0 ? Math.round((filledFields / totalFields) * 100) : 0;
    },
  },
  methods: {
    async updateProgress() {
      // Wait until the DOM is fully updated

      // Trigger reactivity for progress calculation
      this.progress;
    },

    getTotalFields() {
      if (!this.selectedType) {
        return 1; // Step 1: Only 1 required field (type selection)
      } else if (this.transportation_form) {
        return 4; // Step 2: 4 fields for transportation type + 5 personal details fields
      } else if (this.form_2) {
        return 2; // Step 2: 2 fields for other types + 5 personal details fields
      } else if (this.personal_details) {
        return 5;
      }
      return 0;
    },

    getFilledFields() {
      let filledCount = 0;

      // Step 1: Type selection
      if (!this.selectedType && this.type) {
        filledCount += 1;
        this.activeStep = 1;
      }

      // Step 2: Transportation form
      if (this.transportation_form) {
        filledCount += this.rideTo ? 1 : 0;
        filledCount += this.fromPoint ? 1 : 0;
        filledCount += this.dateTransportation ? 1 : 0;
        filledCount += this.description ? 1 : 0;
        this.activeStep = 2;
      }

      // Step 2: Form 2 for other types
      if (this.form_2) {
        filledCount += this.dateRevalent ? 1 : 0;
        filledCount += this.description ? 1 : 0;
        this.activeStep = 2;
      }

      // Step 3: Personal details
      if (this.personal_details) {
        if (this.fullName) filledCount++;
        if (this.Phone) filledCount++;
        if (this.Comments) filledCount++;
        if (this.ResidentialAddress) filledCount++;
        if (this.selectedMethods.length > 0) filledCount++;
        this.activeStep = 3;
      }

      return filledCount;
    },
    isValidPhone(object) {
      if (object.valid !== undefined) {
        this.isValidP = object.valid; // Ensure it's consistent
        return this.isValidP;
      }
      return false;
    },
    onSubmit() {
      if (!this.selectedType && this.type) {
        this.selectedType = true;
        if (this.type.value === '1' || this.type.value === '2') {
          this.transportation_form = true;
        } else {
          this.form_2 = true;
        }
      } else if (this.transportation_form) {
        if (
          this.isValidRideTo &&
          this.isValidFromPoint &&
          this.isValidDateTransportation &&
          this.isValidDescription
        ) {
          this.transportation_form = false;
          this.personal_details = true;
          this.showError = false;
        } else {
          this.showError = true;
        }
      } else if (this.form_2) {
        if (this.isValiddateRevalent && this.isValidDescription) {
          this.form_2 = false;
          this.personal_details = true;
          this.showError = false;
        } else {
          this.showError = true;
        }
      } else if (this.personal_details) {
        if (
          this.isValid &&
          this.isValidA &&
          this.computedState != 'wrong-number' &&
          this.Phone.length > 0
        ) {
          this.showToast();
          this.showError = false;
          this.selectedType = false;
          this.transportation_form = false;
          (this.form_2 = false), (this.personal_details = false);
          this.type = null;
          this.rideTo = '';
          this.fromPoint = '';
          this.dateTransportation = '';
          this.dateRevalent = '';
          this.description = '';
          this.residential_address = '';
          this.fullName = '';
          this.Phone = '';
          this.isValidP = false;
          this.Email = '';
          this.Comments = '';
          this.ResidentialAddress = '';
          this.CurrentAddress = '';
          this.status = '';
          this.selectedMethods = [];
          this.activeStep = 0;
          this.progress1 = 0;
          this.progress2 = 0;
          this.progress3 = 0;
        } else {
          this.showError = true;
        }
      }
      this.updateProgress();
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
  mounted() {
    // Initialize progress on load
    this.updateProgress();
  },

  watch: {
    activeStep(newStep) {
      if (newStep === 1) {
        this.progress1 = this.progress;
        this.progress2 = 0;
        this.progress3 = 0;
      } else if (newStep === 2) {
        this.progress1 = 100;
        this.progress2 = this.progress;
        this.progress3 = 0;
      } else if (newStep === 3) {
        this.progress1 = 100;
        this.progress2 = 100;
        this.progress3 = this.progress;
      }
    },
    progress(newProgress) {
      if (this.activeStep === 1) {
        this.progress1 = newProgress;
      } else if (this.activeStep === 2) {
        this.progress2 = newProgress;
      } else if (this.activeStep === 3) {
        this.progress3 = newProgress;
      }
    },
  },
};
</script>
