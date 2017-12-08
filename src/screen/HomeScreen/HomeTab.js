import React from 'react';

 import {  Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import  { TwitterCard }  from '../../components';

const HomeTab = () => {

    return (
   <Content>
      <TwitterCard />
      <TwitterCard />
      <TwitterCard/>
      </Content>
);
  };

export default HomeTab;
