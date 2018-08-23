//alert('conected');
const urlHost = 'http://www.omdbapi.com/?s=';
const api = '&plot=full&apikey=cd8f92e5';
let host = '';
let search = document.getElementById('search');

const getMovies = () => {
  console.log(search.value);
  const searchValue = search.value;
  if (searchValue == '') {
    alert('Please write some key word to search movie titles');
    location.reload();
  }
  let searchArray = searchValue.split('');
  for (i = 0; i < searchArray.length; i++) {
    if (searchArray[0] === '') {
      searchArray[0].push('&');
    }
  }
  console.log(searchArray);
  let searchJoin = searchArray.join('');
  console.log(searchJoin);

  host = `${urlHost}${searchJoin}${api}`;
  console.log(host);
  fetch(host)
    .then(response => response.json())
    .then(data => {
      printerResults(data);
    })
    .catch(error => {
      console.log(error);
    });
  //}
};

// btnSearch.addEventListener('click', event => {
//   const container = document.getElementById('container');
//   container.innerHTML = '';
//   getMovies();
// });
