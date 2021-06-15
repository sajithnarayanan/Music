import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddStack from './addStack';

const Stack = createStackNavigator();



const defaultStack =({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="add" component={AddStack}/>

    </Stack.Navigator>
    
  );
}


export default defaultStack;