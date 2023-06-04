const render = document.getElementById('cards');
const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=chicken';
const recipes = [];

const fetchRecipes = async () => {
  const res = await fetch(url);
  const data = await res.json();
  const chickenMeal = data.meals;

  for (let i = 0; i < 6; i += 1) {
    const recipe = {
      id: chickenMeal[i].idMeal,
      image: chickenMeal[i].strMealThumb,
      name: chickenMeal[i].strMeal,
    };
    recipes.push(recipe);
  }
};

const displayCards = async () => {
  recipes.forEach((meal) => {
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

<<<<<<< HEAD
    render.appendChild(card);
  });
};

<<<<<<< HEAD
export { fetchRecipes,  displayCards };
=======
=======
  displayCards = async () => {
    this.recipes.forEach((meal) => {
      const card = document.createElement('div');
      card.classList.add('dish-element');
      card.dataset.id = meal.id;
      window.likeFunction(meal.id);
>>>>>>> origin/like-post
      card.innerHTML = `
          <img class="chicken-image" src="${meal.image}" alt="">
          <ul class="name-and-like">
            <li class="dish-name">${meal.name}</li>
            <li class="material-icons like-icon" id="${meal.id}" onclick="likeFunction(${meal.id})">favorite</li>
          </ul>
          <div class='like-section'>
            <p>likes</p>
            <input type="text" value="0" class='like-number' id="counts-${meal.id}" disabled>
          </div>
          <div class="comments-and-reservations">
            <a href="#"><button type="submit" class="btn-comments">Comments</button></a>
            <a href="#"><button type="submit" class="btn-reservations">Reservations</button></a>
          </div>
        `;
>>>>>>> origin/likes

