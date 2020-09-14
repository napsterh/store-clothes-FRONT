import React, { useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom'
import { toast } from "react-toastify";

const API = process.env.REACT_APP_API;

const Signin = () => {
  let history = useHistory();

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    //const res =  await axios.post(`${API}/users/signin`, state)
    await axios.post('http://localhost:3000/users/signin', state)
      .then((res) => {
        history.push('/products');
        toast.success('Inicio de sesión satisfactorio');
      }, (error) => {
        console.log(error);
        toast.error('Ocurrió un error, vuelva a intentarlo');
      });
    };

  const handleInputChange = (e) => {
    setState({
        ...state,
        [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="row">
      <div className="col-md-4 mx-auto">
        <div className="card">
          <div className="card-body">Iniciar Sesión</div>
          <div className="card-body">
            <form action="/users/signin" method="POST" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={handleInputChange}
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={handleInputChange}
                  placeholder="Contraseña"
                />
              </div>
              <button className="btn btn-primary btn-block">
                Iniciar sesión
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
