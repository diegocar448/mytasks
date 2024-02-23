
import React from 'react';
import { Home } from './src/pages/Home';
import { TasksContext } from './src/context/TasksContext';


const App = () => /*:React.JSX.Element*/ {
  return (      
      <TasksContext.Provider value={{ id: '1', title: 'Task01' }}>
        <Home />  
      </TasksContext.Provider>
          
    )
};

export default App;
