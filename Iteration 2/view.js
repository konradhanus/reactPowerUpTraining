function ProductView($app, store) {
 
    return {
      render: renderProducts
    };
  
   
    function renderProducts() {
    
      $app.innerHTML = '';
  
      var k, $product, products;
      products = store.getProducts()
      for (k in products) {
        $product = renderProduct(products[k]);
        $app.appendChild($product);
      }
    }
  
    function renderProduct(product) {
      var $product = document.createElement('div');
      var $productName = document.createElement('span');
      var $productPrice = document.createElement('span');
      var $productDescription = document.createElement('span');
      var $productImages = document.createElement('img');
      var $br = document.createElement("br");
  
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
  }