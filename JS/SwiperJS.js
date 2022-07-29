var HeaderSwiper = new Swiper('#adminHeaderSwiper', {
  slidesPerView: 'auto',
  spaceBetween: 25,
});

// ---------------------Swiper JS End----------------------

// ===============Filter Functions Fetch==================

filterSelection('main');
// c is value key
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName('page'); // get the object with x variable
  if (c == 'all') c = ''; // add nothings
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], 'is-page-active');
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], 'is-page-active');
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(' ');
  arr2 = name.split(' ');
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += ' ' + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(' ');
  arr2 = name.split(' ');
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(' ');
}

// Add active class to the current button (highlight it)
let btns = document.querySelectorAll('#adminTabs .btn');

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    let active = document.querySelector('#adminTabs .btn.active');

    if (active) {
      active.classList.remove('active');
    }

    if (btn) {
      btn.classList.add('active');
    }
  });
});

let far = document.querySelectorAll('#far i');

far.forEach((ele) => {
  ele.addEventListener('click', () => {
    if (ele.classList.contains('far')) {
      ele.classList.add('fas');
      ele.classList.remove('far');
      console.log(ele);
    } else {
      ele.classList.add('far');
      ele.classList.remove('fas');
    }
  });
});

// ===========Wishlist End===========

let ATC = document.querySelectorAll('[data-productdetails]');

ATC.forEach((ele) => {
  ele.addEventListener('click', () => {
    let getID = ele.dataset.productdetails;

    localStorage.setItem('productDetails', getID);
  });
});
