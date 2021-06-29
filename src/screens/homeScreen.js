import React from 'react';
import { View, Text, Image, TouchableOpacity, Pressable,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconf from 'react-native-vector-icons/Foundation';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
  <View style={styles.menubar}>
                <Icon name="menu" size={30} color="#fff"  style={{width:"10%",}} onPress={() => navigation.openDrawer()} />
                <Text style={{color:"#fff", fontFamily: "italic", fontWeight: "bold", fontSize: 20,marginTop:"1%" }}>Music Player</Text>
<View style={{height:"100%",width:"40%",flexDirection:"row", flexWrap:"wrap", alignContent:"center",justifyContent:"flex-end",}}>
<View style={{height:"100%",width:"60%",flexDirection:"row", flexWrap:"wrap",alignItems:"center", alignContent:"center",justifyContent:"space-between", }}>
                <Icon name="card-giftcard" size={30} color="#fff"  onPress={() => navigation.navigate('Ads')} />
                <Icon name="search" size={30} color="#fff" onPress={() => navigation.navigation('Settings')} />
                </View>
                </View>
            </View>
<View style={styles.Tiles}>
    </View>
    <View style={styles.row1}>
    <TouchableOpacity style={styles.Tile1} >
        <View style={styles.InnerTilesBox}>
        <Iconf name="music" size={40} color="#fff" onPress={() => navigation.navigate('Library')}/>
<Text style={styles.TilesText}>
    LIBRARY
</Text>
        </View>
    </TouchableOpacity>
    <TouchableOpacity  style={styles.Tile2} >
    <View style={styles.InnerTilesBox}>
    <Icon name="folder" size={40} color="#fff"  onPress={() => navigation.navigate('Folder')}/>
<Text style={styles.TilesText}>
    FOLDER
</Text>
        </View>
    </TouchableOpacity >
    <TouchableOpacity  style={styles.Tile3} >
    <View style={styles.InnerTilesBox}>
    <Icon name="favorite-outline" size={40}  color="#fff" onPress={() => navigation.navigate('Favorite')}/>
<Text style={styles.TilesText}>
    FAVOURITE
</Text>
        </View>
    </TouchableOpacity >
    </View>
    <View style={styles.row2}>
    <TouchableOpacity  style={styles.Tile4} >
    <View style={styles.InnerTilesBox}>
    <Icon name="anchor" size={40} color="#fff" onPress={() => navigation.navigate('Recent Play')}/>
<Text style={styles.TilesText}>
    RECENT PLAY
</Text>
        </View>
    </TouchableOpacity >
    <TouchableOpacity  style={styles.Tile5}>
    <View style={styles.InnerTilesBox}>
    <Icon name="sync" size={40} color="#fff" onPress={() => navigation.navigate('Recent add')}/>
<Text style={styles.TilesText}>
    RECENT ADD
</Text>
        </View>
    </TouchableOpacity >
    <TouchableOpacity  style={styles.Tile6} >
    <View style={styles.InnerTilesBox}>
    <Icon name="favorite-outline" size={40} color="#fff" onPress={() => navigation.navigate('Most Play')}/>
<Text style={styles.TilesText}>
    MOST PLAY
</Text>
        </View>
    </TouchableOpacity >
    </View>
    <View style={styles.playlistView}> 
    <View style={styles.leftbox}> 
    <Text style={{fontWeight:"bold",color:"#fff",fontSize:20 }}>
        PLAYLIST (1)
    </Text>
     </View>
<View style={styles.rightbox}>
<Icon name='add' size={30} style={{color:"#fff"}} onPress={() => navigation.navigate('Most Play')} />
<Icon name='arrow-right' size={30} style={{color:"#fff",marginLeft:"2%"}}  onPress={()=>navigation.navigate('ModalStack')} />
     </View>
 </View>
 <View style={styles.row3}> 
 <TouchableOpacity style={styles.Tile4} >
        <View style={styles.InnerTilesBox}>
        <Icon name="menu" size={30} color="white"  />
<Text style={styles.TilesText}>
    DEFAULT LIST
</Text>
        </View>
    </TouchableOpacity >
    <TouchableOpacity  style={styles.Tile4} >
    <View style={styles.InnerTilesBox}>
    <Icon name="add" size={60}  color="white" onPress={() => navigation.navigate('ModalStack')}/>
        </View>
    </TouchableOpacity >
    <View style={styles.TileEmpty}>
    </View>
 </View>
 <View style={styles.row4}>
     <View style={{width:65,height:65,backgroundColor:"#f4ce5e",justifyContent:"center",alignItems:"center",borderRadius:50}}>
     <Icon name="shuffle"size={30} color="#fff" onPress={()=>navigation.navigate('Library')}/>
     </View>
      </View>
 <View style={styles.PlayerView}>
 <View style={styles.Player}>
 <Iconf name="music"size={30} color="#fff" />
 <Text style={{color:"#fff",fontSize:15}}>03-uyire.mp3</Text>
 <Icon name="play-arrow" size={30} color="#fff"/>
 <Icon name="fast-forward" size={30} color="#fff"/>
            <Icon name="queue-music" size={30} color="#fff"/>
     </View>
 </View>
        </View>
    );
}
const styles = StyleSheet.create({
container: {
height:"100%",
flex:1,
width:"100%",
//flexWrap:"wrap"
},
menubar:{
    height:"8%",
    flexDirection:"row",
    flexWrap:"wrap",
    alignContent:"center",
    justifyContent:"space-between",
    alignItems:"center",
   // paddingTop:"5%",
    backgroundColor: '#376f8aef'
},
Tiles:{
flexDirection:"column",
//backgroundColor:"#76b5c5",
justifyContent:"center",
},
row1:{
    height:"15%",
   width:"100%",
   backgroundColor:"#376f8aba",
   //backgroundColor:"skyblue",
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-around",
    alignContent:"space-around",
},
row2:{
    height:"15%",
   backgroundColor:"#376f8aba",
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-around",
    alignContent:"space-around",
},
Tile1:{
    width:"30%",
    height:"80%",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#4691e4",
},
Tile2:{
    width:"30%",
    height:"80%",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#d49369"
},
Tile3:{
    width:"30%",
    height:"80%",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#d49198"
},
Tile4:{
    width:"30%",
    height:"80%",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#6fb2dc"
},
Tile5:{
    width:"30%",
    height:"80%",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#0dc89b"
},
Tile6:{
    width:"30%",
    height:"80%",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#ab8fdc"
},
TileEmpty:{
    width:"30%",
    height:"80%",
    justifyContent:"center",
    alignItems:"center",
},
InnerTilesBox:{
    alignItems:"center",
    justifyContent:"center",
    alignContent:"center"
},
TilesText:{
    marginTop:"5%",
    color:"#fff",
    fontWeight:'bold',
},
playlistView:{
    height:"8%",
    width:"100%",
    flexDirection:"row",
    alignContent:"center",
    justifyContent:"space-between",
    flexWrap:"wrap",
    backgroundColor: '#376f8aea',
},
leftbox:{
    height:"100%",
    width:"50%",
    justifyContent:"center",
    alignContent:"center",
    alignItems:"flex-start",
    paddingLeft:"5%"
},
rightbox:{
 
   height:"100%",
   width:"20%",
justifyContent:"center",
    alignContent:"center",
    alignItems:"center",
    justifyContent:"space-between",
    flexDirection:"row",
},
row3:{
    height:"15%",
   width:"100%",
   backgroundColor:"#376f8aba",
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-around",
    alignContent:"space-around",
},
row4:{
    height:"28%",
    width:"100%",
    flexDirection:"row",
    backgroundColor:"#376f8aba",
    justifyContent:"flex-end",
    alignItems:"flex-end",
    alignContent:"flex-end",
    paddingRight:"3%"
},
PlayerView:{ 
    width:"100%",
    height:"12%",
    backgroundColor: '#376f8aea',
    justifyContent:"center",
    alignContent:"center",
    alignItems:"center",
},
Player:{
height:"80%",
width:"95%",
//borderRadius:25,
    justifyContent:"space-around",
    alignContent:"space-around",
   alignItems:"center",
   flexDirection:"row",
},
    });
export default HomeScreen;