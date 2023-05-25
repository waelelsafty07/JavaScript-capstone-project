import './style.css';
import displayMovies from './modules/ListMovies.js';
import addLike from './modules/AddLikeToMovie.js';

window.addEventListener('load', async () => {
  await displayMovies();
  addLike();
});
