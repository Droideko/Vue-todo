<template>
  <div>
    <vk-button type="primary">Add</vk-button>
    <ol>
      <li v-for='user in users' :key='user.id'>
        {{ user.name }}
      </li>
    </ol>
    <router-link to="/">Перейти к Login</router-link>
    <input type='text' v-model='inputValue' />
  </div>
</template>

<script>
import HTTP from '../../services/HttpService';
import { Button } from 'vuikit/lib/button';

export default {
  name: 'Board',
  components: {
    VkButton: Button,
  },
  data() {
    return {
      inputValue: '',
      users: [
        {
          id: 0,
          name: 'David',
        },
        {
          id: 1,
          name: 'Sam',
        },
        {
          id: 2,
          name: 'Alex',
        },
      ],
    };
  },
  mounted() {
    HTTP.get('todos').then((response) => {
      console.log(response);
    });
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.my-class {
  color: red
}
</style>
