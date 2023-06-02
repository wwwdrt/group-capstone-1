class Recipes {
  constructor() {
    this.render = document.getElementById('cards');
    this.url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=chicken';
    this.recipes = [];
  }

  fetch = async () => {
    const res = await fetch(this.url);
    const data = await res.json();
    const chickenMeal = data.meals;

    for (let i = 0; i < 6; i += 1) {
      const recipe = {
        id: chickenMeal[i].idMeal,
        image: chickenMeal[i].strMealThumb,
        name: chickenMeal[i].strMeal,
      };
      this.recipes.push(recipe);
    }
  }

  displayCards = async () => {
    this.recipes.forEach((meal) => {
      const card = document.createElement('div');
      card.classList.add('dish-element');
      card.dataset.id = meal.id;

      card.innerHTML = `
          <img class="chicken-image" src="${meal.image}" alt="">
          <ul class="name-and-like">
            <li class="dish-name">${meal.name}</li>
            <li class="material-icons like-icon">favorite</li>
          </ul>
          <p>2 likes</p>
          <div class="comments-and-reservations">
            <a href="#"><button type="submit" class="btn-comments">Comments</button></a>
            <a href="#"><button type="submit" class="btn-reservations">Reservations</button></a>
          </div>
        `;

      this.render.appendChild(card);
    });
  }
}

export default Recipes;