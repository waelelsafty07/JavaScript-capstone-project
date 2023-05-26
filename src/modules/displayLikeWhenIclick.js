import displayLikes from './displayLike.js';
import LIKES from './Likes.js';

const displayLikeWhenIclick = async (btn, id) => {
  const textLike = btn.parentNode.parentNode.querySelector('.likes span');
  const Likes = new LIKES();
  const likesArray = await Likes.getlikes();
  const like = displayLikes(likesArray, id);
  const likeCount = like.length !== 0 ? like : 0;
  textLike.innerHTML = `${likeCount} likes`;
};
export default displayLikeWhenIclick;
