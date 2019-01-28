import MovieEntry from "./MovieEntry.js";

var MovieList = props => {
    return React.createElement(
        "div",
        { className: "movie" },
        " The Movie List:",
        props.movies.map(item => {
            if (!item.watched) {
                return React.createElement(MovieEntry, { movie: item, watch: props.watch });
            }
        })
    );
};

export default MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vdmllbGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWVFbnRyeSIsIk1vdmllTGlzdCIsInByb3BzIiwibW92aWVzIiwibWFwIiwiaXRlbSIsIndhdGNoZWQiLCJ3YXRjaCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsVUFBUCxNQUF1QixpQkFBdkI7O0FBRUEsSUFBSUMsWUFBYUMsS0FBRCxJQUFXO0FBQ3ZCLFdBQ0k7QUFBQTtBQUFBLFVBQUssV0FBVSxPQUFmO0FBQUE7QUFDS0EsY0FBTUMsTUFBTixDQUFhQyxHQUFiLENBQWlCQyxRQUFRO0FBQ3RCLGdCQUFHLENBQUNBLEtBQUtDLE9BQVQsRUFBa0I7QUFDZCx1QkFBTyxvQkFBQyxVQUFELElBQVksT0FBT0QsSUFBbkIsRUFBeUIsT0FBT0gsTUFBTUssS0FBdEMsR0FBUDtBQUNIO0FBQ0osU0FKQTtBQURMLEtBREo7QUFTSCxDQVZEOztBQVlBLGVBQWVOLFNBQWYiLCJmaWxlIjoibW92aWVsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmllRW50cnkgZnJvbSBcIi4vTW92aWVFbnRyeS5qc1wiO1xuXG52YXIgTW92aWVMaXN0ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZVwiPiBUaGUgTW92aWUgTGlzdDpcbiAgICAgICAgICAgIHtwcm9wcy5tb3ZpZXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmKCFpdGVtLndhdGNoZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxNb3ZpZUVudHJ5IG1vdmllPXtpdGVtfSB3YXRjaD17cHJvcHMud2F0Y2h9Lz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW92aWVMaXN0O1xuXG4iXX0=