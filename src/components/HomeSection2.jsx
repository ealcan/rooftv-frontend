import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';

const fetchNews = async () => {
    const response = await fetch('http://localhost:8080/news');
    if (!response.ok) {
        throw new Error('Error al obtener las noticias');
    }
    return response.json();
};


const HomeSection2 = () => {
    const { data: news, isLoading, error } = useQuery('news', fetchNews);


    if (isLoading) return <p>Cargando noticias...</p>;
    if (error) return <p>Error: {error.message}</p>;


  return (
    <div>
        
        <div style={{width: "100%", backgroundColor: "white"}}>
            <h1 className='new-title container'>News</h1>  
            <div className='container-fluid news'>
                <a href={`news/${news?.[0]?.newID}`}>
                    <div className='new1 border-new d-flex flex-column justify-content-end' style={{
                            backgroundImage: `url('${news?.[0]?.image}')`,
                            backgroundSize: 'crover',        
                            backgroundRepeat: 'no-repeat',  
                            backgroundPosition: 'center',
                        }}>
                        <div className='margin-new'>
                            <h1 className='title-new'> {news?.[0]?.title}</h1>
                            <p className='date-new'>{news?.[0]?.publicationDate}</p>
                        </div>
                    </div>
                </a>
                <a href={`news/${news?.[1]?.newID}`}>
                    <div className='news2 border-new d-flex flex-column justify-content-end' style={{
                            backgroundImage: `url('${news?.[1]?.image}')`,
                            backgroundSize: 'cover',        
                            backgroundRepeat: 'no-repeat',  
                            backgroundPosition: 'center',
                        }}>
                        <div className='margin-new'>
                            <h1 className='title-new'> {news?.[1]?.title}</h1>
                            <p className='date-new'>{news?.[1]?.publicationDate}</p>
                        </div>
                    </div>
                </a>
                <div className='new2 border-new'>
                    <a href={`news/${news?.[2]?.newID}`}>
                    <div className='new3 border-new d-flex flex-column justify-content-end' style={{
                            backgroundImage: `url('${news?.[2]?.image}')`,
                            backgroundSize: 'cover',        
                            backgroundRepeat: 'no-repeat',  
                            backgroundPosition: 'center',
                        }}>
                            <div className='margin-new'>
                                <h1 className='small-title-new'> {news?.[2]?.title}</h1>
                                <p className='date-new'>{news?.[2]?.publicationDate}</p>
                            </div>
                        </div>
                    </a>
                    <a href={`news/${news?.[3]?.newID}`}>
                    <div className='new3 border-new d-flex flex-column justify-content-end' style={{
                            backgroundImage: `url('${news?.[3]?.image}')`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center', 
                        }}>
                            <div className='margin-new'>
                                <h1 className='small-title-new'> {news?.[3]?.title}</h1>
                                <p className='date-new'>{news?.[3]?.publicationDate}</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        {/* <div className='container-fluid other-news-container'>
            <div className='other-news'></div>
            <div className='other-news'></div>
            <div className='other-news'></div>
            <div className='other-news'></div>
        </div> */}
    </div>
    
  )
}

export default HomeSection2