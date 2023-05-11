<template>
  <div>
    <v-data-table :headers="header"></v-data-table>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  data: () => ({}),

  setup() {
    const header = ref([
      { text: "Nome", value: "nome" },
      { text: "Sinopse", value: "sinopse" },
      { text: "Quem escolheu?", value: "escolha" },
      { text: "Gênero", value: "genero" },
      { text: "Assistido?", value: "visto" },
    ]);

    return {
      header,
    };
  },
};
</script>
