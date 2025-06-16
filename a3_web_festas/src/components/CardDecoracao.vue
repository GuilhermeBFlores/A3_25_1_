<template>
  <div>
    <q-card
      class="Card"
      v-for="produto in carrinhoStore.produtos"
      :key="produto.id"
    >
      <q-card-section>
        <div
          class="img"
          :style="{ backgroundImage: 'url(' + produto.img + ')' }"
        ></div>
        <q-card-title>{{ produto.nome }}</q-card-title>
        <q-card-subtitle>R$ {{ produto.preco.toFixed(2) }}</q-card-subtitle>
      </q-card-section>
      <q-card-section>
        <div class="q-pa-md">
          <div class="q-mb-sm"></div>

          <q-btn label="Alugar" color="primary">
            <q-popup-proxy
              @before-show="updateProxy"
              cover
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date v-model="proxyDate">
                <div class="row items-center justify-end q-gutter-sm">
                  <q-btn label="Cancelar" color="primary" flat v-close-popup />
                  <q-btn
                    label="Adicionar ao Carrinho"
                    color="primary"
                    flat
                    @click="adicionarAoCarrinho(produto.id)"
                    v-close-popup
                  />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-btn>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { useCarrinhoStore } from "src/stores/carrinho-store";

export default {
  setup() {
    const carrinhoStore = useCarrinhoStore();
    const date = ref("2025/06/03");
    const proxyDate = ref("2025/12/31");

    const updateProxy = () => {
      proxyDate.value = date.value;
    };

    const adicionarAoCarrinho = (produtoId) => {
      carrinhoStore.adicionarAoCarrinho(produtoId, 1);
    };

    return {
      carrinhoStore,
      date,
      proxyDate,
      updateProxy,
      adicionarAoCarrinho,
    };
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
