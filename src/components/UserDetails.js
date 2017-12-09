import React from 'react';
import PropTypes from 'prop-types'
import { View, Text, Badge, Icon } from 'native-base';

//Receiving props from twittercard to render tweet's user info.. the first line
const UserDetails = (props) => {
  UserDetails.propTypes = {
    titleText: PropTypes.string,
    bodyText: PropTypes.string,
    twitterName: PropTypes.string,
    lastSeenTime: PropTypes.string
};
  const { titleText, bodyText, twitterName, lastSeenTime} = props;
  
  // this.setState = {
  //     titleText: 'titleText' ,
  //     bodyText: 'bodyText'
  // };

return (
//   <View style={{flexDirection: 'row'}}>
//  <Text> Start here, </Text> <Text> finish here </Text>
// </View>
<View>
  {/* Show the info in one line */}
   <View style={{flexDirection: 'row'}}>
      <Text style={styles.titleText} onPress={this.onPressTitle}>
          {titleText}
      </Text>
    <Badge small primary>
     <Icon name="star" style={{ fontSize: 15, color: '#fff', lineHeight: 20 }}/>
    </Badge>
        <Text note>  {twitterName} </Text>
        <Text note>{lastSeenTime}</Text>
      </View>
      <Text style={styles.baseText}>
        {bodyText}
      </Text>
    </View>
    );

};

const styles = {
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
};

export default UserDetails ;
