import fetchPro from './fetchPro.js';
import getComment from './getComments.js';
import counterComment from './counterComments.js';
import { API_URL_COMMENT } from './config.js';

const display = async (comments, id, commentCounter) => {
  const commentData = await getComment(id);
  const listComments = commentData
    .map(
      (comment) => `<div class="list-items"> 
 ${comment.creation_date}  ${comment.username}: ${comment.comment}</div>`,
    )
    .join('');

  comments.innerHTML = '';
  comments.insertAdjacentHTML('afterbegin', listComments);
  const numComment = document.querySelectorAll('.list-items');
  commentCounter.textContent = `(${counterComment(numComment)})`;
};

const addComment = async (e, id) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const comment = document.getElementById('comment').value;
  const data = {
    item_id: `${id}`,
    username: name,
    comment,
  };
  fetchPro(API_URL_COMMENT, data);
  document.getElementById('name').value = '';
  document.getElementById('comment').value = '';
};

export { addComment, display };