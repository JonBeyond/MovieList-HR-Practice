var MovieInput = props => {
    return React.createElement(
        "div",
        { className: "input-bar" },
        React.createElement("input", { className: "new-movie", type: "text" }),
        React.createElement(
            "button",
            { className: "input-btn", onClick: () => props.add($('.new-movie').val()) },
            "Add Movie"
        )
    );
};

export default MovieInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllSW5wdXQuanN4Il0sIm5hbWVzIjpbIk1vdmllSW5wdXQiLCJwcm9wcyIsImFkZCIsIiQiLCJ2YWwiXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLGFBQWNDLEtBQUQsSUFBVztBQUN4QixXQUNJO0FBQUE7QUFBQSxVQUFLLFdBQVUsV0FBZjtBQUNJLHVDQUFPLFdBQVUsV0FBakIsRUFBNkIsTUFBSyxNQUFsQyxHQURKO0FBRUk7QUFBQTtBQUFBLGNBQVEsV0FBVSxXQUFsQixFQUE4QixTQUFTLE1BQUlBLE1BQU1DLEdBQU4sQ0FBVUMsRUFBRSxZQUFGLEVBQWdCQyxHQUFoQixFQUFWLENBQTNDO0FBQUE7QUFBQTtBQUZKLEtBREo7QUFNSCxDQVBEOztBQVNBLGVBQWVKLFVBQWYiLCJmaWxlIjoiTW92aWVJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBNb3ZpZUlucHV0ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1iYXJcIj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJuZXctbW92aWVcIiB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImlucHV0LWJ0blwiIG9uQ2xpY2s9eygpPT5wcm9wcy5hZGQoJCgnLm5ldy1tb3ZpZScpLnZhbCgpKX0+QWRkIE1vdmllPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW92aWVJbnB1dDsiXX0=