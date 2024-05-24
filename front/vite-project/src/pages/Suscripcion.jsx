import React, { useState } from "react";
import { initMercadoPago } from "@mercadopago/sdk-react";
import { Payment } from "@mercadopago/sdk-react";

const Suscripcion = () => {
  initMercadoPago("APP_USR-ef6e1f0e-def8-42fa-bca2-f94e400edd8c", {
    locale: "es-AR",
  });

  const initialization = {
    amount: 20,
    preferenceId: "388541957-cfc75906-326c-457b-8823-cc85ef5a368e",

    payer: {
      email: "lucasechegaray2011@gmail.com",
    },
  };

  const customization = {
    paymentMethods: {
      atm: "all",
      mercadoPago: ["wallet_purchase"],

      creditCard: "all",
      debitCard: "all",
      maxInstallments: 1,
    },
  };

  const onSubmit = async (formData) => {
    // callback llamado al hacer clic en el botón enviar datos
    return new Promise((resolve, reject) => {
      fetch("http://localhost:3000/process_payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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

      {/* <CardPayment
           initialization={initialization}
           onReady={onReady}
           onError={onError}
           onSubmit={onSubmit}
           customization={customization} /> */}

      <Payment
        initialization={initialization}
        customization={customization}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Suscripcion;
