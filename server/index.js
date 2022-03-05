const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json()); // When we want to be able to accept JSON.

const dessertarr = [];


app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);

});

app.get("/api/fortune", (req, res) => {
    const fortunes = [
      "Every wise man started out by asking many questions.",
          "Disbelief destroys the magic.",
          "Do not underestimate yourself. Human beings have unlimited potentials.",
      "Your dreams are never silly; depend on them to guide you.",
      "There is no mistake so great as that of being always right."
    ];
  
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];
  
    res.status(200).send(randomFortune);
    
  })


app.post("/api/dessert", (req, res) => {
    console.log(req.body)

    const {newDessert} = req.body;
    dessertarr.push(newDessert);
    res.status(200).send(dessertarr)
})

app.get("/api/askBack", (req, res) => {
    const askAnswer = "No."

    res.status(200).send(askAnswer);
  });


app.get("/api/please", (req, res) => {
    const pleaseRes = "Fine, look in the next textbox."

    res.status(200).send(pleaseRes);
  });

app.delete("/api/delete/:index", (req, res) => {
    console.log(req.params);

    if(+req.params.index >= 0) {
        dessertarr.splice(req.params.index, 1);
        res.status(200).send(dessertarr);
    } else {
        res.status(400).send("Please enter a real number.")
    }
});

app.put("/api/update/:id", (req, res) => {
    console.log(req.params);
    console.log(req.body);

    const {newDessertName} = req.body;
    const updateIndex = +req.params.id;

    dessertarr[updateIndex] = newDessertName;

    res.status(200).send(dessertarr);
})

app.get("/api/finalList", (req, res) => {
    dessertarr.toString
    res.status(200).send(dessertarr);
})

app.listen(4000, () => console.log("Server running on 4000"));