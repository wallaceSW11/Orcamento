<template>
  <v-dialog
    v-model="exibir"
    fullscreen
  >
    <v-card class="px-2">
      <v-row
        no-gutters
        class="d-flex flex-column"
      >
        <v-col>
          <v-row no-gutters>
            <v-col>
              <v-text-field
                label="Item"
                v-model="orcamentoItem.item"
                autofocus
              />
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col class="pr-1">
              <v-text-field
                label="Quantidade"
                v-model="orcamentoItem.quantidade"
              />
            </v-col>
            <v-col class="pl-1">
              <v-text-field
                label="Valor"
                v-model="orcamentoItem.valorUnitario"
              />
            </v-col>
          </v-row>
          <v-row 
            no-gutters
            
          >
            <v-col class="d-flex justify-end">
              <v-switch
                label="Continuar adicionando"
                v-model="continuarAdicionando"
                :color="continuarAdicionando && 'primary' || ''"
              />
            </v-col>

          </v-row>
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col class="d-flex flex-column align-end justify-end">
          <p class="texto-titulo-valor">Valor total:</p>
          <p class="texto-valor">R$ {{ orcamentoItem.valorTotal() }}</p>
        </v-col>

      </v-row>

      <v-card-actions>
        <v-col>
          <v-btn
            @click="descartarAlteracoes()"
          >
            Cancelar
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
          color="primary"
          @click="salvarAlteracoes()"
          >
            Salvar
          </v-btn>
        </v-col>

      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-row
    no-gutters
    class="d-flex flex-column pt-2"
  >
    <v-row no-gutters>
      <v-col>
        <v-btn
          color="primary"
          variant="tonal"
          @click="exibir = true"
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
          :headers="COLUNAS_TABELA_ORCAMENTO_ITEM"
          :items="orcamento.itens"
          :items-per-page="-1"
          no-filter
          :mobile="tamanhoMobileTablet"
          no-data-text="Sem itens adicionados"
        >
          <template #item="{ item }" v-if="tamanhoMobileTablet">
            <tr>
              <td>
                <v-row no-gutters>
                  <v-row no-gutters>
                    <v-col class="d-flex flex-column">
                      <p class="titulo-itens">Produto/Serviço</p>
                      <p>{{ item.item }}</p>
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
                      <p>{{ item.valorTotal() }}</p>
                    </v-col>
                  </v-row>

                </v-row>

              </td>
            </tr>
          </template>

          <template #item="{ item }" v-else>
            <tr>
              <td>{{ item.item }}</td>
              <td>{{ item.quantidade }}</td>
              <td>{{ item.valorUnitario  }}</td>
              <td>{{ item.valorTotal() }}</td>
            </tr>
          </template>
        </v-data-table>
      </v-col>

    </v-row>
  </v-row>


</template>

<script setup>
import { reactive, ref, computed } from 'vue';
import { COLUNAS_TABELA_ORCAMENTO_ITEM } from '@/constants/orcamento-item'
import OrcamentoItemModel from '@/models/orcamento-item-model';
import OrcamentoModel from '@/models/orcamento-model';
import { useDisplay } from "vuetify/lib/framework.mjs";
let { smAndDown } = useDisplay();
let tamanhoMobileTablet = computed(() => smAndDown.value);

let orcamento = defineModel(new OrcamentoModel());
let orcamentoItem = reactive(new OrcamentoItemModel());

let exibir= ref(false);
//let itens = reactive([]);
let continuarAdicionando = ref(false);

function camposObrigatoriosPreenchidos() {
  return true;
}

function salvarAlteracoes() {
  if (!camposObrigatoriosPreenchidos())
    return;

  orcamento.value.itens.push(new OrcamentoItemModel(orcamentoItem));

  exibir.value = continuarAdicionando.value;
  Object.assign(orcamentoItem, new OrcamentoItemModel());
}
function descartarAlteracoes() {
  exibir.value = false;
}

</script>