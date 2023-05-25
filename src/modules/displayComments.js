/* eslint-disable import/no-cycle */
import Comments from './comments.js';

const displayComments = (itemId) => {
  const commentsSection = document.querySelector('#comments-section');
  commentsSection.textContent = '';
  if (commentsSection) {
    const CommentAPI = new Comments();

    CommentAPI.getComments(itemId).then((data) => {
      data.forEach((d) => {
        const commentLi = document.createElement('li');
        commentLi.textContent = `${d.creation_date} ${d.username}: ${d.comment}`;
        commentsSection.appendChild(commentLi);
      });
    });
  }
};

export default displayComments;