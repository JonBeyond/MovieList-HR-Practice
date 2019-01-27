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
        return React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                { className: "movie-list" },
                React.createElement(
                    "div",
                    null,
                    React.createElement(MovieList, null)
                )
            )
        );
    }

    componentDidMount() {
        console.log('all components mounted successfully');
    }
}

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwiTW92aWVFbnRyeSIsIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwicmVuZGVyIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxTQUFQLE1BQXNCLGdCQUF0QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsaUJBQXZCO0FBQ0E7QUFDQSxNQUFNQyxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQztBQUM5QkMsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOO0FBQ0EsYUFBS0MsS0FBTCxHQUFhLEVBQWI7QUFDSDs7QUFFRDs7QUFFQUMsYUFBUztBQUNMLGVBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVUsWUFBZjtBQUNJO0FBQUE7QUFBQTtBQUFLLHdDQUFDLFNBQUQ7QUFBTDtBQURKO0FBREosU0FESjtBQU9IOztBQUVEQyx3QkFBb0I7QUFDaEJDLGdCQUFRQyxHQUFSLENBQVkscUNBQVo7QUFDSDtBQXBCNkI7O0FBdUJsQyxlQUFlVCxHQUFmIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZpZUxpc3QgZnJvbSBcIi4vbW92aWVsaXN0LmpzXCI7XG5pbXBvcnQgTW92aWVFbnRyeSBmcm9tIFwiLi9tb3ZpZWVudHJ5LmpzXCI7XG4vLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgIH1cblxuICAgIC8vc3RhdGUgY2hhbmdlIGZ1bnRpb25zIGdvIGhlcmUgd2hlbiBuZWVkZWQuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxNb3ZpZUxpc3QgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhbGwgY29tcG9uZW50cyBtb3VudGVkIHN1Y2Nlc3NmdWxseScpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdfQ==