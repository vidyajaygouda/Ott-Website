

const VideoTitle = ({title, overview }) => {
  return (
    <div  className="w-full aspect-video  pt-[20%] px-26 absolute text-white bg-linear-to-r from-black">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black font-bold text-lg p-4 px-12 rounded-lg cursor-pointer hover: bg-opacity-80">➡️ Play</button>
        <button className="mx-2  bg-gray-500 text-white p-4 px-10 text-xl bg-opacity-50 rounded-lg cursor-pointer hover:bg-opacity-100">  ℹ️More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
