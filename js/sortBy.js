import {createProducts} from "./product.js";
const sortBy = document.querySelector(".sorting")
const productsFrame = document.getElementById("products")
sortBy.addEventListener("change", (event) => {
        if (event.target.value === "SELECT") {
            productsFrame.innerHTML = ""
            createProducts(notFilteredProducts)
        }
        if (event.target.value === "LOW TO HIGH") {
            const filteredProducts = products.sort((a, b) => {
                return (a.price - b.price);
            })
            productsFrame.innerHTML = ""
            createProducts(filteredProducts)
        }
        if (event.target.value === "HIGH TO LOW") {
            const filteredProducts = products.sort((a, b) => {
                return (b.price - a.price);
            })
            productsFrame.innerHTML = ""
            createProducts(filteredProducts)
        }
        if (event.target.value === "A-Z") {
            const filteredProducts = products.sort((a, b) => {
                const nameA = a.name
                const nameB = b.name
                return nameA.localeCompare(nameB);
            })
            productsFrame.innerHTML = ""
            createProducts(filteredProducts)
        }
        if (event.target.value === "Z-A") {
            const filteredProducts = products.sort((a, b) => {
                const nameA = a.name
                const nameB = b.name
                return nameB.localeCompare(nameA);
            })
            productsFrame.innerHTML = ""
            createProducts(filteredProducts)
        }
        if (event.target.value === "OLD TO NEW") {
            const filteredProducts = products.sort((a, b) => {
                let timeA = Math.ceil((Date.now() - a.timestamp))
                let timeB = Math.ceil((Date.now() - b.timestamp))
                return timeB - timeA
            })
            productsFrame.innerHTML = ""
            createProducts(filteredProducts)
        }
    if (event.target.value === "NEW TO OLD") {
        const filteredProducts = products.sort((a, b) => {
                let timeA = Math.ceil((Date.now() - a.timestamp))
                let timeB = Math.ceil((Date.now() - b.timestamp))
                return timeA - timeB
            })
        productsFrame.innerHTML = ""
        createProducts(filteredProducts)
        }
})
