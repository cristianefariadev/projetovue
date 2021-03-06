import Vue from 'vue';
import VueRouter from 'vue-router';

import GithubIssues from './components/GithubIssues.vue';
import DetailsIssues from './components/DetailsIssues.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes:[
    {
      path:'/detalhes',
      name: 'DetailsIssues',
      component: DetailsIssues 
    },
    {
      path:'/',
      name: 'Home',
      component: GithubIssues
    },
  ]
})