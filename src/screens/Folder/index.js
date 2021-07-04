import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Icon1 from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Folder = ({navigation}) => {
    return (
        <View style={styles.container}>
           <View style={styles.header}>
           <AntDesign name="arrowleft" size={25}  style={{top:"8%"}} onPress={()=>navigation.goBack()}/>
            <Text style={styles.text}>FOLDER</Text>
            <AntDesign name="search1" size={25} style={styles.icon}/>
            <Icon1 name="dots-three-vertical" size={20} style={styles.Icon1} />
           </View>
           <View  style={{marginTop:"5%"}}>
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
        flexDirection:"row",
        backgroundColor: '#376f8aff',
        height:"5%",
       alignContent:"space-between",
       flexWrap: "wrap-reverse",
       justifyContent:"flex-start",
       alignItems:"flex-start",
       paddingTop:"2%"

    },
    text:{
        left:"25%",
        bottom:"40%",
        fontWeight:"bold",
        fontSize:15,
        textAlign:"left"
    },
    icon:{
        marginLeft:"53%",
        top:"1%",
        left:"51%"
    },
   Icon1:{
       left:"110%",
       bottom:"170%"
   }
})

export default Folder;