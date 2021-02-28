<template>
  <div class="uk-card uk-card-small uk-card-default uk-card-body uk-margin-bottom">
    <div class="uk-flex uk-flex-between">
      <h3 class="uk-card-title">{{ todo.title }} </h3>
      <span>Created at: <b>{{ getTime(todo.createdAt) }}</b></span>
    </div>
    <p>{{ todo.description }}</p>
    <div class="uk-flex uk-flex-between">
      <label>
        <input
          class="uk-checkbox"
          type="checkbox"
          :checked='todo.isDone'
          @click='handleChange(todo.id)'
        >
        {{ todo.isDone ? 'Done' : 'In progress' }}
      </label>
      <vk-icon-button
        class="uk-margin-small-center icon-red"
        icon="trash"
        @click="closeShowDelete($event, todo.id)"
      >
      </vk-icon-button>
    </div>
  </div>
</template>

<script>
import HTTP from '../../../services/HttpService';
import ModalDeleteItem from '../ModalDeleteItem/ModalDeleteItem';
import { DateTime } from 'luxon';

export default {
  name: 'TodoItem',
  props: {
    todo: Object,
    getTodosList: Function,
    showDelete: Boolean,
    closeShowDelete: Function,
  },
  components: {
    ModalDeleteItem,
  },
  data() {
    return {
      show: false,
      test: DateTime.now(),
    };
  },
  methods: {
    handleChange(id) {
      HTTP.put('todos/edit', { id })
        .then(() => this.getTodosList());
    },
  },
  computed: {
    getTime() {
      return date => DateTime.fromISO(date).setLocale('en-US').toLocaleString(DateTime.DATETIME_MED);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon-red {
  color: darkred;
}

</style>
