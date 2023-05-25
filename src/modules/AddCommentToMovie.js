import Comments from './comments.js';

const AddComment = () => {
  const commentForm = document.querySelector('#comment-form');

  if (commentForm) {
    const submit = commentForm.querySelector('button');
    submit.addEventListener('click', async (event) => {
      event.preventDefault();
      const name = commentForm.querySelector('#comment-name').value;
      const msg = commentForm.querySelector('#comment-message').value;

      const CommentAPI = new Comments();
      const body = {
        item_id: submit.id,
        username: name,
        comment: msg,
      };
      await CommentAPI.addcomments(body);
    });
  }
};
export default AddComment;