import React from 'react';
import DeleteEvent  from '../components/DeleteEvent';
import DeleteNew from '../components/DeleteNew';
import DeleteProduct from '../components/DeleteProduct';
import DeleteVideo from '../components/DeleteVideo';
import DeleteDJ from '../components/DeleteDj';
import Accordion from 'react-bootstrap/Accordion';

const Posts = () => {
    return (
        <div className="container">
            <Accordion defaultActiveKey="none">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Borrar evento</Accordion.Header>
                    <Accordion.Body>
                        <DeleteEvent />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Borrar DJ</Accordion.Header>
                    <Accordion.Body>
                        <DeleteDJ />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Borrar vídeo</Accordion.Header>
                    <Accordion.Body>
                        <DeleteVideo />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Borrar noticia</Accordion.Header>
                    <Accordion.Body>
                        <DeleteNew />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Borrar producto de la tienda</Accordion.Header>
                    <Accordion.Body>
                        <DeleteProduct />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Posts;
