<template>
  <q-card class="Card">
    <q-card-section>
      <div class="img" :style="{ backgroundImage: 'url(' + produto.img + ')' }"></div>
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
  props: {
    produto: {
      nome: String,
      preco: Number,
      img: String
    },
  },
  methods: {
    comprarProduto() {
      alert(`Você comprou ${this.produto.nome} por R$ ${this.produto.preco.toFixed(2)}!`);
    },
  },
};
</script>

<style scoped>
.img {
  height: 300px;
  width: 300px;
  background-size: cover;
  background-position: center;
}
</style>