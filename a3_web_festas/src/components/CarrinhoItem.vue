 <template>
  <q-item>
  <q-item-section>
  <q-item-label>{{ item.nome }}</q-item-label>
  <q-item-label caption>Preço: R$ {{ item.preco }}</q-item-label>
  </q-item-section>
 

  <q-item-section side>
  <q-input type="number" v-model.number="quantidade" @update:model-value="quantidadeNova"
  :min="1" />
  <q-btn icon="delete" color="negative" @click="removeItem" />
  </q-item-section>
  </q-item>
 </template>
 

 <script>
 import { defineComponent, ref, watch } from 'vue';
 

 export default defineComponent({
  nome: 'Carrinho',
  props: {
  item: {
  type: Object,
  required: true
  }
  },
  setup(props, { emit }) {
  const quantidade = ref(props.item.quantidade);
 

  watch(quantidade, (quantidadeNova) => {
  if (quantidadeNova > 0) {
  emit('quantidade-nova', { item: props.item, quantidade: quantidadeNova });
  }
  });
 

  const quantidadeNova = () => {
  emit('quantidade-nova', { item: props.item, quantidade: quantidade.value });
  };
 

  const removeItem = () => {
  emit('remove-item', props.item);
  };
 

  return {
  quantidade,
  quantidadeNova,
  removeItem
  };
  }
 });
 </script>