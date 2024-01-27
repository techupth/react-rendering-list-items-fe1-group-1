import "./App.css";
import Movies from "./data/movies";

function App() {
  return (
    <div className="App">
      <div className="movie-list-section">
        <p className="Title">Movie List Section</p>
        {Movies.map((item)=>{
          return(
            <div className="Movie-box">
              <img src="{item.image}" height={100} width={102}/>
              <section className="movie-detail">
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
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
