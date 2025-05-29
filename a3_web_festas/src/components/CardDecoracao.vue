<template>
  <q-card class="my-card">
    <q-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWHvAYZkx0vUGwLv6sZiEWA51g9P9Vr3okcQ&s" alt="Imagem do produto" />

    <q-card-section>
      <q-card-title>{{ produto.nome }}</q-card-title>
      <q-card-subtitle>R$ {{ produto.preco.toFixed(2) }}</q-card-subtitle>
    </q-card-section>

    <q-card-section>
      <q-btn label="Comprar" color="primary" @click="comprarProduto" />
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  data() {
    return {
      produto: {
        nome: "Produto Especial ",
        preco: 99.90,
      },
    };
  },
  methods: {
    comprarProduto() {
      alert(`Você comprou ${this.produto.nome} por R$ ${this.produto.preco.toFixed(2)}!`);
    },
  },
};
</script>

<style scoped>
.my-card {
  width: 300px;
  margin: 20px auto;
}
</style>