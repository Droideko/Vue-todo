<template>
  <div class="uk-card uk-card-small uk-card-default uk-card-body uk-margin-bottom">
    <h3 class="uk-card-title">{{ todo.title }} </h3>
    <p>{{ todo.description }}</p>
    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
      <label>
        <input
          class="uk-checkbox"
          type="checkbox"
          :checked='todo.isDone'
        >
        {{ todo.isDone ? 'Done' : 'In progress' }}
      </label>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TodoItem',
  props: {
    todo: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
