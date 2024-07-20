import React from 'react';
import { useQuery } from 'react-query';

const fetchNews = async () => {
    const response = await fetch('http://localhost:8080/news'); 
    if (!response.ok) {
        throw new Error('Error al obtener las noticias');
    }
    return response.json();
};

const groupNews = (news, chunkSize) => {
    const groups = [];
    for (let i = 0; i < news.length; i += chunkSize) {
        groups.push(news.slice(i, i + chunkSize));
    }
    return groups;
};

const News = () => {
    const { data: news, isLoading, error } = useQuery('news', fetchNews);

    if (isLoading) return <p>Cargando noticias...</p>;
    if (error) return <p>Error: {error.message}</p>;

    // Divide las noticias en dos partes
    const firstTwoNews = news.slice(0, 2);
    const remainingNews = news.slice(2);

    return (
        <div className='news-body'>
            <div className='container-fluid all-news'>
            {/* Primer contenedor para las dos primeras noticias */}
            <div className='container-fluid' style={{ display: "flex", justifyContent: "center", gap: "0.5%"}}>
                {firstTwoNews.map((newsItem, index) => (
                    <a key={index} href={`news/${newsItem.newID}`} className='principal-news'>
                        <div className='news-page' style={{backgroundImage:` url('${newsItem.image}')`}}>
                            <div className='margin-new'>
                                <h1 className='title-new'>{newsItem.title}</h1>
                                {/* <p className='date-new'>{newsItem.description}</p> */}
                                <p className='news-date'>{newsItem.publicationDate}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
            <h1 className='container-fluid text'>“ACTUALIDAD, NOTICIAS, RECOMENDACIONES MUSICALES, LANZAMIENTOS Y TODO LO NECESARIO PARA ESTAR AL DÍA DEL MEJOR SONIDO UNDERGROUND. AQUÍ EL CONTENIDO YA VIENE FILTRADO: SOLO BUENA MANDANGA!“</h1>
            {/* Segundo contenedor para las noticias restantes agrupadas */}
            <div className='container-fluid' style={{display: "flex", flexWrap: "wrap", marginTop: "3%", marginBottom: "5%", width: "100%", gap: "5%"}}>
                {remainingNews.map((newsItem, index) => (
                    <a key={index} href={`news/${newsItem.newID}`} className='secondary-news'>
                        <div style={{
                                backgroundImage:` url('${newsItem.image}')`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                width: "100%",
                                height: "60%",
                            }}>
                        </div>
                        <div style={{height: "40%"}}>
                            <h1 className='news-title'>{newsItem.title}</h1>
                            <p className='news-date-2'>{newsItem.publicationDate}</p>
                        </div>
                    </a>
                ))}
            </div>
            </div>
        </div>
    )
}

export default News;
