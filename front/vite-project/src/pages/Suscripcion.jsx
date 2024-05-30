import React, { useState,useEffect } from "react";
import { initMercadoPago } from "@mercadopago/sdk-react";
import { CardPayment } from "@mercadopago/sdk-react";
import { useLocation,useParams  } from 'react-router-dom';




const Suscripcion = () => {
  initMercadoPago("TEST-babe7d7a-eba2-43d0-a75a-125a95c2512f", {
    locale: "es-AR",
  });
  const  idRoute  = useParams();
  const id = idRoute.id
  console.log(idRoute)

  const [monto, setMonto] = useState(null);
  const clientNombre = "pepe"


 useEffect(() => {
  
  if (idRoute.id === "2c9380848fb9d8b0018fbb8113180089") {
    setMonto(30);
  } else if (idRoute.id === "2c9380848fb9d8b0018fbb7d9be90086") {
    setMonto(20);
  }
}, [idRoute]);
 

 

  const initialization = {
    amount: monto,
    payer: {
      email: "lucasechegaray2011@gmail.com",
    },
  };

  // const customization = {
  //   paymentMethods: {
  //     atm: "all",
  //     mercadoPago: ["wallet_purchase"],

  //     creditCard: "all",
  //     debitCard: "all",
  //     maxInstallments: 1,
  //   },
  // };

  const customization = {
    paymentMethods: {
      maxInstallments: 1,
    },
    visual: {
      style: {
        theme: 'dark',
      },
    },

  };

  

  const onSubmit = async (formData) => {
    // callback llamado al hacer clic en el botón enviar datos
    return new Promise((resolve, reject) => {
      fetch(`http://localhost:3000/process_payment?idClient=${clientNombre}&planId=${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      })
        .then((response) => response.json())
        .then((response) => {
          
          console.log("response data",response)

          resolve();
        })
        .catch((error) => {
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
           customization={customization} 
           /> 


    </div>
  );
};

export default Suscripcion;




{/* 
      <Payment
        initialization={initialization}
        customization={customization}
        onSubmit={onSubmit}
      /> */}