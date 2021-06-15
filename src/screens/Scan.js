import React from 'react';
import { View, Text,Button } from 'react-native';

const Library = ({navigation}) => {
    return (
        <View>
            <Button  title="take me to the previous page" onPress={() => navigation.goBack()}/>
        </View>
    );
}

export default Library;
