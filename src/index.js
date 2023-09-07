// import renderMeals from './modules/renderMeals.js';
import logo from './images/logo.png';
import './style/index.css';

renderMeals();
const closeBtn = document.querySelector('.close-btn');
const overly = document.querySelector('.overly');
const headerLogo = document.querySelector('.logo');
const logoImage = document.createElement('img');
logoImage.src = logo;
logoImage.className = 'logo-img';
headerLogo.appendChild(logoImage);

closeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  overly.classList.toggle('hidden');
});
