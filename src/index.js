import './style.css';
// eslint-disable-next-line import/extensions
import Recipes from './components/Recipes';
// eslint-disable-next-line import/extensions
import Popup from './components/Popup';

document.addEventListener('DOMContentLoaded', () => {
  const recipes = new Recipes();
  recipes.fetch().then(() => {
    recipes.displayCards();
    // eslint-disable-next-line no-new
    new Popup();
  });
});
