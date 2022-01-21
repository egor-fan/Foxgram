

const imgLikeElements = document.querySelectorAll('.js-img');

const likeIcon = "https://res.cloudinary.com/intellectfox/image/upload/v1629752958/fe/foxgram/posts/like-filled_zurlii.svg";
const noLikeIcon = "https://res.cloudinary.com/intellectfox/image/upload/v1629752957/fe/foxgram/posts/like_xw2apm.svg";

imgLikeElements.forEach((imgLikeEl) => {
  imgLikeEl.addEventListener('click', (event) => {
    const likeCountEl = event.target.parentElement.querySelector('.js-like-count');
    const likeCount = +likeCountEl.textContent;

    if (event.target.src === noLikeIcon) {
        event.target.src = likeIcon;
        likeCountEl.textContent = likeCount + 1;
    } else {
      event.target.src = noLikeIcon;
      likeCountEl.textContent = likeCount - 1;
    }
  });
});  


