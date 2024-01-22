import "./App.css";
import Movies from "./data/movies";
function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        <h1>Movie List Section</h1>
        {Movies.map((item, index) => {
          return (
            <div key={index} className="movie-box">
              <div>
                <img src={item.image} alt="movie image" width={102} height={100} />
              </div>
              <div className="movie-detail">
                <p>Title:{item.title}</p>
                <p>Year:{item.year}</p>
                <p>Runtime:{item.runtime}</p>
                <p>
                  Genres:{" "}
                  {item.genres.map((genres) => (
                    <span>{genres},</span>
                  ))}
                </p>
                <p>IMDB Ratings:{item.imdbRating}</p>
                <p>IMDB Votes:{item.imdbVotes}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
