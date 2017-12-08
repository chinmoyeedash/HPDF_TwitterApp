import React, { Component } from 'react';
import {StyleSheet, Image} from 'react-native';
import { Container, View, Header,Item,Icon,Input,Button, Text} from 'native-base';
import { FooterBottom } from '../../components';


class SearchScreen extends Component  {
  static navigationOptions = {
  
     tabBarIcon: ({ tintColor }) => (
          <Icon name="search" style={{color: tintColor}} />
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
    width: 24,
    height: 24,
  }
});

export default SearchScreen;