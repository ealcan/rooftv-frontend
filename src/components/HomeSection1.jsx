import React from 'react';
import { useQuery } from 'react-query';

const fetchEventos = async () => {
    const response = await fetch('http://localhost:8080/events'); 
    if (!response.ok) {
        throw new Error('Error al obtener los eventos');
    }
    return response.json();
};

const HomeSection1 = () => {
    const { data: events, isLoading, error } = useQuery('events', fetchEventos);

    if (isLoading) return <p>Cargando eventos...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <div className="custom-carousel">
                <div 
                    id="carouselExampleControls" 
                    className="carousel slide container" 
                    data-bs-ride="carousel" 
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                    }}
                >
                    <div className="carousel-inner event-image">
                        {events.map((event, index) => (
                            <div key={event.eventID} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <a href={`/events/${event.eventID}`}>
                                    <img src={event.image} className="d-block w-100" alt={event.eventID} />
                                </a>
                            </div>
                        ))}
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev"
                        style={{marginLeft: "10%"}}
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next"
                        style={{marginRight: "10%"}}
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeSection1;
