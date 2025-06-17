<template>
  <q-page class="q-pa-md">
    <q-toolbar class="q-mb-md">
      <q-toolbar-title>Aluguel de Decorações</q-toolbar-title>
    </q-toolbar>

    <q-card-section>
      <div class="row q-col-gutter-md q-row-gutter-md">
        <div
          v-for="(produto, index) in produtos"
          :key="index"
          class="col-xs-12 col-sm-6 col-md-4"
        >
          <CardDecoracao :produto="produto" />
        </div>
      </div>
    </q-card-section>
  </q-page>
</template>

<script>
import CardDecoracao from "src/components/CardDecoracao.vue"

export default {
  name: 'DecoracoesPage',
  components: {
    CardDecoracao
  },
  data() {
    return {
      produtos: [
        {
          nome: 'Ben 10',
          preco: 79.90,
          img: 'https://impaktovisual.com.br/12266-large_default/kit-festa-os-backyardigans-ouro.jpg'
        },
        {
          nome: 'Backyardigans',
          preco: 69.90,
          img: 'https://www.artealegria.com.br/wp-content/uploads/2024/06/ben10.jpeg'
        },
        {
          nome: 'Galinha Pintadinha',
          preco: 85.00,
          img: 'https://impaktovisual.com.br/12266-large_default/kit-festa-os-backyardigans-ouro.jpg'
        },
        {
          nome: 'Backyardigans',
          preco: 74.50,
          img: 'https://www.artealegria.com.br/wp-content/uploads/2024/06/ben10.jpeg'
        },
        {
          nome: 'Patrulha Canina',
          preco: 90.00,
          img: 'https://impaktovisual.com.br/12266-large_default/kit-festa-os-backyardigans-ouro.jpg'
        },
        {
          nome: 'Frozen',
          preco: 92.00,
          img: 'https://www.artealegria.com.br/wp-content/uploads/2024/06/ben10.jpeg'
        }
      ]
    }
  }
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
