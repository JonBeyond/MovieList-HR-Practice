import MovieEntry from "./MovieEntry.js";

var MovieList = (props) => {
    console.log('hi');
    return (
        <div className="movie-list"> The Movie List:
            {props.movies.map(item => {
                return <MovieEntry movie={item} />
            })}
        </div>
    );
}

export default MovieList;

