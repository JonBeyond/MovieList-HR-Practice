var MovieInput = (props) => {
    return (
        <div className="input-bar">
            <input className="new-movie" type="text" />
            <button className="input-btn" onClick={()=>props.add($('.new-movie').val())}>Add Movie</button>
        </div>
    )
}

export default MovieInput;