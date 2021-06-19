import React from 'react';
import { View, Text,Button,StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
const Fav = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Icon name="arrow-left" size={20} style={styles.icon1} onPress={()=>navigation.goBack()}/>
            <Text style={styles.text}>FAVORITE</Text>
             <Icon1 name="search" size={30} color="black" style={styles.icon} onPress={() => navigation.navigate('HomeScreen')} />
                <Icon1 name="card-giftcard" size={30} color="black" style={styles.icon2} onPress={() => navigation.navigate('Ads')} />
            <Icon2 name="dots-three-vertical" size={25} style={styles.icon3} />
            <Icon name="music" size={40} style={styles.music} />
            <Text style={styles.text2}>No music found</Text>
         <TouchableOpacity style={styles.toucable}onPress={()=>navigation.navigate('Recent')}><Text>Add songs</Text></TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
container:{
    backgroundColor:"skyblue",
    height:"100%"
},
icon1:{
    left:"5%",
    top:"1.5%"
},
text:{
    left:"15%",
    fontWeight:"bold",
    bottom:"0.5%"
},
icon:{
    bottom:"3.5%",
    left: "80%"
},
icon2:{
    bottom:"7.5%",
     left: "68%"
},
icon3:{
    left:"92%",
    bottom:"11%"
},
music:{
    left:"42%",
    top:"30%"
},
text2:{
    left:"37%",
    top:"32%"
},
toucable:{
    borderRadius:30,
    width:"20%",
    left:"38%",
    top:"35%",
    borderWidth:1,
    borderColor:"#fff",
    paddingLeft:8
}


})
export default Fav;