let container;
let results = '';
let res = document.getElementById('results');
const btnSearch = document.getElementById('btn-search');

btnSearch.addEventListener('click', getMovies);

const printerResults = data => {
  console.log(res);
  console.log(data);
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

  res.innerHTML = results;
};
