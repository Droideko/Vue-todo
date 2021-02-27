<template>
  <vk-modal :show.sync="show" center>
    <vk-modal-title>Create new Todo</vk-modal-title>
    <form
      class="uk-form-stacked"
      @submit.prevent="onSubmit"
    >
      <div class="uk-margin">
        <label class="uk-form-label" for="form-stacked-text">Title</label>
        <div class="uk-form-controls">
          <input
            v-model="title"
            type="text"
            class="uk-input"
            id="form-stacked-text"
            placeholder="Enter title...">
        </div>
      </div>
      <div class="uk-margin">
        <label class="uk-form-label" for="form-stacked-text">Description</label>
        <div class="uk-form-controls">
          <input
            v-model="description"
            type="text"
            class="uk-input"
            id="form-stacked-text"
            placeholder="Enter description...">
        </div>
      </div>
      <p>
        <span v-if='errors.length' class="uk-text-danger">
          {{ errors[0] }}
        </span>
        &nbsp;
      </p>
      <p class="uk-text-right">
        <vk-button
          class="uk-margin-small-right"
          @click="closeShow"
        >
          Cancel
        </vk-button>
        <button
          type="submit"
          class="uk-button uk-button-primary"
        >
          Log in
        </button>
      </p>
    </form>
  </vk-modal>
</template>

<script>
import HTTP from '../../../services/HttpService';

export default {
  name: 'ModalCreateItem',
  props: {
    show: Boolean,
    closeShow: Function,
    getTodosList: Function,
  },
  data() {
    return {
      title: '',
      description: '',
      errors: [],
    };
  },
  methods: {
    onSubmit() {
      if (!this.isValidForm()) return;
      const body = {
        title: this.title,
        description: this.description,
      };
      HTTP.post('todos/add', body)
        .then(() => this.getTodosList())
        .finally(() => {
          this.getEmptyForm();
          this.closeShow();
        });
    },

    isValidForm() {
      this.errors = [];

      if (!this.title) {
        this.errors.push('Enter your title');
      }

      if (!this.description) {
        this.errors.push('Enter your description');
      }

      return !this.errors.length;
    },

    getEmptyForm() {
      this.title = '';
      this.description = '';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
