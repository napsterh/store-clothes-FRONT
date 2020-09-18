import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

//const API = process.env.REACT_APP_API;

const Signup = () => {
  let history = useHistory();

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    //const res = await axios.post(`${API}/users/signup`, state);
    await axios.post('http://localhost:3000/users/signup', state)
      .then((res) => {
        history.push('/users/Signin');
        toast.success('Usuario registrado satisfactoriamente');
      }, (error) => {
        console.log(error);
        toast.error('Ocurrió un error, vuelva a intentarlo');
      });
  };

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
      <div className="row">
        <div className="col-md-4 mx-auto">
          <div className="card">
            <div className="card-body">Registrar Cuenta</div>
            <div className="card-body">
              <form action="/users/signup" method="POST" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={handleInputChange}
                    placeholder="Nombre"
                  />
                </div>
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
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    name="confirm_pass"
                    onChange={handleInputChange}
                    placeholder="Confirmar contraseña"
                  />
                </div>
                <button className="btn btn-primary btn-block">Registrar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Signup;
