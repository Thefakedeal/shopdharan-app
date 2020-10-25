import React from 'react'
import ProductCard from '../components/ProductCard'
import baseURL from '../defaults/baseurl'


export default function DisplayProducts({products=[]}) {
    return (
        products.map(product=>(
            <ProductCard 
                id={product.product_id}
                price={product.price}
                title={product.product_name}
                imageURI={`${baseURL}/images/${product.image_id}`}
                key={product.product_id}
            />
        ))
    )
}
