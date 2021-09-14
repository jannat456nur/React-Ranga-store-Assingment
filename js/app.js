

// load data
const loadProducts = () => {
  const url = `https://fakestoreapi.com/products`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => showProducts(data));
};
loadProducts();

// show all product in UI 
const showProducts = (products) => {
  const allProducts = products.map((pd) => pd);
  for (const product of allProducts) {
    const image = product.images;
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `<div class="single-product">
      <div>
    <img class="product-image" src=${product.image}></img>
      </div>
      <h3>${product.title}</h3>
      <p>Category: ${product.category}</p>
      <p><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i> ${product.rating.rate}</p>
      <p>count: ${product.rating.count}</p>
      <h2>Price: $ ${product.price}</h2>
      <button onclick="addToCart(${product.id},${product.price})" id="addToCart-btn" class="buy-now btn jannat-btn-success">add to cart</button>
      <button onclick="loadDetail(${product.id})" id="details-btn" class="btn jannat-btn-danger">Details</button></div>
      `;
    document.getElementById("all-products").appendChild(div);
  }
};
// load single data

const loadDetail = detailId => {
  // console.log(detailId);
  // const url = `
  // https://fakestoreapi.com/products/${detailId}
  // `
  // fetch(url)
  //   .then((response) => response.json())
  //   .then((data) => loadDetail(data));
  fetch('https://fakestoreapi.com/products/${id}')

    .then(res => res.json())
    .then(data => displayDetail(data))
}
// loadDetail()
// display single detail

const displayDetail = detailId => {
  console.log(detailId)
  const detail = document.getElementById('detail')
  const div = document.createElement('div');
  div.innerHTML = `<div>
  <h3>${product.title}</h3>
  <h3>${product.id}</h3>
  <p>Category: ${product.category}</p>
  <p>Category: ${product.description}</p>
  <p>rate: ${product.rating.rate}</p>
  <p>count: ${product.rating.count}</p>
  <h2>Price: $ ${product.price}</h2>
  <button onclick="loadDetail(${products.detailId})" id="details-btn" class="btn jannat-btn-danger">Details</button></div>
  `;
  detail.appendChild(div)

}
// update  total function call  and add to my card ******

let count = 0;
const addToCart = (id, price) => {
  count = count + 1;
  updatePrice("price", price);

  updateTaxAndCharge();
  document.getElementById("total-Products").innerText = count;
  updateTotal('total')
};

const getInputValue = (id) => {
  const element = document.getElementById(id).innerText;
  const converted = parseInt(element);
  // console.log(converted)
  return converted;
};

// main price update function
const updatePrice = (id, value) => {
  const convertedOldPrice = getInputValue(id);
  // console.log(id)
  const convertPrice = parseFloat(value);
  // console.log(value)
  const total = convertedOldPrice + convertPrice;
  // console.log(total)
  document.getElementById(id).innerText = parseFloat(total).toFixed(2);
};

// // set innerText function
const setInnerText = (id, value) => {
  document.getElementById(id).innerText = Math.round(value);
};

// update delivery charge and total Tax
const updateTaxAndCharge = () => {
  const priceConverted = getInputValue("price");
  // console.log(priceConverted)
  if (priceConverted > 200) {
    setInnerText("delivery-charge", 30);
    setInnerText("total-tax", priceConverted * 0.2);
  }
  if (priceConverted > 400) {
    setInnerText("delivery-charge", 50);
    setInnerText("total-tax", priceConverted * 0.3);
  }
  if (priceConverted > 500) {
    setInnerText("delivery-charge", 60);
    setInnerText("total-tax", priceConverted * 0.4);
  }
};

//grandTotal update function
const updateTotal = () => {
  const grandTotal =
    getInputValue("price") + getInputValue("delivery-charge") +
    getInputValue("total-tax");
  // console.log(grandTotal)
  document.getElementById("total").innerText = parseFloat(grandTotal).toFixed(2);
};