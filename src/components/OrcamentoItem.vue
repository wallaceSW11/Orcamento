<template>
  <v-dialog
    v-model="exibir"
    fullscreen
  >
    <v-card>
      <v-row
        no-gutters
        class="d-flex flex-column"
      >
        <v-row no-gutters>
          <v-col>
            <v-text-field
              label="Item"
            />
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col>
            <v-text-field
              label="Quantidade"
            />
          </v-col>
          <v-col>
            <v-text-field
              label="Valor"
            />
          </v-col>
        </v-row>
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


</template>

<script setup>
import { reactive, ref } from 'vue';
import { COLUNAS_TABELA_ORCAMENTO_ITEM } from '@/constants/orcamento-item'

//let exibir = defineModel(false);

let exibir= ref(false);

let itens = reactive([]);

function salvarAlteracoes() {
  exibir.value = false;
}

function descartarAlteracoes() {
  exibir.value = false;
}

</script>