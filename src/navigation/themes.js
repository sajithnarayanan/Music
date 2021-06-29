import React from 'react';
import { View, Text, StyleSheet,Image,ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
const Themes = ({navigation}) => {
    return (
      <ScrollView>
        <View style={styles.container}>
         <View style={styles.header}>
           <AntDesign name="arrowleft" size={20} style={{top:"20%"}} onPress={()=>navigation.goBack()}/>
        <Text style={{left:"10%",bottom:"28%",fontWeight:"bold",color:"white"}}>Themes</Text>
         </View>
         <View style={styles.one}>
        <Image
        style={{height:"30%",width:"30%",right:"6%"}}
        source={require('../assets/themes/one.jpg')} />
        <AntDesign name="download" size={20} color="red" style={{right:"17%",top:"25%"}}/>
         <Image
        style={{height:"30%",width:"30%",right:"8%"}}
        source={require('../assets/themes/two.jpg')} />
                <AntDesign name="download" size={20} color="red" style={{right:"19%",top:"25%"}}/>
         <Image
        style={{height:"30%",width:"30%",marginBottom:"10%",right:"9.5%",top:"0%"}}
        source={require('../assets/themes/three.jpg')} />
                <AntDesign name="download" size={20} color="red" style={{right:"20%",top:"25%"}}/>
         </View>
         <View style={styles.two}>
        <Image 
        style={{bottom:"30%",left:"7%",width:"30%",bottom:"115%"}}
        source={require('../assets/themes/four.jpg')} />
                        <AntDesign name="download" size={20} color="red" style={{right:"28%",bottom:"95%"}}/>
          <Image
        style={{height:"100%",width:"30%",left:"0%",bottom:"115%"}}
        source={require('../assets/themes/five.jpg')} />
                        <AntDesign name="download" size={20} color="red" style={{right:"35%",bottom:"95%"}}/>
         <Image
        style={{height:"100%",width:"30%",marginBottom:"10%",right:"5%",bottom:"115%"}}
        source={require('../assets/themes/six.jpg')} />
                <AntDesign name="download" size={20} color="red" style={{right:"35%",bottom:"95%"}}/>
         </View>
      <View style={styles.three}>
        <Image 
        style={{left:"4%",bottom:"30%",height:"40%",width:"30%"}}
        source={require('../assets/themes/main.jpg')} />
        <Image 
        style={{left:"36%",bottom:"70%",height:"40%",width:"30%"}}
        source={require('../assets/themes/main2.jpg')} />
        <AntDesign name="download" size={20} style={{bottom:"94%" ,left:"15%",color:"red"}}/>
          <Image 
        style={{left:"69%",bottom:"114%",height:"40%",width:"30%"}}
        source={require('../assets/themes/main3.jpg')} />
         <AntDesign name="download" size={20} style={{bottom:"138%" ,left:"48%",color:"red"}} />
                <AntDesign name="download" size={20} style={{bottom:"142%" ,left:"82%",color:"red"}}/>
      </View>
         </View>
         </ScrollView>
    );
}
const styles=StyleSheet.create({
  container:{
    height:800,
    flex:1,
    paddingTop:"10%",
    backgroundColor:"#0890B6",
    opacity:0.7,
    marginVertical:"1%"

  },
   header:{
     height:"5%",
     opacity:0.7,
     bottom:"4%",
     backgroundColor:"grey"
   },
   one:{
    flexDirection:"row",
    height:599,
    marginBottom:"5%",
    left:"5.5%",
    justifyContent:"space-between",
    marginVertical:".1%"
   },
   two:{
    flexDirection:"row",
    justifyContent:"center",
    alignContent:"flex-start",
    alignSelf:"auto",
    left:"1%",
    top:"9%",
    marginVertical:"1%"

     },
   three:{
    height:500,
    right:".7%",
    bottom:"30%",
    marginVertical:"1%"

   }
})
    export default Themes;