<template>
  <vk-modal :show.sync="showDelete" center stuck>
    <h3>Are your sure to delete Todo?</h3>
    <p class="uk-text-right">
      <vk-button
        class="uk-margin-small-right"
        @click="closeShowDelete"
      >
        Cancel
      </vk-button>
      <vk-button
        @click="handleDelete"
        type="danger"
      >
        Delete
      </vk-button>

    </p>
  </vk-modal>
</template>

<script>
import HTTP from '../../../services/HttpService';

export default {
  name: 'ModalDeleteItem',
  props: {
    showDelete: Boolean,
    closeShowDelete: Function,
    getTodosList: Function,
    deleteId: String,
  },
  methods: {
    handleDelete() {
      const params = { id: this.deleteId };
      HTTP.delete('todos/delete', { params })
        .then(() => this.getTodosList())
        .finally(() => {
          this.closeShowDelete();
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
