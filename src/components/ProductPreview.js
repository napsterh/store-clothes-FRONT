import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

//const API = process.env.REACT_APP_API;

const ProductPreview = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState({})

    const getProduct =  async () => {
        const res = await axios.get(`http://localhost:3000/products/${productId}`)
        setProduct(res.data.product)
    }

    useEffect(() => {
        getProduct();
    }, []);

    return <div className="row">
        <div className="col-md-7 offset-md-4">
            <div className="card card-body">
                <div className="row">
                    <div className="col-3">
                        <img src={product.imagenURL} alt={product.npmbre} className="img-fluid"/>
                    </div>
                    <div className="col-9">
                        <h3>{product.nombre}</h3>
                        <h3>Precio: S/{product.precio}</h3>
                        <p>{product.descripcion}</p>
                        <button className="btn btn-primary btn-block">
                            Comprar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ProductPreview
