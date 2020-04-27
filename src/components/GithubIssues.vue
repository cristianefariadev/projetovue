<template>
  <div class="container">
        <h1>Vue.js + Github</h1>
        <p class="lead">
            Página que lista issues de um repositório do Github, usando Vue.js.
        </p>

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

        <table class="table table-sm table-bordered">
            <thead>
            <tr>
                <th width="100">Número</th>
                <th>Título</th>
            </tr>
            </thead>

            <tbody>
            <tr>
                <td class="text-center" colspan="2">Nenhuma issue encontrada!</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: 'GithubIssues',

  data(){
    return{
      username: '',
      repository: ''

    }
  },
  methods:{
    reset() {
      this.username = '';
      this.repository = '';  
    },
    getIssues(){
      console.log('here')
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