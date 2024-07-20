import React, { useState } from 'react';

const DeleteDJ = () => {
    const [url, setUrl] = useState('');
    const [id, setId] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const extractedId = url.split('/').pop();
        setId(extractedId);
    };

    const handleDelete = async () => {

        try {
            const response = await fetch(`http://localhost:8080/artists/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                alert('JD eliminado');
                setId(null);
            } else {
                alert('No se ha podido eliminar el dj');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error deleting news item');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Ingresa la URL del DJ a eliminar:
                    <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                </label>
                <button className='btn btn-danger'>Eliminar</button>
            </form>

            {id && (
                <div style={{marginTop: "2%", display: "flex", gap: "5%"}}>
                <p>Seguro que quieres eliminar este DJ?</p>
                <button className='btn btn-danger' onClick={handleDelete}>Sí</button>
            </div>
            )}
        </div>
    );
};

export default DeleteDJ;
