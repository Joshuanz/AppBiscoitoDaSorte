import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
  } from 'react-native';

class App extends Component{
  render(){
    return(
      <View style={styles.container}> 
      <Image
        source={require('./src/cronometro.png')}
      />
      </View>    
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    
  },
  
});

export default App;