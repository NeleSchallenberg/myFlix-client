import { useEffect, useState } from 'react';
import { MovieCard } from '../MovieCard/MovieCard';
import { MovieView } from '../MovieView/MovieView';

// Expose MainView component
export const MainView = () => {

  // Create MainView component
  const [movies, setMovies] = useState([]);

  // Add new state variable with initial value of null (no book cards were clicked)
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Load data from API
  useEffect(() => {
    fetch('https://female-filmmakers.herokuapp.com/movies')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const moviesFromApi = data.map((movie) => {
          return {
            title: movie.Title,
            year: movie.Year,
            length: movie.Length,
            description: movie.Description,
            genre: movie.Genre.Name,
            director: movie.Director.Name,
            imagePath: movie.ImagePath
          };
        });
        setMovies(moviesFromApi);
      });
  }, []);
  
  // Render MovieView component when a movie card is clicked
  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() =>
          setSelectedMovie(null)
        }
      />
    )
  };

  // Return a text message if array is empty
  if (movies.length === 0) {
    return <div>No movies available!</div>
  } else {
    // Return clickable MovieCard component for each movie
    return (
      <div>
        {movies.map((movie) => (
          <MovieCard 
            key={movie._id}
            movie={movie}
            onMovieClick={(newSelectedMovie) => {
              setSelectedMovie(newSelectedMovie)
            }}
          />
        ))}
      </div>
    )
  };
}


/* ----- MOVIE ARRAY FROM EARLIER EXERCISE -----

    {
      id: 1,
      title: "Lady Bird",
      year: "2017",
      length: "94 min",
      description: "A fiercely independent teenager tries to make her own way in the world while wanting to get out of her hometown of Sacramento, California & to get away from her complicated mother & recently-unemployed father.",
      genre: {
        name: "Comedy",
        description: "In film and television, drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone."
      },
      director: {
        name: "Greta Gerwig",
        bio: "Greta Celeste Gerwig, born 4th of August 1983 in Sacramento, California, is an American actress, screenwriter, and director, known for acting in and making dialogue-driven independent films.",
        birth: "1983"
      },
      imagePath: "https://images.mubicdn.net/images/film/154518/cache-247719-1644229257/image-w1280.jpg?size=1280x"
    },

    {
      id: 2,
      title: "Little Women",
      year: "2019",
      length: "135 min",
      description: "Determined to make her own way in the 1860s, a writer looks back at the tough yet tender times spent with her three spirited sisters and a close friend.",
      genre: {
        name: "Drama",
        description: "In film and television, drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone."
      },
      director: {
        name: "Greta Gerwig",
        bio: "Greta Celeste Gerwig, born 4th of August 1983 in Sacramento, California, is an American actress, screenwriter, and director, known for acting in and making dialogue-driven independent films. She first garnered attention after working on and appearing in several mumblecore movies.",
        birth: "1983"
      },
      imagePath: "https://images.mubicdn.net/images/film/210045/cache-446056-1578126368/image-w1280.jpg?size=1280x"
    },

    {
      id: 3,
      title: "The Virgin Suicides",
      year: "1999",
      length: "97 min",
      description: "In suburban 1970's America, five dreamy sisters are quarantined away from social interaction when their youngest sister commits suicide. Their doomed fates indelibly mark the neighborhood boys who obsess over them.",
      genre: {
        name: "Drama",
        description: "In film and television, drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone."
      },
      director: {
        name: "Sofia Coppola",
        bio: "Sofia Carmina Coppola, born 14th of May 1971 in New York City, is an American filmmaker and actress. The youngest child and only daughter of filmmakers Eleanor and Francis Ford Coppola, she made her film debut as an infant in her father's acclaimed crime drama film 'The Godfather'.",
        birth: "1971"
      },
      imagePath: "https://images.mubicdn.net/images/film/313/cache-8080-1530511393/image-w1280.jpg?size=1280x"
    },

    {
      id: 4,
      title: "Lost In Translation",
      year: "2003",
      length: "102 min",
      description: "A faded movie star and a neglected young woman form an unlikely bond after crossing paths in Tokyo.",
      genre: {
        name: "Drama",
        description: "In film and television, drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone."
      },
      director: {
        name: "Sofia Coppola",
        bio:"Sofia Carmina Coppola, born 14th of May 1971 in New York City, is an American filmmaker and actress. The youngest child and only daughter of filmmakers Eleanor and Francis Ford Coppola, she made her film debut as an infant in her father's acclaimed crime drama film 'The Godfather'.",
        birth: "1971"
      },
      imagePath: "https://images.mubicdn.net/images/film/289/cache-94453-1545161311/image-w1280.jpg?size=1280x"
    },

    {
      id: 5,
      title: "Marie Antoinette",
      year: "2006",
      length: "123 min",
      description: "In 1770, Marie Antoinette, an Austrian archduchess, weds a French royal. Pressured to bear an heir to the French throne, she is all at ease at the royal court and unready for a gory anti-royal revolt.",
      genre: {
        name: "Drama",
        description: "In film and television, drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone."
      },
      director: {
        name: "Sofia Coppola",
        bio:"Sofia Carmina Coppola, born 14th of May 1971 in New York City, is an American filmmaker and actress. The youngest child and only daughter of filmmakers Eleanor and Francis Ford Coppola, she made her film debut as an infant in her father's acclaimed crime drama film 'The Godfather'.",
        birth: "1971"
      },
      imagePath: "https://images.mubicdn.net/images/film/1719/cache-9011-1620312993/image-w1280.jpg?size=1280x"
    }

    */