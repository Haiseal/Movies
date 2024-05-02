import React from 'react'

function WatchPage() {
    const videoSrc = "https://www.youtube.com/embed/-y9loDx2660?si=Ewrs0tMVywesz8vL";
    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-4xl w-full h-[700px]">
                <h1 className="text-white text-2xl font-bold mb-3">Watch Video</h1>
                <div className="aspect-w-16 aspect-h-10 mb-4 h-[500px]" >  {/* Thay đổi tỷ lệ khung nhìn */}
                    <iframe
                        className="w-full h-full"
                        src={videoSrc}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="flex justify-between items-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Like
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Dislike
                    </button>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Share
                    </button>
                </div>

                <div className="flex mt-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
                        1
                    </button>
                    
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
                        2
                    </button>

                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
                        3
                    </button>

                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
                        4
                    </button>

                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
                        5
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WatchPage
