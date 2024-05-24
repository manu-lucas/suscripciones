import React, { useEffect } from 'react';

const LinkPagos = () => {



  return (
    <div>
        
            <h2>LinkPagos</h2>
                <MercadoPagoButton/>
        
        
        
        
        </div>
  )
}

export default LinkPagos




const MercadoPagoButton = () => {
    useEffect(() => {
      const $MPC_load = () => {
        if (window.$MPC_loaded !== true) {
          const s = document.createElement("script");
          s.type = "text/javascript";
          s.async = true;
          s.src = document.location.protocol + "//secure.mlstatic.com/mptools/render.js";
          const x = document.getElementsByTagName('script')[0];
          x.parentNode.insertBefore(s, x);
          window.$MPC_loaded = true;
        }
      };
  
      if (window.$MPC_loaded !== true) {
        if (window.attachEvent) {
          window.attachEvent('onload', $MPC_load);
        } else {
          window.addEventListener('load', $MPC_load, false);
        }
      }
  
      // Optional: To handle messages when closing the modal
      const $MPC_message = (event) => {
        // Callback function to handle messages
        // console.log(`Received message: ${event.data} preapproval_id`);
      };
  
      if (window.$MPC_loaded !== true) {
        window.addEventListener("message", $MPC_message);
      }
  
      // Cleanup script and event listeners on unmount
      return () => {
        window.removeEventListener('load', $MPC_load);
        window.removeEventListener('message', $MPC_message);
      };
    }, []);
  
    return (<> 
      <a
        href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848fa6c8f6018faafcaf3800c0"
        name="MP-payButton"
        className="blue-ar-l-rn-none"
      >
        Suscribirme a plan Contabilidad
      </a>



<a
href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848fa6c8e6018faafdf67800a7"
name="MP-payButton"
className="blue-ar-l-rn-none"
>
Suscribirme a plan "20"
</a>

</>
    );
  };

