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
            filteredMovies.push({ title: 'No results found' });
        }
        this.setState({
            movieList: filteredMovies
        });
    }

    onAdd(string) {
        let newMov = { title: string };
        let curList = this.state.movieList;
        curList.push(newMov);
        this.setState({
            movieList: curList
        });
    }

    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                { className: "search" },
                " Search Movies:",
                React.createElement(
                    "div",
                    null,
                    React.createElement(SearchBar, { search: this.onSearch.bind(this) })
                )
            ),
            React.createElement("br", null),
            React.createElement(
                "div",
                { className: "add" },
                "Add New Movie:",
                React.createElement(
                    "div",
                    null,
                    React.createElement(MovieInput, { add: this.onAdd.bind(this) })
                )
            ),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(
                "div",
                { className: "movie-list" },
                React.createElement(
                    "div",
                    null,
                    React.createElement(MovieList, { movies: this.state.movieList })
                )
            )
        );
    }

    componentDidMount() {
        console.log('all components mounted successfully');
    }
}

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwiTW92aWVFbnRyeSIsIk1vdmllRGF0YSIsIlNlYXJjaEJhciIsIk1vdmllSW5wdXQiLCJBcHAiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllTGlzdCIsIm9uU2VhcmNoIiwic3RyaW5nIiwiZmlsdGVyZWRNb3ZpZXMiLCJmaWx0ZXIiLCJtb3ZpZSIsInRpdGxlIiwiaW5jbHVkZXMiLCJsZW5ndGgiLCJwdXNoIiwic2V0U3RhdGUiLCJvbkFkZCIsIm5ld01vdiIsImN1ckxpc3QiLCJyZW5kZXIiLCJiaW5kIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxTQUFQLE1BQXNCLGdCQUF0QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsaUJBQXZCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixzQkFBdEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLGdCQUF0QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsaUJBQXZCOztBQUdBLE1BQU1DLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQzlCQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU47QUFDQSxhQUFLQyxLQUFMLEdBQWE7QUFDVEMsdUJBQVdUO0FBREYsU0FBYjtBQUdIOztBQUVEVSxhQUFTQyxNQUFULEVBQWlCO0FBQ2IsWUFBSUMsaUJBQWlCWixVQUFVYSxNQUFWLENBQWlCQyxTQUFTQSxNQUFNQyxLQUFOLENBQVlDLFFBQVosQ0FBcUJMLE1BQXJCLENBQTFCLENBQXJCO0FBQ0EsWUFBSUMsZUFBZUssTUFBZixLQUEwQixDQUE5QixFQUFpQztBQUM3QkwsMkJBQWVNLElBQWYsQ0FBb0IsRUFBQ0gsT0FBTyxrQkFBUixFQUFwQjtBQUNIO0FBQ0QsYUFBS0ksUUFBTCxDQUFjO0FBQ1ZWLHVCQUFXRztBQURELFNBQWQ7QUFHSDs7QUFFRFEsVUFBTVQsTUFBTixFQUFhO0FBQ1QsWUFBSVUsU0FBUyxFQUFDTixPQUFPSixNQUFSLEVBQWI7QUFDQSxZQUFJVyxVQUFVLEtBQUtkLEtBQUwsQ0FBV0MsU0FBekI7QUFDQWEsZ0JBQVFKLElBQVIsQ0FBYUcsTUFBYjtBQUNBLGFBQUtGLFFBQUwsQ0FBYztBQUNWVix1QkFBV2E7QUFERCxTQUFkO0FBR0g7O0FBRURDLGFBQVM7QUFDTCxlQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLFFBQWY7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFLLHdDQUFDLFNBQUQsSUFBVyxRQUFRLEtBQUtiLFFBQUwsQ0FBY2MsSUFBZCxDQUFtQixJQUFuQixDQUFuQjtBQUFMO0FBREosYUFESjtBQUlJLDJDQUpKO0FBS0k7QUFBQTtBQUFBLGtCQUFLLFdBQVUsS0FBZjtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUssd0NBQUMsVUFBRCxJQUFZLEtBQUssS0FBS0osS0FBTCxDQUFXSSxJQUFYLENBQWdCLElBQWhCLENBQWpCO0FBQUw7QUFESixhQUxKO0FBUUksMkNBUko7QUFRYSwyQ0FSYjtBQVNJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLFlBQWY7QUFDSTtBQUFBO0FBQUE7QUFBSyx3Q0FBQyxTQUFELElBQVcsUUFBUSxLQUFLaEIsS0FBTCxDQUFXQyxTQUE5QjtBQUFMO0FBREo7QUFUSixTQURKO0FBZUg7O0FBRURnQix3QkFBb0I7QUFDaEJDLGdCQUFRQyxHQUFSLENBQVkscUNBQVo7QUFDSDtBQS9DNkI7O0FBa0RsQyxlQUFleEIsR0FBZiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW92aWVMaXN0IGZyb20gXCIuL21vdmllbGlzdC5qc1wiO1xuaW1wb3J0IE1vdmllRW50cnkgZnJvbSBcIi4vTW92aWVFbnRyeS5qc1wiO1xuaW1wb3J0IE1vdmllRGF0YSBmcm9tIFwiLi4vZGF0YS9tb3ZpZWxpc3QuanNcIjtcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSBcIi4vU2VhcmNoQmFyLmpzXCI7XG5pbXBvcnQgTW92aWVJbnB1dCBmcm9tIFwiLi9Nb3ZpZUlucHV0LmpzXCI7XG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBtb3ZpZUxpc3Q6IE1vdmllRGF0YVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIG9uU2VhcmNoKHN0cmluZykge1xuICAgICAgICBsZXQgZmlsdGVyZWRNb3ZpZXMgPSBNb3ZpZURhdGEuZmlsdGVyKG1vdmllID0+IG1vdmllLnRpdGxlLmluY2x1ZGVzKHN0cmluZykpO1xuICAgICAgICBpZiAoZmlsdGVyZWRNb3ZpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZE1vdmllcy5wdXNoKHt0aXRsZTogJ05vIHJlc3VsdHMgZm91bmQnfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBtb3ZpZUxpc3Q6IGZpbHRlcmVkTW92aWVzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQWRkKHN0cmluZyl7XG4gICAgICAgIGxldCBuZXdNb3YgPSB7dGl0bGU6IHN0cmluZ307XG4gICAgICAgIGxldCBjdXJMaXN0ID0gdGhpcy5zdGF0ZS5tb3ZpZUxpc3Q7XG4gICAgICAgIGN1ckxpc3QucHVzaChuZXdNb3YpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1vdmllTGlzdDogY3VyTGlzdFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+IFNlYXJjaCBNb3ZpZXM6XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PFNlYXJjaEJhciBzZWFyY2g9e3RoaXMub25TZWFyY2guYmluZCh0aGlzKX0vPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkXCI+QWRkIE5ldyBNb3ZpZTpcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48TW92aWVJbnB1dCBhZGQ9e3RoaXMub25BZGQuYmluZCh0aGlzKX0vPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxicj48L2JyPjxicj48L2JyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxNb3ZpZUxpc3QgbW92aWVzPXt0aGlzLnN0YXRlLm1vdmllTGlzdH0vPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2FsbCBjb21wb25lbnRzIG1vdW50ZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il19