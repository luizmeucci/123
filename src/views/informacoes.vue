<template>
  <v-container class="teste">
    <div class="card" v-for="tipo of tipos" :key="tipo.id">

    <v-card max-width="374" max-height="474">
    <v-img v-bind:src="tipo.url" v-bind:alt="tipo.nome"
              height="150"
            ></v-img>
 
      <div class="title"><v-card-title key="{{tipo.nome}}">{{tipo.nome}}</v-card-title></div>
 
      <v-card-text>
        <v-row align="center" class="mx-0"></v-row>
 
        <div> <p class="font-weight-regular" key="{{tipo.texto}}">{{tipo.texto}}</p></div>
 
      </v-card-text>
 
        <v-col cols="12" sm="6">
            <div class="my-2">
                <v-btn small v-bind:href="tipo.link">Saiba mais
                </v-btn>
            </div>
        </v-col>
 
      </v-card>
    </div>
    </v-container>
</template>
 
 
<script>
  export default {
    data(){
        return{
            tipos: [
              {
                id: 1,
                nome: "Você sabe separar o lixo?",
                url: 'https://zh.rbsdirect.com.br/imagesrc/20897761.jpg?w=580', 
                texto: "Como separar o lixo doméstico? Nesta página você encontra informações sobre os tipos de resíduos e como separá-los. Clique nos botões de saiba mais para ter mais informações sobre o tema.", 
                link: "https://aguasustentavel.org.br/publicacoes/blog/53-5-fato-sobre-sustentabilidade-que-vc-precisa-saber?gclid=CjwKCAiA4rGCBhAQEiwAelVti-ykO6mghBLoKijJqd3ObY8rgmEWn4MrYuJHqqNAVwUaBLSiqJt5ABoCbcMQAvD_BwE",
            },
              {
                id: 2,
                nome: "Reciclável",
                url: 'https://fundacaoverde.org.br/pages/cidadesustentavel/wp-content/uploads/sites/2/2019/06/lixo_reciclavel.jpg', 
                texto: "O lixo reciclável é composto principalmente pelo papel, papelão, vidro, alguns tipos de plástico e alumínio. Para saber se a embalagem é reciclável, procure por um símbolo com três setas representando um círculo. Após isso, higienize o material.", 
                link: "https://beegreen.eco.br/por-que-e-importante-limpar-as-embalagens-antes-de-encaminha-las-para-reciclagem/",
            },
              {
              id: 3,
              nome: 'Orgânico',
              url: 'https://sustentavel.com.br/wp-content/uploads/2018/09/lixo-organico.jpg',
              texto: "Pode ser classificado como resíduo orgânico qualquer material de origem animal ou vegetal, e materiais que já foram utilizados. Portanto, entram nesse grupo resíduos de alimentos (como restos de carnes, frutas e vegetais).",
              link: "https://www.casapraticaqualita.com.br/noticia/o-que-fazer-com-lixo-organico-4-sugestoes-para-ser-mais-sustentavel_a916/1",
              },
              {
              id: 4,
              nome: 'Óleo de cozinha',
              url: 'https://grupoqualityambiental.com.br/wp-content/uploads/2019/08/oleo_cozinha.jpg',
              texto: "Sem contar que a sujeira atrai insetos, baratas e ratos. Por isso nunca jogue o óleo de cozinha em ralos, pias ou no solo. O correto é guardar o óleo usado em garrafas de refrigerante (PET) e fazer o descarte em locais próprios para a coleta.",
              link: "https://www.reciclasampa.com.br/artigo/por-que-reciclar-o-oleo-de-cozinha",
              },
              {
              id: 5,
              nome: 'Baterias e pilhas',
              url: 'https://eccaplan.com.br/blog/wp-content/uploads/2017/10/1-lixo-especial.jpg',
              texto: "Veja se na embalagem consta que a pilha pode ser descartada no lixo comum. As pilhas do tipo alcalinas não contém metais pesados em sua composição. Já as pilhas comuns, como as recarregáveis, possuem mercúrio, cádmio e chumbo, e devem ser devolvidas ao fabricante ou a um centro especializado.",
              link: "https://unig.br/wp-content/uploads/pilhas_baterias.pdf",
              },

            ]
        }
    }
}

</script>
 
<style>
.font-weight-regular{
  color: black;
  text-align: justify;
  padding: 3px;
}
.title{
  padding: 2px;
}
.chip{
  align-self: center;
}
.teste{
  background-color: #E8F5E9;
}
.card{
  margin: 3px;
}
.v-img{
  border: 10cm;
  padding: 10cm;
  margin: 10cm;
}
</style>