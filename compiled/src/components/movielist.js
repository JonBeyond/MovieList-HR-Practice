import MovieEntry from "./MovieEntry.js";

var MovieList = props => {
    console.log('hi');
    return React.createElement(
        "div",
        { className: "movie-list" },
        " The Movie List:",
        props.movies.map(item => {
            return React.createElement(MovieEntry, { movie: item });
        })
    );
};

export default MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vdmllbGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWVFbnRyeSIsIk1vdmllTGlzdCIsInByb3BzIiwiY29uc29sZSIsImxvZyIsIm1vdmllcyIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFVBQVAsTUFBdUIsaUJBQXZCOztBQUVBLElBQUlDLFlBQWFDLEtBQUQsSUFBVztBQUN2QkMsWUFBUUMsR0FBUixDQUFZLElBQVo7QUFDQSxXQUNJO0FBQUE7QUFBQSxVQUFLLFdBQVUsWUFBZjtBQUFBO0FBQ0tGLGNBQU1HLE1BQU4sQ0FBYUMsR0FBYixDQUFpQkMsUUFBUTtBQUN0QixtQkFBTyxvQkFBQyxVQUFELElBQVksT0FBT0EsSUFBbkIsR0FBUDtBQUNILFNBRkE7QUFETCxLQURKO0FBT0gsQ0FURDs7QUFXQSxlQUFlTixTQUFmIiwiZmlsZSI6Im1vdmllbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZpZUVudHJ5IGZyb20gXCIuL01vdmllRW50cnkuanNcIjtcblxudmFyIE1vdmllTGlzdCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdoaScpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtbGlzdFwiPiBUaGUgTW92aWUgTGlzdDpcbiAgICAgICAgICAgIHtwcm9wcy5tb3ZpZXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8TW92aWVFbnRyeSBtb3ZpZT17aXRlbX0gLz5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUxpc3Q7XG5cbiJdfQ==