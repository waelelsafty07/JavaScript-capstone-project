/* eslint-disable import/no-cycle */
import Comments from './comments.js';
import totalComments from './totalComments.js';

const displayComments = (itemId) => {
  const commentsSection = document.querySelector('#comments-section');
  const commentsTitle = document.querySelector('#comments-title');

  if (commentsSection) {
    const CommentAPI = new Comments();

    CommentAPI.getComments(itemId).then((data) => {
      const commentsNumber = totalComments(data);
      commentsTitle.textContent = `Comments: ${commentsNumber}`;
      data.forEach((d) => {
        const commentLi = document.createElement('li');
        commentLi.textContent = `${d.creation_date} ${d.username}: ${d.comment}`;
        commentsSection.appendChild(commentLi);
      });
    });
  }
};

export default displayComments;