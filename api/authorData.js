import axios from 'axios';
import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

// FIXME:  GET ALL AUTHORS
const getAuthors = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

// FIXME: CREATE AUTHOR
const createAuthor = (newAuthor, uid) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/authors.json`, newAuthor)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/authors/${payload.firebaseKey}.json`, payload).then(() => {
        getAuthors(uid).then((authorsArray) => resolve(Object.values(authorsArray)));
      });
    })
    .catch((error) => reject(error));
});

const getSingleAuthor = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

// FIXME: DELETE AUTHOR
const deleteSingleAuthor = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbUrl}/authors/${firebaseKey}.json`)
    .then(() => {
      getAuthors(uid).then((authorsArray) => resolve(authorsArray));
    })
    .catch((error) => reject(error));
});

// FIXME: UPDATE AUTHOR
const updateAuthor = (authorObj, uid) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbUrl}/authors/${authorObj.firebaseKey}.json`, authorObj)
    .then(() => getAuthors(uid).then(resolve))
    .catch(reject);
});

// GET BOOKS BY AUTHOR
const getBooksByAuthor = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books.json?orderBy="author_id"&equalTo="${firebaseKey}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export {
  getAuthors,
  createAuthor,
  getSingleAuthor,
  deleteSingleAuthor,
  updateAuthor,
  getBooksByAuthor,
};
