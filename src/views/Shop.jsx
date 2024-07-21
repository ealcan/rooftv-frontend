import React from 'react'
import { useQuery } from 'react-query';
// import VideoTemporal from '../assets/videos/video-promocional.mp4'

const fetchShop = async () => {
    const response = await fetch('http://localhost:8080/merchandasing'); 
    if (!response.ok) {
        throw new Error('Error al obtener los artícuos');
    }
    return response.json();
};

const groupProducts = (products, chunkSize) => {
    const groups = [];
    for (let i = 0; i < products.length; i += chunkSize) {
        groups.push(products.slice(i, i + chunkSize));
    }
    return groups;
};

const Shop = () => {
    const { data: products, isLoading, error } = useQuery('products', fetchShop);

    if (isLoading) return <p>Cargando artículos...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const groupedProducts = groupProducts(products, 3);

  return (
    <div>
        {/* <video width="100%" className='custom-video' controls autoPlay muted style={{ borderRadius: '10px'}}>
            <source src={VideoTemporal} type="video/mp4" />
            Your browser does not support the video tag.
      </video> */}
      <div className='container-fluid' style={{width: "80%", marginBottom: "5%"}}>
        {groupedProducts.map((group, rowIndex) => (
            <div key={rowIndex} style={{ marginTop: "5%", display: "flex", gap: "2%", justifyContent: "center"}}>
                {group.map(product => (
                    <a href={`shop/${product.productID}`} className='product'>
                        <img src={product.image} alt="" style={{height: "85%", width: "100%", borderTopLeftRadius: "5%", borderTopRightRadius: "5%"}}/>
                        <p className='title-product'>{product.name}</p>
                        <p className='price-product'>{product.price}€</p>
                    </a>
                ))}
            </div>
        ))}  
      </div>
    </div>
  )
}

export default Shop