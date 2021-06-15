import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import defaultStack from './defaultStack';
import SacnLi from '../screens/Scan'
import Recent from '../screens/Recent Play';

const Stack = createStackNavigator();



const favoriteStack =({navigation}) => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="default" component={defaultStack}/> */}
      <Stack.Screen name="Recent" component={Recent}/>

    </Stack.Navigator>
    
  );
}


export default favoriteStack;