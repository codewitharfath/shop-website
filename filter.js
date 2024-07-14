const data = [
    {
        id:1,
        name:"Rolex",
        img:"../images/rolex.png",
        amt:5000,
        seller:"bottom store",
        catagory:"watch"

    },
    {
        id:2,
        name:"diesel analog",
        img:"../images/diesel.png",
        amt:3777,
        seller:"bottom store",
        catagory:"watch"

    },
    {
        id:3,
        name:"acer 1",
        img:"../images/acer.png",
        amt:9000,
        seller:"bottom store",
        catagory:"Monitors"

    },
    {
        id:4,
        name:"zebronics",
        img:"../images/zebronics.png",
        amt:8000,
        seller:"bottom store",
        catagory:"Monitors"

    },
    {
        id:5,
        name:"iqoo neo 7pro",
        img:"../images/iqoo neo 7pro.png",
        amt:15000,
        seller:"bottom store",
        catagory:"phone"

    },
    {
        id: 6,
        name: "IKALL N9 ",
        img: "../images/IKALL N9.png",
        amt: 3999,
        seller: "IKALL Store",
        catagory: "Tablets",
      },
    
      {
        id: 7,
        name: "Oppo Pad Air",
        img: "../images/Oppo Pad Air.png",
        amt: 15999,
        seller: "Oppo Store",
        catagory: "Tablets",
      },
      {
        id: 8,
        name: "Acer EK220Q",
        img: "../images/Acer EK220Q.png",
        amt: 6249,
        seller: "Accer Store",
        catagory: "Monitors",
      },
      {
        id: 9,
        name: "Samsung 24",
        img: "../images/Samsung 24.png",
        amt: 9799,
        seller: "Samsung Store",
        catagory: "Monitors",
      },
    
      {
        id: 10,
        name: "ZEBRONICS AC32FHD ",
        img: "../images/ZEBRONICS AC32FHD.png",
        amt: 12799,
        seller: "ZEBRONICS Store",
        catagory: "Monitors",
      },

      {
        id: 11,
        name: "Fire Boltt Ninja 2",
        img: "../images/Fire Boltt Ninja 2.png",
        amt: 1599,
        seller: "Boltt Store",
        catagory: "watch",
      },
    
      {
        id: 12,
        name: "Noise Pulse Go",
        img: "../images/Noise Pulse Go.png",
        amt: 1300,
        seller: "Noise Store",
        catagory: "watch",
      },
    
      {
        id: 13,
        name: "boAt Xtend Pro",
        img: "../images/boAt Xtend Pro.png",
        amt: 2799,
        seller: "Rajesh Watchs",
        catagory: "watch",
      },
    
  
];
const productsContainer = document.querySelector(".products");
const categoryList = document.querySelector(".category-list");

function displayProducts(products) {
  if (products.length > 0) {
    const product_details = products
      .map(
        (product) => `
  <div class="product">
  <div class="img">
    <img src="${product.img}" alt="${product.name}" />
  </div>
  <div class="product-details">
    <span class="name">${product.name}</span>
    <span class="amt">Rs.${product.amt}</span>
    <span class="seller">${product.seller}</span>
  </div>
</div>`
      )
      .join("");

    productsContainer.innerHTML = product_details;
  } else {
    productsContainer.innerHTML = "<h3>No Products Available</h3>";
  }
}

function setCategories() {
  const allCategories = data.map((product) => product.catagory);
  console.log(allCategories);


  
  const catagories = [
    "All",
    ...allCategories.filter((product, index) => {
      
      return allCategories.indexOf(product) === index;
    }),
  ];
  //console.log(catagories);
  categoryList.innerHTML = catagories.map((catagory) => `<li>${catagory}</li>`).join("");

  categoryList.addEventListener("click", (e) => {
    const selectedCatagory = e.target.textContent;
    selectedCatagory === "All" ? displayProducts(data) : displayProducts(data.filter((product) => product.catagory == selectedCatagory));
  });
}
const priceRange = document.querySelector("#priceRange");
const priceValue = document.querySelector(".priceValue");

function setPrices() {
  const priceList = data.map((product) => product.amt);
  const minPrice = Math.min(...priceList);
  const maxPrice = Math.max(...priceList);
  priceRange.min = minPrice;
  priceRange.max = maxPrice;
  priceValue.textContent = "Rs." + maxPrice;

  priceRange.addEventListener("input", (e) => {
    priceValue.textContent = "Rs." + e.target.value;
    displayProducts(data.filter((product) => product.amt <= e.target.value));
  });
}

const txtSearch = document.querySelector("#txtSearch");
txtSearch.addEventListener("keyup", (e) => {
  const value = e.target.value.toLowerCase().trim();
  if (value) {
    displayProducts(data.filter((product) => product.name.toLowerCase().indexOf(value) !== -1));
  } else {
    displayProducts(data);
  }
});

displayProducts(data);
setCategories();
setPrices();