class ProductView {
  constructor($app, store){
    this.app = $app;
    this.store = store;
  }

  renderProduct(product) {
    let $product = document.createElement('div');
    let $productName = document.createElement('span');
    let $productPrice = document.createElement('span');
    let $productDescription = document.createElement('span');
    let $productImages = document.createElement('img');
    let $br = document.createElement("br");

    $productName.textContent = product.name;
    $productDescription.textContent = product.description;
    $productPrice.textContent = product.price;
    $productImages.src = product.images;

    $product.className = 'product';

    $product.appendChild($productName);
    $product.appendChild(document.createTextNode(' '));
    $product.appendChild($productDescription);
    $product.appendChild(document.createTextNode(' '));
    $product.appendChild($productPrice);
    $product.appendChild(document.createTextNode(' PLN '));
    $product.appendChild(document.createTextNode(' '));
    $product.appendChild($br);
    $product.appendChild($productImages);

    return $product;
  }

  render() {
  
    let $app = this.app
    $app.innerHTML = ''; 
    let k, $product, products;
    products = this.store;
  
    for (k in products) {
      $product = this.renderProduct(products[k]);
      $app.appendChild($product);
    }

    return $app;
  }


}
export default ProductView;