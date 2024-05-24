import express, { json } from "express";
import { MercadoPagoConfig, Payment,Preference } from "mercadopago";
import cors from "cors";
import axios from "axios";

const client = new MercadoPagoConfig({
  accessToken:
    "TEST-4977820518644164-052212-c9e6c862f52ff200b8db9a90bcf507d9-388541957",
});
//TEST-4977820518644164-052014-cf4c60e995770cc3977ca10f622a8403-388541957
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
        }
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
console.log(req.body)
    const {formData} = req.body
    console.log("cuerpooooooooooooo",formData.payer)



  //------------------------

//   const dataPreapproval = {
//     "preapproval_plan_id": "2c938084726fca480172750000000000",
//     "reason": "Yoga classes",
//     "external_reference": "YG-1234",
//     "payer_email": "test_user@testuser.com",
//     "card_token_id": "63c60062f1d6e95d6d380e412e15d1b2",
//     "auto_recurring": {
//       "frequency": 1,
//       "frequency_type": "months",
//       "start_date": "2020-06-02T13:07:14.260Z",
//       "end_date": "2022-07-20T15:59:52.581Z",
//       "transaction_amount": 20,
//       "currency_id": "ARS"
//     },
//     "back_url": "https://www.mercadopago.com.ar",
//     "status": "authorized"
//   }
  




//   axios.post('https://api.mercadopago.com/preapproval', dataPreapproval, config)
//   .then(response => {
//     console.log("creacion del plan ",response.data);
//   })
//   .catch(error => {
//     console.error(error);
//   });




});




app.post("/escucha", (req, res) => {
  try{
    console.log(req.body)
res.status(200).json({success:true})
  }catch(error){
    console.log(error)

  }


})

app.get  ("/ver", async (req, res) => {
  try{
    const client = new MercadoPagoConfig({
      accessToken:
        "APP_USR-3926537940861188-052208-8a194b9a2103a72b815bcd5190941223-1796796862",
    });

    const payment = await new Payment(client).get({id:78800007945})
    console.log("soy un pago ", payment)
    console.log(req.body)

res.status(200).json({success:true})
  }catch(error){
    console.log(error)

  }


})

//
// const client = new MercadoPago({ accessToken: '<ACCESS_TOKEN>', options: { timeout: 5000 } });

// const payment = new Payment(client);

// payment.get({
// 	id: '<PAYMENT_ID>',
// }).then(console.log).catch(console.log);


// app.post("/create_preference", async (req, res) => {
//   const preference = new Preference(client);

//   preference
//     .create({
//       body: {
//         items: [
//           {
//             id: "item-ID-1",
//             title: req.body.title,
//             quantity: req.body.quantity,
//             unit_price: req.body.price,
//             currency_id: "ARS",
//           },
//         ],
//         back_urls: {
//           success: "https://web-empresa-kappa.vercel.app/",
//           failure: "https://web-empresa-kappa.vercel.app/",
//           pending: "https://web-empresa-kappa.vercel.app/",
//         },
//         marketplace_fee: 1,
//       },
//     })
//     .then((result) => {
//       const respuesta = result;
//       console.log(respuesta.id);

//       res.status(200).json({ id: respuesta.id });
//     })
//     .catch(console.log);
// });



app.listen(port, () => {
  console.log("servidor escuchando en el puerto 3000");
});












