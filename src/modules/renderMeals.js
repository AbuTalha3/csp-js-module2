import { API_URL_MEALS } from './config.js';

const mealContainer = document.querySelector('.meal-container');
const itemCounter = document.querySelector('.counter');
const overly = document.querySelector('.overly');

const renderMeals = async () => {
  const { meals } = await fetchPro(API_URL_MEALS);
  itemCounter.textContent = `(${counterHomepage(meals)})`;
  mealContainer.innerHTML = '';
  meals.forEach((meal) => {
    /* eslint-disable */
    const mealCard = document.createElement('div');
    mealCard.classList.add('meal-card');
    const mealImage = document.createElement('img');
    mealImage.classList.add('meal-img');
    mealImage.src = `${meal.strMealThumb}`;
    const mealInfo = document.createElement('p');
    mealInfo.classList.add('space');
    mealInfo.textContent = `${meal.strMeal}`;
    const likeContainer = document.createElement('div');
    likeContainer.classList.add('like');
    const likeBtn = document.createElement('button');
    likeBtn.className = 'like-btn';
    likeBtn.setAttribute('data-show', `${meal.idMeal}`);
    const heartIcon = document.createElement('i');
    heartIcon.className = 'fa-sharp fa-regular fa-heart fa-xl';
    likeBtn.appendChild(heartIcon);
    const likeInfo = document.createElement('div');
    likeInfo.classList.add('flex');
    const likeCount = document.createElement('p');
    likeCount.className = `like-${meal.idMeal}`;
    const likeText = document.createElement('p');
    likeText.innerText = 'likes';
    likeInfo.appendChild(likeCount);
    likeInfo.appendChild(likeText);
    likeContainer.appendChild(likeInfo);
    likeContainer.appendChild(likeBtn);
    const commentBtn = document.createElement('button');
    commentBtn.className = 'btn-comment';
    commentBtn.setAttribute('data-tap', `${meal.idMeal}`);
    commentBtn.textContent = 'Comment';
    mealCard.appendChild(mealImage);
    mealCard.appendChild(mealInfo);
    mealCard.appendChild(likeContainer);
    mealCard.appendChild(commentBtn);
    mealContainer.appendChild(mealCard);
    /* eslint-enable */
  });

  mealContainer.addEventListener('click', (e) => {
    e.preventDefault();
    const id = e.target.dataset.tap;
    if (id) {
      overly.classList.toggle('hidden');
      renderPopComment(meals, id);
    }
  });

  const likeBtns = document.querySelectorAll('.like-btn');

  likeBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const idLike = e.target.closest('.like-btn').dataset.show;
      if (idLike) {
        const likeCount = +document.querySelector(`.like-${idLike}`)
          .textContent;
        document.querySelector(`.like-${idLike}`).textContent = likeCount + 1;
        sendLikes({ item_id: `${idLike}` });
      }
    });
  });

  const likeData = await getLike();

  likeData.forEach((like) => {
    document.querySelector(`.like-${like.item_id}`).textContent = like.likes;
  });
};

export default renderMeals;
