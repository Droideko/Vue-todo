import Vue from 'vue';
import Router from 'vue-router';
import Board from '@/components/Board/Board';
import Login from '../components/Login/Login';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/board',
      name: 'Board',
      component: Board,
    },
  ],
});
