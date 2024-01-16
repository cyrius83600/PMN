import React, { useState } from 'react';

const Affichage = (props) => {

  
   return(
  <div>
    <div>{props.message.Nom} : {props.message.Tache}</div><br/>
  </div>);
};

export default Affichage;
