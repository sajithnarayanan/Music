import React from 'react';
import { View, Text,Button,StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import IconM from 'react-native-vector-icons/MaterialIcons';
const Fav = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{ height:"8%",
    flexDirection:"row",
    flexWrap:"wrap",
    alignContent:"center",
    justifyContent:"space-around",
    alignItems:"center",
    backgroundColor: '#376f8aef'}}>
                <Icon  name="arrow-left" size={25} color="#fff"  style={{width:"10%",}}  onPress={() => navigation.goBack()} />
                <Text style={{color:"#fff", fontFamily: "italic", fontWeight: "bold", fontSize: 20,marginTop:"1%" }}>Favorite</Text>
<View style={{height:"100%",width:"50%",flexDirection:"row", flexWrap:"wrap", alignContent:"center",justifyContent:"flex-end",}}>
<View style={{height:"100%",width:"43%",flexDirection:"row", flexWrap:"wrap",alignItems:"center", alignContent:"center",justifyContent:"flex-end", }}>
<AntDesign name="search1" size={30} color="#fff" onPress={()=>navigation.goBack()}/>
                <IconM name="card-giftcard" size={30} color="#fff" style={{left:"10%"}} onPress={() => navigation.navigate('Ads')} />
                </View>
                </View>
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
    bottom:"88%",
    left: 190
},
icon2:{
    bottom:"167%",
     left:210
},
icon3:{
    left:230,
   paddingVertical:"1.2%",
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