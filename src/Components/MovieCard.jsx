import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform">
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full h-72 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{movie.title}</h2>
        <p className="text-gray-400">Release Year: {movie.year}</p>
        <p className="text-yellow-400 font-bold">⭐ {movie.rating}/10</p>
      </div>
    </div>
  );
};

export default MovieCard;
