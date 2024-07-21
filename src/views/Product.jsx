import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
// import VideoTemporal from '../assets/videos/video-promocional.mp4'


const fetchProductById = async (id) => {
    const response = await fetch(`http://localhost:8080/merchandasing/${id}`);
    if (!response.ok) {
      throw new Error('Error al obtener el artículo');
    }
    return response.json();
};

const fetchProducts = async (id) => {
    const response = await fetch(`http://localhost:8080/merchandasing/bigger/${id}`);
    if (!response.ok) {
        throw new Error('Error al obtener los artículos');
    }
    return response.json();
};

export const Product = () => {
    const { id } = useParams();
    const { data: product, isLoading, error } = useQuery(['product', id], () => fetchProductById(id));
    const { data: products, isLoading: isLoadingProducts, error: errorEvents } = useQuery(['products', id], () => fetchProducts(id));


    if (isLoading) return <p>Cargando artículo...</p>;
    if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{marginTop: "5%", marginBottom: "5%"}}>
        <div className='container-fluid' style={{width: "90%", display: "flex", gap: "0.5%"}}>
            <div style={{width: "70%", display: "flex", gap: "0.5%"}}>
                <img src={product.image} alt="" style={{height: "100%", width: "50%"}}/>
                <img src={product.image2} alt="" style={{height: "100%", width: "50%"}}/>

            </div>
            <div style={{width: "30%", margin: "2%"}}>
                <p className='title-product-u'>{product.name}</p>
                <p className='description-product-u'>{product.description}</p>
                <p className='price-product-u'>{product.price}€</p>
                <a href="https://www.instagram.com/roof.tv/" className='btn btn-insta'>MÁS INFORMACIÓN</a>
            </div>
        </div>
        {/* <div className='container-fluid' style={{width: "90%", textAlign: "center", marginTop: "8%", marginBottom: "5%"}}>Descubre la {product.name}</div> */}
        {/* <div className='container-fluid' style={{width: "90%", marginTop: "5%"}}>
            <video width="100%" className='custom-video' controls autoPlay muted style={{ borderRadius: '10px', height: "85%"}}>
                <source src={VideoTemporal} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div> */}
        <p className='container-fluid middle-info-shop'>También podría interesarte</p>
        <div className='container-fluid' style={{width: "90%", display: "flex", gap: "0.5%"}}>
        {products && products.map(product => (
            <a href={`${product.productID}`} style={{width: "25%"}}><img src={product.image} alt="" style={{height: "100%", width: "100%"}}/></a>
        ))}
        </div>
    </div>
  )
}

export default Product;

