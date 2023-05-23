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
      options.body = body;
    }
    const response = await fetch(url, options);
    const responseData = await response.json();
    return responseData;
  };

  getData = async (endPoint) => {
    const url = this.url + endPoint;
    const responseJson = await this.fetchData(url, 'GET');
    return responseJson;
  };
}

export default API;
