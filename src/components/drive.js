import React from 'react';
import { View, Text,Image, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Drive = ({navigation}) => {
    return (
        <View style={{flex:1,backgroundColor:"grey",justifyContent:"flex-start",alignSelf:"auto"}}>
                <AntDesign name="arrowleft" size={25} style={{left:10,top:15}} onPress={()=>navigation.goBack()} />
          <Image source={require('../assets/ads/trafic.png')} style={{height:"10%",width:"30%",left:"32%",top:"30%"}} />
          <Text style={{color:"#fff",left:"20%",top:"35%",fontSize:15}}>Safety first! Please follow the traffic{"\n"}regulations while driving., and cherish your{"\n"}and other's life!</Text>
        <View style={{justifyContent:"space-between",alignSelf:"center",flexDirection: 'row',marginTop:"75%"}}>
        <TouchableOpacity style={{borderWidth:2,borderColor:"#fff",width:"20%",paddingLeft:10,}}onPress={()=>navigation.navigate('Home')}><Text>Cancel</Text></TouchableOpacity>
        <TouchableOpacity style={{borderWidth:2,borderColor:"#fff",width:"20%",paddingLeft:25,backgroundColor:"skyblue",}}onPress={()=>navigation.navigate('Library')}><Text>OK</Text></TouchableOpacity>
         </View>
        </View>
    );
}

export default Drive;