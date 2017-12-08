import React from "react";
import {StyleSheet, Image } from 'react-native';
import getTheme from '../../../native-base-theme/variables/material';
import {  FooterBottom, HeaderTop } from '../../components'
import { View,Container, Header, Title, Left, Icon, Right, Button, Body, Content, Fab, Tab, Tabs, TabHeading,Text, Card, } from "native-base";
import HomeTab from './HomeTab';
import SearchScreen from './SearchScreen';

import HomeScreenTab from './index'

//The screen that calles the HomeTab
class HomeScreen extends React.Component {
  static navigationOptions = {
     tabBarIcon: ({ tintColor }) => (
         <Icon name="home" style={{color: tintColor}} />
    ), }
      
 
  constructor() {
    super();
    this.state = {
      active: true,
    //  searchActive:true,

    };
  
  }


  render() {
    const { navigation } = this.props;
    
    return (
      <Container>
        
        <HomeTab/>
        <Fab
            active={this.state.active}
            style={{ backgroundColor: 'blue', marginBottom: 30 }}
            position="bottomRight"
            onPress={() => this.setState({ active:!this.state.active })}>
            <Icon name="leaf" />
            </Fab>
           
      <FooterBottom />
      

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  tabbar: {
    height: 49,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'red',
    backgroundColor: '#fff'
  },
  icon: {
    width: 30,
    height: 30,
  }
});

export default HomeScreen;
