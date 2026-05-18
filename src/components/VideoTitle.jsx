

const VideoTitle = ({title, overview }) => {
  return (
    <div  className="pt-36 px-12">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-gray-500 text-black text-lg py-3 px-12 rounded-lg">➡️ Play</button>
        <button className=" md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">More!</button>
      </div>
    </div>
  )
}

export default VideoTitle
