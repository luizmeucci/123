<template>
<v-container class="pl-3 pr-3 green lighten-5">

  <v-card
    class="cards-coleta mx-auto mb-3 mt-3 "
    max-width="400"
    v-for="pontos of pontosColeta"
          :key="pontos.id"
  >
    <v-img
      class="white--text align-end "
      height="200px"
      :src="pontos.imagem"
    >
    
    </v-img>
    <v-card-title class="text-h5 font-weight-black mt-2 mb-3">{{pontos.nome}}</v-card-title>
    

    <v-card-subtitle class="text-subtitle-2 pb-0">
      {{pontos.endereco}} - CEP: {{pontos.cep.substring(0,5)
+"-"+pontos.cep.slice(5)}}
    </v-card-subtitle>

    <div class="chip" >
        <v-chip-group class="pl-4 pb-5 pt-4">
          
         
        <v-chip  color="green" text-color="white" v-if="pontos.categorias[0] != null">{{pontos.categorias[0].charAt(0).toUpperCase()}}{{pontos.categorias[0].slice(1)}}</v-chip>
        <v-chip  color="green" text-color="white" v-if="pontos.categorias[1]!= null">{{pontos.categorias[1].charAt(0).toUpperCase()}}{{pontos.categorias[1].slice(1)}}</v-chip>
        <v-chip  color="green" text-color="white" v-if="pontos.categorias[2] != null">{{pontos.categorias[2].charAt(0).toUpperCase()}}{{pontos.categorias[2].slice(1)}}</v-chip>
        <v-chip  color="green" text-color="white" v-if="pontos.categorias[3] != null">{{pontos.categorias[3].charAt(0).toUpperCase()}}{{pontos.categorias[3].slice(1)}}</v-chip>
        <v-chip  color="green" text-color="white" v-if="pontos.categorias[4] != null">{{pontos.categorias[4].charAt(0).toUpperCase()}}{{pontos.categorias[4].slice(1)}}</v-chip>

       </v-chip-group>
      </div>
    
  </v-card>
   
  </v-container>
  
</template>
<script>
export default {
  name: 'PontosColeta',
  data(){
    return {
      pontosColeta: []
    }
  },
  created() {
    fetch("https://it3kjy-default-rtdb.firebaseio.com/coletaSeletiva.json").then(
      (res) =>
        res.json().then((json) => {
          this.pontosColeta = json;
        })
    );
  },
 
}
</script>

<style scoped>
.cards-coleta{
  border-radius: 15px;
}

</style>