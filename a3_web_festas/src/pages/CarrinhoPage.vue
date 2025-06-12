<template>
  <q-page>
    <h2>Produtos</h2>
    <q-list>
      <q-item v-for="produto in carrinhoStore.produtos" :key="produto.id">
        <q-item-section>
          <q-item-label>{{ produto.nome }}</q-item-label>
          <q-item-label caption>{{ produto.descricao }}</q-item-label>
          <q-item-label>R$ {{ produto.preco.toFixed(2) }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn
            color="primary"
            label="Adicionar ao Carrinho"
            @click="carrinhoStore.adicionarAoCarrinho(produto.id, 1)"
          />
        </q-item-section>
      </q-item>
    </q-list>

    <h2>Carrinho</h2>
    <q-list>
      <q-item v-for="item in carrinhoStore.carrinho" :key="item.produtoId">
        <q-item-section>
          <q-item-label>
            {{ getProdutoNome(item.produtoId) }} ({{ item.quantidade }}x)
          </q-item-label>
          <q-item-label caption>R$ {{ item.precoTotal.toFixed(2) }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn
            color="negative"
            label="Remover"
            @click="carrinhoStore.removerDoCarrinho(item.produtoId)"
          />
        </q-item-section>
      </q-item>
    </q-list>
    <h3>Total: R$ {{ carrinhoStore.totalCarrinho }}</h3>
  </q-page>
</template>

<script setup>
import { useCarrinhoStore } from 'src/stores/carrinho-store';
import { onMounted } from 'vue';

const carrinhoStore = useCarrinhoStore();

onMounted(() => {
  carrinhoStore.carregarDados();
});

function getProdutoNome(produtoId) {
  const produto = carrinhoStore.produtos.find(p => p.id === produtoId);
  return produto ? produto.nome : 'Produto não encontrado';
}
</script>

<style>
.imagem {
  height: 300px;
  width: 300px;
}
.q-page {
  padding: 20px;
}
</style>
