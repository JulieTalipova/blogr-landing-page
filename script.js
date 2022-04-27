"use strict";

  // HAMBURGER MENU
// function myFunction1() {
//   document.getElementById("myDropdown--1").classList.toggle("show");
// }
// function myFunction2() {
//   document.getElementById("myDropdown--2").classList.toggle("show");
// }
// function myFunction3() {
//   document.getElementById("myDropdown--3").classList.toggle("show");
// }


// window.onclick = function(event) {
//   if (!event.target.matches('.header__nav-links--main')) {
//     var dropdowns = document.getElementsByClassName("header__nav-list--sub");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

function check1() {
  var inputs = document.querySelectorAll('#toggle--1');
  for (var i = 0; i < inputs.length; i++) {
    if (document.querySelector('#toggle--1:checked') !== null) {
      inputs[i].checked = false;
    }
    else {
      inputs[i].checked = true;
    }
  }
}
function check2() {
  var inputs = document.querySelectorAll('#toggle--2');
  for (var i = 0; i < inputs.length; i++) {
    if (document.querySelector('#toggle--2:checked') !== null) {
      inputs[i].checked = false;
    }
    else {
      inputs[i].checked = true;
    }
  }
}
function check3() {
  var inputs = document.querySelectorAll('#toggle--3');
  for (var i = 0; i < inputs.length; i++) {
    if (document.querySelector('#toggle--3:checked') !== null) {
      inputs[i].checked = false;
    }
    else {
      inputs[i].checked = true;
    }
  }
}
// window.onload = function() {
//   window.addEventListener('load', checkAll, false);
// }

window.onload = function() {
  const menu_btn = document.querySelector('.hamburger');
  const mobile_menu = document.querySelector('.menu');

  menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
  });
}

  // ARROW ICON
$('.arrow').on('click', function() {
    $(this).toggleClass('active');
});