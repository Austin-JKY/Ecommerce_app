import appApi from './AppApi';

const apiName = '/products';
const loginApi = '/auth/login';
export const getProductList = id => {
  return appApi.get(apiName + `/${id}`);
};

export const login = data => {
  return appApi.post(loginApi, data);
};
