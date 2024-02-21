import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export const Home = () => /*:React.JSX.Element*/ {
  return (      
      <View style={styles.container}>
        <Text style={styles.title}>Ola dev!</Text>
      </View>
    )
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#121214',
    justifyContent:'center', 
    alignItems:'center',
  },
  title:{
    color: '#f1f1f1',
  }
});