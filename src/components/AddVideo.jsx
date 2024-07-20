import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import '../styles/Posts.css';

const postVideo = async (newVideo) => {
    const response = await fetch('http://localhost:8080/videos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newVideo),
    });
    return response.json();
};

const AddVideo = () => {
    const [videoUrl, setVideoUrl] = useState('');

    const queryClient = useQueryClient();
    const mutation = useMutation(postVideo, {
        onSuccess: () => {
            queryClient.invalidateQueries('videos');
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const newVideo = {
            url: videoUrl,
        };
        mutation.mutate(newVideo);
    };

    return (
        <div className='container-fluid container-event'>
            <h1 style={{ display: "flex", justifyContent: "center" }}>AÑADIR VÍDEO</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-event'>
                    <div style={{marginTop: "2%", marginLeft: "25%", marginRight: "5%"}}>
                        <div>
                            <label className='label-custom'>
                                URL del vídeo:
                                <input type="text" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} />
                            </label>
                        </div>
                    </div>
                </div>
                <button className='btn btn-primary' type="submit">Añadir Video</button>

                {mutation.isLoading && <p>Enviando...</p>}
                {mutation.isError && <p>{mutation.error.message}</p>}
                {mutation.isSuccess && <p>Vídeo agregado con éxito</p>}
            </form>
        </div>
    );
};

export default AddVideo;
