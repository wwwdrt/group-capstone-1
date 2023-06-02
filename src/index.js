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
const likeArray = document.querySelectorAll('.like-icon');

likeArray.forEach((element) => {
  element.addEventListener('click', async (event) => {
    const getLikeId = event.target.id;
    const getLikeCount = document.getElementsByClassName(`count-${getLikeId}`);
    getLikeCount.value = parseInt(getLikeCount.value, 10) + 1;
    const likeObject = { item: `${getLikeId}-item`, likes: getLikeCount.value };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(likeObject),
    };
    await fetch(likesUrl, options)
      .then((response) => response.json());
  });
});
