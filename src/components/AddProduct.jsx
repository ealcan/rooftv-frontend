import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import '../styles/Posts.css';

const postShop = async (newProduct) => {
    const response = await fetch('http://localhost:8080/merchandasing', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
    });
    if (!response.ok) {
        throw new Error('Error al crear el producto');
    }
    return response.json();
};

const AddProduct = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [image2, setImage2] = useState('');
    const [price, setPrice] = useState('');
    const queryClient = useQueryClient();

    const mutation = useMutation(postShop, {
        onSuccess: () => {
            queryClient.invalidateQueries('shop');
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            name,
            description,
            image,
            image2,
            price: parseFloat(price), // Asegúrate de que el precio se envía como un número
        };
        mutation.mutate(newProduct);
    };

    return (
        <div className='container-fluid container-event'>
            <h1 style={{display: "flex", justifyContent: "center"}}>AÑADIR PRODUCTO TIENDA</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-event'>
                    <div style={{marginTop: "2%", marginLeft: "25%", marginRight: "5%"}}>
                        <div>
                            <label className='label-custom'>
                                Nombre del producto:
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            </label>
                        </div>
                        <div>
                            <label className='label-custom'>
                                URL de la imagen anverso:
                                <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
                            </label>
                        </div>
                        <div>
                            <label className='label-custom'>
                                URL de la imagen reverso:
                                <input type="text" value={image2} onChange={(e) => setImage2(e.target.value)} />
                            </label>
                        </div>
                        <div>
                            <label className='label-custom'>
                                Precio:
                                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
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
                <button className='btn btn-primary' type="submit">Añadir producto</button>
                {mutation.isLoading && <p>Enviando...</p>}
                {mutation.isError && <p>{mutation.error.message}</p>}
                {mutation.isSuccess && <p>Producto agregado con éxito</p>}
            </form>
        </div>
    );
};

export default AddProduct;
