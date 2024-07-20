import React from 'react'
import { useQuery } from 'react-query';


const fetchVideos = async () => {
    const response = await fetch('http://localhost:8080/videos'); 
    if (!response.ok) {
        throw new Error('Error al obtener los videos');
    }
    return response.json();
};

const Videos = () => {
    const { data: videos, isLoading, error } = useQuery('videos', fetchVideos);

    if (isLoading) return <p>Cargando videos...</p>;
    if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='videos-body'>
         {videos.map(video => (
            <div key={video.videoID} className='container-fluid video-container'>
                {/* <a href={`/artists/${video.artistID.artistID}`} className='video-link'><h1 className='title-video'>{video.artistID.name}</h1></a> */}
                {/* <video style={{width:"100%"}} controls>
                    <source src={VideoTemporal1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}
                {/* <p>{video.artistID}</p> */}
                <iframe width="100%" height="400px" src={video.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div style={{width: "100%", backgroundColor: "black"}}>
                    <a className='title-video' style={{width: "100%", height: "25px",  margin: "0"}} href={`videos/${video.videoID}`}></a>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Videos