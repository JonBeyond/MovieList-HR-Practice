var SearchBar = props => {
    return React.createElement(
        "div",
        { className: "search-bar" },
        React.createElement("input", { className: "input-form", type: "text" }),
        React.createElement(
            "button",
            { className: "search-btn", onClick: () => props.search($('.input-form').val()) },
            "Search"
        )
    );
};

export default SearchBar;

//onClick={() => props.changeVideo(props.video)}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci5qc3giXSwibmFtZXMiOlsiU2VhcmNoQmFyIiwicHJvcHMiLCJzZWFyY2giLCIkIiwidmFsIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxZQUFhQyxLQUFELElBQVc7QUFDdkIsV0FDSTtBQUFBO0FBQUEsVUFBSyxXQUFVLFlBQWY7QUFDSSx1Q0FBTyxXQUFVLFlBQWpCLEVBQThCLE1BQUssTUFBbkMsR0FESjtBQUVJO0FBQUE7QUFBQSxjQUFRLFdBQVUsWUFBbEIsRUFBK0IsU0FBUyxNQUFNQSxNQUFNQyxNQUFOLENBQWFDLEVBQUUsYUFBRixFQUFpQkMsR0FBakIsRUFBYixDQUE5QztBQUFBO0FBQUE7QUFGSixLQURKO0FBTUgsQ0FQRDs7QUFTQSxlQUFlSixTQUFmOztBQUVBIiwiZmlsZSI6IlNlYXJjaEJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBTZWFyY2hCYXIgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXJcIj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dC1mb3JtXCIgdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzZWFyY2gtYnRuXCIgb25DbGljaz17KCkgPT4gcHJvcHMuc2VhcmNoKCQoJy5pbnB1dC1mb3JtJykudmFsKCkpfT5TZWFyY2g8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXI7XG5cbi8vb25DbGljaz17KCkgPT4gcHJvcHMuY2hhbmdlVmlkZW8ocHJvcHMudmlkZW8pfSJdfQ==