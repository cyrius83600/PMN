import React, { useState } from 'react';
import Affichage from './Affichage.tsx';

const ToDo = () => {
  var tache1 = {"Nom":"nom1","Tache":"tache1"};
  var tache2 = {"Nom":"nom2","Tache":"tache2"};
  var tache3 = {"Nom":"nom3","Tache":"tache3"};
 const taches = [tache1,tache2,tache3];


    const [utilisateur, setUtilisateur] = useState('');
    const [tache, setTache] = useState('');
    const [todo, setTodo] = useState(taches);
    const [updateUser, UpdateUser] = useState('');
    const [updateTask, UpdatingTask] = useState('');


    

   const listItems = todo.map((tache) => <Affichage message={tache}></Affichage>);

  
// const handleAddFriend = () => {
//   setTodo((tache) => [
//       ...tache,
//       {
//         nom:utilisateur,
//         tache:tache
//       },
//   ]);
// };




   const AddTask = () =>  {
    setTodo([...todo,{ Nom: utilisateur, Tache: tache }]);
  };

  const DeleteTask = (p) =>  {
    setTodo(todo.filter((u) => p.Nom != u.Nom && p.Tache != u.Tache));
  };

  const UpdateTask = (p) =>  {

    let newArray = [... todo];
    for(let i = 0; i < newArray.length; i++)
    {
      if(newArray[i].Nom === p.Nom && newArray[i].Tache === p.Tache)
      {
        var tache = {"Nom":updateUser,"Tache":updateTask};
        newArray[i] = tache;
      }
    }
    setTodo(newArray);
  };


   
   
   
   

   

   return(
   
  <div>
    
    
    Nom utilisateur : <input value={utilisateur} type = "text" onChange={(e) => setUtilisateur(e.target.value)}/><br/>
    Tâche : <input value = {tache} type = "text" name="user" onChange={(e) => setTache(e.target.value)}/><br/>
    <button onClick={AddTask}>Ajouter</button><br/>
    {/* <button onClick={DeleteTask}>Delete</button><br/> */}
    <p>--------------------------------------------------------------------------</p>
    <ul>{todo.map((p) => 

    <li>Utilisateur : {p.Nom}
       <br/> Tache : {p.Tache}<br/>
       <button onClick = {() =>
        {DeleteTask(p)}
       }>Delete</button><br/>

    Update Nom utilisateur : <input  type = "text" onChange={(e) => UpdateUser(e.target.value)}/>
    <p>    </p>Update Tâche : <input type = "text" name="user" onChange={(e) => UpdatingTask(e.target.value)}/><br/>
    <button onClick = {() =>
        {UpdateTask(p)}
       }>Update</button>
      <p>--------------------------------------------------------------------------</p>

    </li> 
    
    )}</ul> 
 <br/>
  </div>);
};

export default ToDo;
