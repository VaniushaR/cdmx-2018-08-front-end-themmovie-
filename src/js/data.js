alert('conected');
const urlHost = 'http://www.omdbapi.com/?s=';
const api = '&plot=full&apikey=cd8f92e5';
let host = '';
let search = document.getElementById('search');
let results = '';

//function that obtains the URL from the user search
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
  fetchApi(host);
  return host;
};
//fetch to the API
const fetchApi = host => {
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

         <div class="row">
         <div class="col s12 m6 l6 xl6">
          <div class="card">
           <div class="card-image">
          <img src="${moviePoster}" alt="Poster of the movie ${movieTitle}">
          <span class="card-title movie-titles black">Título: ${movieTitle}</span>
            </div>
             <div class="card-content">
             <h6>Type: ${movieType}</h6>
             </div>
            <div class="card-action">
             Year: ${movieYear}
             </div>
           </div>
         </div>
       </div>
               `;
  });
  const res = document.getElementById('results');
  res.innerHTML = results;
};
