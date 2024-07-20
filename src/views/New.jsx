import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';


const fetchNewById = async (id) => {
    const response = await fetch(`http://localhost:8080/news/${id}`);
    if (!response.ok) {
      throw new Error('Error al obtener la noticia');
    }
    return response.json();
};

const New = () => {
    const { id } = useParams();
    const { data: news, isLoading, error } = useQuery(['new', id], () => fetchNewById(id));

    if (isLoading) return <p>Cargando noticia...</p>;
    if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
    <div className='container-fluid container-news'>
        <h2 className='title-news'>{news.title}</h2>
            {/* <p className='news-date'>{news.description}</p> */}
        <div className='page-news' style={{backgroundImage:` url('${news.image}')`}}></div>
        <p className='date-news'>{news.publicationDate}</p>
        <div className='text-news'>
            <p>{news.description}</p>
        </div>
    </div>
    </div>
  )
}

export default New