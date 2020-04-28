<template>
  <div>
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
          <tr v-for="issue in issues" :key="issue.number">
            <td>{{ issue.number }}</td>
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

export default {
  name: 'GithubIssues',

  data(){
    return{
      username: '',
      repository: '',
      issues: [],

    }
  },
  computed: {
    showIssues() {
        return !!this.issues.length;
    },

    noIssues() {
        return !this.issues.length;
    },
  },
  methods:{
    reset() {
      this.username = '';
      this.repository = '';  
    },
    getIssues(){
      const url = `https://api.github.com/repos/${this.username}/${this.repository}/issues`;
      axios.get(url).then((response) => {
        this.issues = response.data;
      });
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 button:nth-child(1){
   margin-right: 8px;
 }

</style>