import React, { useState } from 'react';
//import logo from './logo.svg';

const Carte = (props) => {
   var carte1 = {"Id":1,"Description":"Texte1","Title":"Carte1","Category":"Categorie1","Notation":3};
   const[cartes,SetCarte] = useState(carte1);

   
   return(
  <div>
     <p>-------------------------------------</p>
     <img src='logo.svg'></img>
     <h1>{props.carte.Title} - </h1><h2>Catégorie : {props.carte.Category}</h2>
     <p>{props.carte.Description}</p>
     Notation : {props.carte.Notation}
     <p>-------------------------------------</p>
  </div>);
};

export default Carte;