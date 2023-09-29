/* This Js file uses API to get comment for the comment interface */
import fetchPro from './fetchPro.js';

const getComment = async (id) => {
  const commentData = await fetchPro(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hqiz5X9EpndT4RnMoRZ6/comments?item_id=${id}`,
  );
  return commentData;
};

export default getComment;