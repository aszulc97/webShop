// const urlParams = new URLSearchParams(window.location.search);
// const productID = urlParams.get("id");
const url = "https://kea-alt-del.dk/t7/api/categories";

fetch(url)
  .then((res) => res.json())
  .then((data) => data.forEach(showCategory));

function showCategory(category) {
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);
  //   clone.querySelector("a").href = "product.html?id=" + product.id;
  clone.querySelector("h3").textContent = category.category;
  const parent = document.querySelector("nav");
  parent.appendChild(clone);
}
