
import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Home } from './src/pages/Home';
import { TasksProvider } from './src/context/TasksContext';



const App = () => /*:React.JSX.Element*/ {

  React.useEffect( () => {
    SplashScreen.hide();
  }, []);
  return (      
      <TasksProvider>
        <Home />
      </TasksProvider>
          
    )
};

export default App;
