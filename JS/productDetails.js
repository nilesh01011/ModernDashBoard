'use strict';

let ProductData = './JS/ProductData.json';

let productImages = document.querySelector(
    '#products_details .content .images'
  ),
  productTitleDes = document.querySelector(
    '#products_details .content .product_info span'
  ),
  productStars = document.querySelector(
    '#products_details .content .star__rating .star'
  ),
  productRatingStars = document.querySelector(
    '#products_details .content .star__rating .rating span'
  ),
  productOffers = document.querySelector(
    '#products_details .content .product_info .products_prices .offer span'
  ),
  productPrice = document.querySelector(
    '#products_details .content .product_info .products_prices .amount .price_amt'
  ),
  productMRP = document.querySelector(
    '#products_details .content .product_info .mrp_price span .under_line'
  ),
  productTableHead = document.querySelectorAll(
    '#products_details .content .product_info .pro_detail tr .head'
  ),
  productTableTitle = document.querySelectorAll(
    '#products_details .content .product_info .pro_detail tr .light_text'
  ),
  productAboutListItems = document.querySelector(
    '#products_details .content .product_info .about_content_items .aboutList'
  ),
  product_Price = document.querySelector(
    '#products_details .buying_Content .products_buying_sections .amount .price_amt'
  ),
  productStatus = document.querySelector(
    '#products_details .buying_Content .products_buying_sections .product_status span'
  ),
  productSold_by_us = document.querySelector(
    '#products_details .buying_Content .products_buying_sections .sold_by_us .SoldBy'
  ),
  productsDescriptions = document.querySelector(
    '#products_details .descriptions p .des_text span'
  ),
  product_tabel = document.querySelector('#product_tabel'),
  buyOrAtc = document.querySelector('#buyOrAtc');

// ==============================================================

fetch(ProductData)
  .then((res) => res.json())
  .then((data) => getProduct(data))
  .catch((err) => console.log(err));

function getProduct(ele) {
  let GetCartID = localStorage.getItem('productDetails');
  JSON.parse(GetCartID);

  if (!GetCartID) {
    localStorage.setItem('productDetails', 7);
  }

  ele.forEach((data) => {
    if (parseInt(GetCartID) === data.id) {
      productImages.innerHTML = `
      <img class="img-fluid w-100 h-100" src="${data.image}" alt="products_imgs">
      <h6> ${data.title} </h6>
      <div class="hr"></div>
    `;

      if (data.descriptions) {
        productTitleDes.innerHTML = `${data.descriptions}`;
      }

      productStars.innerHTML = `
      <i class="${
        data.rating >= 1
          ? 'fas fa-star'
          : data.rating >= 0.5
          ? 'fas fa-star-half-alt'
          : 'far fa-star'
      }
      "></i>

      <i class="${
        data.rating >= 2
          ? 'fas fa-star'
          : data.rating >= 1.5
          ? 'fas fa-star-half-alt'
          : 'far fa-star'
      }
      "></i>

      <i class="${
        data.rating >= 3
          ? 'fas fa-star'
          : data.rating >= 2.5
          ? 'fas fa-star-half-alt'
          : 'far fa-star'
      }
      "></i>

      <i class="${
        data.rating >= 4
          ? 'fas fa-star'
          : data.rating >= 3.5
          ? 'fas fa-star-half-alt'
          : 'far fa-star'
      }
      "></i>

      <i class="${
        data.rating >= 5
          ? 'fas fa-star'
          : data.rating >= 4.5
          ? 'fas fa-star-half-alt'
          : 'far fa-star'
      }
      "></i>
    `;

      let price = new Intl.NumberFormat().format(data.price);
      let mrp = new Intl.NumberFormat().format(data.MRP);

      productRatingStars.innerHTML = `${data.rating_rates}`;
      productOffers.innerHTML = `${data.offer}`;
      productPrice.innerHTML = `${price}`;
      productMRP.innerHTML = `₹${mrp}.00`;

      product_Price.innerHTML = `${price}`;
      productStatus.innerHTML = `${data.status}`;
      productSold_by_us.innerHTML = `${data.category}`;

      // =================================================================

      productAboutListItems.innerHTML = `${data.about_details}`;

      productsDescriptions.innerHTML = `${data.pro_details}`;

      product_tabel.innerHTML = `${data.tableDetails}`;

      buyOrAtc.innerHTML = `
      <button data-addtocart="${data.id}" class="addtoCart">Add to Cart</button>
      <button class="buyNow">Buy now</button>
    `;
    }
  });
}
