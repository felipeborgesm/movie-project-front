<template>
  <v-container>
    <v-row class="text-center ma-0">
      <!-- <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col> -->
      <v-col class="pa-10" cols="5">
        <h2 class="headline font-weight-bold mb-3">
          Pensando em ver um filminho hoje?
        </h2>
        <v-img
          :src="require('../assets/duvida.jpg')"
          class="my-3"
          contain
          width="1600"
        />
      </v-col>

      <v-col class="pa-10" cols="2">
        <h2 class="headline font-weight-bold mb-3">Ou</h2>
      </v-col>

      <v-col class="pa-10" cols="5">
        <h2 class="headline font-weight-bold mb-3">
          Na dúvida de qual filmes vamos ver hoje?
        </h2>
        <v-img
          :src="require('../assets/happy.jpg')"
          class="my-3"
          contain
          width="1500"
        />
      </v-col>

      <v-row justify="center">
        <p class="font-weight-black">
          Bom, não importa. Entra ai na plataforma e vamos decidir juntos
        </p>
        <v-btn type="button" :to="{ name: 'principal' }" class="yellow"
          >Clica em mim!!!</v-btn
        >
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
};
</script>
