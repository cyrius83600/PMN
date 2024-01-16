import React, { useState } from 'react';
import Affichage from './Affichage.tsx';

const ToDo = () => {
    const [utilisateur, setUtilisateur] = useState('');
    const [tache, setTache] = useState('');
    const [todo, setTodo] = useState([]);


    var tache1 = {"Nom":"nom1","Tache":"tache1"};
    var tache2 = {"Nom":"nom2","Tache":"tache2"};
    var tache3 = {"Nom":"nom3","Tache":"tache3"};
   const taches = [tache1,tache2,tache3];

   const listItems = taches.map((tache) => <Affichage message={tache}></Affichage>);

   const AddTask = () =>  {
      //setTodo({todo.push(tache1)})
   };
   
   
   
   

   

   return(
   
  <div>
    
    {listItems}
    Nom utilisateur : <input type = "text" onChange={(e) => setTache(e.target.value)}/><br/>
    Tâche : <input type = "text" name="user" onChange={(e) => setUtilisateur(e.target.value)}/><br/>
    <button onClick={AddTask}>Ajouter</button><br/>
  </div>);
};

export default ToDo;
