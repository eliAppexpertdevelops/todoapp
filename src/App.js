//import React, { state,setState } from 'react';
import React, { useState } from 'react';
import Todos from './Todos'

function App() {
  const [ state, setState ] = useState( [
    { id:1, content: 'buy some milk'},
    { id:2, content: 'play mario kart'}
  ]
  );
  // state = {
  //   todos :[ 
  //     { id:1, content: 'buy some milk'},
  //     { id:2, content: 'play mario kart'}
  //   ]
  // }
  const deleteTodo = (id) => {
    //console.log(id);
   
    setState(
     state.filter(todo => 
       todo.id !== id
      )
    ) 
  }
  return (
    <div className="App">

       <h1 className="center blue-text">Todo's</h1>
       <Todos todos={state} deleteTodo={deleteTodo}/>
     
    </div>
  );
}

export default App;
