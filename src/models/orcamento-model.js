import ClienteModel from "./cliente-model";

export default class OrcamentoModel {
  constructor(obj = {}) {
    this.identificador = obj.identificador;
    this.dataCriacao = obj.dataCriacao;
    this.cliente = (obj.cliente && new ClienteModel(obj.cliente)) || new ClienteModel();
    this.itens = obj.itens || [];
  }
}
