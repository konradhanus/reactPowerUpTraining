var store = GetStore;
var view = ProductView(document.querySelector('#root'), store);
console.log(store.getProducts());

setInterval(function () {
    view.render(new Date().getTime());
  }, 500);