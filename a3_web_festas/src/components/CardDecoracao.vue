<template>
  <q-card class="Card">
    <q-card-section>
      <div class="img" :style="{ backgroundImage: 'url(' + produto.img + ')' }"></div>
      <q-card-title>{{ produto.nome }}</q-card-title>
      <q-card-subtitle>R$ {{ produto.preco.toFixed(2) }}</q-card-subtitle>
    </q-card-section>
    <q-card-section>
      <div class="q-pa-md">
    <div class="q-mb-sm">
    </div>

    <q-btn label="Alugar" color="primary">
      <q-popup-proxy @before-show="updateProxy" cover transition-show="scale" transition-hide="scale">
        <q-date v-model="proxyDate">
          <div class="row items-center justify-end q-gutter-sm">
            <q-btn label="Cancelar" color="primary" flat v-close-popup />
            <q-btn label="Adicionar ao Carrinho" color="primary" flat @click="adicionarAoCarrinho" v-close-popup />
          </div>
        </q-date>
      </q-popup-proxy>
    </q-btn>
  </div>
    </q-card-section>
  </q-card>  
</template>

<script>
import { ref } from 'vue'
export default {
  props: {
    produto: {
      nome: String,
      preco: Number,
      img: String
    },
  },
  methods: {
    adicionarAoCarrinho() {
     //FAZER FUNCIONAR ADICIONAR AO CARRINHO
    },
  },
  setup () {
    const date = ref('2025/06/03')
    const proxyDate = ref('2025/12/31')

    return {
      date,
      proxyDate,

      updateProxy () {
        proxyDate.value = date.value
      },

      save () {
        date.value = proxyDate.value
      },
    }
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