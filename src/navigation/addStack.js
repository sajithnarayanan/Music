import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import defaultStack from './defaultStack';
const Stack = createStackNavigator();



const AddStack =({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="defalut" component={defaultStack}/>

    </Stack.Navigator>
    
  );
}


export default AddStack;