import React from 'react';
import { TouchableWithoutFeedback,Image, View } from 'react-native';
import getTheme from '../../../native-base-theme/variables/material';
import PropTypes from 'prop-types';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Fab, Tab, 
  Tabs, TabHeading,Text, Card, } from "native-base";

//make functional component
const HomeHeader = (props) => {
//destructuring to use styles so that to call textStyle do not need to do styles.textStyle
  const { textStyle, viewStyle } = styles;
  const {navigation} =props;

  //props example style used
  return (
    // <View style={styles.viewStyle}>
    // <TouchableWithoutFeedback onPress={() => navigation.navigate('DrawerOpen')} >
    //       <View >
    //         <Image source={{ uri:'http://lorempixel.com/400/200'  }} resizeMode="cover" />
    //        </View>
    //     </TouchableWithoutFeedback>
    //     </View>
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

//new object styles created for diff style components camelcse instead of css selectors
const styles = {
  viewStyle: { backgroundColor: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
  height: 60,
  paddingTop: 10,
  shadowColor: 'red', //000 for black
  shadowOffset: { width: 10, height: 20 },
  shadowOpacity: 1,
  elevation: 10,
  position: 'relative'
 },
  textStyle: { fontSize: 20 }
};

//make component available to other parts of app

export default HomeHeader;
