import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import '../styles/Posts.css';

const postArtistWithVideo = async (newArtistWithVideo) => {
    const response = await fetch('http://localhost:8080/artists/create-with-video', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newArtistWithVideo),
    });
    return response.json();
};

const AddArtistWithVideo = () => {
    const [name, setName] = useState('');
    const [profile_image, setProfile_image] = useState('');
    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');
    const [description, setDescription] = useState('');
    const [session, setSession] = useState('');
    const [videoUrl, setVideoUrl] = useState('');

    const queryClient = useQueryClient();
    const mutation = useMutation(postArtistWithVideo, {
        onSuccess: () => {
            queryClient.invalidateQueries('artists');
            queryClient.invalidateQueries('videos');
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const newArtistWithVideo = {
            name,
            profile_image,
            image1,
            image2,
            description,
            session,
            videoUrl,
        };
        mutation.mutate(newArtistWithVideo);
    };

    return (
        <div className='container-fluid container-event'>
            <h1 style={{ display: "flex", justifyContent: "center" }}>AÑADIR DJ Y VÍDEO</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-event'>
                    <div style={{marginTop: "2%", marginLeft: "25%", marginRight: "5%"}}>
                        <div>
                            <label className='label-custom'>
                                Nombre:
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            </label>
                        </div>
                        <div>
                            <label className='label-custom'>
                                URL de la imagen de perfil:
                                <input type="text" value={profile_image} onChange={(e) => setProfile_image(e.target.value)} />
                            </label>
                        </div>
                        <div>
                            <label className='label-custom'>
                                URL de la imagen 1:
                                <input type="text" value={image1} onChange={(e) => setImage1(e.target.value)} />
                            </label>
                        </div>
                        <div>
                            <label className='label-custom'>
                                URL de la imagen 2:
                                <input type="text" value={image2} onChange={(e) => setImage2(e.target.value)} />
                            </label>
                        </div>
                        <div>
                            <label className='label-custom'>
                                URL de la sesión:
                                <input type="text" value={session} onChange={(e) => setSession(e.target.value)} />
                            </label>
                        </div>
                        <div>
                            <label className='label-custom'>
                                URL del vídeo:
                                <input type="text" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} />
                            </label>
                        </div>
                    </div>
                    <div style={{width:"50%"}}>
                        <label className='label-custom-description'>
                            Descripción:
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} style={{ boxSizing: "border-box", width: "100%", height: "100%" }} />
                        </label>
                    </div>
                </div>
                <button className='btn btn-primary' type="submit">Añadir artista y video</button>
                {mutation.isLoading && <p>Enviando...</p>}
                {mutation.isError && <p>{mutation.error.message}</p>}
                {mutation.isSuccess && <p>Artista y video agregados con éxito</p>}
            </form>
        </div>
    );
};

export default AddArtistWithVideo;
