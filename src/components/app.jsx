import MovieList from "./movielist.js";
import MovieEntry from "./MovieEntry.js";
import MovieData from "../data/movielist.js";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: MovieData
        };
    }

    //state change funtions go here when needed.

    render() {
        return (
            <div>
                <div className="movie-list">
                    <div><MovieList movies={MovieData}/></div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        console.log('all components mounted successfully');
    }
}

export default App;