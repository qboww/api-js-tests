import axios from 'axios';

const fetchBooks = () =>
  axios.get('https://66178982ed6b8fa43482ed8c.mockapi.io/books');

const fetchBookById = bookId =>
  axios.get(`https://66178982ed6b8fa43482ed8c.mockapi.io/books/${bookId}`);

fetchBooks()
  .then(response => {
    const { data } = response;

    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
 
fetchBookById(4)
  .then(response => {
    const { data } = response;

    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
