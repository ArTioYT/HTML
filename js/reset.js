import {filterState} from "./filterState.js";
import {createProducts} from "./product.js";
import {container} from "./product.js"
const breadCrumbs = document.querySelector(".bread-crumbs")
const filterForm = document.querySelector(".filter-form");
const filterLabels = document.querySelector(".filter-labels");
const reset = document.querySelector(".reset-label");
reset.addEventListener("click", (event) => {
    filterLabels.innerHTML = '';
    filterForm.reset();
    event.target.dispatchEvent(new CustomEvent("filters", {
        bubbles: true,
        detail: {categoryIds: []},
    }));
    filterState.breadCrumbs = []
    filterState.breadCrumbsSubSub = []
    breadCrumbs.innerHTML = ""
    container.innerHTML = ""
    createProducts(notFilteredProducts)
    console.log(filterState.breadCrumbsSubSub);
})
