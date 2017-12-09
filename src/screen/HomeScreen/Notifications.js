import React, { Component } from 'react';
import {StyleSheet, Image} from 'react-native';
import { Container, View, Header,Item,Icon,Input,Button, Text} from 'native-base';
import { FooterBottom } from '../../components';

// just a dummy page
class Notifications extends Component  {
  static navigationOptions = {
      tabBarIcon: ({ tintColor }) => (
      <Icon ios='ios-notifications' android='md-notifications' style={{color: tintColor}} />
    ),
     }
  
render() {
    return (
      <Container>
        
          <View style={{flex:1}}>
             
       </View>
        <FooterBottom />
        </Container>
      
    );
}
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  }
});

export default Notifications;