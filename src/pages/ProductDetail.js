import React from 'react'
import { useParams } from 'react-router'

const ProductDetail = () => {
    const params = useParams();

    return (
        <section>
            <h1>ProducT Details</h1>
            <p>{params.productId}</p>
        </section>
    )
}

export default ProductDetail
