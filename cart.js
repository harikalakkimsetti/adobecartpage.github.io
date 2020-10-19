var ShoppingCart = (function ($) {
  "use strict";

  var productsEl = document.querySelector(".products");

  // JSON data API call
  var products = [
    {
      id: 0,
      name: "Samsung Series 4",
      image:
        "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
      price: {
        actual: 13999,
        display: 22500,
      },
      discount: 37,
    },
    {
      id: 1,
      name: "Samsung Super 6",
      image:
        "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
      price: {
        actual: 35999,
        display: 66900,
      },
      discount: 46,
    },
    {
      id: 2,
      name: "Samsung The Frame",
      image:
        "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
      price: {
        actual: 84999,
        display: 133900,
      },
      discount: 36,
    },
    {
      id: 3,
      name: "Thomson B9 Pro",
      image:
        "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
      price: {
        actual: 9999,
        display: 16999,
      },
      discount: 41,
    },
    {
      id: 4,
      name: "LG Ultra HD",
      image:
        "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
      price: {
        actual: 39990,
        display: 79990,
      },
      discount: 50,
    },
    {
      id: 5,
      name: "Vu Ready LED TV",
      image:
        "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
      price: {
        actual: 7999,
        display: 17e3,
      },
      discount: 52,
    },
    {
      id: 6,
      name: "Koryo Android TV",
      image:
        "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
      price: {
        actual: 55999,
        display: 199990,
      },
      discount: 71,
    },
    {
      id: 7,
      name: "Micromax LED Smart",
      image:
        "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
      price: {
        actual: 9999,
        display: 27990,
      },
      discount: 64,
    },
    {
      id: 8,
      name: "Micromax LED Smart",
      image:
        "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
      price: {
        actual: 9999,
        display: 27990,
      },
      discount: 64,
    },
  ],
    productsInCart = [];

  var generateProductList = function () {
    products.forEach(function (item) {
      var productEl = document.createElement("div");
      productEl.className = "product";
      productEl.innerHTML = `<div class="product-card">
                                <div class="badge">${item.discount} % Off</div>
                                <div class="product-tumb">
                                    <img src="${item.image}" alt="${item.name}">
                                </div>
                                <div class="product-details">
                                    <div class="product-bottom-details">
                                        <h4><a href="">${item.name}</a></h4>
                                        <div class="product-price"><small>$ ${item.price.display}</small>$ ${item.price.actual}</div>
                                        <div class="product-links">
                                            <a href="#0" class="addtocart" data-id=${item.id}>Add to Cart</a>
                                        </div>
                                    </div>
                                </div> 
                            </div>`;
      productsEl.appendChild(productEl);
    });
  };




  var init = function () {
    generateProductList();
  };

  return {
    init: init,
  };
})(jQuery);

ShoppingCart.init();
