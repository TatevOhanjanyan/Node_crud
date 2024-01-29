var express = require("express");
var path = require("path");
const bodyParser = require('body-parser');
var app = express();

const mongoose = require('mongoose');
const { info } = require("console");
const connectionString = 'mongodb+srv://tatevohanjanyans:tatevohanjanyan07@cluster0.rhvlz7o.mongodb.net/Tumo_products';
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));
app.set('view engine', 'ejs');

const { Schema } = mongoose;

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

const SchemaProduct = new Schema({
name: String,
price: Number,
image: String,
model:String,
description:String
});

let arr = [
    [
        {
            name:'Tesla ElectroCars',
            price:'60.000$',
            model:'Model X',
            description:'Model X is built from the ground up as an electric vehicle, with a high-strength architecture and floor-mounted battery pack that enable exceptional occupant protection and low rollover risk.'

        } 
    ],
    [
        {
            name:'Tesla ElectroCars',
            price:'80.000$',
            model:'Model Y',
            description:'The Tesla Model Y is a battery electric mid-size crossover SUV built by Tesla, Inc. since 2020. It started production at its Fremont Factory in January 2020. The Model Y is based on the Model 3 sedan platform'
        }
    ],
    [
        {
            name:'Tesla ElectroCars',
            price:'100.000$',
            model:'Model S',
            description:"Model S is built from the ground up as an electric vehicle, with a high-strength architecture and floor-mounted battery pack for incredible occupant protection and low rollover risk. Every new Model S includes Tesla's latest active safety features, such as Automatic Emergency Braking, at no extra cost."
        }
    ],
    [
        {
            name:'Tesla ElectroCars',
            price:'120.000$',
            model:'Roadster',
            description:"A roadster (also spider, spyder) is an open two-seat car with emphasis on sporting appearance or character. Initially an American term for a two-seat car with no weather protection, its usage has spread internationally and has evolved to include two-seat convertibles."
        }
    ],
    [
        {
            name:'Tesla ElectroCars',
            price:'90.000$',
            model:'Model 3',
            description:"The Standard Tesla Model 3 comes with rear-wheel drive, and on top of the huge 15.4-inch touchscreen that dominates the Tesla's interior, the Model 3 comes as standard with power-adjustable and heated front seats, Bluetooth connectivity and a heated steering wheel."
        }
    ]
]





const Products = mongoose.model('Products', SchemaProduct);
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', async () => {
console.log('Connected to MongoDB!');
try {
const accProgm = await Products.createCollection();

} catch (error) {
console.error('Error retrieving data:', error);
} finally {
mongoose.connection.close();
}
});



app.get("/", function(req, res){

	
	mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
	const db = mongoose.connection;
	db.on('error', console.error.bind(console, 'Connection error:'));
	db.once('open', async () => {
	try {
	let result = await mongoose.connection.db.collection('theaters').find({'location.address.city':'Bloomington'}).toArray()
	res.render('../public/form.ejs', {
	obj: result
	});
	} catch (error) {
	console.error('Error retrieving movies:', error);
	} finally {
	mongoose.connection.close();
	}
	})
});

app.post('/addName', async (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    const email = req.body.email;
    db.on('error', console.error.bind(console, 'Connection error:'));
    db.once('open', async () => {
        console.log('Connected to MongoDB!');
        try {
           let result = await mongoose.connection.db.collection('users').insertOne({
                name: name,
                email: email,
                password: password
            })
            res.json(result);
        } catch (error) {
            console.error('Error retrieving movies:', error);
        } finally {
            mongoose.connection.close();
        }
    })
 });

 

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});