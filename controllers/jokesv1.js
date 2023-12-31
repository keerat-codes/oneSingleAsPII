
// Auto-generated by AutoPilot on 24-07-2023 at 23:23:00

const express = require('express');
const router = express.Router();

//Jokesv1 route for generating 10 tech jokes and return a random one
router.get('/jokesv1', (req, res) => {
  const techJokes = [
    "Why did the programmer quit his job? Because he didn't get arrays.",
    "Why did the developer go broke? Because he used up all his cache.",
    "Why did the JavaScript developer get mad? Because he didn't Node how to Express himself.",
    "Why was the JavaScript developer sad? Because he didn't Java.",
    "Why did the JavaScript developer get so excited? Because he finally figured out how to solve his problems with closures.",
    "What did the JavaScript programmer say when someone asked him how to debug their code? I'm sorry, I don't debug other people's code.",
    "Why did the JavaScript programmer get fired? Because he couldn't understand the DOM.",
    "Why did the JavaScript programmer get so angry? Because he couldn't understand scope.",
    "What did the JavaScript programmer say when someone asked him why he didn't write code the way they asked him to? I'm sorry, I don't write code according to your specifications.",
    "What did the JavaScript programmer say when someone asked him to fix their code? I'm sorry, I don't fix broken code."
  ];

  //Generating a random number between 0 and 9
  const randomNumber = Math.floor(Math.random() * 10);

  //Returning the random tech joke
  res.status(200).json({ result: techJokes[randomNumber] });
});

module.exports = router;