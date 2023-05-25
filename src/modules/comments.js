import API from './api.js';
import { invo } from './env.js';

class Comments {
  constructor() {
    this.commentsAPI = new API(invo);
  }

  async addcomments(body) {
    const res = await this.commentsAPI.postData('comments', body);
    return res;
  }

  async getComments(itemId) {
    const comments = await this.commentsAPI.getData('comments?item_id=' +itemId);
    const commentsArray = Array.isArray(comments) ? comments : [];
    return commentsArray;
  }
}
export default Comments;