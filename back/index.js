import express, { json } from "express";
import { MercadoPagoConfig, Payment, Preference } from "mercadopago";
import cors from "cors";
import axios from "axios";

const client = new MercadoPagoConfig({
  accessToken:
    "TEST-3926537940861188-052208-5ca7262b6d68d1b35b9a052615a0b8f2-1796796862",
});
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("!Hola mundooooooooooooo ");
});



app.post("/create_preference", async (req, res) => {
  const client = new MercadoPagoConfig({
    accessToken:
      "TEST-2564067328665750-052212-b1474a5d067cafc410a17862eae50d7c-388541957",
  });

  const preference = new Preference(client);

  preference
    .create({
      body: {
        items: [
          {
            id: "item-ID-1",
            title: req.body.title,
            quantity: req.body.quantity,
            unit_price: req.body.price,
            currency_id: "ARS",
          },
        ],
        back_urls: {
          success: "https://web-empresa-kappa.vercel.app/",
          failure: "https://web-empresa-kappa.vercel.app/",
          pending: "https://web-empresa-kappa.vercel.app/",
        },
      },
    })
    .then((result) => {
      const respuesta = result;
      console.log(respuesta.id);

      res.status(200).json({ id: respuesta.id });
    })
    .catch(console.log);
});


app.post("/process_payment", (req, res) => {

const idClient = req.query.idClient;
const planId = req.query.planId;
const {payer,token,transaction_amount} = req.body
  console.log(planId, idClient)
  console.log(req.body)
console.log(payer,token,transaction_amount)


  // const data = {
  //   "preapproval_plan_id": planId,
  //   "reason": "Programacion Basica",
  //   "external_reference": "YG-001",
  //   "payer_email": payer.email,
  //   "card_token_id": token,
  //   "auto_recurring": {
  //     "frequency": 1,
  //     "frequency_type": "months",
  //     "start_date": "2024-06-01T13:07:14.260Z",
  //     "end_date": "2025-12-01T15:59:52.581Z",
  //     "transaction_amount": transaction_amount,
  //     "currency_id": "ARS"
  //   },
  //   "back_url": "https://chronic-compiler-systematic-consequence.trycloudflare.com/pagoexitoso",
  //   "status": "authorized"
  // };


  //   const generarSuscripcion = ()=>{
  //     axios.post('https://api.mercadopago.com/preapproval', data, {
  //       headers: {
  //         'Authorization': 'Bearer TEST-3926537940861188-052208-5ca7262b6d68d1b35b9a052615a0b8f2-1796796862',
  //         'Content-Type': 'application/json'
  //       }
  //     })
  //     .then((response) => {
  //       console.log('Respuesta:', response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error.response.data);
  //     });
    
  //   }
  //   if(token){
  //     generarSuscripcion()

  //   }
    
  res.status(200).send({success:true})

});

app.post("/escucha", (req, res) => {
  try {
    console.log(req.body);
    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
  }
});

app.get("/ver", async (req, res) => {
  try {
    const client = new MercadoPagoConfig({
      accessToken:
        "APP_USR-3926537940861188-052208-8a194b9a2103a72b815bcd5190941223-1796796862",
    });

    const payment = await new Payment(client).get({ id: 78800007945 });
    console.log("soy un pago ", payment);
    console.log(req.body);

    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
  }
});



app.listen(port, () => {
  console.log("servidor escuchando en el puerto 3000");
});
