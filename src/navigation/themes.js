import React from 'react';
import { View, Text, StyleSheet,Image, } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
const Themes = ({navigation}) => {
    return (
        <View style={styles.container}>
         <View style={styles.header}>
           <AntDesign name="arrowleft" size={20} style={{top:"20%"}} onPress={()=>navigation.goBack()}/>
        <Text style={{left:"10%",bottom:"20%",fontWeight:"bold",color:"white"}}>Themes</Text>
         </View>
         <View style={{flexDirection:"row",height:599,bottom:"5%",left:"7%"}}>
        <Image
        style={{height:"30%",width:"30%",right:"6%"}}
        source={require('../assets/themes/one.jpg')} />
        <AntDesign name="download" size={20} color="red" style={{right:"19%",top:"25%"}}/>
         <Image
        style={{height:"30%",width:"30%",right:"8%"}}
        source={require('../assets/themes/two.jpg')} />
                <AntDesign name="download" size={20} color="red" style={{right:"19%",top:"25%"}}/>
         <Image
        style={{height:"30%",width:"30%",marginBottom:"10%",right:"9%",top:"0%"}}
        source={require('../assets/themes/three.jpg')} />
                <AntDesign name="download" size={20} color="red" style={{right:"19%",top:"25%"}}/>
         </View>
         <View style={{flexDirection:"row",top:"5%"}}>
        <Image 
        style={{bottom:"30%",left:"7%",width:"30%",bottom:"120%"}}
        source={require('../assets/themes/four.jpg')} />
                        <AntDesign name="download" size={20} color="red" style={{right:"25%",bottom:"95%"}}/>
          <Image
        style={{height:"100%",width:"30%",left:"0%",bottom:"120%"}}
        source={require('../assets/themes/five.jpg')} />
                        <AntDesign name="download" size={20} color="red" style={{right:"30%",bottom:"95%"}}/>
         <Image
        style={{height:"100%",width:"30%",marginBottom:"10%",right:"1%",bottom:"120%"}}
        source={require('../assets/themes/six.jpg')} />
                <AntDesign name="download" size={20} color="red" style={{right:"30%",bottom:"95%"}}/>
         </View>
        <Image 
        style={{left:"4%",bottom:"55%",height:"30%",width:"30%"}}
        source={require('../assets/themes/main.jpg')} />
                        <AntDesign name="download" size={20} color="red" style={{right:"55%",top:"55%"}}/>
                        <Image 
        style={{left:"37%",bottom:"87.8%",height:"30%",width:"30%"}}
        source={require('../assets/themes/main2.jpg')} />
          <Image 
        style={{left:"71%",bottom:"118%",height:"30%",width:"30%"}}
        source={require('../assets/themes/main3.jpg')} />
                        <AntDesign name="download" size={20} color="red" style={{right:"30%",bottom:"118%"}}/>

         </View>
    );
}
const styles=StyleSheet.create({
  container:{
    height:"100%",
    flex:1,
    paddingTop:"10%",
    backgroundColor:"#0890B6",
    opacity:0.7,
  },
   header:{
     height:"5%",
     opacity:0.7,
     bottom:"4%",
     backgroundColor:"grey"
   }
})
    export default Themes;