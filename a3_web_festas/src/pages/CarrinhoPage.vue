<template>
  <q-page class="q-pa-md">
    <q-toolbar><q-toolbar-title>Carrinho</q-toolbar-title></q-toolbar>

    <q-list bordered>
      <q-item v-for="(item, index) in carrinho" :key="index">
  <q-item-section avatar>
    <q-avatar square size="56px">
      <img :src="item.img" />
    </q-avatar>
  </q-item-section>

  <q-item-section>
    <q-item-label>{{ item.nome }}</q-item-label>
    <q-item-label caption>R$ {{ item.preco.toFixed(2) }}</q-item-label>
    <q-item-label caption>Data: {{ item.data }}</q-item-label>
  </q-item-section>

  <q-item-section side>
    <q-btn flat icon="delete" color="negative" @click="remover(index)" />
  </q-item-section>
</q-item>

    </q-list>

    <q-btn label="Finalizar Aluguel" color="primary" @click="mostrarDialogo = true" :disable="carrinho.length === 0" />

    <q-dialog v-model="mostrarDialogo">
  <q-card>
    <q-card-section class="text-h6">
      Escolha o método de pagamento
    </q-card-section>

    <q-card-section>
      <q-option-group
        v-model="metodo"
        :options="[
          { label: 'Cartão de Crédito', value: 'cartao' },
          { label: 'PIX', value: 'pix' },
          { label: 'Dinheiro', value: 'dinheiro' }
        ]"
        type="radio"
      />
    </q-card-section>

    <q-separator />

    <q-card-section class="text-subtitle1">
      Total: <strong>R$ {{ totalCarrinho.toFixed(2) }}</strong>
    </q-card-section>

    <q-card-actions align="right">
      <q-btn flat label="Cancelar" v-close-popup />
      <q-btn flat label="Finalizar Compra" color="primary" @click="finalizar" :disable="!metodo" />
    </q-card-actions>
  </q-card>
</q-dialog>
  </q-page>

  <q-dialog v-model="popupFinalizado">
  <q-card>
    <q-card-section class="text-h6">✅ Compra finalizada!</q-card-section>
    <q-card-section>
      Método de pagamento: <strong>{{ metodo.toUpperCase() }}</strong><br>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn flat label="Fechar" v-close-popup />
    </q-card-actions>
  </q-card>
</q-dialog>

</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { obterCarrinho, limparCarrinho } from 'src/services/carrinhoService'
import { removerItemPorIndex } from 'src/services/carrinhoService'
import { useQuasar } from 'quasar'

const carrinho = ref([])
const $q = useQuasar()
const mostrarDialogo = ref(false)
const metodo = ref(null)
const popupFinalizado = ref(false)

onMounted(() => {
  carrinho.value = obterCarrinho()
})
function remover(index) {
  removerItemPorIndex(index)
  carrinho.value = obterCarrinho()
}
const totalCarrinho = computed(() =>
  carrinho.value.reduce((total, item) => total + item.preco, 0)
)
function finalizar() {
  if (!metodo.value) {
    $q.notify({ type: 'warning', message: 'Escolha uma forma de pagamento!' })
    return
  }

  limparCarrinho()
  carrinho.value = []
  mostrarDialogo.value = false
  popupFinalizado.value = true
}
</script>
