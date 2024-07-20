import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';


const fetchVideo = async (id) => {
    const response = await fetch(`http://localhost:8080/videos/${id}`);
    if (!response.ok) {
      throw new Error('Error al obtener el video');
    }
    return response.json();
};

const Video = () => {
    const { id } = useParams();
    const { data: video, isLoading, error } = useQuery(['video', id], () => fetchVideo(id));

    if (isLoading) return <p>Cargando video...</p>;
    if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='container-fluid video-container' style={{marginBottom: "5%"}}>           
        <iframe width="100%" height="400px" src={video.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default Video