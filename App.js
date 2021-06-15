import React from 'react';
import { View, Text } from 'react-native';
import Main from './src/navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
const App = () => {
    return (
        <NavigationContainer >
            <Main />
        </NavigationContainer>
    );
}

export default App;