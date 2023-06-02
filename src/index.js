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

const likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/drt-ali/likes';

window.likeFunction = (mealId) => {
  const getLikeCount = document.getElementById(`counts-${mealId}`);
  getLikeCount.value = parseInt(getLikeCount.value, 10) + 1;
  const likeObject = { item: `${mealId}-item`, likes: getLikeCount.value };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(likeObject),
  };
  fetch(likesUrl, options)
    .then((response) => response.json());
};