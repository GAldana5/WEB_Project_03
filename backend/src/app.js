const express = require('express');
const cors = require('cors');
require('./database');
const Place = require('./models/Hotel');
const History = require('./models/History');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/Purchases',async (req,res)=>{
    const places = await Place.find();
    res.json(places);
});

app.get('/Histories',async (req,res)=>{
    const histories = await History.find();
    res.json(histories);
});

app.post('/History', async(req, res)=>{
    const {name, place, capacity, bedrooms, nights,image,cost} = req.body;
    const history =  await History.findOne({name: name});
    if(history==null){
        const newHistory = new History({
            name: name,
            place: place,
            capacity: capacity,
            bedrooms: bedrooms,
            nights: nights,
            image: image,
            cost: cost
        });
        await newHistory.save();
        res.json({message: 'Saved in history'});
    }
    else if(name===history.name){
        res.json({message: 'Already Exists'});
    }
});

app.post('/', async(req,res)=>{
    const {name, place, capacity, bedrooms, nights,image,cost} = req.body;
    const newPlace = new Place({
        name: name,
        place: place,
        capacity: capacity,
        bedrooms: bedrooms,
        nights: nights,
        image: image,
        cost: cost
    });
    await newPlace.save();
    res.json({message: 'Purchased'});
});

app.delete('/:id',async (req,res)=>{
    await Place.findByIdAndDelete(req.params.id);
    res.json({message: 'Purchase removed'});
});

app.delete('/History/:id', async(req, res)=>{
    await History.findByIdAndDelete(req.params.id);
    res.json({message: 'History removed'});
});

app.listen(4000,()=>{
    console.log("listening to port 4000");
});