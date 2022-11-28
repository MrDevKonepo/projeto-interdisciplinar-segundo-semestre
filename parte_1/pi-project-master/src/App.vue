<template>
  <v-app id="inspire">
    <v-app-bar
      class="px-3"
      color="purple"
      flat
      density="compact"
      title="LearnCode"
    >
      <v-tabs centered color="grey-darken-2">
        <v-tab v-for="link in links" :key="link">
          <router-link custom :to="{ name: link }" v-slot="{ navigate }">
            <p @click="navigate" v-text="link"></p>
          </router-link>
        </v-tab>
        <v-tab>
          <a href="https://arthurcarrenho.github.io/pi-2-pages/" target="_blank" class="text-decoration-none" color="white"> QUIZ</a>
        </v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { routeNames } from "@/plugins/router";
console.log(routeNames());
export default {
  data: () => ({
    links: routeNames(),
  }),
};
</script>
