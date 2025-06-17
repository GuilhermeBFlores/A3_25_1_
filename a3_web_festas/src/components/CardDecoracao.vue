<template>
  <q-card class="Card">
    <q-card-section>
  <div class="img" :style="{ backgroundImage: 'url(' + produto.img + ')' }"></div>

  <div class="text-h5 text-weight-bold text-primary text-center q-my-sm">
  {{ produto.nome }}
</div>
</q-card-section>
<q-card-section class="row items-center justify-between q-pt-none">
  <div class="text-h6 text-primary q-ml-sm">
    R$ {{ produto.preco.toFixed(2) }}
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
</q-card-section>
  </q-card>

  <q-dialog v-model="popupAdicionado">
  <q-card>
    <q-card-section class="text-h6">🎉 Produto adicionado ao carrinho!</q-card-section>
    <q-card-actions align="right">
      <q-btn flat label="OK" v-close-popup />
    </q-card-actions>
  </q-card>
</q-dialog>

<q-dialog v-model="popupJaAlugado">
  <q-card>
    <q-card-section class="text-h6">❌ Já alugado nesta data!</q-card-section>
    <q-card-section>
      Por favor, escolha uma outra data para esse item.
    </q-card-section>
    <q-card-actions align="right">
      <q-btn flat label="OK" v-close-popup />
    </q-card-actions>
  </q-card>
</q-dialog>

</template>

<script>
import { ref } from 'vue'
import { adicionarItem, obterCarrinho } from 'src/services/carrinhoService'

export default {
  props: {
    produto: {
      nome: String,
      preco: Number,
      img: String
    },
  },
  setup(props) {
    const date = ref('2025/06/03')
    const proxyDate = ref('2025/12/31')
    const popupAdicionado = ref(false)
    const popupJaAlugado = ref(false)

    const updateProxy = () => {
      proxyDate.value = date.value
    }

    const adicionarAoCarrinho = () => {
  const item = {
    ...props.produto,
    data: proxyDate.value
  }

  const carrinho = obterCarrinho()
  const existeMesmoDia = carrinho.some(
    i => i.nome === item.nome && i.data === item.data
  )

  if (existeMesmoDia) {
    popupJaAlugado.value = true
    return
  }

  adicionarItem(item)
  popupAdicionado.value = true
}
    return { 
      
      date,
      proxyDate,
      popupAdicionado,
      popupJaAlugado,
      updateProxy,
      adicionarAoCarrinho
    }
  }
}
</script>

<style scoped>
.img {
  height: 300px;
  width: 300px;
  background-size: cover;
  background-position: center;
}
</style>
