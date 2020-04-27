import Vue from 'vue';
import VueRouter from 'vue-router';
import GithubIssues from './GithubIssues/GithubIssues.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes:[
    {
      path:'/',
      name: 'GitubIssues',
      components: GithubIssues

    }
  ]
})