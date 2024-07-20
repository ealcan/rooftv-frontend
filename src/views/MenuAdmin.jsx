import React from 'react';
import Posts from './Posts';
import Deletion from './Deletion';
import Accordion from 'react-bootstrap/Accordion';

const MenuAdmin = () => {
    return (
        <div className="container menu">
            <Accordion defaultActiveKey="none">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Añadir</Accordion.Header>
                    <Accordion.Body>
                        <Posts />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Borrar</Accordion.Header>
                    <Accordion.Body>
                        <Deletion />
                    </Accordion.Body>
                </Accordion.Item>
                {/* <Accordion.Item eventKey="2">
                    <Accordion.Header>Modificar</Accordion.Header>
                    <Accordion.Body>
                    </Accordion.Body>
                </Accordion.Item> */}
            </Accordion>
        </div>
    );
};

export default MenuAdmin;
