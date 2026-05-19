import { BG_URL } from "../utils/constant"
import GPTMovieSuggestions from "./GPTMovieSuggestions"
import GptSearchBar from "./GptSearchBar"


const GptSearch = () => {
  return (
    <>
     <div className="absolute -z-10">
        <img className="" src={BG_URL} alt="logo" />
      </div>
      <div className="">
        <GptSearchBar />
        <GPTMovieSuggestions />
      </div>
    </>
  )
}

export default GptSearch
