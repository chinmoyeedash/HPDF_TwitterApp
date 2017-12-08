import React, { Component } from "react";
import { View } from "react-native";
import { Container, Content, Picker, Button, Text } from "native-base";


import HomeScreen from './src/screen/HomeScreen/index.js';


export default class App extends Component {
  
  render() {
    
    return <HomeScreen />;
  }
}