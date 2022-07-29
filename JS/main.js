'use-strict';

let sidebar = document.querySelector('#sidebar');
let sidebarBtn = document.querySelector('#sidebarBtn');
let sidebarClose = document.querySelector('#sidebar');
let overlay = document.querySelector('#overlay');
let sidebarDismissBtn = document.querySelector(
  '#sidebar .navbar-logo .sidebar-dismiss .logo span'
);
let sidebarLinks = document.querySelectorAll(
  '#sidebar .sidebar-nav ul li a.navLink'
);
let body = document.querySelector('body');

sidebarBtn.addEventListener('click', () => {
  sidebar.classList.add('active');
  overlay.classList.add('active');
  body.classList.add('sidebarActive');
});

overlay.addEventListener('click', sidebarDismiss, false);

sidebarDismissBtn.addEventListener('click', sidebarDismiss, false);

function sidebarDismiss() {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
  body.classList.remove('sidebarActive');
}

let expand_more = document.querySelectorAll('#expand_more');

expand_more.forEach((ele) => {
  ele.addEventListener('click', () => {
    ele.classList.toggle('collapse');
  });
});

let userprofile = document.querySelector(
  '.header .header-right .profile-box button .profile-info .info'
);

userprofile.addEventListener('click', () => {
  window.location = './UserProfile.html';
});
