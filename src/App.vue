<template>
  <v-app class="pa-0 ma-0">

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>{{ tituloPagina }}</v-app-bar-title>
    </v-app-bar>

   <v-navigation-drawer 
     v-model="drawer"
     disable-resize-watcher
    >
      <v-list dense>
        <v-list-item 
          v-for="item in itensMenu"
          :key="item.titulo"
          :to="item.rota"
        >
        <v-icon>{{ item.icone }}</v-icon>
        <span class="pl-2">{{ item.titulo }}</span>

        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-main class="quadro-principal">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { useRoute } from 'vue-router'

  const drawer = ref(null)
  
  // useTitlePage
  const route = useRoute()
  const tituloPagina = computed(() => {
    return route.name || '-'
  })

  //useMenuItens
  const itensMenu = [
    {
      titulo: 'Orçamentos',
      rota: '/',
      icone: 'mdi-home'
    },
    {
      titulo: 'Clientes',
      rota: '/cliente',
      icone: 'mdi-account'
    },
    {
      titulo: 'Produtos',
      rota: '/produto',
      icone: 'mdi-box'
    },
    {
      titulo: 'Modelos',
      rota: '/modelos',
      icone: 'mdi-circle'
    },
  ]
</script>