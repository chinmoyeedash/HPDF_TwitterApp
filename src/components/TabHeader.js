import React from 'react';
import { TouchableWithoutFeedback,Image, View } from 'react-native';
import PropTypes from 'prop-types';
import { Container,Thumbnail, Header, Title,Item,Input, Left, Icon, Right, Button, Body, Content, Fab, Tab, 
  Tabs, TabHeading,Text } from "native-base";

//make functional component which takes navigation as props for drawer navigation
const HomeHeader = (props) => {

  //destructuring props so that to call navigate do not need to do this.props.navigation
   const {navigation,tabKey} =props;
  console.log(navigation);
  let body=null;
  if(tabKey=='Search') 
  { body=<Body>
    <Item rounded style={{width: 200, backgroundColor: 'lightgrey'}}>
    <Input placeholder="Search Twitter"  onChangeText={(text) => navigation.navigate("SearchScreen")}/>
   </Item> 
   </Body>;
  } else {
    body=<Body>
    <Title style={{color: 'black',alignContent: 'flex-start'}}>{tabKey}</Title>
    </Body>
  }
  //returns the header for homescreen 
    return (
    <Header hasTabs style={{backgroundColor:'white'}}>    
    <Left>   
       <Button
        transparent
        onPress={() => navigation.navigate("DrawerOpen")}>         
        <Thumbnail source={require('../assets/images/baby.jpg')} small/>
    </Button>
    </Left>
   {body}
    <Right/>
    </Header>
  );
};

//make component available to other parts of app
export default HomeHeader;
