<template>
  <div>
    <Navigation />
    <div class="uk-container uk-container-xlarge uk-margin-top">
      <h1 class="uk-text-center">Todo list</h1>
      <hr class="uk-divider-icon" />
      <div class="uk-margin-bottom uk-flex uk-flex-right">
        <button
          class="uk-button uk-button-primary"
          @click="show = !show"
        >
          Create
        </button>
      </div>
      <div v-for='todo in todos' :key='todo.id'>
        <TodoItem
          :todo='todo'
          :getTodosList='getTodosList'
          :showDelete='showDelete'
          :closeShowDelete='closeShowDelete'
        />
      </div>
      <div v-if='!isLoaded' class="uk-flex uk-flex-center">
        <vk-spinner ratio="1.5"></vk-spinner>
      </div>
      <h2 v-else-if='!todos.length' class="uk-text-center">There are no Todos to display</h2>
    </div>
    <ModalCreateItem
      :show='show'
      :closeShow='closeShow'
      :getTodosList='getTodosList'
    />
    <ModalDeleteItem
      :showDelete='showDelete'
      :closeShowDelete='closeShowDelete'
      :getTodosList='getTodosList'
      :deleteId='deleteId'
    />
  </div>
</template>

<script>
import HTTP from '../../services/HttpService';
import Navigation from '../Navigation/Navigation';
import TodoItem from '../Board/TodoItem/TodoItem';
import ModalCreateItem from '../Board/ModalCreateItem/ModalCreateItem';
import ModalDeleteItem from '../Board/ModalDeleteItem/ModalDeleteItem';

export default {
  name: 'Board',
  components: {
    Navigation,
    TodoItem,
    ModalCreateItem,
    ModalDeleteItem,
  },
  data() {
    return {
      todos: [],
      isLoaded: false,
      show: false,
      showDelete: false,
      deleteId: null,
    };
  },
  mounted() {
    this.isLoaded = false;
    this.getTodosList();
  },
  methods: {
    closeShow() {
      this.show = false;
    },
    closeShowDelete(_, id) {
      this.deleteId = id;
      this.showDelete = !this.showDelete;
    },
    getTodosList() {
      HTTP.get('todos').then((data) => {
        this.todos = data;
      }).finally(() => {
        this.isLoaded = true;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
