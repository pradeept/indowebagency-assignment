require('dotenv').config();
const express = require('express');
const cors = require('cors');
const adminRoutes = require('./routes/adminRoutes');
const vendorRoutes = require('./routes/vendorRoutes');
const userRoutes = require('./routes/userRoutes');
const mongoose = require('mongoose');



//helmet, morgan 

const app = express();

mongoose.connect(process.env.MONGO_URI)
.then(con=>console.log("connected to db"))
.catch(e=>console.log(e));

app.use(cors())
app.use(express.json({limit: '20mb'}));


app.use('/admin',adminRoutes);
app.use('/vendor',vendorRoutes);
app.use('/user',userRoutes);



app.listen(process.env.PORT || 3001,()=>console.log(`Alive on ${process.env.PORT}`));
