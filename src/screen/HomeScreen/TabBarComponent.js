import React from 'react';
import HomeHeader from './HomeHeader';
import SearchHeader from './SearchHeader';
import {StyleSheet,Platform, Text, TouchableNativeFeedback, View,ScrollView, Animated } from 'react-native';
import {  Content,Header,Left,Body,Icon, Image,Right,Button,Title} from 'native-base';


  
class TabBarComponent extends React.Component {
  constructor() {
    super();
    this.state = {
         searchActive:false,

    };
    this.onButtonPress = this.onButtonPress.bind(this);
 
    
};

onButtonPress(tabKey) {
   
    
    console.log("key in button="+tabKey);
    if (tabKey=='Search') {
      this.setState({searchActive :true});
    } else {
      this.setState({searchActive :false});
    }
  }
render () {
  const {
    navigation,
    renderIcon,
    activeTintColor,
                inactiveTintColor,
                jumpToIndex
        } = this.props;
    console.log(this.props);
    const {routes} = navigation.state;
    console.log(routes);
  
  
    let header=null;
    if (!!this.state.searchActive) {
      console.log('searchActive true');
        header=<SearchHeader navigation={navigation}/>
    } else {
        header=<HomeHeader navigation={navigation}/>;
    }


    return (
      
    <View>
      
     
    {header}
   
    
  
    <View style={styles.tabbar}>

        {routes && routes.map((route, index) => {
          const focused = index === navigation.state.index;
          const tintColor = focused ? activeTintColor : inactiveTintColor;
          console.log('route='+route+'index='+index);
         const tabKey = route.key;
          return (
            
            <TouchableNativeFeedback
              key={route.key}
              style={styles.tab}
              onPress={()=>{jumpToIndex(index);  this.onButtonPress(tabKey)}}
              background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
            
              <View style={styles.tab}>
                {renderIcon({
                  route,
                  index,
                  focused,
                  tintColor
                })}
              </View>
            </TouchableNativeFeedback>
          );
        })}

      </View>
    
       </View>
    )
}



};
const styles = StyleSheet.create({
    tabbar: {
      height: 45,
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: 'blue',
      backgroundColor: 'white',
    },
    tab: {
      alignSelf: 'stretch',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    // icon:
    // {
    //   tintColor:'blue',
    //     width: 26,
    //     height: 26
    // }
  });

  export default TabBarComponent;