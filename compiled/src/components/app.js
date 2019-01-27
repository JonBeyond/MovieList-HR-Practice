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

        console.log('updated list:' + this.state.movieList);
    }

    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                { className: "search" },
                " Search Bar Here",
                React.createElement(
                    "div",
                    null,
                    React.createElement(SearchBar, { search: this.onSearch.bind(this) })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwiTW92aWVFbnRyeSIsIk1vdmllRGF0YSIsIlNlYXJjaEJhciIsIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwibW92aWVMaXN0Iiwib25TZWFyY2giLCJzdHJpbmciLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyZWRNb3ZpZXMiLCJmaWx0ZXIiLCJtb3ZpZSIsInRpdGxlIiwiaW5jbHVkZXMiLCJzZXRTdGF0ZSIsInJlbmRlciIsImJpbmQiLCJjb21wb25lbnREaWRNb3VudCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsU0FBUCxNQUFzQixnQkFBdEI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLGlCQUF2QjtBQUNBLE9BQU9DLFNBQVAsTUFBc0Isc0JBQXRCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixnQkFBdEI7QUFDQSxNQUFNQyxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQztBQUM5QkMsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOO0FBQ0EsYUFBS0MsS0FBTCxHQUFhO0FBQ1RDLHVCQUFXUjtBQURGLFNBQWI7QUFHSDs7QUFFRDtBQUNBUyxhQUFTQyxNQUFULEVBQWlCO0FBQ2JDLGdCQUFRQyxHQUFSLENBQVksSUFBWjtBQUNBO0FBQ0E7QUFDQSxZQUFJQyxpQkFBaUJiLFVBQVVjLE1BQVYsQ0FBaUJDLFNBQVNBLE1BQU1DLEtBQU4sQ0FBWUMsUUFBWixDQUFxQlAsTUFBckIsQ0FBMUIsQ0FBckI7O0FBRUEsYUFBS1EsUUFBTCxDQUFjO0FBQ1ZWLHVCQUFXSztBQURELFNBQWQ7O0FBSUFGLGdCQUFRQyxHQUFSLENBQVksa0JBQWdCLEtBQUtMLEtBQUwsQ0FBV0MsU0FBdkM7QUFDSDs7QUFFRFcsYUFBUztBQUNMLGVBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVUsUUFBZjtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUssd0NBQUMsU0FBRCxJQUFXLFFBQVEsS0FBS1YsUUFBTCxDQUFjVyxJQUFkLENBQW1CLElBQW5CLENBQW5CO0FBQUw7QUFESixhQURKO0FBSUksMkNBSko7QUFJYSwyQ0FKYjtBQUtJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLFlBQWY7QUFDSTtBQUFBO0FBQUE7QUFBSyx3Q0FBQyxTQUFELElBQVcsUUFBUSxLQUFLYixLQUFMLENBQVdDLFNBQTlCO0FBQUw7QUFESjtBQUxKLFNBREo7QUFXSDs7QUFFRGEsd0JBQW9CO0FBQ2hCVixnQkFBUUMsR0FBUixDQUFZLHFDQUFaO0FBQ0g7QUF0QzZCOztBQXlDbEMsZUFBZVYsR0FBZiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW92aWVMaXN0IGZyb20gXCIuL21vdmllbGlzdC5qc1wiO1xuaW1wb3J0IE1vdmllRW50cnkgZnJvbSBcIi4vTW92aWVFbnRyeS5qc1wiO1xuaW1wb3J0IE1vdmllRGF0YSBmcm9tIFwiLi4vZGF0YS9tb3ZpZWxpc3QuanNcIjtcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSBcIi4vU2VhcmNoQmFyLmpzXCI7XG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG1vdmllTGlzdDogTW92aWVEYXRhXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy9zdGF0ZSBjaGFuZ2UgZnVudGlvbnMgZ28gaGVyZSB3aGVuIG5lZWRlZC5cbiAgICBvblNlYXJjaChzdHJpbmcpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcyk7XG4gICAgICAgIC8vc2VhcmNoIG1vdmllZGF0YSBlbnRpcmVzIGZvciBzdHJpbmcsIGlmIGNvbnRhaW5zIGluIHRvdGxlLCBwdXQgaW50byBhIG5ldyBhcnJheSwgYW5kIGNoYW5nZSBzdGF0ZSB0byBuZXcgYXJyYXkuXG4gICAgICAgIC8vaWYgbm8gZW50cmllcywgbmVlZCB0byBkaXNwbGF5ICdubyBlbnRyaWVzJ1xuICAgICAgICBsZXQgZmlsdGVyZWRNb3ZpZXMgPSBNb3ZpZURhdGEuZmlsdGVyKG1vdmllID0+IG1vdmllLnRpdGxlLmluY2x1ZGVzKHN0cmluZykpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbW92aWVMaXN0OiBmaWx0ZXJlZE1vdmllc1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zb2xlLmxvZygndXBkYXRlZCBsaXN0OicrdGhpcy5zdGF0ZS5tb3ZpZUxpc3QpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj4gU2VhcmNoIEJhciBIZXJlXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PFNlYXJjaEJhciBzZWFyY2g9e3RoaXMub25TZWFyY2guYmluZCh0aGlzKX0vPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxicj48L2JyPjxicj48L2JyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxNb3ZpZUxpc3QgbW92aWVzPXt0aGlzLnN0YXRlLm1vdmllTGlzdH0vPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2FsbCBjb21wb25lbnRzIG1vdW50ZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il19