import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Icon1 from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Folder = ({navigation}) => {
    return (
        <View style={styles.container}>
           <View style={styles.header}>
           <AntDesign name="arrowleft" size={25}  style={{top:"12%"}} onPress={()=>navigation.goBack()}/>
            <Text style={styles.text}>FOLDER</Text>
            <AntDesign name="search1" size={25} style={styles.icon}/>
            <Icon1 name="dots-three-vertical" size={20} style={styles.Icon1} />
           </View>
           <View  style={{marginTop:"10%"}}>
               <Icon1 name="folder" size={28} style={{left:"5%",top:"15%",backgroundColor:"grey",width:"10%",paddingLeft:"1.5%"}} onPress={()=>navigation.navigate('Recent')}/>
               <Text style={{left:"20%",bottom:"21%",fontSize:17}}>audio</Text>
               <Text style={{left:"20%",bottom:"25%"}}>/storage/emu...Xender/audio</Text>
               <Icon1 name="dots-three-vertical" size={20} style={{left:"90%",bottom:"60%"}}/>
           </View>
           <View >
               <Icon1 name="folder" size={28} style={{left:"5%",top:"15%",backgroundColor:"grey",width:"10%",paddingLeft:"1.5%"}} onPress={()=>navigation.navigate('Favorite')}/>
               <Text style={{left:"20%",bottom:"21%",fontSize:17}}>Download</Text>
               <Text style={{left:"20%",bottom:"25%"}}>/storage/emu...Xender/audio</Text>
               <Icon1 name="dots-three-vertical" size={20} style={{left:"90%",bottom:"60%"}}/>
           </View>
           <View >
               <Icon1 name="folder" size={28} style={{left:"5%",top:"15%",backgroundColor:"grey",width:"10%",paddingLeft:"1.5%"}} onPress={()=>navigation.navigate('Play')}/>
               <Text style={{left:"20%",bottom:"21%",fontSize:17}}>Music</Text>
               <Text style={{left:"20%",bottom:"25%"}}>/storage/emu...Xender/audio</Text>
               <Icon1 name="dots-three-vertical" size={20} style={{left:"90%",bottom:"60%"}}/>
           </View>
           <View  >
               <Icon1 name="folder" size={28} style={{left:"5%",top:"15%",backgroundColor:"grey",width:"10%",paddingLeft:"1.5%"}}  onPress={()=>navigation.navigate('Whatsapp')}  />
               <Text style={{left:"20%",bottom:"21%",fontSize:17}}>Whatsapp Audio</Text>
               <Text style={{left:"20%",bottom:"25%"}}>/storage/emu...Xender/audio</Text>
               <Icon1 name="dots-three-vertical" size={20} style={{left:"90%",bottom:"60%"}}/>
           </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"skyblue",
        alignSelf:"auto",
        opacity:0.7
    },
    header:{
        backgroundColor:"#0890B6",
        height:"5%"
    },
    text:{
        left:"10%",
        bottom:"45%",
        fontWeight:"bold",
        fontSize:15
    },
    icon:{
        left:"75%",
        bottom:"100%"
    },
   Icon1:{
       left:"90%",
       bottom:"160%"
   }
})

export default Folder;