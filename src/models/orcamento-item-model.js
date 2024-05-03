export default class OrcamentoItemModel {
  constructor(obj = {}) {
    this.identificador = obj.identificador;
    this.item = obj.item;
    this.quantidade = obj.quantidade;
    this.valorUnitario = obj.valorUnitario;
  }

  valorTotal() {
    if (!this.quantidade || !this.valorUnitario)
      return 0;
    return (this.quantidade * this.valorUnitario).toFixed(2);
  }
}