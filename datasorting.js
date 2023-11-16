//function for sorting the birthday products according to there price
//selectors for birthday prroducts
let product__list = document.querySelector(`#product__items`);
let birthday_sort = document.querySelector(`#SelectForBirthday`);




function sortBirthdayProducts() {
    const products = Array.from(product__list.children);
    const sortValue = birthday_sort.value;

    products.sort((a, b) => {
        const priceA = parseInt(a.getAttribute("data-price"));
        const priceB = parseInt(b.getAttribute("data-price"));

        if (sortValue === "low-to-high") {
            return priceA - priceB;
        } else if (sortValue === "high-to-low") {
            return priceB - priceA;
        }
    });

    products.forEach((product) => {
        product__list.appendChild(product);
    });
}

// Event listener for sorting
birthday_sort.addEventListener("change", sortBirthdayProducts);

// Initial sorting
sortBirthdayProducts();

//category filter Btns
document.getElementById("Birthday_btn").addEventListener("click", function () {
    filterProducts("birthday");
  });
  
  document.getElementById("Room_btn").addEventListener("click", function () {
    filterProducts("room");
  });
  
  document.getElementById("Premium_btn").addEventListener("click", function () {
    filterProducts("premium");
  });
  
  function filterProducts(category) {
    // Get all product elements
    var products = document.getElementsByClassName("product__item__box");
  
    // Loop through all products and hide/show based on the selected category
    for (var i = 0; i < products.length; i++) {
      var product = products[i];
      if (product.classList.contains(category)) {
        product.style.display = "block"; // Show the product
      } else {
        product.style.display = "none"; // Hide the product
      }
    }
  }

  
