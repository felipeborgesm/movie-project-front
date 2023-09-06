<template>
  <div>
    <v-data-table :items="usersData" :headers="header"></v-data-table>

    <v-col cols="12" md="4">
      <v-text-field v-model="userRequest.nome" label="nome"></v-text-field>
      <v-text-field v-model="userRequest.cpf" label="cpf"></v-text-field>
      <v-text-field v-model="userRequest.senha" label="senha"></v-text-field>
    </v-col>
    <v-col cols="12" md="4">
      <v-btn @click="criarUser" color="success">Criar usuario</v-btn>
    </v-col>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axiosIns from "@/plugins/axios";
export default {
  data: () => ({}),

  setup() {
    const header = ref([
      { text: "Nome", value: "nome" },
      { text: "Sinopse", value: "cpf" },
      { text: "Quem escolheu?", value: "senha" },
      { text: "Gênero", value: "genero" },
      { text: "Assistido?", value: "visto" },
    ]);

    const userRequest = ref({
      nome: "",
      cpf: "",
      senha: "",
    });

    const usersData = ref([]);

    async function getUsers() {
      usersData.value = await axiosIns
        .get("gerente/usuarios")
        .then((res) => res.data);
    }

    onMounted(getUsers);

    async function criarUser() {
      const resp = await axiosIns
        .post("usuario", userRequest.value)
        .then((res) => res.id);

      console.log(resp);
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
