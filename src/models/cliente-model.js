export default class ClienteModel {
  constructor(obj = {}) {
    this.identificador = obj.identificador;
    this.nome = obj.nome;
    this.telefone = obj.telefone;
  }
}