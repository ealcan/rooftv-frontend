import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const fetchArtistsById = async (id) => {
    const response = await fetch(`http://localhost:8080/artists/${id}`);
    if (!response.ok) {
      throw new Error('Error al obtener el artista');
    }
    return response.json();
};

const Artist = () => {
    const { id } = useParams();
    const { data: artist, isLoading, error } = useQuery(['artist', id], () => fetchArtistsById(id));

    if (isLoading) return <p>Cargando artista...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className='container-fluid artist-body'>
            <div className='card-artist'>
                <div className='card-top'>
                    <img src={artist.image1} alt="" className='card-artist-img'/>
                    <img src={artist.image2} alt="" className='card-artist-img'/>
                </div>
                <div className=" card-artist-body">
                    <h1 className="card-title name-artist" style={{ fontWeight:"900"}}>{artist.name}</h1>
                    <p className='description-artist'>{artist.description}</p>
                    {artist.videos.map(video => (
                        <div key={video.videoID} className='container-fluid videos-artist-container'>
                            <iframe width="100%" height="100%" src={video.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Artist;
