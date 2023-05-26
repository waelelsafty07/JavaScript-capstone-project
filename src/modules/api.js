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
    const data = await responseJson.json();
    return data;
  };
}

export default API;
