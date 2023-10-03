const productsFrame = document.getElementById("products")
products.forEach(({name, price,imagePath}) => {
    const product = document.createElement('div');
    const productImg = document.createElement('img');
    const productName =  document.createElement('div');
    const productPrice =  document.createElement('div');
    productName.innerHTML = name;
    productPrice.innerHTML = price;
    productImg.src = imagePath;
    product.classList.add("product")
    productName.classList.add("product-name")
    productPrice.classList.add("product-cost")
    product.append(productImg)
    product.append(productName)
    product.append(productPrice)
    productsFrame.append(product);
})
