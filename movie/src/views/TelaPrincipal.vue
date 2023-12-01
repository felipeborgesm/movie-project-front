<template>
  <div>
    <v-data-table :items="usersData" :headers="header"></v-data-table>

    <div class="d-flex justify-center align-center">
      <v-col cols="12" md="6">
        <v-text-field v-model="userRequest.name" label="nome"></v-text-field>
        <v-text-field v-model="userRequest.description" label="descrição"></v-text-field>
        <v-text-field v-model="userRequest.whoChose" label="quem escolheu"></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-btn @click="criarUser" color="success">adicionar filme</v-btn>
      </v-col>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axiosIns from "@/plugins/axios";
export default {
  data: () => ({}),

  setup() {
    const header = ref([
      { text: "Nome", value: "name" },
      { text: "Sinopse", value: "description" },
      { text: "Quem escolheu?", value: "whoChose" },
      { text: "Gênero", value: "genre" },
      { text: "Assistido?", value: "watched" },
    ]);

    const userRequest = ref({
      name: "",
      description: "",
      whoChose: "",
    });

    const usersData = ref([]);

    async function getUsers() {
      usersData.value = await axiosIns
        .get("movie")
        .then((res) => res.data);
    }

    onMounted(getUsers);

    async function criarUser() {
     await axiosIns
        .post("movie", userRequest.value)
        .then((res) => res.id)
        .finally(
          await getUsers()
        );
    }

    return {
      header,
      usersData,
      userRequest,
      criarUser,
    };
  },
};
</script>
