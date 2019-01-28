import MovieList from "./movielist.js";
import MovieEntry from "./MovieEntry.js";
import MovieData from "../data/movielist.js";
import SearchBar from "./SearchBar.js";
import MovieInput from "./MovieInput.js";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: MovieData,
            viewMode: 'true' //unwatched
        };
    }

    onSearch(string) {
        let filteredMovies = MovieData.filter((movie) => {
            return (movie.title.includes(string) && movie.watched); //will need to remove this
        });
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

    changeView() { //when activated, flips required view parameters
        //true = show unwatched videos
        //false = show watched videos

        if (this.viewMode === 'true'){
            this.viewmode = 'false';
            $('#viewUnwatched').prop('disabled', true);
            $('#viewWatched').prop('disabled', false);
        } else {
            this.viewmode = 'true';
            $('#viewUnwatched').prop('disabled', false);
            $('#viewWatched').prop('disabled', true);
        }

        this.render();
    }

    changeWatched(movie) {
        //take in a movie object and flip it's .watched value (boolean)
        //I think there is a way to prevent it from being double-activated;
        movie.watched = !movie.watched; //will this work?
        //do I ened to call render?
        this.render();

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
                <div>
                    <button id='viewUnwatched' disabled onClick={()=>this.changeView()}>Unwatched</button>
                    <button id='viewWatched' onClick={()=>this.changeView()}>Watched</button>
                </div>
                    <div><MovieList movies={this.state.movieList} watch={this.changeWatched.bind(this)}/></div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        console.log('all components mounted successfully');
    }
}

export default App;