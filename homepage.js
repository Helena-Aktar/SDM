// search Product => redirect to product page
function search() {
  const search_value = document.querySelector("#search_product").value;
  localStorage.setItem("searchkey", search_value);
  window.location.href = "http://127.0.0.1:5500/productsPage.html";
  document.querySelector("#search_product").value = "";
}
// product details
// const menuItems = document.querySelectorAll(".product");
// // remove active class from menu items
// const removeActiveItem = () => {
//   menuItems.forEach((item) => {
//     item.classList.remove("active");
//   });
// };

// menuItems.forEach((item) => {
//   item.addEventListener("click", () => {
//     removeActiveItem();
//     item.classList.add("active");
//     if (item.id != "notifications") {
//       document.querySelector(".notifications-popup").style.display = "none";
//     } else {
//       document.querySelector(".notifications-popup").style.display = "block";
//       document.querySelector(
//         "#notifications .notification-count"
//       ).style.display = "none";
//     }
//   });
// });

// showProductDetails

function showProductDetails() {
  const product = document.getElementById("product_details-popup");
  console.log(product);
  product.style.display === "none"
    ? (product.style.display = "block")
    : (product.style.display = "none");
}
