"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Item extends Model {
  pedido() {
    return this.belongsTo("App/Models/Pedido");
  }

  produto() {
    return this.belongsTo("App/Models/Produto");
  }

  tamanho() {
    return this.belongsTo("App/Models/Tamanho");
  }

  sabores() {
    return this.hasMany("App/Models/SaboresItem");
  }
}

module.exports = Item;
