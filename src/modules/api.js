/* eslint-disable import/no-cycle */
import displayComments from './displayComments.js';

class API {
  constructor(link) {
    this.url = link;
  }

  fetchData = async (url, method, body) => {
    const options = {};
    if (method === 'GET') {
      options.method = 'GET';
    } else if (method === 'POST') {
      options.method = 'POST';
      options.headers = {
        'Content-Type': 'application/json',
      };
      options.body = JSON.stringify(body);
    }
    const response = await fetch(url, options);
    return response;
  };

  postData = async (endPoint, body) => {
    const url = this.url + endPoint;
    const responseJson = await this.fetchData(url, 'POST', body);
    return responseJson;
  };

  getData = async (endPoint) => {
    const url = this.url + endPoint;
    const responseJson = await this.fetchData(url, 'GET');
    return responseJson;
  };

  displayShow = async (itemId) => {
    const apiUrl = `https://api.tvmaze.com/shows/${itemId}`;
    const response = await fetch(apiUrl);
    const item = await response.json();

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

      document.body.appendChild(overlay);

      popupImg.src = item.image.medium;

      overlay.classList.add('overlay');
      popupDiv.classList.add('d-flex');
      popupDiv.classList.add('flex-d-column');
      popupDiv.classList.add('align-items-center');

      close.classList.add('fa-solid', 'fa-xmark', 'fa-2xl', 'close');
      popupName.classList.add('show-name');
      popupDetails.classList.add('d-grid');
      popupDetails.classList.add('details');
      popupDiv.classList.add('popup');
      comments.classList.add('d-flex', 'flex-d-column');
      commentForm.classList.add('d-flex', 'flex-d-column');

      commentsTitle.textContent = 'Comments';
      addCommentsTitle.textContent = 'Add Comment';
      commentBtn.textContent = 'Comment';

      commentsSection.id = 'comments-section';
      commentForm.id = 'comment-form';
      commentName.id = 'comment-name';
      commentMsg.id = 'comment-message';
      commentBtn.id = itemId;

      commentName.placeholder = 'Your Name';
      commentMsg.placeholder = 'Your Comment';
      popupName.textContent = item.name;
      popupDet1.textContent = `Genre: ${item.genres}`;
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
      popupDiv.appendChild(popupName);
      popupDiv.appendChild(popupDetails);

      popupImgDiv.appendChild(popupImg);
      popupDetails.appendChild(popupDet1);
      popupDetails.appendChild(popupDet2);
      popupDetails.appendChild(popupDet3);
      popupDetails.appendChild(popupDet4);
      popupDiv.appendChild(comments);
      comments.appendChild(commentsTitle);
      comments.appendChild(commentsSection);
      comments.appendChild(addCommentsTitle);
      comments.appendChild(commentForm);
      commentForm.appendChild(commentName);
      commentForm.appendChild(commentMsg);
      commentForm.appendChild(commentBtn);

      displayComments(itemId);
    }
    return popupDiv;
  }
}

export default API;
