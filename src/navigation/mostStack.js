import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import libraryStack from './libraryStack'
const Stack = createStackNavigator();



const MostStack =({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="library" component={libraryStack}/>

    </Stack.Navigator>
    
  );
}


export default MostStack;