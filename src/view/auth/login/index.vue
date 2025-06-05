<template>
  <div class="login w-100 h-100 d-flex">
    <section class="login auth col-12 mx-auto align-self-md-center col-md-7 col-xl-5 col-xxl-4">
      <div class="half-design row">
        <div class="col-12 form-block">
          <div class="logo col-auto p-0">
            <img src="@/assets/logo_full.svg" alt="logo" height="70px" class="mx-auto" />
          </div>
          <p class="text-center mt-3">
            Welcome to the purple vest app of the Israel Accessibility Association - to help people
            with disabilities in emergencies. Here you can help people with disabilities all over
            the country. Your help will significantly help the mission of the purple vest - to leave
            no one behind!
          </p>

          <b-form @submit.stop.prevent="onSubmit" class="col-12 col-md-9 mx-auto">
            <div class="mb-3 text-center" v-if="!submitted">
              <label for="Phone" :class="computedState"
                >Enter a phone number to receive a code via SMS</label
              >
              <!-- Vue Tel Input Component -->
              <vue-tel-input
                v-model="Phone"
                id="Phone"
                :inputOptions="inputOptions"
                :valid-characters-only="true"
                @input="resetError"
                @validate="onPhoneValidation"
                required
              />
              <!-- Feedback -->
              <b-form-invalid-feedback :state="computedState != 'wrong-number'">
                Your phone number is invalid. It must be valid to continue.
              </b-form-invalid-feedback>
            </div>
            <div v-else class="mb-3 text-center">
              <label>Please enter your otp!</label>
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
            </div>
            <b-button type="submit" variant="primary" class="mb-3 w-100">
              {{ submitted ? 'Verify Code' : 'Get Code' }}
            </b-button>
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
      isValidP: false,
      submitted: false,
      showError: false,
      otpVerified: null,
      inputOptions: {
        placeholder: 'Enter your phone number',
        autofocus: true,
      },
      value: null,
      // define options
      options: [
        {
          id: 'a',
          label: 'a',
          children: [
            {
              id: 'aa',
              label: 'aa',
            },
            {
              id: 'ab',
              label: 'ab',
            },
          ],
        },
        {
          id: 'b',
          label: 'b',
        },
        {
          id: 'c',
          label: 'c',
        },
      ],
      otp: {
        code1: null,
        code2: null,
        code3: null,
        code4: null,
      },
    };
  },
  computed: {
    computedState() {
      if (!this.showError) return 'no-result';
      return this.isValidP ? 'correct' : 'wrong-number';
    },
  },
  mounted() {
    const message = this.$route.query.toast;
    if (message) {
      this.$bvToast.toast(message, {
        title: 'Success',
        variant: 'success',
        autoHideDelay: 3000,
      });
    }
  },
  methods: {
    onPhoneValidation({ valid }) {
      this.isValidP = valid;
    },
    resetError() {
      this.showError = false;
    },
    clearSelect(node, instanceI) {
      console.log(this);
    },
    onSubmit() {
      this.showError = true;

      if (!this.submitted && this.isValidP) {
        this.submitted = true;

        this.$bvToast.toast('Enter any four numbers :)', {
          title: 'Success',
          variant: 'success',
          autoHideDelay: 3000,
        });
        this.$nextTick(() => {
          const firstOtpInput = this.$el.querySelector('.text-code');
          if (firstOtpInput) {
            firstOtpInput.focus();
          }
        });
      } else if (this.submitted) {
        const otpValue = `${this.otp.code1}${this.otp.code2}${this.otp.code3}${this.otp.code4}`;
        if (otpValue) {
          this.otpVerified = true;
          this.$store.dispatch('setUnAuthorized', true);
          this.$router.push({ path: 'dashboard', query: { toast: 'Welcome on the boat!' } });
        } else {
          this.otpVerified = false;
        }
      }
    },
    handleInput(codeField, event) {
      const target = event.target;

      if (!target) return; // Safety check
      let value = target.value;

      // Ensure input is a single digit 0-9
      if (!/^\d$/.test(value)) {
        this.otp[codeField] = ''; // Reset invalid input
        return;
      }

      this.otp[codeField] = value; // Update the model

      // Focus next input if available
      const nextInput = target.nextElementSibling;
      if (nextInput && nextInput.tagName === 'INPUT') {
        nextInput.focus();
      }
    },
    handleKeyDown(codeField, event) {
      const target = event.target;

      // Handle backspace to focus previous field if empty
      if (event.key === 'Backspace' && !this.otp[codeField]) {
        const previousInput = target.previousElementSibling;
        if (previousInput && previousInput.tagName === 'INPUT') {
          previousInput.focus();
        }
      }
    },
  },
};
</script>
