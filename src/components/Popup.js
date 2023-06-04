// eslint-disable-next-line import/extensions
import { postComments, getComments } from './Comments';
// eslint-disable-next-line import/extensions
import countComments from './Counters';

const displayPopup = async (recipeId) => {
  const popupContainer = document.getElementById('popup-bg');

  try {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
    const data = await res.json();
    const recipe = data.meals[0];

    if (recipe) {
      popupContainer.innerHTML = `
        <div id="popup"> 
          <span class="close">X</span>
          <div class="dish-element-popup" data-id="${recipe.idMeal}">
            <img class="chicken-image-popup" src="${recipe.strMealThumb}" alt="">
            <ul class="name-and-like-popup">
              <li class="dish-name-popup">${recipe.strMeal}</li>
            </ul>
            <p id="comments-counter">Comments (loading...)</p>
            <ul id="comments"></ul>
            <form id="comment">
              <input type="text" id="name" name="name" placeholder="Your Name" required>
              <br>
              <textarea id="message" name="message" placeholder="Your thoughts" maxlength="300" required=""></textarea>
              <button class="btn-comment" type="submit" tabindex="0" aria-label="Get in touch" title="Submit comment">Comment</button>
            </form>
          </div>
        </div>
      `;

      document.querySelector('body').style.overflow = 'hidden';
      popupContainer.style.display = 'flex';

      const close = popupContainer.querySelector('.close');
      close.addEventListener('click', () => {
        popupContainer.style.display = 'none';
        document.querySelector('body').style.overflow = 'auto';
      });

      const form = document.getElementById('comment');
      const commentsCounter = document.getElementById('comments-counter');

      form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const { name, message } = form.elements;
        try {
          await postComments(recipe.idMeal, name.value, message.value);
          await getComments(recipe.idMeal);
          form.reset();

          const commentCount = await countComments();
          commentsCounter.textContent = `Comments (${commentCount})`;
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('Error posting comment:', error);
        }
      });

      await getComments(recipe.idMeal);
      const commentCount = await countComments();
      commentsCounter.textContent = `Comments (${commentCount})`;
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error retrieving recipe:', error);
  }
};

export default displayPopup;
