import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import mockAsyncStorage from '../mocks/asyncStorageMock';




interface IProps {
  children:React.ReactElement;
}

export interface ITask{
  id:string; 
  title:string;
}

export interface ITasksContext{
  tasks: ITask[];
  addTask(task: ITask): void;
  removeTask(id:string): void;
}

const tasksData = "@MyTasks:Tasks";
 
export const TasksContext = React.createContext<ITasksContext>(
  {} as ITasksContext,
);

export const TasksProvider: React.FunctionComponent<IProps> = ({children}) => {

  const [data, setData] = React.useState<ITask[]>([]);

  React.useEffect(() => {
    async function loadTasks() {

      //console.table(['AAAAAAAAA', tasksData, 'BBBBBBBBBB'])
      //const taskList = await AsyncStorage.getItem(tasksData);
      const taskList = await AsyncStorage.getItem(tasksData);   

      if (taskList) {        
        setData(JSON.parse(taskList));        
      }
    }

    loadTasks();
  }, []);

  const addTask = async (task: ITask) => {
    try {
      const newTaskList = [...data, task];
      setData(newTaskList);
      await AsyncStorage.setItem(tasksData, JSON.stringify(newTaskList));

    } catch (error) {
      throw new Error(error as string);
    }
  };
  
  const removeTask = async (id: string) => {
    //filtrar as tasks com id diferente do passado como parâmetro
    const newTaskList = data.filter(task => task.id! !== id);
    setData(newTaskList);
    await AsyncStorage.setItem(tasksData, JSON.stringify(newTaskList));
  };
  
  return (
    <TasksContext.Provider value={{ tasks: data, addTask, removeTask }}>
      {children}
    </TasksContext.Provider>
  );
}


// Esse só pode existir em um componente que esteja dentro do TasksProvider
export function useTaskList(): ITasksContext{
  const context =  React.useContext(TasksContext);

  if (!context) {
    throw new Error('useTaskList deve ser usado em uma TasksProvider');    
  }

  return context;
}
