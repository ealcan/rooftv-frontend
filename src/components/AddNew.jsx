import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import '../styles/Posts.css'

const postArtist = async (newNews) => {
    const response = await fetch('http://localhost:8080/news', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newNews),
    });
    if (!response.ok) {
        throw new Error('Error al crear la noticia');
    }
    return response.json();
};

const AddEvent = () => {
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [publicationDate, setPublicationDate] = useState('');
    const queryClient = useQueryClient();

    const mutation = useMutation(postArtist, {
        onSuccess: () => {
            queryClient.invalidateQueries('news');
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const newNews = {
            image,
            title,
            description,
            publicationDate,
        };
        mutation.mutate(newNews);
    };

    return (
        <div className='container-fluid container-event'>
            <h1 style={{display: "flex", justifyContent: "center"}}>AÑADIR NOTICIA</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-event'>
                    <div style={{marginTop: "2%", marginLeft: "25%", marginRight: "5%"}}>
                        <div>
                            <label className='label-custom'>
                                URL de la imagen:
                                <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
                            </label>
                        </div>
                        <div>
                            <label className='label-custom'>
                                Título:
                                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                            </label>
                        </div>
                        <div>
                            <label className='label-custom'>
                                Fecha de publicacion:
                                <input type="date" value={publicationDate} onChange={(e) => setPublicationDate(e.target.value)} />
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
                <button className='btn btn-primary' type="submit">Añadir noticia</button>
                {mutation.isLoading && <p>Enviando...</p>}
                {mutation.isError && <p>{mutation.error.message}</p>}
                {mutation.isSuccess && <p>Noticia agregada con éxito</p>}
            </form>
        </div>
    );
};

export default AddEvent;
