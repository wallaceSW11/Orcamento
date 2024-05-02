<template>
  <v-row
    no-gutters
    class="d-flex flex-column pt-2"
  >
    <v-row no-gutters>
      <v-col>
        <v-text-field
          label="Cliente"
          v-model="orcamento.cliente.nome"
          prepend-inner-icon="mdi-account"
          clearable
        />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <v-text-field
        label="Telefone"
        v-model="orcamento.cliente.telefone"
        prepend-inner-icon="mdi-phone"
        clearable=""
      />
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col class="d-flex justify-end">
        <v-switch
          label="Salvar cliente"
          v-model="salvarCliente"
          :color="salvarCliente && 'primary' || ''"
          density="compact"
          hide-details
        />
      </v-col>
    </v-row>

    <hr>

    <v-row
      no-gutters
      class="pt-2"
    >
      <v-row no-gutters>
        <v-col>
          <v-btn
            color="primary"
            variant="tonal"
          >
            <v-icon>mdi-plus</v-icon>
            <span>Adicionar item</span>
          </v-btn>
        </v-col>
      </v-row>

      <v-row 
        no-gutters
        class="pt-2"
      >
        <v-col>
          <v-data-table
            :headers="cabecalho"
            :items="itens"
            :items-per-page="-1"
            no-filter
            mobile-breakpoint="sm"
            no-data-text="Sem itens adicionados"
          >
            <template #item="{ item }">
              <tr v-if="true">
                <td>
                  <v-row no-gutters>
                    <v-row no-gutters>
                      <v-col class="d-flex flex-column">
                        <p class="titulo-itens">Produto/Serviço</p>
                        <p>{{ item.codigoNome }}</p>
                      </v-col>
                      <v-col class="d-flex flex-column flex-grow-0 px-2 align-end">
                        <p class="titulo-itens">Quantidade</p>
                        <p class="texto-esquerda">{{ item.quantidade }}</p>
                      </v-col>
                      <v-col 
                        cols="3"
                        class="d-flex flex-column align-end"
                      >
                        <p class="titulo-itens">Valor total</p>
                        <p>{{ item.valorTotal }}</p>
                      </v-col>
                    </v-row>

                  </v-row>

                </td>
              </tr>
            </template>
          </v-data-table>
        </v-col>

      </v-row>
    </v-row>

    <v-footer class="rodape">
      <v-row no-gutters>
        <v-col 
          cols="6"
          class="pr-2"
        >
          <v-btn
            width="100%"
          >
            Cancelar
          </v-btn>
        </v-col>
        <v-col 
          cols="6"
          class="pl-2"
        >
          <v-btn 
            variant="tonal"
            color="primary"
            width="100%"
          >
            Salvar
          </v-btn>
        </v-col>
        

      </v-row>

    </v-footer>

  </v-row>
</template>

<script setup>
import { ref, reactive } from 'vue';
import OrcamentoModel from '@/models/orcamento-model.js';

let orcamento = reactive(new OrcamentoModel());
let salvarCliente = ref(false);

let cabecalho = ref([
    {
      title: "Código",
      key: "codigo",
      align: "left",
      sortable: false
    },
    {
      title: "Cliente",
      key: "cliente",
      align: "left",
      sortable: false
    },
    {
      title: "Data",
      key: "dataCriacao",
      align: "left",
      sortable: false
    },
    {
      title: "Valor ttal",
      key: "valorTotal",
      align: "right",
      sortable: false
    }
  ]);

let itens = ref([
  {
    codigoNome: '01 - Mão de obra',
    quantidade: 1,
    valorTotal: 'R$ 250,00'
  },
  {
    codigoNome: '02 - Tecido m²',
    quantidade: 10,
    valorTotal: 'R$ 2.050,00'
  }
])

</script>

<style scoped>
:deep(.v-data-table-headers--mobile) {
    display: none !important;
}

:deep(.v-data-table-footer) {
  display: none !important;
}

.titulo-itens {
  font-size: 10px;
  color: blue;
}

.rodape {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>