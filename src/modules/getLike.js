import fetchPro from './fetchPro.js';
import { API_URL_GETLIKE } from './config.js';

const getLike = async () => {
  const likeData = await fetchPro(API_URL_GETLIKE);
  return likeData.slice(7);
};

export default getLike;
