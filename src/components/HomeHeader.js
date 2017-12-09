import React from 'react';
import { TouchableWithoutFeedback,Image, View } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Fab, Tab, 
  Tabs, TabHeading,Text } from "native-base";

//make functional component which takes navigation as props for drawer navigation
const HomeHeader = (props) => {

  //destructuring props so that to call navigate do not need to do this.props.navigation
   const {navigation} =props;

  //returns the header for homescreen 
    return (
    <Header hasTabs style={{backgroundColor:'white'}}>
    <Left>
    <Button
        transparent
        onPress={() => navigation.navigate("DrawerOpen")}>
        <Icon name="menu" style={{color: 'blue'}} />
    </Button>
    </Left>
    <Body>
    <Title style={{color: 'black',alignContent: 'flex-start'}}>Home</Title>
    </Body>
    <Right />
    </Header>
  );
};

//make component available to other parts of app
export default HomeHeader;
