import React from 'react';
import { 
  TextInput,
  FlatList,
  Platform, 
  Text, 
  TouchableOpacity,
  View, 
  StyleSheet,
  SafeAreaView, 
} from 'react-native';
import { TaskList } from '../../components/TaskList';
import { TasksContext, useTaskList } from '../../context/TasksContext';

export const Home = () => {
  const [ newTask, setNewTask ] = React.useState('');  
  const {addTask} = useTaskList();

   

  const handleAddNewTask = () => {
    const data ={
      id: (new Date().getTime()),
      title: newTask ? newTask : 'Task empty',
    };

    addTask(data);
  };

  return (      
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Fala dev!</Text>
        <TextInput
          onChangeText={setNewTask}
          placeholderTextColor='#555'
          placeholder='Nova tarefa ...' 
          style={styles.input}
        />
        <TouchableOpacity
          testID='addButton'
          onPress={handleAddNewTask} 
          activeOpacity={0.7} 
          style={styles.button}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>

        <Text style={styles.titleTasks}>Minhas Tarefas</Text>

        <TaskList/>

        
        {/* <FlatList
          data={tasks}
          keyExtractor={item => item.id}
          renderItem={({item}) =>(
            <TouchableOpacity style={styles.buttonTask}>
              <Text style={styles.titleTask}>{item.title}</Text>
            </TouchableOpacity>
          )}
        /> */}
        {/* {tasks.map(task => (
          <TouchableOpacity key={task.id} style={styles.buttonTask}>
            <Text style={styles.titleTask}>{task.title}</Text>
          </TouchableOpacity>
        ))} */}
        
        
      </View>
    </SafeAreaView>
    )
};

const styles = StyleSheet.create({
  safeArea: {
    flex:1,
    backgroundColor:'#121214',    
  },
  container: {
    flex:1,
    backgroundColor:'#121214',
    paddingHorizontal:30,    
    paddingVertical:50,    
  },
  title:{
    color: '#f1f1f1',
    fontSize:24,
    fontWeight:'bold',
  },
  titleTasks:{
    color: '#f1f1f1',
    fontSize:24,
    fontWeight:'bold',
    marginVertical:50,
  },
  input:{
    backgroundColor:'#29292e',
    color: '#f1f1f1',
    fontSize:18,
    padding:Platform.OS === 'ios' ? 15 : 12,
    marginTop:30,
    borderRadius:7,
  },
  button:{
    backgroundColor:'#eba417',
    padding:15,
    borderRadius:7,
    alignItems:'center',
    marginTop:20,    
  },
  buttonText:{
    color: '#121214',
    fontSize:18,
    fontWeight:'bold',     
  },
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
