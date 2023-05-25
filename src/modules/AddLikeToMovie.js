import LIKES from './Likes.js';

const addLike = () => {
  const likeBtns = document.querySelectorAll('.btn-like');
  if (likeBtns) {
    const likeAPI = new LIKES();
    likeBtns.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        e.preventDefault();
        const id = btn.getAttribute('id-movie');
        await likeAPI.addLikes(id);
      });
    });
  }
};

export default addLike;
