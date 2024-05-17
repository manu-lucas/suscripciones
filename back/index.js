import express from "express";
import { MercadoPagoConfig, Payment } from 'mercadopago';
import cors from "cors"

const client = new MercadoPagoConfig({ accessToken: 'APP_USR-3926537940861188-051615-3fce7be08640d7dd9c086dc6f65304d4-1796796862' });

const app = express()
const port = 3000

app.use(cors())


app.get("/", (req,res)=>{
    res.send("!Hola mundooooooooooooo ")
});
app.post("/process_payment", (req,res)=>{
    console.log(req.body)
    const payment = new Payment(client);
    payment.create({ body: req.body })
    .then(console.log)
    .catch(console.log);

    res.send("!Hola mundooooooooooooo ")
});


app.listen(port , ()=>{
    console.log("servidor escuchando en el puerto 3000")
})