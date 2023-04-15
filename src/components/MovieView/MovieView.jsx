// Exposing MovieView component
export const MovieView = ({movie, onBackClick}) => {
  // Creating MovieView component
  return (
    <div>
      
      <div>
        <img width={'100%'} src={movie.image} />
      </div>

      <div>
        <span>Title: </span>
        <span>{movie.title}</span>
      </div>

      <div>
        <span>Year: </span>
        <span>{movie.year}</span>
      </div>

      <div>
        <span>Length: </span>
        <span>{movie.length}</span>
      </div>

      <div>
        <span>Description: </span>
        <span>{movie.description}</span>
      </div>

      <div>
        <span>Genre: </span>
        <span>{movie.genre}</span>
      </div>

      <div>
        <span>Director: </span>
        <span>{movie.director}</span>
      </div>

      <button onClick={onBackClick}>Back</button>

    </div>
  )
}