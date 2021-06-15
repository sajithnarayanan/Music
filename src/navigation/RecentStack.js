import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddStack from './addStack';

const Stack = createStackNavigator();



const RecentStack =({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cart" component={AddStack}/>

    </Stack.Navigator>
    
  );
}


export default RecentStack;