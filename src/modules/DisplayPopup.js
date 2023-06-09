import API from './api.js';
import displayComments from './displayComments.js';
import { movieApi } from './env.js';

const displayShow = async (itemId) => {
  const api = new API(movieApi);
  const item = await api.getData(`shows/${itemId}`);
  const popupDiv = document.createElement('div');

  if (item) {
    const close = document.createElement('i');
    const popupImgDiv = document.createElement('div');
    const popupImg = document.createElement('img');
    const popupName = document.createElement('h3');
    const popupDetails = document.createElement('ul');
    const popupDet1 = document.createElement('li');
    const popupDet2 = document.createElement('li');
    const popupDet3 = document.createElement('li');
    const popupDet4 = document.createElement('li');
    const overlay = document.createElement('div');
    const comments = document.createElement('div');
    const commentsTitle = document.createElement('h3');
    const commentsSection = document.createElement('ul');
    const addCommentsTitle = document.createElement('h3');
    const commentForm = document.createElement('form');
    const commentName = document.createElement('input');
    const commentMsg = document.createElement('textarea');
    const commentBtn = document.createElement('button');
    const bodyPopup = document.createElement('div');

    document.body.appendChild(overlay);

    popupImg.src = item.image.medium;

    popupImgDiv.className = 'col-4 details-Movie';
    bodyPopup.className = 'col-4 display-comments';
    overlay.classList.add('overlay');
    popupDiv.classList.add('d-flex');
    popupDiv.classList.add('justify-content-center');

    close.classList.add('fa-solid', 'fa-xmark', 'fa-2xl', 'close');
    popupName.classList.add('show-name');
    popupDetails.classList.add('d-flex');
    popupDetails.classList.add('details');
    popupDetails.classList.add('flex-wrap');

    popupDiv.classList.add('popup');
    comments.classList.add('col-4', 'd-flex', 'flex-d-column', 'form-comments');
    commentForm.classList.add('d-flex', 'flex-d-column');
    commentBtn.className = 'comment-btn';

    commentsTitle.textContent = 'Comments';
    addCommentsTitle.textContent = 'Add Comment';
    commentBtn.textContent = 'Comment';

    commentsTitle.id = 'comments-title';
    commentsSection.id = 'comments-section';
    commentForm.id = 'comment-form';
    commentName.id = 'comment-name';
    commentMsg.id = 'comment-message';
    commentBtn.id = itemId;

    commentName.setAttribute('required', 'true');
    commentMsg.setAttribute('required', 'true');

    commentName.placeholder = 'Your Name';
    commentMsg.placeholder = 'Your Comment';
    popupName.textContent = item.name;
    popupDet1.textContent = `Genre: ${item.genres[0]}`;
    popupDet2.textContent = `Rating: ${item.rating.average}`;
    popupDet3.textContent = `Language: ${item.language}`;
    popupDet4.textContent = `Runtime: ${item.runtime} min`;

    close.addEventListener('click', () => {
      overlay.classList.remove('overlay');
      document.body.removeChild(popupDiv);
    });

    document.body.appendChild(popupDiv);

    popupDiv.appendChild(close);

    popupDiv.appendChild(popupImgDiv);

    popupDiv.appendChild(bodyPopup);

    popupImgDiv.appendChild(popupImg);
    popupImgDiv.appendChild(popupName);
    popupImgDiv.appendChild(popupDetails);
    popupDetails.appendChild(popupDet1);
    popupDetails.appendChild(popupDet2);
    popupDetails.appendChild(popupDet3);
    popupDetails.appendChild(popupDet4);
    bodyPopup.appendChild(commentsTitle);
    bodyPopup.appendChild(commentsSection);

    popupDiv.appendChild(comments);
    comments.appendChild(addCommentsTitle);
    comments.appendChild(commentForm);
    commentForm.appendChild(commentName);
    commentForm.appendChild(commentMsg);
    commentForm.appendChild(commentBtn);

    displayComments(itemId);
  }
  return popupDiv;
};

export default displayShow;
