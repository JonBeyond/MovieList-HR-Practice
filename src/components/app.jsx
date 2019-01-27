import MovieList from "./movielist.js";
import MovieEntry from "./movieentry.js";
// import React from 'react'
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    //state change funtions go here when needed.

    render() {
        return (
            <div>
                <div className="movie-list">
                    <div><MovieList /></div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        console.log('all components mounted successfully');
    }
}

export default App;