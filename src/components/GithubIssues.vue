<template>
  <div>
    <div v-if="response.status === 'error'" class="alert alert-danger">
      {{ response.message }}
    </div>

    <div class="row">
        <div class="col">
            <div class="form-group">
                <input v-model="username"
                type="text" class="form-control" placeholder="github username">
            </div>
        </div>
        <div class="col">
            <div class="form-group">
                <input v-model="repository"
                type="text" class="form-control" placeholder="github repositório">
            </div>
        </div>
        <div class="col-3">
            <div class="form-group">
                <button @click.prevent.stop="getIssues()" class="btn btn-success">GO </button>
                <button @click.prevent.stop="reset()" class="btn btn-danger"> LIMPAR</button>
                
            </div>
        </div>
    </div>

    <br><hr><br>


    <table class="table table-sm table-bordered" v-if="showIssues">
        <thead>
        <tr>
            <th width="100">Número</th>
            <th>Título</th>
        </tr>
        </thead>

        <tbody>
          <tr v-if="loader.getIssues">
            <td class="text-center" colspan="2"><img src="../assets/loading.svg" alt="Loading"></td>
          </tr>
          <tr 
          v-for="issue in issues" 
          :key="issue.number">
             <router-link :to="{ name: 'DetailsIssues',
                    params: {
                        name: username,
                        repo: repository,
                        issue: issue.number
                    }}">
                  {{ issue.number }}
              </router-link>
            <td>{{ issue.title }}</td>
          </tr>
        </tbody>
    </table>

    <p v-if="noIssues">
      Nenhuma issue encontrada!
    </p>

  </div>
</template>

<script>
import axios from 'axios'
import api from '../services/api'

export default {
  name: 'GithubIssues',

  created() {
    this.getLocalData();
  },

  data(){
    return{
      username: '',
      repository: '',
      issues: [],
      response: {
        status: '',
        message: '',
      },
      loader: {
        getIssues: false,
      },
    }
  },
  computed: {
    showIssues() {
        return !!this.issues.length && !this.loader.getIssues;
    },
    noIssues() {
        return !this.issues.length && !this.loader.getIssues;
    },
  },
  methods:{
    reset() {
      this.username = '';
      this.repository = ''; 
      localStorage.removeItem('gitHubIssues'); 
    },
    resetResponse() {
        this.response.status = '';
        this.response.message = '';
    },
    getIssues() {
      this.resetResponse();
      this.issues = [];

      if (this.username && this.repository) {
          localStorage.setItem('gitHubIssues', JSON.stringify({ username: this.username, repository: this.repository }));
          this.loader.getIssues = true;
          const url = `${api.apiURL}/repos/${this.username}/${this.repository}/issues`;
          axios.get(url).then((response) => {
              this.issues = response.data;
          }).catch((error) => {
              console.log(error.response.data);
              this.response.status = 'error';
              this.response.message = 'Repositório não existe!';
          }).finally(() => {
              this.loader.getIssues = false;
          });
        }
      },
      getLocalData() {
          const localData = JSON.parse(localStorage.getItem('gitHubIssues'));
          if (localData && localData.username && localData.repository) {
              this.username = localData.username;
              this.repository = localData.repository;
              this.getIssues();
          }
      },
    
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 button:nth-child(1){
   margin-right: 8px;
 }
</style>