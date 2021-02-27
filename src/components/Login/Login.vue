<template>
  <div class="uk-container uk-flex uk-flex-center">
    <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m">
      <h3 class="uk-card-title uk-text-center">Log in</h3>
      <form
        class="uk-form-stacked"
        @submit.prevent="onSubmit"
      >
        <div class="uk-margin">
          <label class="uk-form-label" for="form-stacked-text">Email</label>
          <div class="uk-form-controls">
            <input
              v-model="formInputs.email"
              type="email"
              class="uk-input"
              id="form-stacked-text"
              placeholder="Enter email...">
          </div>
        </div>
        <div class="uk-margin">
          <label class="uk-form-label" for="form-stacked-text">Password</label>
          <div class="uk-form-controls">
            <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
            <input
              v-model="formInputs.password"
              class="uk-input"
              id="form-stacked-text"
              type="password"
              placeholder="Enter password..."
            >
          </div>
        </div>
        <button
          type="submit"
          class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom"
        >
          Log in
        </button>
        <p class="uk-text-danger" v-if='true'>
          {{ errors[0] }}
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import HTTP from '../../services/HttpService';
import storage from '../../services/StorageService';
import { KEY_SESSION } from '../../constants/storage';
import { EMAIL_PATTERN } from '../../constants/patterns';

export default {
  name: 'Login',
  data() {
    return {
      errors: [],
      formInputs: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    onSubmit() {
      if (!this.isValidForm()) return;

      const { email, password } = this.formInputs;

      HTTP.post('sessions', { email, password })
        .then(({ token }) => {
          storage.setItem(KEY_SESSION, token);
          this.$router.push({ path: 'board' });
        });
    },

    isValidForm() {
      this.errors = [];

      const { email, password } = this.formInputs;

      if (!email) {
        this.errors.push('Enter your email');
      } else if (!this.isValidEmail(email)) {
        this.errors.push('Email is not valid');
      }

      if (!password) {
        this.errors.push('Enter your password');
      }

      return !this.errors.length;
    },

    isValidEmail(email) {
      return EMAIL_PATTERN.test(email);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
