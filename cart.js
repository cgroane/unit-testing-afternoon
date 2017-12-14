const cars = require('./data/cars');

module.exports = {
  cart: [],
  total: 0,

  addToCart: function(obj) {
    this.cart.push(obj)
    this.total += obj.price
  },

  removeFromCart: function(ind, price) {
    this.cart.splice(ind, 1)
    this.total -= price
  },
  
  checkout: function() {
    this.cart = [];
    this.total = 0
  }
};