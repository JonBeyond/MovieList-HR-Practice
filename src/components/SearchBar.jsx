var SearchBar = (props) => {
    return (
        <div className="search-bar">
            <input className="input-form" type="text" />
            <button className="search-btn" onClick={() => props.search($('.input-form').val())}>Search</button>
        </div>
    )
}

export default SearchBar;

//onClick={() => props.changeVideo(props.video)}