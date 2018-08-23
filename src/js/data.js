alert('conected');
const urlHost = 'http://www.omdbapi.com/?s=';
const api = '&plot=full&apikey=cd8f92e5';
let host = '';
let search = document.getElementById('search');
let results = '';

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

const btnSearch = document.getElementById('btn-search');
btnSearch.addEventListener('click', getMovies);

const printerResults = data => {
  console.log(data);
  let result = '';
  data = data.Search;
  console.log(data);
  data.forEach(getTitles => {
    console.log(getTitles);
    let movieTitle = getTitles.Title;
    console.log(movieTitle);
    let moviePoster = getTitles.Poster;
    console.log(moviePoster);
    let movieType = getTitles.Type;
    console.log(movieType);
    let movieYear = getTitles.Year;
    console.log(movieYear);
    results += `

         <table class="movie-poster">
         <tr>
            <th> Título: ${movieTitle} </th>
         </tr>
        <tr>
            <td> <img src="${moviePoster}" alt="Poster of the movie ${movieTitle}"> </td>
         </tr>
         <tr>
             <td>Type: ${movieType}</td>
        </tr>
         <tr>
            <th>Year: ${movieYear}</th>
         </tr>
         </table>
         
        `;
  });
  const res = document.getElementById('results');
  res.innerHTML = results;
};
