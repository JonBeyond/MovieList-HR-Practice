import MovieEntry from "./MovieEntry.js";

var MovieList = (props) => {
    return (
        <div className="movie"> The Movie List:
            {props.movies.map(item => {
                return <MovieEntry movie={item} />
            })}
        </div>
    );
}

export default MovieList;

