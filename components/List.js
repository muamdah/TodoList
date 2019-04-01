import React from 'react';
import {View, Text, ListView, StyleSheet} from 'react-native';
import {Data} from './Data_Test'
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements'


export default class ListTask extends React.Component{
    constructor(props) {
        super(props);
        this.state = { dataSource: Data };
    }

    render() {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return (
          <ListView
            dataSource={ds.cloneWithRows(this.state.dataSource)}
            renderRow={(rowData) => <Task data_complete={rowData}/>}
          />
        );
      }
    }
    
    class Task extends React.Component{
        constructor(props){
            super(props)
        }
        static propTypes = {
            data_complete : PropTypes.object
        }
        render(){
            return(
            <View style={styles.TaskView}>
                <View>
                    <Text style={styles.TaskText}>{this.props.data_complete.text}</Text>
                </View>
                <View style={styles.Status}>
                    <Text style={this.props.data_complete.status === 'Terminer' ?  styles.TaskText3 : styles.TaskText2}>{this.props.data_complete.status}</Text>
                    <Icon
                    name="navigate-next"
                    color='#828282'/>
                </View>
            </View>
            )
        }
    }

    const styles = StyleSheet.create({
        
        TaskView : {
            height: 60,
            width: '100%',
            borderColor: '#828282',
            borderWidth: 0.3,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        TaskText : {
            color: '#828282',
            marginLeft: 20,
            marginRight: 10,
            fontSize : 20
        },
        TaskText2 : {
            color: '#f99f02',
            marginLeft: 20,
            marginRight: 10,
            fontSize : 20
        },
        TaskText3 : {
            color: '#01c115',
            marginLeft: 20,
            marginRight: 10,
            fontSize : 20
        },
        Status:{
            flex:1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end'
        }
    })