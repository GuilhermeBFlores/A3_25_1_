<template> 
<q-page class="flex flex-center">
    <CardDecoracao/>
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

.q-page {
  padding: 20px;
}
</style>
