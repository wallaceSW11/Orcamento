import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Orçamentos',
      component: () => import('@/views/OrcamentosView.vue'),
    },
    {
      path: '/orcamento',
      name: 'Orçamento',
      component: () => import('@/views/OrcamentoView.vue')
    },
    {
      path: '/cliente',
      name: 'Clientes',
      component: () => import('@/views/ClienteView.vue')
    },
    {
      path: '/produto',
      name: 'Produtos',
      component: () => import('@/views/ProdutoView.vue')
    },
    {
      path: '/modelos',
      name: 'Modelos',
      component: () => import('@/views/ModelosView.vue')
    },
    
  ]
})

export default router
