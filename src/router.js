import Vue from 'vue';
import VueRouter from 'vue-router';
import Auth from './components/Auth.vue';
import Analitics from './components/Analitics.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/', component: Auth, name: 'auth', props: true,
  },
  { path: '/analitics', component: Analitics, name: 'analitics' },
];

const router = new VueRouter({
  routes,
});

export default router;
