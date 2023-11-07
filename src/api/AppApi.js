import axios from 'axios';
import {BASE_URL} from '../core/URL';

const appApi = axios.create();

appApi.interceptors.request.use(async config => {
  config.url = BASE_URL + config.url;
  // console.log(config);
  config.headers = {'Content-Type'  : 'application/json'};
  return config;
});

// appApi.interceptors.response.use(function (response) {
//   // console.log(response);
//   return response;
// });

export default appApi;
