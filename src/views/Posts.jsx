import React from 'react';
import AddEvent from '../components/AddEvent';
import AddArtist from '../components/AddArtist';
import AddNew from '../components/AddNew';
import AddProduct from '../components/AddProduct';
import AddVideo from '../components/AddVideo';
import AssignVideo from '../components/AssignVideo'
import Accordion from 'react-bootstrap/Accordion';

const Posts = () => {
    return (
        <div className="container">
            <Accordion defaultActiveKey="none">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Añadir evento</Accordion.Header>
                    <Accordion.Body>
                        <AddEvent />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Añadir DJ</Accordion.Header>
                    <Accordion.Body>
                        <AddArtist />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Añadir vídeo</Accordion.Header>
                    <Accordion.Body>
                        <AddVideo />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Asignar vídeo</Accordion.Header>
                    <Accordion.Body>
                        <AssignVideo />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Añadir noticia</Accordion.Header>
                    <Accordion.Body>
                        <AddNew />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Añadir producto de la tienda</Accordion.Header>
                    <Accordion.Body>
                        <AddProduct />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Posts;
