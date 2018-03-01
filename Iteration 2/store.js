import ProductView  from './view.js';

class Store{

  constructor()
  {
    this.store = {};
    this.loadData();
    
     
  }

  async loadData() {
    const response = await fetch('data.js');
      let responseJSON = await response.json()
      this.store = responseJSON; 
      this.renderProducts()
  }
  getProduct(){
    return this.store;
  }

  renderProducts(){
    console.log(this.store);
    var view = new ProductView(document.querySelector('#root'), this.store);
    view.render();
    
  };
}

  export default Store;





