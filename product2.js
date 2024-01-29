import {component1} from "./historyTest.js";
const body = document.querySelector("body")
const product2 = document.querySelector(".product2")
let url1 = new URL('http://localhost:63342/productListing/product1.html');
let url2 = new URL('http://localhost:63342/productListing/product2.html');
export const component2 = {
    layer: `<div class="product2Name"> Light-blue costume </div>
                  <div class="product2Price"> $49.99 </div>
                  <img class="product2Image" src="img/7158a48ecba2e7885cb7cf21ec51360b.png" alt="aaa">
`,
    product2Name: null,
    product2Price: null,
    product2Image: null,
    nameCallback(e) {
        alert("Light-blue costume")
    },
    priceCallback(e) {
        alert("$49.99")
    },
    imageCallback(e) {
        alert("Минус бабки")
    },
    createListeners() {
        this.product2Name = document.querySelector(".product2Name");
        this.product2Price = document.querySelector(".product2Price");
        this.product2Image = document.querySelector(".product2Image");

        this.product2Name.addEventListener('click', this.nameCallback);
        this.product2Price.addEventListener('click', this.priceCallback);
        this.product2Image.addEventListener('click', this.imageCallback);
    },

    removeListeners() {
        this.product2Name.removeEventListener('click', this.nameCallback);
        this.product2Price.removeEventListener('click', this.priceCallback);
        this.product2Image.removeEventListener('click', this.imageCallback);
    },

    renderProduct() {
        body.innerHTML = ""
        component1.renderProduct()
        const product2 = `<img class="product2" src = "img/Bitmap (2).png">`
        body.insertAdjacentHTML("beforeend", product2)
        const product22 = document.querySelector(".product2")
        product22.addEventListener("click", (event) => {
            if (event.target.getAttribute("src") === "img/Bitmap (2).png") {
                window.history.pushState(
                    {},
                    '',
                    url2
                )
                component2.renderProducts()
            }
        })
        component2.removeListeners()
    },

    renderProducts() {
        body.innerHTML = component2.layer
        component2.createListeners()
    },
}

product2.addEventListener("click", (event) => {
    if (event.target.getAttribute("src") === "img/Bitmap (2).png") {
        window.history.pushState(
            {},
            '',
            url2
        )
        component2.renderProducts()
    }
})


window.addEventListener("popstate", (event) => {
    if (window.location.pathname.search("product2") === -1) {
        component2.renderProduct()
        console.log("product2.back");

    }
    if (window.location.pathname.search("product2") !== -1) {
        component2.renderProducts()
        console.log("product2.forward");
    }
})
