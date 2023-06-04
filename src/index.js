import './style.css';
import { displayCards, fetchRecipes } from './components/Recipes';
import displayPopup from './components/Popup';

document.addEventListener('DOMContentLoaded', () => {
  fetchRecipes().then(() => {
    displayCards();
  });
});

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('btn-comments')) {
    const dishElement = event.target.closest('.dish-element');
    const recipeId = dishElement.dataset.id;
    displayPopup(recipeId);
  }
});
