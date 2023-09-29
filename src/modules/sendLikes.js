import fetchPro from './fetchPro.js';
import { API_URL_SENDLIKE } from './config.js';

const sendLikes = async (data) => {
  fetchPro(API_URL_SENDLIKE, data);
};

export default sendLikes;
