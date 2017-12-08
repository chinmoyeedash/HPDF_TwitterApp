import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
//import MainScreenNavigator from "../ChatScreen/index.js";
import Profile from "../ProfileScreen/Profile";
import Lists from '../ListScreen/Lists';
import SearchScreen from './SearchScreen';
import Notifications from './Notifications';
import Messages from './Messages';
import Moments from '../Moments';
import { TabNavigator, StackNavigator, DrawerNavigator } from "react-navigation";
import SideBar from "../SideBar/SideBar.js";

import { ScrollView, Text } from 'react-native';
import TabBarComponent from './TabBarComponent';

const HomeScreenTab = TabNavigator({
  Home: {screen: HomeScreen},
  Search: { screen: SearchScreen},
  Notif: {screen: Notifications}, 
  Message: {screen: Messages},
	},{
		tabBarComponent: props => (
		<TabBarComponent{...props} />), 
		tabBarPosition: 'top',
		animationEnabled: true,
		tabBarOptions: {
		activeTintColor: 'blue',
		inactiveTintColor: 'grey',
		activeBackgroundColor: "#fff",
		inactiveBackgroundColor: "#fff",
		showIcon: true,
		showLabel: false,
		
    },
 
  
} );



const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreenTab  },
    Profile: { screen: Profile},
    Lists: { screen: Lists },
    Moments: { screen: Moments },
    Highlights: { screen: Lists }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

const MyAppNavigator = StackNavigator({
  Home: { screen: HomeScreenTab },
  
 });
export default HomeScreenRouter;
