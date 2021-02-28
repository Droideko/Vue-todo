<template>
  <div class="uk-card uk-card-small uk-card-default uk-card-body uk-margin-bottom">
    <h3 class="uk-card-title">{{ todo.title }} </h3>
    <p>{{ todo.description }}</p>
    <div class="uk-flex uk-flex-between">
      <label>
        <input
          class="uk-checkbox"
          type="checkbox"
          :checked='todo.isDone'
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
import ModalDeleteItem from '../ModalDeleteItem/ModalDeleteItem';

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
    };
  },
  methods: {

  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon-red {
  color: darkred;
}

</style>
