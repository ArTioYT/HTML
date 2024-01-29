import {filterState} from "./filterState.js";

const filter = document.querySelector(".filters");
const breadCrumbs = document.querySelector(".bread-crumbs")

filter.addEventListener("click", (event) => {

    if (event.target.className === "category-name" || event.target.className === "subCategory-name") {
        if (filterState.breadCrumbs.includes(event.target.innerHTML)) {
            filterState.breadCrumbs.splice(filterState.breadCrumbs.indexOf(event.target.innerHTML),1)
            breadCrumbs.innerHTML = ""
            event.target.dispatchEvent(new CustomEvent("breadCrumbs", {
                bubbles: true,
                detail: {breadCrumbsElements: filterState.breadCrumbs},
            }));
            return;
        }
        filterState.breadCrumbs.push(event.target.innerHTML)
        breadCrumbs.innerHTML = ""
        event.target.dispatchEvent(new CustomEvent("breadCrumbs", {
            bubbles: true,
            detail: {breadCrumbsElements: filterState.breadCrumbs},
        }));
    }
    if (event.target.className === "subSubCategory-name") {
        if (filterState.breadCrumbsSubSub.includes(event.target.innerHTML)) {
            filterState.breadCrumbsSubSub.splice(filterState.breadCrumbsSubSub.indexOf(event.target.innerHTML),1)
            console.log(filterState.breadCrumbsSubSub);
            event.target.dispatchEvent(new CustomEvent("breadCrumbss", {
                bubbles: true,
                detail: {breadCrumbsSubSubElements: filterState.breadCrumbsSubSub},
            }));
        } else {
            filterState.breadCrumbsSubSub.push(event.target.innerHTML)
            console.log(filterState.breadCrumbsSubSub);
            event.target.dispatchEvent(new CustomEvent("breadCrumbss", {
                bubbles: true,
                detail: {breadCrumbsSubSubElements: filterState.breadCrumbsSubSub},
            }));
        }
    }

})