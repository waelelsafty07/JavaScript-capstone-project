import API from './api.js';
import { invo } from './env.js';

class LIKES {
  constructor() {
    this.likesAPI = new API(invo);
  }

  async addLikes(id) {
    const body = {
      item_id: `${id}`,
    };
    const res = await this.likesAPI.postData('likes', body);
    return res;
  }

  async getlikes() {
    const likes = await this.likesAPI.getData('likes');
    const likesArray = Array.isArray(likes) ? likes : [];
    return likesArray;
  }
}

export default LIKES;
