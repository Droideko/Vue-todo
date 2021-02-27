import Vue from 'vue';
import Vuikit from 'vuikit';
import Router from 'vue-router';
import Board from '@/components/Board/Board';
import Login from '../components/Login/Login';
import '@vuikit/theme';

Vue.use(Router);
Vue.use(Vuikit);

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
