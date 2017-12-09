import React from 'react';

 import {  Content } from 'native-base';
import  { TwitterCard }  from '../../components';

//contains list of twitter cards..
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
