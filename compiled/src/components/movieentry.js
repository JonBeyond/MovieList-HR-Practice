
var MovieEntry = props => {
    return React.createElement(
        "div",
        { className: "movie-name" },
        props.movie.title,
        React.createElement(
            "button",
            { onClick: () => {
                    props.watch(props.movie);
                } },
            "Watch"
        )
    );
};

export default MovieEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vdmllZW50cnkuanN4Il0sIm5hbWVzIjpbIk1vdmllRW50cnkiLCJwcm9wcyIsIm1vdmllIiwidGl0bGUiLCJ3YXRjaCJdLCJtYXBwaW5ncyI6IjtBQUNBLElBQUlBLGFBQWNDLEtBQUQsSUFBVztBQUN4QixXQUNJO0FBQUE7QUFBQSxVQUFLLFdBQVUsWUFBZjtBQUNLQSxjQUFNQyxLQUFOLENBQVlDLEtBRGpCO0FBRUk7QUFBQTtBQUFBLGNBQVEsU0FBUyxNQUFNO0FBQUNGLDBCQUFNRyxLQUFOLENBQVlILE1BQU1DLEtBQWxCO0FBQXlCLGlCQUFqRDtBQUFBO0FBQUE7QUFGSixLQURKO0FBTUgsQ0FQRDs7QUFTQSxlQUFlRixVQUFmIiwiZmlsZSI6Im1vdmllZW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbnZhciBNb3ZpZUVudHJ5ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZS1uYW1lXCI+XG4gICAgICAgICAgICB7cHJvcHMubW92aWUudGl0bGV9XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtwcm9wcy53YXRjaChwcm9wcy5tb3ZpZSl9fT5XYXRjaDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUVudHJ5OyJdfQ==