<template>
    <div class="container">
      <h1>Carrinho</h1>
  
      <h2>Produtos</h2>
      <div v-for="product in products" :key="product.id" class="product">
        <p>{{ product.name }} - R$ {{ product.price.toFixed(2) }}</p>
        <button @click="addToCart(product)">Adicionar ao Carrinho</button>
      </div>
  
      <h3>Carrinho</h3>
      <div v-if="cart.length > 0">
        <div v-for="(item, index) in cart" :key="index" class="cart-item">
          <p>{{ item.name }} - R$ {{ item.price.toFixed(2) }}</p>
          <button @click="removeFromCart(index)">Remover</button>
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
  
  const products = ref([
    { id: 1, name: 'Decoração do Ben10', price: 190 },
    { id: 2, name: 'Decoração do Mario', price: 150 },
    { id: 3, name: 'Decoração do Fortnite', price: 200 }
  ])
  
  const cart = ref([])
  
  function addToCart(product) {
    cart.value.push(product)
  }
  
  function removeFromCart(index) {
    cart.value.splice(index, 1)
  }
  
  const total = computed(() =>
    cart.value.reduce((sum, item) => sum + item.price, 0)
  )
  </script>
  
  <style>
  .container {
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: auto;
  }
  .product, .cart-item {
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
  
  
  