const slider = document.querySelector(".slider")
const productInfo = document.querySelector(".productInfo")
const mainDescription = document.querySelector(".mainDescription")
const instagram = document.querySelector(".instagram")
const reviews = document.querySelector(".reviews")
const selectableImageContainer = document.querySelector(".selectableImageContainer")
const selectedImagesContainer = document.querySelector(".selectedImagesContainer")
selectedImagesContainer.insertAdjacentHTML("beforeend", `<img class="sliderSelectedImage" src="${products[0].firstSliderSelectedImage}" alt="aaa" />` )
let sliderImages = ""
products[0].slider.map((imgPath) => {
        sliderImages += `<img class="selectableImages" src="${imgPath}" alt="aaa" />`
})
selectableImageContainer.insertAdjacentHTML("afterbegin", sliderImages)

slider.append(selectableImageContainer)

let productName = `<div class="productName">
    ${products[0].name}
    </div>`
productInfo.insertAdjacentHTML("beforeend", productName)

let productPrice = `<div class="productPrice">
    ${products[0].price}
    </div>`
const productInfoRating = `<div class="reviewRating">
    <img class="reviewStars" src="${products[0].reviews.reviewStars}" alt="aaa"/>
    <div class="reviewMark">
       ${products[0].reviews.reviewMark} 
</div>`
productInfo.insertAdjacentHTML("beforeend", productPrice)
productInfo.insertAdjacentHTML("beforeend", productInfoRating)

let description = `<div class="descriptionContainer">
    <div class="description">
       Description
</div>
    <div class="descriptionText">
        ${products[0].description}
</div>
    <div class="seeMore">SEE MORE</div>

    <div class="artisanEmploymentContainer">
    <span class="artisanEmployment">
       Artisan Employment
</span>
    <span class="artisanEmploymentText">
        ${products[0].artisanEmployment}
</span>
    </div>
    
    <div class="partnerShipContainer">
    <span class="partnership">
       Partnership
</span>
    <span class="partnerShipText">
        ${products[0].partnerShip}
</span>
    </div>
    
        <div class="inCollabContainer">
     <span class="inCollab">
       In Collab
</span>
    <span class="inCollabText">
        ${products[0].inCollab}
</span>
    </div>
    </div>`
productInfo.insertAdjacentHTML("beforeend", description)

let sizes = `<div class="sizes"> 
        
 </div>`
productInfo.insertAdjacentHTML("beforeend", sizes)

const features = `<div class="featuresContainer">
    <span class="features">
        Features
</span>
    <span class="featuresOpenText">
        +
</span>
    <div class="featuresText">
        ${products[0].features}
</div>
    </div>`
const fabricCare = `<div class="fabricCareContainer">
    <span class="fabricCare">
         Fabric Care
</span>
    <span class="fabricCareOpenText">
        +
</span>
    <div class="fabricNotes">
        Fabric Notes
</div>
    <div class="fabricNotesText">
        ${products[0].fabricCare.fabricNotes}
</div>
    <div class="careInstructions">
        Care Instructions
</div>
     <div class="careInstructionsText">
        ${products[0].fabricCare.careInstructions}
</div>
    </div>`
productInfo.insertAdjacentHTML("beforeend", features)
productInfo.insertAdjacentHTML("beforeend", fabricCare)

const descriptionPhoto1 = `<img class="descriptionPhoto1" src="${products[0].mainDescription.photo1}" alt="aaa"/>`
const descriptionPhoto1Text = `<div class="descriptionPhoto1Text"> ${products[0].mainDescription.descriptionPhoto1Text} </div>`
const description1 = `<div class="description1"> ${products[0].mainDescription.description1} </div>`
let descriptionPhoto234 = ""
let descriptionText234 = ""
products[0].mainDescription.descriptionPhoto.forEach((path) => {
    descriptionPhoto234 += `<img class="descriptionPhoto234" src="${path}" alt="aaa"/>`
})

products[0].mainDescription.descriptionText.forEach((photoText) => {
    descriptionText234 += `<div class="descriptionText234">
    ${photoText}
</div>`
})
console.log(descriptionText234);

const descriptionPhotoContainer = `<div class="descriptionPhotoContainer">
        ${descriptionPhoto234}
</div>`

const description2 = `<div class="description2">${products[0].mainDescription.description2}</div>`

mainDescription.insertAdjacentHTML("beforeend", descriptionPhoto1)
mainDescription.insertAdjacentHTML("beforeend", descriptionPhoto1Text)
mainDescription.insertAdjacentHTML("beforeend", description1)
mainDescription.insertAdjacentHTML("beforeend", descriptionPhotoContainer)
mainDescription.insertAdjacentHTML("beforeend", description2)


let instagramText = `<div class="instagramText">
       As Seen On Instagram
</div>`


let instagramImages = ""
products[0].instagram.map((imgPath) => {
    instagramImages += `<img class="instagramImage" src="${imgPath}" alt="aaa" />`
})
const instagramPhotoContainer = `<div class="instagramPhotoContainer">
        ${instagramImages}
</div>`
instagram.insertAdjacentHTML("beforeend", instagramText)
instagram.insertAdjacentHTML("beforeend", instagramPhotoContainer)

const reviewsTitle = `<div class="reviewsTitle">
    ${products[0].reviews.reviewsTitle}
</div>`
const reviewRating = `<div class="generalReviewRating">
    <img class="generalReviewStars" src="${products[0].reviews.reviewStars}" alt="aaa"/>
    <div class="generalReviewMark">
       ${products[0].reviews.reviewMark} 
</div>
</div>`
const review = `<div class="review"> 
    <div class="reviewTop">
    ${products[0].reviews.reviewTop}
    </div>
<div class="reviewRating">
    <img class="reviewStars" src="${products[0].reviews.reviewStars}" alt="aaa"/>
    <div class="reviewMark">
       ${products[0].reviews.reviewMark} 
</div>
</div>
<div class="reviewInfo">
    <div>By</div>
    <div class="reviewAuthor">${products[0].reviews.reviewAuthor}</div>
    <div class="reviewDate"> ${products[0].reviews.reviewDate}</div>  
</div>
     <div class="reviewText">
        ${products[0].reviews.reviewText}
</div>
     <div class="reviewMore">
        ${products[0].reviews.reviewMore}
</div>
    </div>`
reviews.insertAdjacentHTML("beforeend", reviewsTitle)
reviews.insertAdjacentHTML("beforeend", reviewRating)
reviews.insertAdjacentHTML("beforeend", review)
// slider

slider.addEventListener("click", (event) => {
    if (event.target.classList.contains("selectableImages")) {
        selectedImagesContainer.innerHTML = ""
        const sliderSelectedImage = `<img class="sliderSelectedImage" src="${products[0].sliderSelectedImages[event.target.getAttribute('src')]}" alt="aaa" />`
        selectedImagesContainer.insertAdjacentHTML("afterbegin", sliderSelectedImage)
    }
})
slider.append(selectedImagesContainer)

