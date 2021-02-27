<template>
  <div>
    <Navigation />
    <div class="uk-container uk-container-xlarge uk-margin-top">
      <h1 class="uk-text-center">Todo list</h1>
      <hr class="uk-divider-icon" />
      <div v-for='todo in todos' :key='todo.id'>
        <TodoItem :todo='todo'/>
      </div>
    </div>
  </div>
</template>

<script>
import HTTP from '../../services/HttpService';
import Navigation from '../Navigation/Navigation';
import TodoItem from '../Board/TodoItem/TodoItem';

export default {
  name: 'Board',
  components: {
    Navigation,
    TodoItem,
  },
  data() {
    return {
      todos: [],
    };
  },
  mounted() {
    HTTP.get('todos').then((data) => {
      this.todos = data;
    });
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
