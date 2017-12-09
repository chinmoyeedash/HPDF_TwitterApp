import React from "react";
import { AppRegistry, Alert } from "react-native";

import {
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Button,
  H1
} from "native-base";

// just a dummy page showing card where profile info should be shown
export default class Profile extends React.Component {
  static navigationOptions = {
    title: 'Profile',
    headerStyle:{ backgroundColor: '#FFF'},
    headerTitleStyle:{ color: 'blue'},
    }
 
  render() {
    return (
      <Container>
         <Header style={{backgroundColor:'white'}}>
          <Left>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" style={{color: 'blue'}} />
            </Button>
          </Left>
          <Body>
            <Title style={{color:'blue'}}>Profile</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Icon active name="paper-plane" />
              <Text>Show User profiles here</Text>
              <Right>
                <Icon name="close" />
              </Right>
            </CardItem>
          </Card>
          {/* <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("EditScreenOne")}
          >
            <Text>Goto EditScreen One</Text>
          </Button> */}
        </Content>
      </Container>
    );
  }
}
Profile.navigationOptions = ({ navigation }) => ({
  header: (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Profile</Title>
      </Body>
      <Right />
    </Header>
  )
});
