
let globalID = 1


module.exports = {
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!",
                           "Cool shirt!",
                           "Your Javascript skills are stellar.",
        ];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
        
      },
    
    getFortune: (req, res) => {
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
        
      },


    createDessert: (req, res) => {
        console.log("post connected")
        res.status(200).send(req.params)
    },

}

