<template>
    <v-container>
        <v-row>
          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268">
              <!--  -->
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="8">
            <v-sheet min-height="70vh" rounded="lg" class="text-center pa-md-4 mx-lg-auto">
                <p class="text-h5 " v-text="text.title"></p>
                    <p v-text="text.content" class="mt-2"></p>
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268">
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
export default {
  data: () => ({
    text: {
      title: "Introdução",
      content:
        "Acreditamos que através da educação é possível preparar os cidadãos para que sejam mais engajados em contribuir com o nosso país, entretanto, é importante garantir que ela seja acessível a todos, independente da idade ou classe social. Garantindo o acesso à informação, podemos formar profissionais capacitados para contribuir com as demandas de nossa sociedade, sem se limitar apenas a instituições de ensino tradicionais. Nos baseando no objetivo 'Educação de Qualidade', o foco desse trabalho é contribuir para que possamos garantir o acesso à educação inclusiva, de qualidade, e equitativa, promovendo oportunidades de aprendizagem ao longo da vida para todos. Em uma sociedade cada vez mais dependente da tecnologia, a maioria das pessoas possuem um dispositivo com acesso à internet, porém, ainda temos no mercado uma carência muito grande de profissionais de tecnologia, especialmente de desenvolvedores. Com isso em mente, pensamos em um site acessível para todos, onde qualquer um com um dispositivo com acesso a internet poderá acessar gratuitamente uma plataforma de ensino de programação ludificada, em uma interface amigável e acessível para todos, desde o nível mais básico. Através de tarefas rápidas, temos como objetivo ocupar aqueles 5 minutos livres do seu dia.",
    },
  }),
};
</script>
