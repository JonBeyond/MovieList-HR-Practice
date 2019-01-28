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
        let filteredMovies = MovieData.filter(movie => {
            return movie.title.includes(string) && movie.watched; //will need to remove this
        });
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

    changeView() {
        //when activated, flips required view parameters
        //true = show unwatched videos
        //false = show watched videos

        if (this.viewMode === 'true') {
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
                    React.createElement(
                        "button",
                        { id: "viewUnwatched", disabled: true, onClick: () => this.changeView() },
                        "Unwatched"
                    ),
                    React.createElement(
                        "button",
                        { id: "viewWatched", onClick: () => this.changeView() },
                        "Watched"
                    )
                ),
                React.createElement(
                    "div",
                    null,
                    React.createElement(MovieList, { movies: this.state.movieList, watch: this.changeWatched.bind(this) })
                )
            )
        );
    }

    componentDidMount() {
        console.log('all components mounted successfully');
    }
}

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwiTW92aWVFbnRyeSIsIk1vdmllRGF0YSIsIlNlYXJjaEJhciIsIk1vdmllSW5wdXQiLCJBcHAiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllTGlzdCIsInZpZXdNb2RlIiwib25TZWFyY2giLCJzdHJpbmciLCJmaWx0ZXJlZE1vdmllcyIsImZpbHRlciIsIm1vdmllIiwidGl0bGUiLCJpbmNsdWRlcyIsIndhdGNoZWQiLCJsZW5ndGgiLCJwdXNoIiwic2V0U3RhdGUiLCJvbkFkZCIsIm5ld01vdiIsImN1ckxpc3QiLCJjaGFuZ2VWaWV3Iiwidmlld21vZGUiLCIkIiwicHJvcCIsInJlbmRlciIsImNoYW5nZVdhdGNoZWQiLCJiaW5kIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxTQUFQLE1BQXNCLGdCQUF0QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsaUJBQXZCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixzQkFBdEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLGdCQUF0QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsaUJBQXZCOztBQUdBLE1BQU1DLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQzlCQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU47QUFDQSxhQUFLQyxLQUFMLEdBQWE7QUFDVEMsdUJBQVdULFNBREY7QUFFVFUsc0JBQVUsTUFGRCxDQUVRO0FBRlIsU0FBYjtBQUlIOztBQUVEQyxhQUFTQyxNQUFULEVBQWlCO0FBQ2IsWUFBSUMsaUJBQWlCYixVQUFVYyxNQUFWLENBQWtCQyxLQUFELElBQVc7QUFDN0MsbUJBQVFBLE1BQU1DLEtBQU4sQ0FBWUMsUUFBWixDQUFxQkwsTUFBckIsS0FBZ0NHLE1BQU1HLE9BQTlDLENBRDZDLENBQ1c7QUFDM0QsU0FGb0IsQ0FBckI7QUFHQSxZQUFJTCxlQUFlTSxNQUFmLEtBQTBCLENBQTlCLEVBQWlDO0FBQzdCTiwyQkFBZU8sSUFBZixDQUFvQixFQUFDSixPQUFPLGtCQUFSLEVBQXBCO0FBQ0g7QUFDRCxhQUFLSyxRQUFMLENBQWM7QUFDVlosdUJBQVdJO0FBREQsU0FBZDtBQUdIOztBQUVEUyxVQUFNVixNQUFOLEVBQWE7QUFDVCxZQUFJVyxTQUFTLEVBQUNQLE9BQU9KLE1BQVIsRUFBYjtBQUNBLFlBQUlZLFVBQVUsS0FBS2hCLEtBQUwsQ0FBV0MsU0FBekI7QUFDQWUsZ0JBQVFKLElBQVIsQ0FBYUcsTUFBYjtBQUNBLGFBQUtGLFFBQUwsQ0FBYztBQUNWWix1QkFBV2U7QUFERCxTQUFkO0FBR0g7O0FBRURDLGlCQUFhO0FBQUU7QUFDWDtBQUNBOztBQUVBLFlBQUksS0FBS2YsUUFBTCxLQUFrQixNQUF0QixFQUE2QjtBQUN6QixpQkFBS2dCLFFBQUwsR0FBZ0IsT0FBaEI7QUFDQUMsY0FBRSxnQkFBRixFQUFvQkMsSUFBcEIsQ0FBeUIsVUFBekIsRUFBcUMsSUFBckM7QUFDQUQsY0FBRSxjQUFGLEVBQWtCQyxJQUFsQixDQUF1QixVQUF2QixFQUFtQyxLQUFuQztBQUNILFNBSkQsTUFJTztBQUNILGlCQUFLRixRQUFMLEdBQWdCLE1BQWhCO0FBQ0FDLGNBQUUsZ0JBQUYsRUFBb0JDLElBQXBCLENBQXlCLFVBQXpCLEVBQXFDLEtBQXJDO0FBQ0FELGNBQUUsY0FBRixFQUFrQkMsSUFBbEIsQ0FBdUIsVUFBdkIsRUFBbUMsSUFBbkM7QUFDSDs7QUFFRCxhQUFLQyxNQUFMO0FBQ0g7O0FBRURDLGtCQUFjZixLQUFkLEVBQXFCO0FBQ2pCO0FBQ0E7QUFDQUEsY0FBTUcsT0FBTixHQUFnQixDQUFDSCxNQUFNRyxPQUF2QixDQUhpQixDQUdlO0FBQ2hDO0FBQ0EsYUFBS1csTUFBTDtBQUVIOztBQUVEQSxhQUFTO0FBQ0wsZUFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsa0JBQUssV0FBVSxRQUFmO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBSyx3Q0FBQyxTQUFELElBQVcsUUFBUSxLQUFLbEIsUUFBTCxDQUFjb0IsSUFBZCxDQUFtQixJQUFuQixDQUFuQjtBQUFMO0FBREosYUFESjtBQUlJLDJDQUpKO0FBS0k7QUFBQTtBQUFBLGtCQUFLLFdBQVUsS0FBZjtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUssd0NBQUMsVUFBRCxJQUFZLEtBQUssS0FBS1QsS0FBTCxDQUFXUyxJQUFYLENBQWdCLElBQWhCLENBQWpCO0FBQUw7QUFESixhQUxKO0FBUUksMkNBUko7QUFRYSwyQ0FSYjtBQVNJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLFlBQWY7QUFDQTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsMEJBQVEsSUFBRyxlQUFYLEVBQTJCLGNBQTNCLEVBQW9DLFNBQVMsTUFBSSxLQUFLTixVQUFMLEVBQWpEO0FBQUE7QUFBQSxxQkFESjtBQUVJO0FBQUE7QUFBQSwwQkFBUSxJQUFHLGFBQVgsRUFBeUIsU0FBUyxNQUFJLEtBQUtBLFVBQUwsRUFBdEM7QUFBQTtBQUFBO0FBRkosaUJBREE7QUFLSTtBQUFBO0FBQUE7QUFBSyx3Q0FBQyxTQUFELElBQVcsUUFBUSxLQUFLakIsS0FBTCxDQUFXQyxTQUE5QixFQUF5QyxPQUFPLEtBQUtxQixhQUFMLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QixDQUFoRDtBQUFMO0FBTEo7QUFUSixTQURKO0FBbUJIOztBQUVEQyx3QkFBb0I7QUFDaEJDLGdCQUFRQyxHQUFSLENBQVkscUNBQVo7QUFDSDtBQWhGNkI7O0FBbUZsQyxlQUFlL0IsR0FBZiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW92aWVMaXN0IGZyb20gXCIuL21vdmllbGlzdC5qc1wiO1xuaW1wb3J0IE1vdmllRW50cnkgZnJvbSBcIi4vTW92aWVFbnRyeS5qc1wiO1xuaW1wb3J0IE1vdmllRGF0YSBmcm9tIFwiLi4vZGF0YS9tb3ZpZWxpc3QuanNcIjtcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSBcIi4vU2VhcmNoQmFyLmpzXCI7XG5pbXBvcnQgTW92aWVJbnB1dCBmcm9tIFwiLi9Nb3ZpZUlucHV0LmpzXCI7XG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBtb3ZpZUxpc3Q6IE1vdmllRGF0YSxcbiAgICAgICAgICAgIHZpZXdNb2RlOiAndHJ1ZScgLy91bndhdGNoZWRcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBvblNlYXJjaChzdHJpbmcpIHtcbiAgICAgICAgbGV0IGZpbHRlcmVkTW92aWVzID0gTW92aWVEYXRhLmZpbHRlcigobW92aWUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAobW92aWUudGl0bGUuaW5jbHVkZXMoc3RyaW5nKSAmJiBtb3ZpZS53YXRjaGVkKTsgLy93aWxsIG5lZWQgdG8gcmVtb3ZlIHRoaXNcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChmaWx0ZXJlZE1vdmllcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGZpbHRlcmVkTW92aWVzLnB1c2goe3RpdGxlOiAnTm8gcmVzdWx0cyBmb3VuZCd9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1vdmllTGlzdDogZmlsdGVyZWRNb3ZpZXNcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25BZGQoc3RyaW5nKXtcbiAgICAgICAgbGV0IG5ld01vdiA9IHt0aXRsZTogc3RyaW5nfTtcbiAgICAgICAgbGV0IGN1ckxpc3QgPSB0aGlzLnN0YXRlLm1vdmllTGlzdDtcbiAgICAgICAgY3VyTGlzdC5wdXNoKG5ld01vdik7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbW92aWVMaXN0OiBjdXJMaXN0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoYW5nZVZpZXcoKSB7IC8vd2hlbiBhY3RpdmF0ZWQsIGZsaXBzIHJlcXVpcmVkIHZpZXcgcGFyYW1ldGVyc1xuICAgICAgICAvL3RydWUgPSBzaG93IHVud2F0Y2hlZCB2aWRlb3NcbiAgICAgICAgLy9mYWxzZSA9IHNob3cgd2F0Y2hlZCB2aWRlb3NcblxuICAgICAgICBpZiAodGhpcy52aWV3TW9kZSA9PT0gJ3RydWUnKXtcbiAgICAgICAgICAgIHRoaXMudmlld21vZGUgPSAnZmFsc2UnO1xuICAgICAgICAgICAgJCgnI3ZpZXdVbndhdGNoZWQnKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgJCgnI3ZpZXdXYXRjaGVkJykucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdtb2RlID0gJ3RydWUnO1xuICAgICAgICAgICAgJCgnI3ZpZXdVbndhdGNoZWQnKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICQoJyN2aWV3V2F0Y2hlZCcpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIGNoYW5nZVdhdGNoZWQobW92aWUpIHtcbiAgICAgICAgLy90YWtlIGluIGEgbW92aWUgb2JqZWN0IGFuZCBmbGlwIGl0J3MgLndhdGNoZWQgdmFsdWUgKGJvb2xlYW4pXG4gICAgICAgIC8vSSB0aGluayB0aGVyZSBpcyBhIHdheSB0byBwcmV2ZW50IGl0IGZyb20gYmVpbmcgZG91YmxlLWFjdGl2YXRlZDtcbiAgICAgICAgbW92aWUud2F0Y2hlZCA9ICFtb3ZpZS53YXRjaGVkOyAvL3dpbGwgdGhpcyB3b3JrP1xuICAgICAgICAvL2RvIEkgZW5lZCB0byBjYWxsIHJlbmRlcj9cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcblxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj4gU2VhcmNoIE1vdmllczpcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48U2VhcmNoQmFyIHNlYXJjaD17dGhpcy5vblNlYXJjaC5iaW5kKHRoaXMpfS8+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGRcIj5BZGQgTmV3IE1vdmllOlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxNb3ZpZUlucHV0IGFkZD17dGhpcy5vbkFkZC5iaW5kKHRoaXMpfS8+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+PGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZS1saXN0XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD0ndmlld1Vud2F0Y2hlZCcgZGlzYWJsZWQgb25DbGljaz17KCk9PnRoaXMuY2hhbmdlVmlldygpfT5VbndhdGNoZWQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD0ndmlld1dhdGNoZWQnIG9uQ2xpY2s9eygpPT50aGlzLmNoYW5nZVZpZXcoKX0+V2F0Y2hlZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxNb3ZpZUxpc3QgbW92aWVzPXt0aGlzLnN0YXRlLm1vdmllTGlzdH0gd2F0Y2g9e3RoaXMuY2hhbmdlV2F0Y2hlZC5iaW5kKHRoaXMpfS8+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zb2xlLmxvZygnYWxsIGNvbXBvbmVudHMgbW91bnRlZCBzdWNjZXNzZnVsbHknKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXX0=