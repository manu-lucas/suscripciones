import React, { useState } from "react";
import { initMercadoPago } from "@mercadopago/sdk-react";






const FormularioPreferenc = () => {

    const [preferenceId, setPreferenceId] = useState(null);
    console.log(preferenceId)
    initMercadoPago("APP_USR-9423e49a-944a-4504-bac0-f87fe97211f6",  {locale: 'es-AR'});

    const enviarData = async (event) => {
        event.preventDefault();
    
        try {
          const url = "http://localhost:3000/create_preference"; // Replace with your actual API endpoint
    
          const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" }, // Set headers for JSON data
            body: JSON.stringify({ title: "Plan Z", quantity: 1, price: 20 }), // Replace with your actual data
          });
    
          if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
          }
    
          const responseData = await response.json();
          console.log("respuesta", responseData.id);
          setPreferenceId(responseData.id);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

  return (
    <div>


<h5>Soy un Formulario</h5>
      <button
        style={{ backgroundColor: "red", color: "white" }}
        onClick={enviarData}
      >
        Enviar
      </button>


    </div>
  )
}

export default FormularioPreferenc