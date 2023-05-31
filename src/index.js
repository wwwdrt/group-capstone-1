import './style.css';

const getDishes = document.getElementById('cards');
const url = 'https:www.themealdb.com/api/json/v1/1/search.php?s=chicken';

const displayCards = async () => {
  await fetch(url).then((response) => response.json())
    .then((responseData) => {
      const chickenMeal = responseData.meals;
      for (let i = 0; i < 6; i += 1) {
        getDishes.innerHTML += `
                <div class='dish-element'>
                    <img class="chicken-image" src=${chickenMeal[i].strMealThumb} alt="">
                    <ul class="name-and-like">
                        <li class="dish-name">Dish Name: ${chickenMeal[i].strMeal}</li>
                        <li class="material-icons like-icon">favorite</li>
                    </ul>
                    <p>2 likes</p>
                    <div class="comments-and-reservations">
                    <a href="#"><button type="submit" class="btn">Comments</button></a>
                    <a href="#"><button type="submit" class="btn">Reservations</button></a>
                    </div>
                </div>
                
            `;
      }
    });
};

displayCards();