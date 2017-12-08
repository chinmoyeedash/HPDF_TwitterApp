import React from 'react';
import {  Header, Left, Body, Button, Icon, Title } from 'native-base';





const HeaderTop = () => {
 
  const { navigate } = this.props.navigation;
    return (
 
        <Header hasTabs='true'>
          <Left>
          
            <Button transparent  onPress={() => navigate("DrawerToggle")}>
            <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>

        </Header>

    );

    

}

export { HeaderTop };
