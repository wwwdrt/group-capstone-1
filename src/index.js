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
