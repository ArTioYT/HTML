import {filterState} from "./filterState.js";
const filterForm = document.querySelector(".filter-form");
const filterLabels = document.querySelector(".filter-labels");
let currLabels = {}
filterForm.addEventListener('change', (event) => {
    if (event.target.checked) {
        const label = document.createElement('label');
        label.innerHTML = event.target.value;
        label.htmlFor = event.target.id;
        label.classList.add("label")
        currLabels[event.target.id] = label
        filterLabels.append(label);
        filterState.categoryIds.push(+event.target.id)
    } else {
        filterState.categoryIds.splice(filterState.categoryIds.indexOf(+event.target.id),1)
        currLabels[event.target.id].remove()
        delete currLabels[event.target.id];
    }
    event.target.dispatchEvent(new CustomEvent("filters", {
        bubbles: true,
        detail: {categoryIds: filterState.categoryIds, size: filterState.size},
    })); // вызывать метод класса с диспатчем
});
filterLabels.addEventListener("click", (event) => {
    if (filterState.breadCrumbsSubSub.includes(event.target.innerHTML)) {
        filterState.breadCrumbsSubSub.splice(filterState.breadCrumbsSubSub.indexOf(event.target.innerHTML),1)
        console.log(filterState.breadCrumbsSubSub);
        event.target.dispatchEvent(new CustomEvent("breadCrumbss", {
            bubbles: true,
            detail: {breadCrumbsSubSubElements: filterState.breadCrumbsSubSub},
        }));
}})

