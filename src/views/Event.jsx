import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const fetchEventById = async (id) => {
    const response = await fetch(`http://localhost:8080/events/${id}`);
    if (!response.ok) {
      throw new Error('Error al obtener el evento');
    }
    return response.json();
};

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

const Event = () => {
    const { id } = useParams();
    const { data: event, isLoading, error } = useQuery(['event', id], () => fetchEventById(id));
    const { data: events, isLoading: isLoadingEvents, error: errorEvents } = useQuery('events', fetchEventos);


    if (isLoading || isLoadingEvents) return <p>Cargando evento...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (errorEvents) return <p>Error: {errorEvents.message}</p>;


    const groupedEvents = groupEvents(events, 4);

    return (
    <div className='event-body'>
        <div style={{display:"flex", width: "100%"}}>
            <div className='event-info'>
                <img className='events-image' src={event.image} alt=""/>
                <div>
                    <h1 className='event-title' style={{ fontWeight:"900"}}>{event.title}</h1>
                    <div className='event-date'>{event.date}</div>
                    <div className='event-place'>{event.place}</div>
                    <p className='event-description'>{event.description}</p>
                </div>
            </div>
        </div>
        <p className='middle-info'>Más eventos</p>
        <div className='container-fluid container-mini-event'>
            {/* {(filteredEvents.length > 0 ? filteredEvents : events).map(event => (  */}
            {groupedEvents.map((group, index) => (
                <div className='row' key={index} style={{ display: 'flex', justifyContent: 'flex-start'}}>
                    {group.map(event => (
                        <div className='mini-event' key={event.eventID}>
                            <a href={`${event.eventID}`}><img src={event.image} alt="" className='image-mini-event'/></a>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    </div>
    )
}

export default Event
