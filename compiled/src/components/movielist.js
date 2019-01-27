import MovieEntry from "./MovieEntry.js";

var MovieList = props => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vdmllbGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWVFbnRyeSIsIk1vdmllTGlzdCIsInByb3BzIiwibW92aWVzIiwibWFwIiwiaXRlbSJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsVUFBUCxNQUF1QixpQkFBdkI7O0FBRUEsSUFBSUMsWUFBYUMsS0FBRCxJQUFXO0FBQ3ZCLFdBQ0k7QUFBQTtBQUFBLFVBQUssV0FBVSxZQUFmO0FBQUE7QUFDS0EsY0FBTUMsTUFBTixDQUFhQyxHQUFiLENBQWlCQyxRQUFRO0FBQ3RCLG1CQUFPLG9CQUFDLFVBQUQsSUFBWSxPQUFPQSxJQUFuQixHQUFQO0FBQ0gsU0FGQTtBQURMLEtBREo7QUFPSCxDQVJEOztBQVVBLGVBQWVKLFNBQWYiLCJmaWxlIjoibW92aWVsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmllRW50cnkgZnJvbSBcIi4vTW92aWVFbnRyeS5qc1wiO1xuXG52YXIgTW92aWVMaXN0ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZS1saXN0XCI+IFRoZSBNb3ZpZSBMaXN0OlxuICAgICAgICAgICAge3Byb3BzLm1vdmllcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxNb3ZpZUVudHJ5IG1vdmllPXtpdGVtfSAvPlxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllTGlzdDtcblxuIl19