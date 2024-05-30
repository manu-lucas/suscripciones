import React from "react";
import {
 
    Link,
  } from "react-router-dom";





const Planes = () => {





  return (

    <div>
      <h3>Planes</h3>
      <p>Elige el plan </p>

      <div>
        <h2>Programacion Básica </h2>
        <Link to="/suscripcion/2c9380848fb9d8b0018fbb8113180089">Elegir programacion basica</Link>
        
      </div>

      <div>
        <h2>Programacion Pro </h2>
        <Link to="/suscripcion/2c9380848fb9d8b0018fbb7d9be90086">Elegir programacion  Pro</Link>

        
      </div>
    </div>
  );
};

export default Planes;
