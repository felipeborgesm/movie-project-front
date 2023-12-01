<template>
  <v-row>
    <v-col cols="12" sm="6">
      <v-card-title class="d-flex justify-center"> Filmes </v-card-title>

      <v-data-table :items="moviesList" :headers="movieHeader" no-data-text="Sem filmes ainda :(" :footer-props="{
        'items-per-page-text': 'itens por pagina',
        'page-text': '{0} - {1} de {2}',
        'items-per-page-all-text': 'Todos',
      }">
        <template #[`item.watched`]="{ item }">
          <v-chip :color="item.watched ? 'success' : 'error'" outlined>
            {{ item.watched ? "Sim" : "Não" }}
          </v-chip>
        </template>

        <template #[`item.addDate`]="{ item }">
          {{ formartarData(item.addDate) }}
        </template>
      </v-data-table>

      <div class="d-flex justify-center">
        <v-col cols="12" md="6">
          <v-text-field v-model="movieRequest.name" label="nome"></v-text-field>
          <v-text-field v-model="movieRequest.description" label="descrição"></v-text-field>
          <v-text-field v-model="movieRequest.whoChose" label="quem escolheu"></v-text-field>
          <v-btn @click="createMovie" color="success">adicionar filme</v-btn>
        </v-col>
      </div>
    </v-col>

    <v-col cols="12" sm="6">
      <v-card-title class="d-flex justify-center"> Séries </v-card-title>

      <v-data-table :items="seriesList" :headers="serieHeader" no-data-text="Sem séries ainda :(" :footer-props="{
        'items-per-page-text': 'itens por pagina',
        'page-text': '{0} - {1} de {2}',
        'items-per-page-all-text': 'Todos',
      }">
        <template #[`item.watched`]="{ item }">
          <v-chip :color="item.watched ? 'success' : 'error'" outlined>
            {{ item.watched ? "Sim" : "Não" }}
          </v-chip>
        </template>

        <template #[`item.addDate`]="{ item }">
          {{ formartarData(item.addDate) }}
        </template>
      </v-data-table>
      <div class="d-flex justify-center">
        <v-col cols="12" md="6">
          <v-text-field v-model="serieRequest.name" label="nome"></v-text-field>
          <v-text-field v-model="serieRequest.seasons" type="number" label="temporadas"></v-text-field>
          <v-text-field v-model="serieRequest.whoChose" label="quem escolheu"></v-text-field>
          <v-btn @click="createSerie" color="success">adicionar série</v-btn>
        </v-col>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { ref, onMounted } from "vue";
import axiosIns from "@/plugins/axios";
export default {
  data: () => ({}),

  setup() {
    const movieHeader = ref([
      { text: "Nome", value: "name" },
      { text: "Sinopse", value: "description" },
      { text: "Quem escolheu?", value: "whoChose" },
      { text: "Gênero", value: "genre" },
      { text: "Já assistimos?", value: "watched" },
      { text: "Quando foi adicionado", value: "addDate" },
    ]);

    const serieHeader = ref([
      { text: "Nome", value: "name" },
      { text: "Temporadas", value: "seasons" },
      { text: "Quem escolheu?", value: "whoChose" },
      { text: "Gênero", value: "genre" },
      { text: "Já assistimos?", value: "watched" },
      { text: "Quando foi adicionado", value: "addDate" },
    ]);

    const movieRequest = ref({
      name: "",
      description: "",
      whoChose: "",
    });

    const serieRequest = ref({
      name: "",
      seasons: 0,
      whoChose: "",
    });

    const moviesList = ref([]);
    const seriesList = ref([]);

    async function getMovies() {
      moviesList.value = await axiosIns.get("movie").then((res) => res.data);
    }

    async function getSeries() {
      seriesList.value = await axiosIns.get("serie").then((res) => res.data);
    }

    onMounted(async () => {
      await getMovies();
      await getSeries();
    });

    async function createSerie() {
      await axiosIns
        .post("serie", serieRequest.value)
        .then((res) => res.id)
        .finally(await getSeries());
    }

    async function createMovie() {
      await axiosIns
        .post("movie", movieRequest.value)
        .then((res) => res.id)
        .finally(await getMovies());
    }

    function formartarData(value) {
      const data = new Date(
        value[0],  // ano
        value[1] - 1,  // mês (lembrando que os meses em JavaScript são de 0 a 11)
        value[2],  // dia
        value[3],  // hora
        value[4],  // minuto
        value[5],  // segundo
        value[6]   // milissegundo
      );
      const dataFormatada = data.toLocaleString(); // ou utilize um formato específico com bibliotecas como o `date-fns` ou `moment`
      return dataFormatada;
    }

    return {
      movieHeader,
      serieHeader,
      moviesList,
      seriesList,
      movieRequest,
      serieRequest,
      createMovie,
      createSerie,
      formartarData,
    };
  },
};
</script>
