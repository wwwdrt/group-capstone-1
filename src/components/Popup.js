class Popup {
  constructor() {
    this.popupContainer = document.getElementById('popup-bg');
    this.popup = document.createElement('div');
    this.popup.id = 'popup';
    this.popupContainer.appendChild(this.popup);

    document.addEventListener('click', (event) => {
      if (event.target.classList.contains('btn-comments')) {
        const dishElement = event.target.closest('.dish-element');
        const recipeId = dishElement.dataset.id;
        this.renderPopup(recipeId);
      }
    });
  }

  renderPopup = async (recipeId) => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`,
    );
    const data = await res.json();
    const recipe = data.meals[0];

    if (recipe) {
      this.popup.innerHTML = `
        <span class="close">X</span>
        <div class="dish-element-popup" data-id="${recipe.idMeal}">
          <img class="chicken-image-popup" src="${recipe.strMealThumb}" alt="">
          <ul class="name-and-like-popup">
            <li class="dish-name-popup">${recipe.strMeal}</li>
          </ul>
          <ul id="comments">
            <li>06-01-23: This recipe is absolutely delicious! I tried it and it turned out to be a hit with my family. Highly recommended!</li> 
            <li>06-01-23: I made this dish, and it was a game-changer. The flavors were incredible, and the presentation was spot-on. Can't wait to cook it again!</li> 
            <li>06-01-23: I prepared this recipe for a special occasion, and it exceeded all expectations. The combination of ingredients was perfect, resulting in a memorable meal.</li> 
          </ul>
          <form id="comment">
            <input type="text" id="name" name="name" placeholder="Your Name" required>
            <br>
            <textarea id="message" name="message" placeholder="Your thoughts" maxlength="300"
                required=""></textarea>
            <button class="btn-comment" type="submit" tabindex="0" aria-label="Get in touch" title="Submit comment">Comment</hbutton>
          </form>
        </div>
      `;

      this.popupContainer.style.display = 'flex';

      this.close = this.popup.querySelector('.close');
      this.close.addEventListener(
        'click',
        // eslint-disable-next-line no-return-assign
        () => (this.popupContainer.style.display = 'none'),
      );
    }
  };
}

export default Popup;
