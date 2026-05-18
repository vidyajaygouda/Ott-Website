import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constant"

const VideoBackGround = ({movieId}) => {

  const fetchVideoData = async () => {
    const videoData = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos` , API_OPTIONS);
    const data = await videoData.json();
    console.log(data)
  }

  useEffect(() => {
    fetchVideoData()
  })
  return (
    <div>
      
    </div>
  )
}

export default VideoBackGround
