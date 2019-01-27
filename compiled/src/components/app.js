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
        return React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                { className: "movie-list" },
                React.createElement(
                    "div",
                    null,
                    React.createElement(MovieList, { movies: MovieData })
                )
            )
        );
    }

    componentDidMount() {
        console.log('all components mounted successfully');
    }
}

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwiTW92aWVFbnRyeSIsIk1vdmllRGF0YSIsIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwibW92aWVMaXN0IiwicmVuZGVyIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxTQUFQLE1BQXNCLGdCQUF0QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsaUJBQXZCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixzQkFBdEI7QUFDQSxNQUFNQyxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQztBQUM5QkMsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOO0FBQ0EsYUFBS0MsS0FBTCxHQUFhO0FBQ1RDLHVCQUFXUDtBQURGLFNBQWI7QUFHSDs7QUFFRDs7QUFFQVEsYUFBUztBQUNMLGVBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVUsWUFBZjtBQUNJO0FBQUE7QUFBQTtBQUFLLHdDQUFDLFNBQUQsSUFBVyxRQUFRUixTQUFuQjtBQUFMO0FBREo7QUFESixTQURKO0FBT0g7O0FBRURTLHdCQUFvQjtBQUNoQkMsZ0JBQVFDLEdBQVIsQ0FBWSxxQ0FBWjtBQUNIO0FBdEI2Qjs7QUF5QmxDLGVBQWVWLEdBQWYiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmllTGlzdCBmcm9tIFwiLi9tb3ZpZWxpc3QuanNcIjtcbmltcG9ydCBNb3ZpZUVudHJ5IGZyb20gXCIuL01vdmllRW50cnkuanNcIjtcbmltcG9ydCBNb3ZpZURhdGEgZnJvbSBcIi4uL2RhdGEvbW92aWVsaXN0LmpzXCI7XG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG1vdmllTGlzdDogTW92aWVEYXRhXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy9zdGF0ZSBjaGFuZ2UgZnVudGlvbnMgZ28gaGVyZSB3aGVuIG5lZWRlZC5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZS1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PE1vdmllTGlzdCBtb3ZpZXM9e01vdmllRGF0YX0vPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2FsbCBjb21wb25lbnRzIG1vdW50ZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il19