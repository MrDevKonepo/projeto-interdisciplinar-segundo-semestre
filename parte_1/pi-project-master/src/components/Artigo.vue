<template>
  <v-container>
    <v-row>
      <v-col v-for="card in cards" :key="card" cols="4">
        <v-card
        class="mx-auto"
      >
        <v-card-title v-text="card.title"></v-card-title>
    
        <v-card-subtitle>
          Recente
        </v-card-subtitle>
    
        <v-card-actions>
          <v-btn
          target="_blank"
          :href="card.link"
            color="orange-lighten-2"
            variant="text"
          >
            Explore
          </v-btn>
        </v-card-actions>
      </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        title: "5 MOTIVOS PARA APRENDER PROGRAMAÇÃO",
        link: "https://kenzie.com.br/blog/porque-aprender-programacao-conheca-5-motivos/",
      },
      {
        title: "13 ERROS COMUNS AO ESTUDAR PROGRAMAÇÃO",
        link: "https://blog.betrybe.com/carreira/erros-no-estudo-de-programacao/",
      },
      {
        title: "COM ALTO NÍVEL DE EMPREGABILIDADE, PROGRAMAÇÃO SEGUE NA CONTRAMÃO DA CRISE",
        link: "https://adnews.com.br/com-alto-nivel-de-empregabilidade-programacao-segue-na-contramao-da-crise/",
      },
    ],
  }),
};
</script>
