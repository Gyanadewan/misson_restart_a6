const banner = document.getElementById("banner");
const features = document.getElementById("features");
const categoriesContainer = document.getElementById("categories-container");
const allProductsContainer = document.getElementById("allProducts-container");
const categoryContainer = document.getElementById("category-container");

const showHome = () => {
    if (banner) banner.classList.remove("hidden");
     if (features) features.classList.remove("hidden");

    if (categoriesContainer) categoriesContainer.classList.add("hidden");
    if (allProductsContainer) allProductsContainer.classList.add("hidden");
    if (categoryContainer) categoryContainer.classList.add("hidden");
}


const showProducts = () => {

    if (banner) banner.classList.add("hidden");
    if (features) features.classList.add("hidden");

    if (categoriesContainer) categoriesContainer.classList.remove("hidden");
    if (allProductsContainer) allProductsContainer.classList.remove("hidden");
    if (categoryContainer) categoryContainer.classList.remove("hidden");

    loadCategories();
}



const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
menuBtn.addEventListener("click",()=>{
    mobileMenu.classList.toggle("hidden")
})

 const loadAllProducts=()=>{
    // console.log("click allbtn")
   const url = ("https://fakestoreapi.com/products")
    fetch (url)
   .then(res=>res.json())
   .then(data=> {
     displayAllProducts(data)
   })
 }

//   {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
//     "rating": {
//       "rate": 3.9,
//       "count": 120
//     }

const loadProductsByCategory = (name) => {
  const url = `https://fakestoreapi.com/products/category/${name}`;
  fetch(url)
    .then(res => res.json())
    .then(data => {
       displayProductByCatagory(data) 
    })
}

const displayProductByCatagory = (categories)=>{
    const categoryProducContainer = document.getElementById("category-container")
    categoryProducContainer.innerHTML = ""
    categories.forEach(category =>{
    const div = document.createElement("div")
    div.innerHTML = `
    
    <div class="card bg-base-100 shadow-sm m-2 p-2">
  <figure class="h-60 flex items-center justify-center bg-slate-200">
    <img src="${category.image}" alt="" class="h-30 "/>
  </figure>
  <div class="flex justify-between text-sm text-gray-600 mt-2 px-2">
    <span class="bg-slate-200 rounded-md px-2 py-0">${category.category}</span>
    <span><i class="fa-solid fa-star text-yellow-300"></i> ${category.rating?.rate || 0}
      (${category.rating?.count || 0})
    </span>
  </div>
  <div class="card-body p-2">
    <h2 class="card-title text-lg font-medium ">${category.title}</h2>
    <p class="font-bold text-blue-600 mt-1">$${category.price}</p>
    <div class="card-actions justify-between mt-2">
      <button class="btn btn-sm">
      <span><i class="fa-regular fa-eye"></i></span>
      Details</button>
      <button class="btn btn-sm primary bg-blue-600 text-slate-200">
    <span><i class="fa-solid fa-cart-shopping"></i></span>
     Add 
   </button>

    </div>
  </div>
</div>
    `
  categoryProducContainer.append(div)
    
    })

}


const displayAllProducts =(products)=>{
    const allProductsContainer = document.getElementById("allProducts-container")
     allProductsContainer.innerHTML = ""; 
     for(const product of products){
  const productDiv = document.createElement("div")
 productDiv.innerHTML = `
<div class="card bg-base-100 shadow-sm m-2 p-2">
  <figure class="h-60 flex items-center justify-center bg-slate-200">
    <img src="${product.image}" alt="" class="h-30 "/>
  </figure>
  <div class="flex justify-between text-sm text-gray-600 mt-2 px-2">
    <span class="bg-slate-200 rounded-md px-2 py-0">${product.category}</span>
    <span><i class="fa-solid fa-star text-yellow-300"></i> ${product.rating?.rate || 0}
      (${product.rating?.count || 0})
    </span>
  </div>
  <div class="card-body p-2">
    <h2 class="card-title text-lg font-medium ">${product.title}</h2>
    <p class="font-bold text-blue-600 mt-1">$${product.price}</p>
    <div class="card-actions justify-between mt-2">
      <button class="btn btn-sm">
      <span><i class="fa-regular fa-eye"></i></span>
      Details</button>
      <button class="btn btn-sm primary bg-blue-600 text-slate-200">
    <span><i class="fa-solid fa-cart-shopping"></i></span>
     Add 
   </button>

    </div>
  </div>
</div>

 `
 allProductsContainer.append(productDiv)
     }
 }

const loadCategories =()=>{
    const url = ("https://fakestoreapi.com/products/categories")
    fetch (url)
    .then(res => res.json())
    .then(data=>{
      displayCategories(data)
    })
}
    const displayCategories = (categories) => {
        // console.log(categories)
            const categoriesContainer = document.getElementById("categories-container");
            categoriesContainer.innerHTML = "";
            
            const banner = document.getElementById("banner");
            const features = document.getElementById("features"); 
            if (banner) {
            banner.classList.add("hidden");
           }

           if (features) {
           features.classList.add("hidden");
           }
          
           const h1 = document.createElement("h1");
            h1.innerText = "Our Products";
            h1.classList.add("text-2xl", "font-bold", "mb-4", "text-center");
            categoriesContainer.appendChild(h1);

            const buttonsContainer = document.createElement("div");
            buttonsContainer.classList.add("flex", "flex-wrap", "justify-center", "gap-2", "mb-4");
            categoriesContainer.appendChild(buttonsContainer);

            const allBtn = document.createElement("button");
            allBtn.innerText = "All";
            allBtn.classList.add("btn", "px-4", "py-2", "bg-gray-200", "rounded", "hover:bg-gray-300", "transition");
            buttonsContainer.appendChild(allBtn);
            allBtn.addEventListener("click",loadAllProducts)
           
            categories.forEach(category => {
    const btn = document.createElement("button");
    btn.innerText = category;
    btn.classList.add(
        "btn",
        "px-4",
        "py-2",
        "bg-blue-100",
        "text-blue-600",
        "rounded",
    );
    btn.addEventListener("click", () => {
        loadProductsByCategory(category);
    });

    const div = document.createElement("div");
    div.appendChild(btn);
    buttonsContainer.appendChild(div);
});
};
  loadCategories()