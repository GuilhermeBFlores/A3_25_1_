<template>
  <q-page class="flex flex-center">
    <div class="text-center">
      <q-avatar size="100px" class="q-mb-md">
        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" alt="Logo">
      </q-avatar>
      <h1 class="text-h3 q-mb-md">Bem-vindo ao Sonho de Festas</h1>
      <p class="q-mb-md">Explore nosso projeto e descubra mais sobre nossas funcionalidades.</p>
      <q-btn label="Saiba Mais" color="primary" @click="goToAbout" />
    </div>
  </q-page>
</template>

<script>
export default {
  methods: {
    goToAbout() {
      this.$router.push('/Sobre');
    }
  }
}
</script>

<style scoped>
/* Estilos adicionais, se necessário */
</style>