import React, { useState } from "react";
import axios from 'axios';

//const API = process.env.REACT_APP_API;

const ProductForm = () => {
  
    const [ state, setState ] = useState({
        name: "",
        price: "",
        description: "",
        previewImageURL: ""
    })
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res =  await axios.post('http://localhost:3000/products', state)
        console.log(res);
  };

  const handleInputChange = (e) => {
    setState({
        ...state,
        [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card card-body">
          <h3 className="text-black">Crear nuevo producto</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Agregar producto"
                    onChange={handleInputChange}
                    autoFocus
                />
                </div>
            <div className="form-group">
              <input
                type="text"
                name="previewImageURL"
                className="form-control"
                placeholder="URL de Imagen"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="price"
                className="form-control"
                placeholder="Precio"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="description"
                rows="3"
                className="form-control"
                placeholder="Agregar una descripcion"
                onChange={handleInputChange}
                ></textarea>
            </div>
            <button className="btn btn-primary btn-block mt-2">Agregar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
