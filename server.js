//1.Be Polite, Greet the User

const express = require ('express');
const app = express();

app.get('/greetings/:name', (req, res) => {
    const name = (req.params.name);

res.send(`Hello there, ${name}!`);
});

//2.Rolling the Dice


app.get('/roll/:num', (req, res) => {
let num = (req.params.num);
num = parseInt(num);
if(typeof(num) === 'number' ){ const random = Math.floor(Math.random() * num);
    res.send(`${random}`);
    
} else {
    res.send('not a number')
}
})


//3. I Want THAT One!

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

  app.get('/collectibles/:index', (req, res) => {
    let index = req.params.index;
    index = parseInt(index)
    if (index < collectibles.length) {
        const { name, price } = collectibles[index];
        res.send(`So, you want the ${name} For ${price}, it can be yours!`)
    }else {
        res.send('This item is not yet in stock. Check back soon!');
    }
});


//4. Filter Shoes by Query Parameters

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

  app.get('/shoes', (req, res) => {
    let { min_price, max_price, type } = req.query;
    let filteredShoes = [];
   shoes.forEach((shoe) => {
    if(shoe.price > parseInt(min_price)&& shoe.price < parseInt(max_price)&& shoe.type === type){
        filteredShoes.push(shoe)
    }
   })
  

    res.send(filteredShoes);
});



app.listen(3000, () => {
    console.log('Listening on port 3000');
});


