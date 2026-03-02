// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// mongoose.connect("mongodb://localhost:27017/e-commerce");

// app.use(express.json()); 
// app.get('/', async (req, res)=>{
//     const db = mongoose.connection.db;
//     const users = db.collection('users');
//     await users.deleteMany({
//         name: "Autaar"
//     });

//     const haf = await users.find().toArray();

//     res.send( haf);
//     console.log("new insert id " , users )

// });

// app.listen(4000,()=>{
//     console.log("server running on port 4000");
// });