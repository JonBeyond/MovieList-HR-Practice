import MovieList from "./movielist.js";
import MovieEntry from "./MovieEntry.js";
import MovieData from "../data/movielist.js";
import SearchBar from "./SearchBar.js";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: MovieData
        };
    }

    //state change funtions go here when needed.
    onSearch(string) {
        console.log(this);
        //search moviedata entires for string, if contains in totle, put into a new array, and change state to new array.
        //if no entries, need to display 'no entries'
        let filteredMovies = MovieData.filter(movie => movie.title.includes(string));

        this.setState({
            movieList: filteredMovies
        });

        console.log('updated list:'+this.state.movieList);
    }

    render() {
        return (
            <div>
                <div className="search"> Search Bar Here
                    <div><SearchBar search={this.onSearch.bind(this)}/></div>
                </div>
                <br></br><br></br>
                <div className="movie-list">
                    <div><MovieList movies={this.state.movieList}/></div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        console.log('all components mounted successfully');
    }
}

export default App;