import MovieList from "./movielist.js";
import MovieEntry from "./MovieEntry.js";
import MovieData from "../data/movielist.js";
import SearchBar from "./SearchBar.js";
import MovieInput from "./MovieInput.js";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: MovieData
        };
    }

    onSearch(string) {
        let filteredMovies = MovieData.filter(movie => movie.title.includes(string));
        if (filteredMovies.length === 0) {
            filteredMovies.push({title: 'No results found'});
        }
        this.setState({
            movieList: filteredMovies
        });
    }

    onAdd(string){
        let newMov = {title: string};
        let curList = this.state.movieList;
        curList.push(newMov);
        this.setState({
            movieList: curList
        });
    }

    render() {
        return (
            <div>
                <div className="search"> Search Movies:
                    <div><SearchBar search={this.onSearch.bind(this)}/></div>
                </div>
                <br></br>
                <div className="add">Add New Movie:
                    <div><MovieInput add={this.onAdd.bind(this)}/></div>
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