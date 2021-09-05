const urlParams = new URLSearchParams(window.location.search);
const productID = urlParams.get("id");
const url = "https://kea-alt-del.dk/t7/api/products/" + productID;

fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".gender").textContent = product.gender;
  document.querySelector(".brand").textContent = product.brandname;
  document.querySelector(".season").textContent = product.season;
  document.querySelector(".productName").textContent = product.productdisplayname;
  document.querySelector(
    ".productImg"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector(".description").innerHTML = product.description;
}
