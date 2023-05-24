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
}

export default LIKES;
