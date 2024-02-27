import React from 'react';
import { 
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import { ITask, TasksContext, useTaskList } from '../../context/TasksContext';

interface Task{
  id: string;
  title: string;
}

export const TaskList = () => {
  const {tasks} = useTaskList();
  
  return (
    <FlatList
      data={tasks as unknown as ITask[]}
      keyExtractor={item => item.id}
      renderItem={({item}) =>(
        <TouchableOpacity style={styles.buttonTask}>
          <Text style={styles.titleTask}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />     
  );
}


const styles = StyleSheet.create({  
  buttonTask:{
    backgroundColor:'#29292e',
    padding: 10,
    marginTop:10,
    borderRadius:50,
    alignItems:'center',
  },
  titleTask:{
    color:'#f1f1f1',
    fontSize:20,
    fontWeight:'bold',
  },
});
