const update_exercise = document.getElementById('current_exercise');
let current_exercise = "05 - Variables & Data Types";
update_exercise.innerHTML = current_exercise;

const navbar_brand = document.getElementById('navbar-brand');
let brand =  document.querySelectorAll('[aria-current="page"]')[0].innerHTML;
navbar_brand.innerHTML = brand;