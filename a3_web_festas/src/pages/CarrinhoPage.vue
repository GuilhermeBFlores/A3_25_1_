<template>
  <q-page padding>
  <q-list v-if="carrinhoItems.length > 0">
  <carrinho-item v-for="item in carrinhoItems" :key="item.id" :item="item"
  @quantidade-nova="quantidadeNova" @remove-item="removeItem" />
  </q-list>
  <div v-else>
  Seu carrinho está vazio.
  </div>
 

  <div class="text-right q-mt-md">
  Total: R$ {{ total }}
  </div>
 

  <q-btn v-if="carrinhoItems.length > 0" color="primary" label="Finalizar Compra" class="q-mt-md" />
  </q-page>
 </template>
 

 <script>
 import { defineComponent, ref, computed, onMounted } from 'vue';
 import CarrinhoItem from 'components/CarrinhoItem.vue';
 import { cluster, connectToDB } from 'quasarDB.js';
 

 export default defineComponent({
  name: 'CarrinhoPage',
  components: {
  CarrinhoItem
  },
  setup() {
  const carrinhoItems = ref([]);
  const carrinhoTableName = 'carrinho_items'; // Nome da tabela no QuasarDB
 

  onMounted(async () => {
  await connectToDB();
  await carregaCarrinhoItems();
  });
 

  const carregaCarrinhoItems = async () => {
  try {
  const table = cluster.table(cartTableName);
  const query = `SELECT * FROM ${cartTableName}`;
  const result = await table.query(query);
  carrinhoItems.value = result.rows.map(row => ({
  id: row[0],
  name: row[1],
  price: row[2],
  quantity: row[3]
  }));
  } catch (error) {
  console.error('Erro ao carregar itens do carrinho do QuasarDB:', error);
  }
  };
 

  const subtotal = computed(() => {
  return carrinhoItems.value.reduce((total, item) => total + (item.preco * item.quantidade), 0);
  });
 

  const total = computed(() => {
  // Adicionar lógica para frete e outros custos, se necessário
  return subtotal.value;
  });
 

  const quantidadeNova = async ({ item, quantidade }) => {
  try {
  const table = cluster.table(cartTableName);
  await table.update({
  where: qdb.eq(qdb.stringCol('id'), item.id),
  set: {
  quantidade: quantidade
  }
  });
  const index = carrinhoItems.value.findIndex(carrinhoItem => carrinhotItem.id === item.id);
  if (index !== -1) {
  carrinhoItems.value[index].quantidade = quantidade;
  }
  } catch (error) {
  console.error('Erro ao atualizar a quantidade no QuasarDB:', error);
  }
  };
 

  const removeItem = async (item) => {
  try {
  const table = cluster.table(cartTableName);
  await table.delete({
  where: qdb.eq(qdb.stringCol('id'), item.id)
  });
  carrinhotItems.value = carrinhotItems.value.filter(carrinhotItem => carrinhotItem.id !== item.id);
  } catch (error) {
  console.error('Erro ao remover item do QuasarDB:', error);
  }
  };
 

  return {
  carrinhotItems,
  subtotal,
  total,
  quantidadeNova,
  removeItem
  };
  }
 });
 </script>