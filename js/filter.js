const filterForm = document.querySelector(".filter-form");
const filter = document.querySelector(".filters");
const sizes = document.querySelector(".sizes");
const reset = document.querySelector(".reset-label");
const filterLabels = document.querySelector(".filter-labels");
filters.forEach(({name, items, img}) => {
    const subCategories = document.createElement('div');
    const categorySection = document.createElement('div');
    const categoryName = document.createElement('div');
    categoryName.innerHTML = name;
    categorySection.append(categoryName);
    categorySection.classList.add("category-section");
    categoryName.classList.add("category-name");
    subCategories.classList.add("subCategories");


    items.forEach(({name, items, img}) => {
        const subSubCategories = document.createElement('div');
        const subCategorySection = document.createElement('div');
        const subCategoryName = document.createElement('span');
        subCategoryName.innerHTML = name.toUpperCase();
        subCategoryName.href = "#";
        subCategories.append(subCategoryName);
        categorySection.append(subCategories);
        subCategorySection.append(subCategoryName);
        subCategories.append(subCategorySection);
        subCategorySection.classList.add("sub-category-section");
        subCategoryName.classList.add("subCategory-name");

        items.forEach((item) => {
            const subSubCategoryName = document.createElement('label');
            const subSubCategory = document.createElement("span")
            const input = document.createElement('input');
            input.type = 'checkbox';
            input.value = item.name;
            input.id = item.id
            // on click in form get all checkboxes with checked === true
            subSubCategory.innerHTML = item.name;
            subSubCategories.append(subSubCategoryName);
            subSubCategoryName.append(input);
            subSubCategoryName.append(subSubCategory);
            subCategories.append(subSubCategories);
            subCategorySection.append(subSubCategories);
            input.classList.add("category-checkbox");
            subSubCategoryName.classList.add("subSubCategory-name");
            subSubCategories.classList.add("subSubCategories");
        })
    })
    filter.append(categorySection);
})

filter.addEventListener("click", (event) => {
    // event.preventDefault();
    if (event.target.classList.contains("category-name")) {
        event.target.parentElement.classList.toggle("open");
    }
    if (event.target.classList.contains("subCategory-name")) {
        event.target.parentElement.classList.toggle("open");
    }
})

const obj11 = {

    }

filterForm.addEventListener('change', (event) => {
    if (event.target.checked) {
        const label = document.createElement('label');
        label.innerHTML = event.target.value
        label.classList.add("label")
        filterLabels.append(label);
        obj11[event.target.value] = {input:event.target, label:label}

        event.target.dispatchEvent(new CustomEvent("Ya lox", {
            bubbles: true,
            detail: {id:event.target.id},
        }));

    } else {
        obj11[event.target.value].label.remove()
    }
})

filterLabels.addEventListener('click', (event) => {
    if (!event.target.innerHTML) return;
    obj11[event.target.innerHTML].input.checked = false;
    obj11[event.target.innerHTML].label.remove();
    delete obj11[event.target.innerHTML];
})

reset.addEventListener("click", (event) => {
    for (let prop in obj11) {
        obj11[prop].input.checked = false
        obj11[prop].label.remove()
        delete obj11[prop]
    }
    console.log(obj11);
})

sizes.addEventListener("click", (event) => {
    if (event.target.classList.contains("size-button")) {
        event.target.classList.toggle("size-active");
    }
})









