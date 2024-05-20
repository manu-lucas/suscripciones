import express, { json } from "express";
import { MercadoPagoConfig, Payment } from 'mercadopago';
import cors from "cors"

const client = new MercadoPagoConfig({ accessToken: 'TEST-4977820518644164-052014-cf4c60e995770cc3977ca10f622a8403-388541957' });
//TEST-4977820518644164-052014-cf4c60e995770cc3977ca10f622a8403-388541957
const app = express()
const port = 3000
app.use(express.json());
app.use(cors())


app.get("/", (req,res)=>{
    res.send("!Hola mundooooooooooooo ")
});
app.post("/process_payment", (req,res)=>{
    const payment = new Payment(client);
    payment.create({ body: req.body })
    .then( (result)=>{
        console.log("ver",result)
        console.log("STATUS",result.status)

    }  )
    .catch(console.log);

});


app.listen(port , ()=>{
    console.log("servidor escuchando en el puerto 3000")
})