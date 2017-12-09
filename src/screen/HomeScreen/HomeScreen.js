import React from "react";
import {StyleSheet, Image } from 'react-native';
import getTheme from '../../../native-base-theme/variables/material';
import {  FooterBottom, HeaderTop } from '../../components'
import {Container, Icon, Fab } from "native-base";
import HomeTab from './HomeTab';


import HomeScreenTab from './index'

//The screen that calles the HomeTab containing list of twittercards
class HomeScreen extends React.Component {
  //setting the tabbar icon for the screen
  static navigationOptions = {
     tabBarIcon: ({ tintColor }) => (
         <Icon name="home" style={{color: tintColor}} />
    ), }
      
 
  constructor() {
    super();
    //setting state for FAB to check if pressed
    this.state = {
      active: true,
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
 
  icon: {
    width: 30,
    height: 30,
  }
});

export default HomeScreen;
