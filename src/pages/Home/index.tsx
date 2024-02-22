import React from 'react';
import { 
  TextInput, 
  Platform, 
  Text, 
  TouchableOpacity,
  View, 
  StyleSheet,
  SafeAreaView, 
} from 'react-native';


export const Home = () => /*:React.JSX.Element*/ {
  return (      
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Fala dev!</Text>
        <TextInput
          placeholderTextColor='#555'
          placeholder='Nova tarefa ... ' 
          style={styles.input}
        />
        <TouchableOpacity activeOpacity={0.7} style={styles.button}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>

        <Text style={styles.titleTasks}>Minhas Tarefas</Text>
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
});
