import { useEffect } from "react";
import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../store/moviesSlice";

export const  useNowPlayingMovies= () => {
    const dispatch = useDispatch();
     const fetchMovies = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1' , API_OPTIONS);
      const movies = await response.json();
      dispatch(addNowPlayingMovies(movies?.results))
    }catch(error) {
      console.log(error)
    }
  }

   useEffect(() => {
    fetchMovies();
  },[])
}