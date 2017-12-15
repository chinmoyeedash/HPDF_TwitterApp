import React from 'react';
import TabHeader from '../../components/TabHeader';

import {StyleSheet,Platform, Text, TouchableNativeFeedback, View,ScrollView, Animated } from 'react-native';
import {  Content,Header,Left,Body,Icon, Image,Right,Button,Title} from 'native-base';


// custom tabbar component created to show separate headers for the tabs based on tab selected
class TabBarComponent extends React.Component {
  

//renders the header based on tab selected
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
  
  
    //check for state and update header
    let header=null;
    let currentIndex=navigation.state.index;
    let currentKey=navigation.state.routes[currentIndex].key
    console.log();
    // if (currentIndex ==1)  {
    //       console.log('searchActive true');
    //     header=<SearchHeader navigation={navigation}/>
    // } else {
    //     header=<TabHeader navigation={navigation} tabKey = {currentKey} />;
    // }
    header=<TabHeader navigation={navigation} tabKey = {currentKey} />;

    return (
      
    <View>
      
      
     {/* show the header as initialized by tab pressing */}
     {header}
    
  
    <View style={styles.tabbar}>
        {/* Maps through all the routes and shows the tabs for each route as mentioned in the tab navigator */}
        {routes && routes.map((route, index) => {
          const focused = index === navigation.state.index;
          const tintColor = focused ? activeTintColor : inactiveTintColor;
         const tabKey = route.key;
         
          return (
            
            // show buttons for tabs 
            <TouchableNativeFeedback
              key={route.key}
              style={styles.tab}
              
              // on pressing of tabs route to that screen and also update state when search tab pressed
              onPress={()=>{jumpToIndex(index); }}
              background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
              {/* show the tabbaricon */}
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