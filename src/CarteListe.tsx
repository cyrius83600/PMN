import React, { useState } from 'react';
import Carte from './Carte.tsx';
//import logo from './logo.svg';

const ListeCartes = () => {

   var carte1 = {"Id":1,"Description":"Texte1","Title":"Carte1","Category":"Categorie1","Notation":3};
   var carte2 = {"Id":2,"Description":"Texte1","Title":"Carte2","Category":"Categorie2","Notation":1};
   var carte3 = {"Id":3,"Description":"Texte1","Title":"Carte3","Category":"Categorie3","Notation":5};
   const[listeCartes,SetListeCartes] = useState([carte1, carte2, carte3]);
   
   return(
  <div>
    {listeCartes.map((p) => 
    <Carte carte={p}></Carte>
    )}
  </div>);
};

export default ListeCartes;