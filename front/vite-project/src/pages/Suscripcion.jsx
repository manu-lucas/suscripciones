import React from 'react'
import { initMercadoPago, CardPayment } from '@mercadopago/sdk-react';


const Suscripcion = () => {


    initMercadoPago('APP_USR-90fbc189-ca9c-440e-9e14-0e92a2938491');
const AMOUNT = 2000


const initialization = {
    amount: 100,
   };

   const onSubmit = async (formData) => {
    // callback llamado al hacer clic en el botón enviar datos
    return new Promise((resolve, reject) => {
      fetch('http://localhost:3000/process_payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((response) => {
          // recibir el resultado del pago
          resolve();
        })
        .catch((error) => {
          // manejar la respuesta de error al intentar crear el pago
          reject();
        });
    });
   };
   
   
   const onError = async (error) => {
    // callback llamado para todos los casos de error de Brick
    console.log(error);
   };
   
   
   const onReady = async () => {
    /*
      Callback llamado cuando Brick está listo.
      Aquí puedes ocultar cargamentos de su sitio, por ejemplo.
    */
   };
   








  return (
    <div>
        <h2>Suscripciones</h2>
        
        <CardPayment
         initialization={initialization}
         onReady={onReady}
         onError={onError}
         onSubmit={onSubmit}

    />
        
        </div>
  )
}

export default Suscripcion