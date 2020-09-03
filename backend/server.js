import express from 'express';
import data from './data';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute'
import connectDB from'./config/db';



connectDB()






const app = express();
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/products", productRoute)

/***************app.get("/api/products/:id", (req, res) => {
    const productId = req.params.id;
    const product = data.products.find(x=>x._id === productId);
    if(product)
    res.send(product);

    else
    res.status(404).send({msg:"Product Not Found."})
});

app.get("/api/products", (req, res) => {
    res.send(data.products);
});*********/

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {console.log(`Server started at http://localhost: ${PORT}`)})
