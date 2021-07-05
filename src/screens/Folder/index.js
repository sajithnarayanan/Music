import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Icon1 from 'react-native-vector-icons/Entypo';
import IconM from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Folder = ({navigation}) => {
    return (
        <View style={styles.container}>
              <View style={{ height:"8%",
    flexDirection:"row",
    flexWrap:"wrap",
    alignContent:"center",
    justifyContent:"space-around",
    alignItems:"center",
    backgroundColor: '#376f8aef'}}>
                <Icon1  name="arrow-left" size={25} color="#fff"  style={{width:"10%",}}  onPress={() => navigation.goBack()} />
                <Text style={{color:"#fff", fontFamily: "italic", fontWeight: "bold", fontSize: 20,marginTop:"1%",right:"25%" }}>Folder</Text>
<View style={{height:"100%",width:"50%",flexDirection:"row", flexWrap:"wrap", alignContent:"center",justifyContent:"flex-end",}}>
<View style={{height:"100%",width:"43%",flexDirection:"row", flexWrap:"wrap",alignItems:"center", alignContent:"center",justifyContent:"flex-end", }}>
<AntDesign name="search1" size={30} color="#fff" onPress={()=>navigation.goBack()}/>
                <IconM name="card-giftcard" size={30} color="#fff" style={{left:"10%"}} onPress={() => navigation.navigate('Ads')} />
                </View>
                </View>
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