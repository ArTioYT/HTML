import {filterState} from "./filterState.js";

const sizes = document.querySelector(".sizes");
const sizeButtons = document.querySelectorAll(".size-buttons button");
let currentSize = ""; //filter state
sizes.addEventListener("click", (event) => {
    filterState.size = event.target.innerHTML;
    if (filterState.size && filterState.size !== currentSize) {
        currentSize = filterState.size;
        // event.target.dispatchEvent(new CustomEvent(CustomEvents.SIZE_CHANGE, {
        //     bubbles: true,
        //     detail: filterState.size,
        // }));
        event.target.dispatchEvent(new CustomEvent("filters", {
            bubbles: true,
            detail: {categoryIds: filterState.categoryIds, size: filterState.size}, // и сайз передать
        }));
        console.log(filterState.size);

        for (let prompt of sizeButtons) {
                prompt.classList.remove("active");
            }
            event.target.classList.add("active");
    } else {

    }

})