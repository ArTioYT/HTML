export const breadCrumbsContainer = document.querySelector(".bread-crumbs")
export const breadCrumbs = document.querySelector(".bread-crumbs")
const productsFrame = document.getElementById("products")

let sortedProducts = []
createProducts(products)
export function createProducts (content) {
    content.forEach((productData) => {
        const product = document.createElement('div');
        const productImg = document.createElement('img');
        const productName = document.createElement('div');
        const productPrice = document.createElement('div');
        if (Math.ceil((Date.now() - productData.timestamp) / (1000 * 3600 * 24)) <= 23) {
            const productNewFrame = document.createElement("div")
            const productNew = document.createElement('div');
            productNew.innerHTML = "NEW"
            productNew.classList.add("product-new")
            productNewFrame.classList.add("product-new-frame")
            productNewFrame.append(productNew)
            product.append(productNewFrame)
        }
        productName.innerHTML = productData.name;
        productPrice.innerHTML = productData.price;
        productImg.src = productData.imagePath;
        product.classList.add("product")
        productName.classList.add("product-name")
        productPrice.classList.add("product-cost")
        product.append(productImg)
        product.append(productName)
        product.append(productPrice)
        productsFrame.append(product);

    })
}


document.addEventListener('filters', ({detail: {categoryIds, size}}) => {
    productsFrame.innerHTML = "";
    if (categoryIds.length === 0 ) {
        sortedProducts = products.filter((product) => {
            return product.size.includes(size);
        })
        createProducts(sortedProducts)
        return;
    }
    sortedProducts = products.filter((product) => {
        return categoryIds.includes(product.categoryId) && product.size.includes(size);
    })
    createProducts(sortedProducts)
});
document.addEventListener("breadCrumbs", ({detail: {breadCrumbsElements}}) => {
    breadCrumbsElements.forEach((elem) => {
        const breadCrumbElement = document.createElement("a")
        const rightArrow = document.createElement("img")
        rightArrow.src = "/img/Path 2.png"
        breadCrumbElement.innerHTML = elem
        breadCrumbElement.href = "#"
        rightArrow.classList.add("bread-crumbs-arrow")
        breadCrumbs.append(breadCrumbElement)
        breadCrumbs.append(rightArrow)
        if (breadCrumbsElements.length === 1) {
            rightArrow.remove()
        }
    })
})
export const container = document.createElement("div")
document.addEventListener("breadCrumbss", ({detail: {breadCrumbsSubSubElements}}) => {
    container.classList.add("bread-crumbs-sub-sub-container")
    container.innerHTML = ""
    breadCrumbsSubSubElements.forEach((elem) => {
        const breadCrumbsSubSubElement = document.createElement("a")
        breadCrumbsSubSubElement.href = "#"
        breadCrumbsSubSubElement.innerHTML = elem
        container.append(breadCrumbsSubSubElement)
    })
    breadCrumbsContainer.append(container)

})