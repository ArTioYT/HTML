import {filterState} from "./filterState.js";
const filter = document.querySelector(".filters");
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
            subSubCategory.innerHTML = item.name;
            subSubCategories.append(subSubCategoryName);
            subSubCategoryName.append(input);
            subSubCategoryName.append(subSubCategory);
            subCategories.append(subSubCategories);
            subCategorySection.append(subSubCategories);
            input.classList.add("category-checkbox");
            subSubCategoryName.classList.add("subSubCategory-label");
            subSubCategory.classList.add("subSubCategory-name")
            subSubCategories.classList.add("subSubCategories");
        })
    })
    filter.append(categorySection);
})


filter.addEventListener("click", (event) => {
    if (event.target.classList.contains("category-name")) {
        event.target.parentElement.classList.toggle("open");
    }
    if (event.target.classList.contains("subCategory-name")) {
        event.target.parentElement.classList.toggle("open");
    }
})







