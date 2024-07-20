import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import '../styles/Posts.css'

const postEvent = async (newEvent) => {
    const response = await fetch('http://localhost:8080/events', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEvent),
    });
    if (!response.ok) {
        throw new Error('Error al crear el evento');
    }
    return response.json();
};

const AddEvent = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [place, setPlace] = useState('');
    const [dateEvent, setDateEvent] = useState('');
    const queryClient = useQueryClient();

    const mutation = useMutation(postEvent, {
        onSuccess: () => {
            queryClient.invalidateQueries('events');
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEvent = {
            title,
            image,
            description,
            place,
            dateEvent,
        };
        mutation.mutate(newEvent);
    };

    return (
        <div className='container-fluid container-event'>
            <h1 style={{display: "flex", justifyContent: "center"}}>AÑADIR EVENTO</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-event'>
                    <div style={{marginTop: "2%", marginLeft: "25%", marginRight: "5%"}}>
                        <div>
                            <label className='label-custom'>
                                Título:
                                <input  type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                            </label>
                        </div>
                        <div style={{marginTop: "5%"}}>
                            <label className='label-custom'>
                                Imagen URL:
                                <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
                            </label>
                        </div>
                        <div style={{marginTop: "5%"}}>
                            <label className='label-custom'>
                                Lugar:
                                <input type="text" value={place} onChange={(e) => setPlace(e.target.value)} />
                            </label>
                        </div>
                        <div style={{marginTop: "5%"}}>
                            <label className='label-custom'>
                                Fecha del Evento:
                                <input type="date" value={dateEvent} onChange={(e) => setDateEvent(e.target.value)} />
                            </label>
                        </div >
                    </div>
                    <div style={{width:"50%"}}>
                        <label className='label-custom-description'>
                            Descripción:
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} style={{ boxSizing: "border-box", width: "100%", height: "100%" }} />
                        </label>
                    </div>
                </div>
                <button className='btn btn-primary' type="submit">Añadir Evento</button>
                {mutation.isLoading && <p>Enviando...</p>}
                {mutation.isError && <p>{mutation.error.message}</p>}
                {mutation.isSuccess && <p>Evento agregado con éxito</p>}
            </form>
        </div>
    );
};

export default AddEvent;
