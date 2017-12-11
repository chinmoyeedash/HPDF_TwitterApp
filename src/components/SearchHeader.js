import React from 'react';
import { Text,TextInput, View } from 'react-native';
import { Container,Thumbnail,Title,Content, Left,Right,Body, Header,Item,Icon,Input,Button} from 'native-base';
//import SearchScreen from '../screen/SearchScreen'
//import default from '../../../native-base-theme/variables/material';

//make functional component to show header of SearchScreen
const SearchHeader = (props) => {

//destructuring to use styles so that to call textStyle do not need to do styles.textStyle
   const {navigation} =props;
  //props example style used
  return (
  //nativebase header with searchbar
  <Header searchBar style={{backgroundColor:'white'}}>
  <Left>
    {/* button to open drawer navigator */}
    <Button
        transparent
        onPress={() => navigation.navigate("DrawerOpen")}>
         <Thumbnail source={require('../assets/images/baby.jpg')} small />
    </Button>
    </Left>
    <Body >
     
     <Item rounded style={{width: 200, backgroundColor: 'lightgrey'}}>
    <Input placeholder="Search Twitter" 
           onChangeText={(text) => navigation.navigate("SearchScreen")}

        />
      </Item>
    
    </Body>
   
  <Right>
  <Icon name="add" style={{color: 'blue'}} />
  </Right>
</Header>
  );
};



//make component available to other parts of app
export default SearchHeader;
