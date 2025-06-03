const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },

  {
    path: '/Decoracoes',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/DecoracoesPage.vue') }],
  },
  {
    path: '/Carrinho',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/CarrinhoPage.vue') }],
  },

  {
    path: '/MinhaConta',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ContaPage.vue') }],
  },
]

export default routes
