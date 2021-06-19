import React,{ useState } from 'react';
import { View, Text,Image, TouchableOpacity,ScrollView } from 'react-native';
import {CheckBox} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'


const Scan = ({navigation}) => {
    const [checkboxValue, setcheckboxValue] = useState(false);
    const [newValue, setNewValue] = useState(true);
    const [value, setValue] = useState(false);

    return (
        <View style={{backgroundColor:"skyblue",height:"100%",flexDirection:"column"}}>
                <View style={{backgroundColor:"#0890B6",height:"6%"}}>
                        <Icon name="arrow-left" size={20} style={{left:"2%",top:10}} onPress={()=>navigation.goBack()}/>
        <Text style={{left:"15%",top:-7,fontSize:16,fontWeight:"bold"}}>Scan Libraries</Text>
        <Icon name="folder-open" size={20} style={{left:"92%",top:-27}} onPress={()=>navigation.navigate('Library')}/>
        </View>
            <Image source={require('../assets/ads/progress.png')} style={{left:"32%",height:"20%",width:"40%",top:100}} />
            <Text style={{left:"23%",top:"17%",fontSize:15}}>Tracks:10 Albums:33 Artists:20</Text>
            <CheckBox 
    containerStyle={{marginLeft:0,width:"100%",left:"10%",top:"27%"}}
    checked={checkboxValue}
    onPress={()=>setcheckboxValue(!checkboxValue)}
    />
    <Text style={{left:"24%",top:"22%"}}>Exclude songs less than <Text style={{ textDecorationLine: 'underline'}}>60</Text>  seconds.</Text>
    <CheckBox 
    containerStyle={{marginLeft:0,width:"100%",left:"10%",top:"21.9%"}}
    checked={newValue}
    onPress={()=>setNewValue(!newValue)}
    />
    <Text style={{left:"24%",top:"17%",}}>Exclude songs less than <Text style={{ textDecorationLine: 'underline'}}>50Kb</Text></Text>
    <CheckBox 
    containerStyle={{marginLeft:0,width:"100%",left:"10%",top:"16.8%"}}
    checked={value}
    onPress={()=>setValue(!value)}
    />
    <Text style={{left:"24%",top:"12%"}}>Exclude Ringtone</Text>
    <TouchableOpacity style={{borderWidth:2,borderColor:"#fff",width:"78%",top:"30%",marginLeft:"12%",paddingLeft:"10%",borderRadius:15,height:"7%",paddingTop:"3.5%"}}onPress={()=>navigation.navigate('Library')}><Text style={{left:"28%",top:"10%"}}>Start scan</Text></TouchableOpacity>
       </View>
    );
}

export default Scan;