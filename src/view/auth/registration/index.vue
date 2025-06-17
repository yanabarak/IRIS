<template>
  <div class="register w-100 h-100 d-flex">
    <section class="auth col-12 mx-auto align-self-md-center col-md-7 col-xl-5 col-xxl-4">
      <div class="half-design row">
        <div class="col-12 form-block">
          <div class="logo col-auto p-0">
            <img src="@/assets/logo_full.svg" alt="logo" height="70px" class="mx-auto" />
          </div>
          <p class="text-center mt-3">
            Register to help people with disabilities in emergencies.<br />
            Join us in making a difference!
          </p>

          <b-form @submit.stop.prevent="onSubmit" class="col-12 col-md-9 mx-auto">
            <div class="mb-3" v-if="!phoneVerified">
              <label for="Phone" :class="computedState"
                >Enter phone number to receive a code via SMS</label
              >
              <vue-tel-input
                v-model="Phone"
                id="Phone"
                :inputOptions="inputOptions"
                :valid-characters-only="true"
                @input="resetError"
                @validate="onPhoneValidation"
                required
              />
              <b-form-invalid-feedback :state="computedState != 'wrong-number'">
                Invalid phone number. Please enter a valid one.
              </b-form-invalid-feedback>
              <b-button type="submit" variant="primary" class="mt-3 w-100">Get Code</b-button>
            </div>

            <div v-else-if="!otpVerified" class="mb-3">
              <label>Enter the verification code</label>
              <div class="d-flex gap-3 text-center">
                <b-form-input
                  type="text"
                  class="form-control base-input text-code"
                  v-model="otp.code1"
                  :state="otpVerified"
                  @input.native="e => handleInput('code1', e)"
                  @keydown.native="e => handleKeyDown('code1', e)"
                  maxlength="1"
                />
                <b-form-input
                  type="text"
                  class="form-control base-input text-code"
                  v-model="otp.code2"
                  :state="otpVerified"
                  @input.native="e => handleInput('code2', e)"
                  @keydown.native="e => handleKeyDown('code2', e)"
                  maxlength="1"
                />
                <b-form-input
                  type="text"
                  class="form-control base-input text-code"
                  v-model="otp.code3"
                  :state="otpVerified"
                  @input.native="e => handleInput('code3', e)"
                  @keydown.native="e => handleKeyDown('code3', e)"
                  maxlength="1"
                />
                <b-form-input
                  type="text"
                  class="form-control base-input text-code"
                  v-model="otp.code4"
                  :state="otpVerified"
                  @input.native="e => handleInput('code4', e)"
                  @keydown.native="e => handleKeyDown('code4', e)"
                  maxlength="1"
                />
              </div>
              <b-button type="submit" variant="primary" class="mt-3 w-100">Verify Code</b-button>
            </div>

            <div v-else>
              <b-form-group label="Disability" label-for="disability">
                <v-select v-model="disability_id" :options="disabilities" required></v-select>
              </b-form-group>

              <b-form-group label="Full Name" label-for="full-name">
                <b-form-input v-model="full_name" id="full-name" required></b-form-input>
              </b-form-group>

              <b-form-group label="Email" label-for="email">
                <b-form-input type="email" v-model="email" id="email"></b-form-input>
              </b-form-group>

              <b-form-group label="Residential Address" label-for="address">
                <b-form-input v-model="residential_address" id="address" required></b-form-input>
              </b-form-group>

              <b-button type="submit" variant="primary" class="mb-3 w-100">Register</b-button>
            </div>
          </b-form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Phone: '',
      disability_id: '',
      full_name: '',
      email: '',
      residential_address: '',
      isValidP: false,
      phoneVerified: false,
      otpVerified: null,
      showError: false,
      inputOptions: {
        placeholder: 'Enter your phone number',
        autofocus: true,
      },
      otp: {
        code1: null,
        code2: null,
        code3: null,
        code4: null,
      },
      disabilities: [
        { value: '1', label: 'Mobility Impairment' },
        { value: '2', label: 'Visual Impairment' },
        { value: '3', label: 'Hearing Impairment' },
        { value: '4', label: 'Cognitive Disability' },
      ],
    };
  },
  computed: {
    computedState() {
      if (!this.showError) return 'no-result';
      return this.isValidP ? 'correct' : 'wrong-number';
    },
  },
  methods: {
    onPhoneValidation({ valid }) {
      this.isValidP = valid;
    },
    resetError() {
      this.showError = false;
    },
    onSubmit() {
      this.showError = true;

      if (!this.phoneVerified && this.isValidP) {
        this.phoneVerified = true;
      } else if (this.phoneVerified && !this.otpVerified) {
        const otpValue = `${this.otp.code1}${this.otp.code2}${this.otp.code3}${this.otp.code4}`;
        if (otpValue === '1234') {
          this.otpVerified = true;
        } else {
          this.otpVerified = false;
        }
      } else if (this.otpVerified) {
        alert('Registration successful!');
        // Handle registration logic here
      }
    },
    handleInput(codeField, event) {
      const value = event.target.value;
      if (!/^\d$/.test(value)) {
        this.otp[codeField] = '';
        return;
      }
      this.otp[codeField] = value;

      const nextInput = event.target.nextElementSibling;
      if (nextInput && nextInput.tagName === 'INPUT') {
        nextInput.focus();
      }
    },
    handleKeyDown(codeField, event) {
      if (event.key === 'Backspace' && !this.otp[codeField]) {
        const previousInput = event.target.previousElementSibling;
        if (previousInput && previousInput.tagName === 'INPUT') {
          previousInput.focus();
        }
      }
    },
  },
};
</script>
