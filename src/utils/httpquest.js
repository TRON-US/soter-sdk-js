import axios from 'axios'

export default class HttpProvider {
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://65.52.163.204:8101/'  
    });
  }

  request(url, payload = {}, method = 'get') {
    method = method.toLowerCase();

    return this.instance.request({
        data: method == 'post' && Object.keys(payload).length ? payload : null,
        params: method == 'get' && payload,
        url,
        method
    }).then(({data}) => data);
  }
}

