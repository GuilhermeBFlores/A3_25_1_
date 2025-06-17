<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Cabeçalho com Menu -->
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <q-toolbar-title>Decoração de Festas</q-toolbar-title>
        <q-space />
        <q-btn flat round icon="phone" href="tel:+5511999999999" />
        <q-btn flat round icon="fab fa-whatsapp" href="https://wa.me/5511999999999" />
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
          <q-item-section>Contato</q-item-section>
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
          height="80vh"
          class="banner"
        >
          <q-carousel-slide
            v-for="(banner, index) in banners"
            :key="index"
            :name="index"
            :img-src="banner.img"
          >
            <div class="absolute-center text-center text-white">
              <h2 class="text-h3">{{ banner.title }}</h2>
              <p class="text-subtitle1">{{ banner.subtitle }}</p>
              <q-btn color="primary" label="Sobre nós" to="/Sobre" />
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
                <q-img :src="service.img" height="200px" />
                <q-card-section>
                  <div class="text-h6">{{ service.title }}</div>
                  <div class="text-subtitle2">{{ service.description }}</div>
                </q-card-section>
                <q-card-actions>
                  <q-btn flat color="primary" label="Ver Detalhes" @click="viewServiceDetails(service.id)" />
                </q-card-actions>
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
            <q-icon name="phone" size="sm" /> (11) 99999-9999<br>
            <q-icon name="fab fa-whatsapp" size="sm" /> (11) 99999-9999<br>
            <q-icon name="email" size="sm" /> contato@decoracaofestas.com
          </p>
        </div>
        <div class="col-12 col-sm-4 text-center q-mb-sm">
          <h6 class="text-h6">Links Úteis</h6>
          <p class="q-mb-sm">
            <a href="/Sobre" class="text-white">Sobre Nós</a><br>
            <a href="/servicos" class="text-white">Serviços</a><br>
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
        © 2025 Decoração de Festas. Todos os direitos reservados.
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      drawer: false,
      slide: 0,
      testimonialSlide: 0,
      photoDialog: false,
      selectedPhoto: '',
      showFooter: false,
      banners: [
        {
          img: 'https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874_1280.jpg',
          title: 'Transforme Sua Festa em um Momento Mágico',
          subtitle: 'Decorações personalizadas para todos os tipos de eventos.',
        },
        {
          img: 'https://cdn.pixabay.com/photo/2016/11/23/17/24/balloons-1853766_1280.jpg',
          title: 'Festas Infantis Inesquecíveis',
          subtitle: 'Temas criativos e coloridos para alegrar os pequenos.',
        },
      ],
      services: [
        {
          id: 1,
          title: 'Festas Infantis',
          description: 'Decorações temáticas para aniversários infantis.',
          img: 'https://cdn.pixabay.com/photo/2016/11/29/12/56/balloons-1869790_1280.jpg',
        },
        {
          id: 2,
          title: 'Casamentos',
          description: 'Decorações elegantes para o seu grande dia.',
          img: 'https://cdn.pixabay.com/photo/2016/09/10/12/40/wedding-1658726_1280.jpg',
        },
        {
          id: 3,
          title: 'Eventos Corporativos',
          description: 'Soluções sofisticadas para eventos empresariais.',
          img: 'https://cdn.pixabay.com/photo/2017/06/28/14/53/confetti-2451056_1280.jpg',
        },
      ],
      gallery: [
        { id: 1, src: 'https://cdn.pixabay.com/photo/2016/11/29/12/56/balloons-1869790_1280.jpg' },
        { id: 2, src: 'https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874_1280.jpg' },
        { id: 3, src: 'https://cdn.pixabay.com/photo/2016/09/10/12/40/wedding-1658726_1280.jpg' },
        { id: 4, src: 'https://cdn.pixabay.com/photo/2017/06/28/14/53/confetti-2451056_1280.jpg' },
      ],
      testimonials: [
        {
          text: 'A decoração da festa do meu filho foi incrível! Tudo perfeito nos mínimos detalhes.',
          author: 'Ana Silva',
        },
        {
          text: 'Profissionalismo e criatividade! Meu casamento ficou exatamente como sonhei.',
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
      const threshold = 100; // Distância do final da página para mostrar o rodapé
      if (scrollTop + windowHeight >= documentHeight - threshold) {
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
.banner {
  height: 80vh;
  background-size: cover;
  background-position: center;
}
.service-card {
  transition: transform 0.3s;
}
.service-card:hover {
  transform: scale(1.05);
}
.gallery-img {
  object-fit: cover;
  height: 200px;
  width: 100%;
  border-radius: 8px;
}
.footer {
  background-color: #2c3e50;
  color: white;
  padding: 10px 0; /* Reduzido o padding */
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