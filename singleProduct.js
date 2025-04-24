// console.log(window.location.href);
const currentURL = new URL(window.location.href);
// console.log(currentURL.searchParams);
// currentURL.searchParams.forEach((value, key) => {
//   console.log(key, value);
// });

const idFromURL = currentURL.searchParams.get("id");

if (!idFromURL) {
  alert("No ID found in URL");
  window.location.href = "/index.html";
}

const left = document.querySelector(".left");
const right = document.querySelector(".right");

const API_KEY = " https://fakestoreapi.in/api/products";

async function getData() {
  const response = await fetch(API_KEY + "/" + idFromURL);
  const result = await response.json();
  console.log(result.product);

  displayData(result.product);
}
getData();

function displayData(object) {
  const image = document.createElement("img");
  image.src = object.image;
  left.append(image);

  const title = document.createElement("h2");
  title.innerText = object.title;
  const description = document.createElement("p");
  description.innerText = object.description;
  const price = document.createElement("h2");
  price.innerText = `$:${object.price}`;
  const category = document.createElement("h2");
  category.innerText = `Category: ${object.category}`;
  const rating = document.createElement("h2");
  rating.innerText = `Rating: ${object.rating}`;
  right.append(title, description, price, category, rating);
}
