import express, { json } from "express";
import { MercadoPagoConfig, Payment, Preference } from "mercadopago";
import cors from "cors";
import axios from "axios";


const client = new MercadoPagoConfig({
  accessToken:
    "TEST-3500918439586043-053114-24168b90fbd52b566005a4058c63a9f9-1796796862",
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


  const data = {
    "preapproval_plan_id": "2c9380848fde7fa4018fdea524130004",
    "payer_email": payer.email,
    "card_token_id": token,
   
    "back_url": `https://www.mercadopago.com.ar`,
    "status": "authorized"
  };


    const generarSuscripcion = ()=>{
      axios.post('https://api.mercadopago.com/preapproval', data, {
        headers: {
          'Authorization': 'Bearer TEST-3500918439586043-053114-24168b90fbd52b566005a4058c63a9f9-1796796862',
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        console.log('Respuesta:', response.data);
      })
      .catch((error) => {
        console.error('Error:', error.response.data);
      });
    
    }
    if(token){
      generarSuscripcion()

    }
    
  res.status(200).send({success:true})

});

app.post("/escucha", (req, res) => {
  const idClient = req.query.id;
const email = req.query.email;
console.log(email, idClient)
  try {
    console.log("aca estoy",req.body);
    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
  }
});

app.get("/ver", async (req, res) => {
  try {
    const client = new MercadoPagoConfig({
      accessToken:
        "TEST-3500918439586043-053114-24168b90fbd52b566005a4058c63a9f9-1796796862",
    });

    const payment = await new Payment(client).get({ id: 1623355062 });
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
