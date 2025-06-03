<template> 
<q-page class="flex flex-center">
    <CardDecoracao :produto="{ nome: 'Bem 10 ', preco: 79.90, img: 'https://impaktovisual.com.br/12266-large_default/kit-festa-os-backyardigans-ouro.jpg' }"/>
  </q-page>

</template>

<script>
import CardDecoracao from "src/components/CardDecoracao.vue"

export default {
  name: 'DecoracoesPage',
  components: {
    CardDecoracao
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
