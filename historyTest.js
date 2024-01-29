import {component2} from "./product2.js";
const body = document.querySelector("body")
const product1 = document.querySelector(".product1")
let url1 = new URL('http://localhost:63342/productListing/product1.html');
export const component1 = {
    layer: `<div class="productName"> Blue costume </div>
                  <div class="productPrice"> $79.99 </div>
                  <img class="productImage" src="img/04707811ffd2beabe3879e61e92fd9a8.png" alt="aaa">
`,
    productName: null,
    productPrice: null,
    productImage: null,
    nameCallback(e) {
        alert("Blue costume")
    },
    priceCallback(e) {
        alert("$79.99")
    },
    imageCallback(e) {
        alert("Минус бабки")
    },
    createListeners() {
        this.productName = document.querySelector(".productName");
        this.productPrice = document.querySelector(".productPrice");
        this.productImage = document.querySelector(".productImage");

        this.productName.addEventListener('click', this.nameCallback);
        this.productPrice.addEventListener('click', this.priceCallback);
        this.productImage.addEventListener('click', this.imageCallback);
    },

    removeListeners() {
        this.productName.removeEventListener('click', this.nameCallback);
        this.productPrice.removeEventListener('click', this.priceCallback);
        this.productImage.removeEventListener('click', this.imageCallback);
    },

    renderProduct() {
        const product1 = `<img class="product1" src = "img/Bitmap (1).png">`
        body.insertAdjacentHTML("beforeend", product1)
        const product11 = document.querySelector(".product1")
        product11.addEventListener("click", (event) => {
            if (event.target.getAttribute("src") === "img/Bitmap (1).png") {
                window.history.pushState(
                    {},
                    '',
                    url1
                )
                component1.renderProducts()
            }
        })
        component1.removeListeners()
    },

    renderProducts() {
        body.innerHTML = component1.layer
        component1.createListeners()
    },
}

product1.addEventListener("click", (event) => {
    if (event.target.getAttribute("src") === "img/Bitmap (1).png") {
        window.history.pushState(
            {},
            '',
            url1
        )
        component1.renderProducts()
    }
})

window.addEventListener("popstate", (event) => {
    if (window.location.pathname.search("product1") !== -1) {
        component1.renderProducts()
        console.log("product1.forward");
    }
})
