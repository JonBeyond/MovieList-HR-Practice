import MovieEntry from "./MovieEntry.js";

var MovieList = props => {
    return React.createElement(
        "div",
        { className: "movie" },
        " The Movie List:",
        props.movies.map(item => {
            return React.createElement(MovieEntry, { movie: item });
        })
    );
};

export default MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vdmllbGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWVFbnRyeSIsIk1vdmllTGlzdCIsInByb3BzIiwibW92aWVzIiwibWFwIiwiaXRlbSJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsVUFBUCxNQUF1QixpQkFBdkI7O0FBRUEsSUFBSUMsWUFBYUMsS0FBRCxJQUFXO0FBQ3ZCLFdBQ0k7QUFBQTtBQUFBLFVBQUssV0FBVSxPQUFmO0FBQUE7QUFDS0EsY0FBTUMsTUFBTixDQUFhQyxHQUFiLENBQWlCQyxRQUFRO0FBQ3RCLG1CQUFPLG9CQUFDLFVBQUQsSUFBWSxPQUFPQSxJQUFuQixHQUFQO0FBQ0gsU0FGQTtBQURMLEtBREo7QUFPSCxDQVJEOztBQVVBLGVBQWVKLFNBQWYiLCJmaWxlIjoibW92aWVsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmllRW50cnkgZnJvbSBcIi4vTW92aWVFbnRyeS5qc1wiO1xuXG52YXIgTW92aWVMaXN0ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZVwiPiBUaGUgTW92aWUgTGlzdDpcbiAgICAgICAgICAgIHtwcm9wcy5tb3ZpZXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8TW92aWVFbnRyeSBtb3ZpZT17aXRlbX0gLz5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUxpc3Q7XG5cbiJdfQ==