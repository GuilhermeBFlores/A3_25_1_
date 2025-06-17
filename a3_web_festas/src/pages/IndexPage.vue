<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Cabeçalho com Menu -->
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <q-toolbar-title>Sonho de Festas</q-toolbar-title>
        <q-space />
        <q-btn flat round icon="phone" href="tel:+51982177715" />
        <q-btn flat round icon="whatsapp" href="https://wa.me/51982177715" />
      </q-toolbar>
    </q-header>

    <!-- Menu Lateral -->
    <q-drawer v-model="drawer" side="left" bordered>
      <q-list>
        <q-item-label header>Menu</q-item-label>
        <q-item clickable v-ripple to="/">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>Início</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/servicos">
          <q-item-section avatar>
            <q-icon name="celebration" />
          </q-item-section>
          <q-item-section>Serviços</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/galeria">
          <q-item-section avatar>
            <q-icon name="photo" />
          </q-item-section>
          <q-item-section>Galeria</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/contato">
          <q-item-section avatar>
            <q-icon name="contact_mail" />
          </q-item-section>
          <q-item-section>Contatos</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- Conteúdo Principal -->
    <q-page-container>
      <q-page padding>
        <!-- Banner com Carrossel -->
        <q-carousel
          v-model="slide"
          animated
          control-color="white"
          navigation
          arrows
          height="60vh"
          class="banner"
        >
          <q-carousel-slide
            v-for="(banner, index) in banners"
            :key="index"
            :name="index"
            :img-src="banner.img"
          >
            <div class="absolute-center text-center text-white">
              <h2 class="text-h3 banner-text">{{ banner.title }}</h2>
              <p class="text-subtitle1 banner-text">{{ banner.subtitle }}</p>
              <q-btn color="blue" label="Sobre nós" to='/Sobre' />
            </div>
          </q-carousel-slide>
        </q-carousel>

        <!-- Seção de Serviços -->
        <section class="q-my-xl">
          <h2 class="text-h4 text-center q-mb-lg">Nossos Serviços</h2>
          <div class="row q-col-gutter-md">
            <div
              v-for="service in services"
              :key="service.id"
              class="col-12 col-sm-6 col-md-4"
            >
              <q-card class="service-card">
                <q-img :src="service.img" height="400px" />
                <q-card-section>
                  <div class="text-h6">{{ service.title }}</div>
                  <div class="text-subtitle2">{{ service.description }}</div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </section>

        <!-- Galeria de Fotos -->
        <section class="q-my-xl bg-grey-2">
          <h2 class="text-h4 text-center q-mb-lg">Galeria de Festas</h2>
          <div class="row q-col-gutter-md">
            <div
              v-for="photo in gallery"
              :key="photo.id"
              class="col-12 col-sm-6 col-md-3"
            >
              <q-img
                :src="photo.src"
                class="gallery-img cursor-pointer"
                @click="openPhoto(photo.src)"
              />
            </div>
          </div>
          <q-dialog v-model="photoDialog">
            <q-img :src="selectedPhoto" style="max-width: 90vw; max-height: 80vh;" />
          </q-dialog>
        </section>

        <!-- Seção de Depoimentos -->
        <section class="q-my-xl">
          <h2 class="text-h4 text-center q-mb-lg">O Que Nossos Clientes Dizem</h2>
          <q-carousel
            v-model="testimonialSlide"
            animated
            control-color="primary"
            navigation
            arrows
            height="300px"
          >
            <q-carousel-slide
              v-for="(testimonial, index) in testimonials"
              :key="index"
              :name="index"
            >
              <div class="absolute-center text-center">
                <q-icon name="format_quote" size="3rem" color="primary" />
                <p class="q-mt-md">{{ testimonial.text }}</p>
                <div class="text-subtitle1 q-mt-sm">{{ testimonial.author }}</div>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </section>
      </q-page>
    </q-page-container>

    <!-- Rodapé (aparece apenas no final da página) -->
    <q-footer v-show="showFooter" class="footer">
      <div class="row q-pa-sm justify-center">
        <div class="col-12 col-sm-4 text-center q-mb-sm">
          <h6 class="text-h6">Contato</h6>
          <p class="q-mb-sm">
            <q-icon name="phone" size="sm" /> (51) 982177715<br>
            <q-icon name="phone" size="sm" /> (51) 923523141<br>
            <q-icon name="email" size="sm" /> sonhofestas@gmail.com
          </p>
        </div>
        <div class="col-12 col-sm-4 text-center q-mb-sm">
          <h6 class="text-h6">Links Úteis</h6>
          <p class="q-mb-sm">
            <a href="/Servicos" class="text-white">Serviços</a> 
            <a href="/contato" class="text-white">Contato</a>
          </p>
        </div>
        <div class="col-12 col-sm-4 text-center">
          <h6 class="text-h6">Siga-nos</h6>
          <q-btn flat round icon="fab fa-facebook" href="#" size="sm" />
          <q-btn flat round icon="fab fa-instagram" href="#" size="sm" />
          <q-btn flat round icon="fab fa-pinterest" href="#" size="sm" />
        </div>
      </div>
      <div class="text-center q-py-sm text-caption">
        © 2025 Sonho de Festas. Todos os direitos reservados.
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import imagem1 from '../assets/15anos.png';
import imagem2 from '../assets/casamentoJean.png';


export default {
  name: 'HomePage',
  data() {
    return {
      drawer: false,
      slide: 0,
      testimonialSlide:0,
      photoDialog: false,
      selectedPhoto: '',
      showFooter: false,
      banners: [
        {
          img: 'https://inspiresuafesta.com/wp-content/uploads/2013/06/decoracao-circo-patati-patata-ccs-decoracoes-e-eventos-cenario.jpg',
          title: 'Transforme Sua Festa em um Momento Mágico',
          subtitle: 'Decorações personalizadas para todos os tipos de eventos.',
        },
        {
          img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDAHHaV23QOLICujSjjZeDxlEyfQSZuYx-TzorpAYVhEP0MNN3dBlvc9lUjtmNrHMs2f5hsBsIkEHKRKqIU7Zbfq9r9UPidZoLjr_87iRvX-uM2OmjPcJxLxCq41Iq4ir2A88kblT-a1hV/s1600/IMG_3808.JPG',
          title: 'Festas Infantis Inesquecíveis',
          subtitle: 'Temas criativos e coloridos para alegrar os pequenos.',
        },
      ],
      services: [
        {
          id: 1,
          title: 'Festas de 15 Anos',
          description: 'Decorações sofisticadas para aniversários marcantes',
          img: imagem1, 
        },
        {
          id: 2,
          title: 'Casamentos',
          description: 'Decorações elegantes para o seu grande dia.',
          img: imagem2,
        },
        {
          id: 3,
          title: 'Eventos infantis',
          description: 'Decorações descontraidas que agradam os olhos da molecada',
          img: 'https://i.pinimg.com/originals/23/cf/d8/23cfd89c3244ce5f94c54956e0ec3f45.jpg',
        },
      ],
      gallery: [
        { id: 1, src: 'https://bellafestas.com.br/wp-content/uploads/2016/06/decoracao-festa-infantil-provencal-discoverykids.jpg' },
        { id: 2, src: 'https://i.pinimg.com/474x/0c/bc/51/0cbc51b06ab09a3160a938913c2fc943.jpg' },
        { id: 3, src: 'https://http2.mlstatic.com/D_NQ_NP_798304-MLB46336481605_062021-O-painel-redondo-circular-decoraco-lanterna-verde-displays.webp' },
        { id: 4, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtSop5pODCry0PMWRlZgyXr4Y4VL5CTT-LiQ&s' },
      ],
      testimonials: [
        {
          text: 'A decoração da festa do meu filho foi incrível! Tudo perfeito nos mínimos detalhes.',
          author: 'Ana Silva',
        },
        {
          text: 'Profissionalismo e criatividade! Meu casamento do SUPER GREMIO ficou exatamente como sonhei.',
          author: 'Mariana Costa',
        },
      ],
    };
  },
  methods: {
    openPhoto(src) {
      this.selectedPhoto = src;
      this.photoDialog = true;
    },
    viewServiceDetails(id) {
      this.$q.notify({
        message: `Visualizando detalhes do serviço ${id}`,
        color: 'primary',
      });
    },
    handleScroll() {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const threshold =100; // Distância do final da página para mostrar o rodapé
      if (scrollTop + windowHeight >= documentHeight - threshold + 100) {
        this.showFooter = true;
      } else {
        this.showFooter = false;
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped>

.banner-text {
  text-shadow:2px 89px   10px rgba(20, 19, 99, 0.7); /* Borda preta suave */
}
.banner {
  height:  80vh;
  background-size: cover;
  background-position: center;
}
.service-card {
  transition: transform 0.3s;
}
.service-card:hover {
  transform: scale(1.15);
}
.gallery-img {
  object-fit: cover;
  height: 200px;
  width: 100%;
  border-radius: 8px;
}
.footer {
  background-color: #01012c;
  color: white;
  padding: 50px 0; /* Reduzido o padding */
}
.footer h6 {
  margin-top: 0;
  margin-bottom: 8px;
}
.footer p {
  font-size: 0.9rem;
}
.footer .q-btn {
  margin: 0 5px;
}
</style>