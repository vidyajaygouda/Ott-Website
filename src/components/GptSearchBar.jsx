import { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import { client } from "../utils/openAi";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);

    const handleGptSearchClick = async() =>{

      const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
        try {
          const gptResults = await client.responses.create({
            model: "gpt-4.1-mini",
            input: "Hello",
          });
          console.log(gptResults.output_text);
        } catch (error) {
          console.error("OpenAI Error:", error);
    }

    // console.log(gptResults.choices?.[0]?.message?.content);


    }
  return (
     <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className=" p-4 m-4 col-span-9 bg-white"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar