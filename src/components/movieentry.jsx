
var MovieEntry = (props) => {
    return (
        <div className="movie-name">
            {props.movie.title}
            <button onClick={() => {props.watch(props.movie))}}>Watch</button>
        </div>
    );
}

export default MovieEntry;