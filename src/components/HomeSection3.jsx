import React, { useState, useRef, useEffect } from 'react';
import { useQuery } from 'react-query';
import logoRoof from '../assets/logo2-roof.png';

const fetchArtists = async () => {
    const response = await fetch('http://localhost:8080/artists');
    if (!response.ok) {
        throw new Error('Error al obtener los artistas');
    }
    return response.json();
};

const HomeSection3 = () => {
    const { data: artists, isLoading, error } = useQuery('artists', fetchArtists);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const videoRef = useRef(null);

    useEffect(() => {
        // Cuando los artistas se cargan, establecer el primer video como el video seleccionado
        if (artists && artists.length > 0 && artists[0].videos && artists[0].videos.length > 0) {
            setSelectedVideo(artists[0].videos[0].url);
        }
    }, [artists]);

    useEffect(() => {
        // Cuando selectedVideo cambia, reiniciamos el video
        if (selectedVideo && videoRef.current) {
            videoRef.current.load();
            videoRef.current.play();
            const autoplayUrl = `${selectedVideo}?autoplay=1`;
            setVideoUrl(autoplayUrl);
        }
    }, [selectedVideo]);

    if (isLoading) return <p>Cargando noticias...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const handleIconClick = (event, videoUrl) => {
        event.preventDefault();
        setSelectedVideo(videoUrl);
    };

    return (
        <div>
            <div className="orangeRoof">
                <img className='img-roof' src={logoRoof} alt="Logo Roof" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p className="roofDescription" style={{ marginLeft: '20%', display: 'inline', float: 'right' }}>
                    La obra del artista cobra vida cuando interactúa con la audiencia. ROOF permite crear esta conexión entre artista y público. Impulsamos el talento emergente y lo combinamos con artistas experimentados.
                </p>
                <div className="tituloArtistas">
                    <h1 className="letraTituloArtistas">ÚLTIMAS SESIONES</h1>
                </div>

                <div className="container-fluid position-relative p-0 video">
                    <div className="iconContainer position-absolute" style={{ zIndex: 1 }}>
                        <div id="video1">
                            <a href="" onClick={(e) => handleIconClick(e, artists?.[0]?.videos?.[0].url)}>
                                <img src={artists?.[0]?.profile_image} alt="Video 1" className="iconoVideo" />
                            </a>
                        </div>
                        <div id="video2">
                            <a href="" onClick={(e) => handleIconClick(e, artists?.[1]?.videos?.[0].url)}>
                                <img src={artists?.[1]?.profile_image} alt="Video 2" className="iconoVideo" />
                            </a>
                        </div>
                        <div id="video3">
                            <a href="" onClick={(e) => handleIconClick(e, artists?.[2]?.videos?.[0].url)}>
                                <img src={artists?.[2]?.profile_image} alt="Video 3" className="iconoVideo" />
                            </a>
                        </div>
                    </div>

                    <div className="tituloArtistas videoContainer position-relative" id="videoContainer" style={{ zIndex: 0, width: '100%', height: '100%', borderBottomRightRadius: '0px' }}>
                        {selectedVideo ? (
                            <iframe id="myVideo" width="100%" height="400px" src={`${selectedVideo}?autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        ) : (
                            <p>Selecciona un video para reproducir</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSection3;
