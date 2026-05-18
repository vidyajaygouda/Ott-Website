import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle";
import VideoBackGround from "./VideoBackGround";


const MainContainer = () => {
  const nowPlayingMovies = useSelector(store => store.movies?.nowPlayingMovies);
  if(!nowPlayingMovies)  return;
  const mainMovie = nowPlayingMovies[0];
  const {id, original_title, overview} = mainMovie;
 return (
    <div>
         <VideoTitle title = {original_title} overview = {overview}/>
         <VideoBackGround movieId = {id}/>
    </div>
  )
}

export default MainContainer
