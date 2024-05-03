<template>
  <v-row no-gutters>
    <v-col>
      <v-data-table
        :items="orcamentos"
        :items-per-page="-1"
        :headers="COLUNAS_TABELA_ORCAMENTO"
        :mobile="tamanhoMobileTablet"
        no-filter
        
      >
        <template #item="{ item }" v-if="tamanhoMobileTablet">
          <tr>
            <td >
              <v-row
                no-gutters
                class="pt-2">
                <v-col>
                  <v-chip size="small" :color="item.status.cor" density="compact">{{ item.status.titulo }}</v-chip>
                </v-col>
                <v-col class="d-flex flex-grow-0">
                  {{ item.dataCriacao }}
                </v-col>
              </v-row>
              <v-row
                no-gutters
                class="py-2">
                <v-col class="d-flex flex-grow-0 pr-2">
                  #{{ item.identificador }}
                </v-col>
                <v-col>
                  {{ item.cliente.nome }}
                </v-col>
                <v-col class="d-flex justify-end">
                  <b>{{ item.valorTotal }}</b>
                </v-col>
              </v-row>
            </td>
          </tr>
        </template>

        <template v-else #item="{ item }">
          <tr>
            <td>{{ item.identificador }}</td>
            <td>{{ item.cliente.nome }}</td>
            <td>{{ item.dataCriacao }}</td>
            <td>{{ item.valorTotal }}</td>
          </tr>
        </template>

        <template #top> </template>
        <template #bottom> </template>
      </v-data-table>
    </v-col>
  </v-row>
  <div class="botao-flutuante">
    <v-btn
      icon
      to="/orcamento"
      color="primary"
    >
      <v-icon large>mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useDisplay } from "vuetify/lib/framework.mjs";
import { COLUNAS_TABELA_ORCAMENTO } from '@/constants/orcamento'

let { smAndDown } = useDisplay();
let tamanhoMobileTablet = computed(() => smAndDown.value);


const orcamentos = [
  {
    identificador: '1122',
    cliente: {
      nome: 'José Alfredo',
      telefone: '21 8888 - 99999'
    },
    status: {
      titulo: 'Aberto',
      valor: 'ABERTO',
      cor: 'gray'
    },
    dataCriacao: '01/05/2024',
    valorTotal: 'R$ 250,00'
  },
  {
    identificador: '1123',
    cliente: {
      nome: 'Pedrin da rua de cima',
      telefone: '21 999888 - 77777'
    },
    status: {
      titulo: 'Aguardando aprovação',
      valor: 'AGUARDANDO_APROVACAO',
      cor: 'orange'
    },
    dataCriacao: '02/05/2024',
    valorTotal: 'R$ 100,00'
  },
  {
    identificador: '1124',
    cliente: {
      nome: 'João da serra',
      telefone: '21 9994444 - 77777'
    },
    status: {
      titulo: 'Aprovado',
      valor: 'APROVADO',
      cor: 'green'
    },
    dataCriacao: '02/05/2024',
    valorTotal: 'R$ 2.500,00'
  },
];

</script>

<style>
.v-data-table-headers--mobile {
    display: none !important;
}

.botao-flutuante {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 3;
}
</style>