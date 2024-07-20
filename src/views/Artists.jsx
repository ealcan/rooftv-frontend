import React, { useState } from 'react';
import { useQuery } from 'react-query';

const fetchArtistas = async () => {
    const response = await fetch('http://localhost:8080/artists'); 
    if (!response.ok) {
        throw new Error('Error al obtener los artistas');
    }
    return response.json();
};

const Artists = () => {
    const { data: artists, isLoading, error } = useQuery('artists', fetchArtistas);

    if (isLoading) return <p>Cargando artistas...</p>;
    if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='artists-body'>
        {artists.map(artist => (
            <div key={artist.artistID} className='container-fluid' style={{padding: "0", width: "60%", marginTop: "3%"}}>
                <a href={`artists/${artist.artistID}`}>
                    <div className="container-fluid card-artists" >
                        <img src={artist.profile_image} alt="..." className='card-artists-img'/>
                        <div className=" card-artists-body">
                            <h5 className="card-title name-artists">{artist.name}</h5>
                            {/* <p>{artist.description}</p> */}
                            <audio className='audio-custom' controls >
                                <source src={artist.session} type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                            
                        </div>
                    </div>
                </a>
            </div>
        ))}
    </div>
  )
}

export default Artists