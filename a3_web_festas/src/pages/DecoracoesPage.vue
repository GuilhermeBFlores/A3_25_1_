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
          img: 'https://www.artealegria.com.br/wp-content/uploads/2024/06/ben10.jpeg'
        },
        {
          nome: 'Backyardigans',
          preco: 69.90,
          img: 'https://impaktovisual.com.br/12266-large_default/kit-festa-os-backyardigans-ouro.jpg'
        },
        {
          nome: 'Galinha Pintadinha',
          preco: 85.00,
          img: 'https://www.artealegria.com.br/wp-content/uploads/2019/10/DSC_1313.jpg'
        },
        {
          nome: 'Power Rangers',
          preco: 74.50,
          img: 'https://storage.alboom.ninja/sites/10402/albuns/1149949/massimo-7309.jpg?t=1679064815'
        },
        {
          nome: 'Patrulha Canina',
          preco: 90.00,
          img: 'https://i.pinimg.com/736x/04/bf/f7/04bff755d952f7783c190db5e7ec087a.jpg'
        },
        {
          nome: 'Frozen',
          preco: 92.00,
          img: 'https://i.pinimg.com/originals/1d/ee/5a/1dee5add19e7dc38f94403d31f677263.jpg'
        },
        {
          nome: 'Barbie',
          preco: 100.00,
          img: 'https://i.pinimg.com/originals/68/a7/6c/68a76c24d6f5039c58d54e9452a13952.jpg'
        },
        {
          nome: 'Homem-Aranha',
          preco: 97.00,
          img: 'https://forfunfestas.com.br/wp-content/uploads/2017/12/Homem-Aranha-1-site.jpg'
        },
        {
          nome: 'Wandinha',
          preco: 120.00,
          img: 'https://www.artealegria.com.br/wp-content/uploads/2023/02/wandinha.jpg'
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
