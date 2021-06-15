import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

const Hidden = ({navigation}) => {
    return (
        <View>
   <Icon name="arrow-left" size={20} style={{left:"2%",top:20}} onPress={()=>navigation.goBack()}/>
   <Text style={{left:"15%",top:7,fontWeight:"bold",fontSize:15}}>Hidden folder</Text>
        </View>
    );
}

export default Hidden;