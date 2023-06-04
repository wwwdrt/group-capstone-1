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

const likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/MgbGOFTaDhTVdgSX8BJW/likes';

window.getLikesCount = async (likeId) => {
  await fetch(likesUrl).then((response) => response.json())
    .then((responseData) => {
      responseData.forEach((element) => {
        if (element.item_id === likeId) {
          const getLikeCount = document.getElementById(`counts-${likeId}`);
          getLikeCount.value = element.likes;
        }
      });
    });
};

window.likeFunction = async (mealId) => {
  const likeObject = { item_id: `${mealId}` };
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(likeObject),
  };
  await fetch(likesUrl, options);
  window.getLikesCount(`${mealId}`);
};
