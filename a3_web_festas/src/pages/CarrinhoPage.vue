<template>
    <div class="container">
      <h1>Carrinho</h1>
      <div v-if="carrinho.length > 0">
        <div v-for="(index, produtos) in carrinho" :key="index" class="carrinho-item">
          <p>{{ produto.name }} - R$ {{ produto.price.toFixed(2) }}</p>
          <button @click="removeDoCarrinho(produtos)">Remover</button>
        </div>
        <p><strong>Total:</strong> R$ {{ total.toFixed(2) }}</p>
      </div>
      <div v-else>
        <p>Carrinho vazio.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import produto from 'src/components/CardDecoracao.vue';
  
  const carrinho = ref([])
  
  function removeDoCarrinho(produtos) {
    carrinho.value.splice(produtos, 1)
  }
  
  const total = computed(() =>
    carrinho.value.reduce((sum, item) => sum + item.price, 0)
  )
  </script>
  
  <style>
  .container {
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: auto;
  }
  .produtos, .carrinho-item {
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
  }
  button {
    margin-top: 5px;
  }
  
  h1 {
    font-size: 50px; 
  }
  
  h2 {
    font-size:30px; 
  }
  
  h3 {
    font-size: 30px; 
  }
  </style>
  
  
  