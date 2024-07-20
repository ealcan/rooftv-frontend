import React, { useState } from 'react';

const AssignVideo = () => {
    const [urlDj, setUrlDj] = useState('');
    const [idDj, setIdDj] = useState(null);
    const [urlVideo, setUrlVideo] = useState('');
    const [idVideo, setIdVideo] = useState(null);

    const handleSubmitDj = (event) => {
        event.preventDefault();
        const extractedIdDj = urlDj.split('/').pop();
        setIdDj(extractedIdDj);
    };

    const handleSubmitVideo = (event) => {
        event.preventDefault();
        const extractedIdVideo = urlVideo.split('/').pop();
        setIdVideo(extractedIdVideo);
    };

    const handleAssign = async () => {
        try {
            const response = await fetch(`http://localhost:8080/videos/${idDj}/assign-video/${idVideo}`, {
                method: 'POST', // Cambiado a POST o PUT en lugar de DELETE
            });

            if (response.ok) {
                alert('Vídeo asignado con éxito');
                setIdDj(null);
                setIdVideo(null);
                setUrlDj('');
                setUrlVideo('');
            } else {
                alert('No se ha podido asignar el vídeo');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error al asignar el vídeo');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmitDj}>
                <label>
                    Ingresa la URL del DJ:
                    <input
                        type="text"
                        value={urlDj}
                        onChange={(e) => setUrlDj(e.target.value)}
                    />
                </label>
                <button type="submit" className='btn btn-primary'>Procesar DJ</button>
            </form>

            <form onSubmit={handleSubmitVideo}>
                <label>
                    Ingresa la URL del vídeo:
                    <input
                        type="text"
                        value={urlVideo}
                        onChange={(e) => setUrlVideo(e.target.value)}
                    />
                </label>
                <button type="submit" className='btn btn-primary'>Procesar Vídeo</button>
            </form>

            {idDj && idVideo && (
                <div style={{ marginTop: "2%", display: "flex", gap: "5%" }}>
                    <p>Seguro que quieres asignar este vídeo?</p>
                    <button className='btn btn-primary' onClick={handleAssign}>Sí</button>
                </div>
            )}
        </div>
    );
};

export default AssignVideo;
