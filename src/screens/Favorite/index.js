import React from 'react';
import { View, Text,Button,StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
const Fav = ({navigation}) => {
    return (
        <View style={{backgroundColor:"skyblue",height:"100%"}}>
            <Icon name="arrow-left" size={20} style={{left:"5%",top:20}} onPress={()=>navigation.goBack()}/>
            <Text style={{left:65,fontWeight:"bold",top:2}}>FAVORITE</Text>
             <Icon1 name="search" size={30} color="black" style={{ top:-18, left: "80%" }} onPress={() => navigation.navigate('HomeScreen')} />
                <Icon1 name="card-giftcard" size={30} color="black" style={{ top:-48, left: "68%" }} onPress={() => navigation.navigate('Ads')} />
            <Icon2 name="dots-three-vertical" size={25} style={{left:"92%",top:-78}} />
            <Icon name="music" size={40} style={{left:"42%",top:"30%"}} />
            <Text style={{left:"35%",top:"32%"}}>No music found</Text>
         <TouchableOpacity style={{borderRadius:30,width:"20%",left:"38%",top:"35%",borderWidth:1,borderColor:"#fff",paddingLeft:8}}onPress={()=>navigation.navigate('Recent')}><Text>Add songs</Text></TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
button:{
    
}


})
export default Fav;