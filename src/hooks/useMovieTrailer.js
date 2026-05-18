import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../store/moviesSlice";

export const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
     const getMoviesVideos = async () => {
    const videoData = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos` , API_OPTIONS);
    const data = await videoData.json();
    const movie = data?.results?.filter(movie => movie.type ==="Trailer");
    const trailer = movie?.length ? movie[0] : data?.results[0];
    dispatch(addTrailerVideo(trailer))
  }

  useEffect(() => {
    getMoviesVideos()
  }, [])
}