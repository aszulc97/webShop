const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

console.log(category);
let url = "https://kea-alt-del.dk/t7/api/products?limit=100";

if (category != null) {
  url = "https://kea-alt-del.dk/t7/api/products?category=" + category;
}

fetch(url)
  .then((res) => res.json())
  .then((data) => data.forEach(showProduct));

function showProduct(product) {
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);
  clone.querySelector("a").href = "product.html?id=" + product.id;
  clone.querySelector("h2").textContent = product.productdisplayname;
  clone.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  const parent = document.querySelector("div");
  parent.appendChild(clone);
}
