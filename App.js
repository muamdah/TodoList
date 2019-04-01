import React from 'react';
import { StyleSheet, Text, View ,StatusBar} from 'react-native';
import ActionButton from 'react-native-action-button'
import ModalAdd from './components/Modal'
import ListTask from './components/List';

export default class App extends React.Component {
  setModalVisible(visible) {
    visible === true ? false:true;
  }
  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar barStyle="light-content"/>
        <View style={styles.SubHeader}/>
          <View style={styles.Header}>
            <Text style={styles.HeaderText}>TodoList</Text>
          </View>

          <ListTask/>
          <ActionButton
            buttonColor="rgba(231,76,60,1)"
            onPress={() => { <ModalAdd visible={this.setModalVisible()}/>}}
          />   
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  SubHeader: {
    backgroundColor: '#202021',
    height: 50
  },
  Header: {
    backgroundColor: '#282828',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200
  },
  HeaderText:{
    fontSize: 50,
    color: '#FFF',
    textShadowColor: 'rgba(0, 0, 0, 0.90)',
    textShadowOffset: {width: -3, height: 3},
    textShadowRadius: 15
  },
  list: {
  },
});
