import React, { Component } from 'react';
import {StyleSheet, Image} from 'react-native';
import { Container, View, Header,Item,Icon,Input,Button, Text} from 'native-base';
import { FooterBottom } from '../../components';

// Screen that shows when the search tab is clicked
class SearchScreen extends Component  {
  static navigationOptions = {
    //setting the tabbar icon for the screen
    tabBarIcon: ({ tintColor }) => (
          <Icon name="search" style={{color: tintColor}} />
    ),
     }
 
//just dummy content
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

export default SearchScreen;