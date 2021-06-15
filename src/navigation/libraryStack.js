import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeStack from './homeStack';

const Stack = createStackNavigator();



const LibraryStack =({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={HomeStack}/>

    </Stack.Navigator>
    
  );
}


export default LibraryStack;