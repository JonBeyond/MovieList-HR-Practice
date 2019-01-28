import MovieEntry from "./MovieEntry.js";

var MovieList = (props) => {
    return (
        <div className="movie"> The Movie List:
            {props.movies.map(item => {
                if(!item.watched) {
                    return <MovieEntry movie={item} watch={props.watch}/>
                }
            })}
        </div>
    );
}

export default MovieList;

