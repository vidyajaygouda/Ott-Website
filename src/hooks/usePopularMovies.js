import { useEffect } from "react";
import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from "react-redux";
import {  addPopularMovies } from "../store/moviesSlice";

export const  usePopularMovies= () => {
    const dispatch = useDispatch();
     const fetchMovies = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?page=1' , API_OPTIONS);
      const movies = await response.json();
      dispatch(addPopularMovies(movies?.results));
    }catch(error) {
      console.log(error)
    }
  }

   useEffect(() => {
    fetchMovies();
  },[])
}