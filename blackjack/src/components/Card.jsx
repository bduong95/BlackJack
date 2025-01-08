import React from "react";

const cards = require("../deck_of_cards.json");

let randomNumber = Math.floor(Math.random() * 52);
let imageLink = `images/${cards[randomNumber].image}`;


function Card() {
    return (
        <div><img src={imageLink}/></div>
    );
}

export default Card;