<template>
  <q-page class="q-pa-md about-page">
    <div class="bg-overlay">
      <q-card class="my-card q-pa-md shadow-4" style="max-width: 800px; width: 100%;">
      

        <q-card-section>
          <div class="text-h5 text-primary text-center q-mb-sm">Sobre Nós</div>
          <div class="text-body1 text-justify text-black">
            Bem-vindo à <strong>Sonho de Festas</strong>, onde cada celebração se transforma em um momento mágico! 🎉<br><br>
            Somos apaixonados por criar experiências únicas e memoráveis. Desde aniversários encantadores até casamentos de conto de fadas, cuidamos de cada detalhe com criatividade, carinho e dedicação. <br><br>
            Acreditamos que uma boa festa reflete a alma de quem comemora. Por isso, personalizamos tudo para que você se sinta especial em cada instante. <br><br>
            Se você valoriza emoção, beleza e aquele toque especial que só uma boa festa tem, vem com a gente tornar seu sonho realidade!
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
.about-page {
  background-image: url('https://images.unsplash.com/photo-1498940757830-82f7813bf178?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFsJUMzJUI1ZXMlMjBjb2xvcmlkb3N8ZW58MHx8MHx8fDA%3D');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}



.my-card {
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.9); /* Levemente translúcido */
  backdrop-filter: blur(4px);
}

.rounded-borders {
  border-radius: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.rounded-borders:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}
</style>