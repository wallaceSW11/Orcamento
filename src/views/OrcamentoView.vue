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
        clearable
        hide-details
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

    <orcamento-item />

    <v-footer class="rodape">
      <v-row no-gutters>
        <v-col 
          cols="6"
          class="pl-2 pr-1"
        >
          <v-btn
            class="ma-0 pa-0"
            width="100%"
            @click="descartarAlteracoes"
          >
            Cancelar
          </v-btn>
        </v-col>
        <v-col 
          cols="6"
          class="pl-1 pr-2"
        >
          <v-btn 
            variant="tonal"
            color="primary"
            width="100%"
            class="ma-0 pa-0"
            @click="salvarAlteracoes"
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
import { useRouter  } from 'vue-router';
import OrcamentoModel from '@/models/orcamento-model.js';
import OrcamentoItem from '@/components/OrcamentoItem.vue';

const route = useRouter();

let orcamento = reactive(new OrcamentoModel());
let salvarCliente = ref(true);




// useOrcamento
function salvarAlteracoes() {
  //validar coisas
  route.push({name: 'Orçamentos'});
}

function descartarAlteracoes() {
  route.push({name: 'Orçamentos'});
}

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
  left: 0;
  width: 100%;
  padding: 0;
  margin: 0;
}
</style>