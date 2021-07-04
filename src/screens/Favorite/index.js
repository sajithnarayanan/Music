import React from 'react';
import { View, Text,Button,StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
const Fav = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.main}>
            <Icon name="arrow-left" size={20} style={styles.icon1} onPress={()=>navigation.goBack()}/>
            <Text style={styles.text}>FAVORITE</Text>
             <Icon1 name="search" size={30} color="black" style={styles.icon} onPress={() => navigation.navigate('HomeScreen')} />
                <Icon1 name="card-giftcard" size={30} color="black" style={styles.icon2} onPress={() => navigation.navigate('Ads')} />
            <Icon2 name="dots-three-vertical" size={22} style={styles.icon3} />
            </View>
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
main:{
backgroundColor:"#0890B6",
height:"5%",
alignContent:"space-between",
flexWrap:"wrap",
flexDirection:"row",
justifyContent:"flex-start"

},
icon1:{
    left:"3%",
   paddingVertical:"2%",
    
},
text:{
    left:"27%",
    fontWeight:"bold",
    bottom:"15%",
    paddingVertical:"3%"
},
icon:{
    bottom:"88.5%",
    left: 150
},
icon2:{
    bottom:"167.5%",
     left:170
},
icon3:{
    left:190,
   paddingVertical:"1.5%",
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
    borderRadius:12,
    width:"30%",
    left:"35%",
    top:"35%",
    borderWidth:1,
    borderColor:"#fff",
    paddingLeft:24
}


})
export default Fav;