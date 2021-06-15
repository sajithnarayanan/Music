import React,{ useState } from 'react';
import { View, Text,Image, TouchableOpacity } from 'react-native';
import {CheckBox} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'


const Scan = ({navigation}) => {
    const [checkboxValue, setcheckboxValue] = useState(false);
    const [newValue, setNewValue] = useState(true);
    const [value, setValue] = useState(false);

    return (
        <View style={{backgroundColor:"skyblue",height:"100%"}}>
                        <Icon name="arrow-left" size={20} style={{left:"2%",top:20}} onPress={()=>navigation.goBack()}/>
        <Text style={{left:"15%",top:5,fontSize:16,fontWeight:"bold"}}>Scan Libraries</Text>
        <Icon name="folder-open" size={20} style={{left:"92%",top:-19}} onPress={()=>navigation.navigate('Library')}/>
            <Image source={require('../assets/ads/progress.png')} style={{left:"30%",height:"20%",width:"40%",top:100}} />
            <Text style={{left:"27%",top:"15%",fontSize:15}}>Tracks:10 Albums:33 Artists:20</Text>
            <CheckBox 
    containerStyle={{marginLeft:0,width:"100%",left:14,top:186}}
    checked={checkboxValue}
    onPress={()=>setcheckboxValue(!checkboxValue)}
    />
    <Text style={{left:"20%",top:"20%"}}>Exclude songs less than 60 seconds.</Text>
    <CheckBox 
    containerStyle={{marginLeft:0,width:"100%",left:14,top:186}}
    checked={newValue}
    onPress={()=>setNewValue(!newValue)}
    />
    <Text style={{left:"20%",top:"20%"}}>Exclude songs less than 50Kb</Text>
    <CheckBox 
    containerStyle={{marginLeft:0,width:"100%",left:14,top:186}}
    checked={value}
    onPress={()=>setValue(!value)}
    />
    <Text style={{left:"20%",top:"20%"}}>Exclude Ringtone</Text>
    <TouchableOpacity style={{borderWidth:2,borderColor:"#fff",width:"25%",top:"23%",left:"38%",paddingLeft:12}}onPress={()=>navigation.navigate('Library')}><Text>Start scan</Text></TouchableOpacity>
        </View>
    );
}

export default Scan;