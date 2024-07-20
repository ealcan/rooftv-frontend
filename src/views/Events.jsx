import React from 'react'
import { useQuery } from 'react-query';


const fetchEventos = async () => {
    const response = await fetch('http://localhost:8080/events'); 
    if (!response.ok) {
        throw new Error('Error al obtener los eventos');
    }
    return response.json();
};

const groupEvents = (events, chunkSize) => {
    const groups = [];
    for (let i = 0; i < events.length; i += chunkSize) {
        groups.push(events.slice(i, i + chunkSize));
    }
    return groups;
};

const Events = () => {
    const { data: events, isLoading, error } = useQuery('events', fetchEventos);

    if (isLoading) return <p>Cargando eventos...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const groupedEvents = groupEvents(events, 4);

  return (
    <div className='background-events'>
        <div style={{marginLeft: "2%", marginRight: "2%", marginTop: "50px"}}>
            {/* <div>
                <h1 className='event-title'>EVENTOS</h1>
            </div> */}
            <div  className='card-event'>
                {groupedEvents.map((group, rowIndex) => (
                    <div key={rowIndex} style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '2%', gap:'2%' }}>
                        {group.map(event => (
                            <div className='card-width' key={event.eventID}>
                                <img src={event.image} className="card-img-top card-image" alt="" />
                                <div className="card-body ">
                                    <div className='card-date'>{event.date}</div>
                                    <div className='card-place'>{event.place}</div>
                                    <a className='btn card-button' href={`events/${event.eventID}`}>MÁS INFORMACIÓN</a>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Events