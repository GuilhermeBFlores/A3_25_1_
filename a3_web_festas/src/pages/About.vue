<template>
  <q-page class="q-pa-md">
    <!-- Imagem externa via URL -->
    <q-img
      src="https://down-br.img.susercontent.com/file/e02c1afeabbcd654bbc8c05f3cf1a7bf"
      alt="Imagem decorativa sobre festas"
      width="500"
      height="300"
    />


    <h2>Sobre nós</h2>
    <p>
      Somos o Sonho de Festas e amamos transformar momentos especiais em lembranças inesquecíveis.
      Aqui, a gente acredita que cada festa tem que ter a cara de quem está comemorando, cheia de
      personalidade, alegria e muito carinho nos detalhes. Tudo começou com a vontade de deixar cada
      celebração mais mágica, seja um aniversário divertido, um chá revelação cheio de amor ou
      aquele casamento que parece conto de fadas. A gente cuida de tudo com muito cuidado e criatividade,
      como se fosse pra gente mesmo. Se você também ama uma festa bem feita, com emoção e aquele toque
      especial que faz toda a diferença, chegou ao lugar certo. Vem sonhar com a gente!
    </p>
  </q-page>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
.about-img {
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.about-img:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.q-page {
  background-color: #ffffff;
}

h2 {
  text-align: center;
  font-family: 'Playfair Display', serif;
  margin-top: 24px;
}

p {
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
  text-align: justify;
  margin-top: 16px;
}

</style>