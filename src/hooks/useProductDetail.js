import {useEffect, useState} from 'react';
import {getProductList} from '../api/ProductApi';

const useProductDetail = id => {
  const [responseData, setResponseData] = useState('');

  const [err, setErr] = useState();
  const getData = async () => {
    try {
      const response = await getProductList(id);
      setResponseData(response.data);
    } catch (e) {
      console.log(e);
      setErr(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data: responseData,
    error: err,
  };
};

export default useProductDetail;
