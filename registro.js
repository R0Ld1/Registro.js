import React, { useState } from 'react';

function Registro() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    password: '',
    confirmarPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí no se realiza ninguna acción ya que no hay validación ni guardado de datos
    console.log(formData);
  };

  return (
    <div className="registro-container">
      <h2>Formulario de Registro</h2>
      <form onSubmit={handleSubmit} className="registro-form">
        <div className="input-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ingresa tu nombre"
          />
        </div>

        <div className="input-group">
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            placeholder="Ingresa tu apellido"
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ingresa tu email"
          />
        </div>

        <div className="input-group">
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="Ingresa tu teléfono"
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Ingresa tu contraseña"
          />
        </div>

        <div className="input-group">
          <label htmlFor="confirmarPassword">Confirmar Contraseña</label>
          <input
            type="password"
            id="confirmarPassword"
            name="confirmarPassword"
            value={formData.confirmarPassword}
            onChange={handleChange}
            placeholder="Confirma tu contraseña"
          />
        </div>

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Registro;