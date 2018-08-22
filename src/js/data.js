alert('conected');
const urlHost = 'http://www.omdbapi.com/?s=';
const apiKey = '&plot=full&apikey=cd8f92e5';
let host = '';
let search = document.getElementById('search');
let results = '';

const getMovies = () => {
  console.log(search.value);
  search = search.value;
  host = `${urlHost}${search}${apiKey}`;
  console.log(host);
  fetch(host)
    .then(response => response.json())
    .then(data => {
      printerResults(data);
    })
    .catch(error => {
      console.log(error);
    });
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

//     for (let i = 0; i < x.length; i++) {
//       result +=
//     }
//   };

// };
// //window.onload = host => {
