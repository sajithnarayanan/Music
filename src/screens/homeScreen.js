import React from 'react';
import { View, Text,Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
// import normalize from 'react-native-normalize';

const HomeScreen = () => {
    const navigation = useNavigation();
   
    return (
        <View style={styles.container}>
                    <View style={styles.header}>
        <Icon name="menu" size={30} style={{top:"10%",color:'white',left:'5%'}} onPress={() => navigation.openDrawer()}/>
        <Text style={{ left:"22%",
    bottom:"70%",
    fontWeight:"bold",
    fontSize:20,
    color:'white'}}>Music Player</Text>
        <Icon name="search" size={30} style={styles.icon1} onPress={() => navigation.navigation('Settings')}/>
        <Icon name="card-giftcard" size={25} style={styles.icon2}  onPress={() => navigation.navigate('Ads')}/>
            </View>
            <View style={{flexDirection:"column",flex: 1,}}>
            <View style={styles.first}>
            <View style={styles.library}>
                <Icon name="music-note" size={30} style={{left:"34%",top:"15%"}} onPress={() => navigation.navigate('Library')}/>
                <Text style={{  textAlign:'center',
    top:'20%',
    color:'white'}}>LIBRARY</Text>
            </View>
            <View style={styles.folder}>
        <Icon name="folder" size={30} style={{left:"32%",top:"15%"}}  onPress={() => navigation.navigate('Folder')} />
        <Text style={{left:"22%",top:'20%',
    color:'white'}}>FOLDER</Text>
            </View>
            <View style={styles.favorite}>
        <Icon name="favorite-outline" size={30} style={{left:"35%",top:"15%"}}onPress={() => navigation.navigate('Favorite')}/>
        <Text style={{left:"20%",top:'20%',
    color:'white'}}>FAVORITE</Text>
            </View>
            </View>
            <View style={styles.two}>
                <View style={styles.play}>
                <Icon name="anchor" size={30} style={{left:"35%",top:"15%"}} onPress={() => navigation.navigate('Recent Play')}/>
            <Text style={{left:"8%",top:'20%',
    color:'white',alignContent:"center"}}>RECENT PLAY</Text>
                </View>
                <View style={styles.add}>
                <Icon name="sync" size={30} style={{left:"35%",top:"15%"}}onPress={() => navigation.navigate('Recent add')}/>
            <Text style={{left:"10%",top:'20%',
    color:'white',alignContent:"center"}}>RECENT ADD</Text>
                </View>
                <View style={styles.most}>
                <Icon name="favorite-outline" size={30} style={{left:"35%",top:"15%"}}onPress={() => navigation.navigate('Most Play')}/>
            <Text style={{left:"10%",top:'20%',
    color:'white',alignContent:"center"}}>MOST PLAY</Text>
                </View>
            </View>
            </View>
            <View style={styles.playlist}>
            <Text style={{top:"3.5%",color:"#fff",fontWeight:"bold",left:"29%"}}>PLAYLIST(2)</Text>
            <Icon name="add" size={20} style={styles.icon4} onPress={() => navigation.navigate('Most Play')}  />
            <Icon name="arrow-right" size={20} style={styles.icon5} onPress={()=>navigation.navigate('ModalStack')}/> 
            </View>
            <View style={styles.three}>
            <View style={styles.list}>
        <Icon name="music-note" size={30} style={{left:"35%",top:"10%"}}/>
        <Icon name="view-carousel" size={25} style={{left:"25%",bottom:"25%"}}/>
        <Text style={{left:"20%",bottom:"25%",
    color:'white'}}>Default List</Text>
            </View>
            <View style={styles.plus}>
        <Icon name="add" size={30} style={{left:"30%"}}onPress={() => navigation.navigate('ModalStack')}/>
        </View>
            </View>
        <Icon name="shuffle" size={30} style={{left:"85%",bottom:"43%",color:'white'}} onPress={()=>navigation.navigate('Library')}/>
                    <View style={styles.player}>
            <Icon name="music-note" size={30} style={{top:"5%"}}/>
            <Text style={{top:"7%",
    color:'white'}}>Change Song by swap</Text>
            <Icon name="play-arrow" size={30} style={{top:"5%",left:"70%"}}/>
            <Icon name="fast-forward" size={30} style={{top:"5%",left:"90%"}}/>
            <Icon name="snippet-folder" size={30}style={{top:"5%",left:"130%"}} />
            </View>
                  </View>
    );
}
const styles=StyleSheet.create({
container:{
    height:"100%",
    flex:1,
    paddingTop:"10%",
    backgroundColor:"#0890B6",
    opacity:0.7
},
header:{
    bottom:"5%",
    backgroundColor:"#0890B6",
    height:"5%",
    marginBottom:"20%"
},
icon1:{
    left:"85%",
bottom:"150%",
},
icon2:{
    bottom:"225%",
    left:"75%"
},
first:{
    flexDirection:"row",
    height:700,
    bottom:"30%",
},
library:{
    backgroundColor:"#BFE7F2",
    height:"11%",
    width:"28%",
    left:"2%",
    top:"5%",
    // paddingLeft:"5%",
    // paddingTop:"5%",
},
icon3:{
    left:"15%"
},
folder:{
    backgroundColor:"#F5910B",
    height:"11%",
    left:"4%",
    top:"5%",
    width:"28%",
    // paddingVertical:"5%",
    // paddingHorizontal:"5%",
},
favorite:{
    backgroundColor:"#DA98B8",
    width:"28%",
    height:"11%",
    // paddingVertical:"5%",
    // paddingHorizontal:"3%",
    left:"6%",
    top:"5%",
},
two:{
    flexDirection:"row",
    height:700,
    bottom:'208%',
    // bottom:normalize(660 ,'height')
    
},
play:{
    backgroundColor:"#98D0DA",
    width:"28%",
    height:"11%",
    // paddingVertical:"5%",
    // paddingHorizontal:"3%",
    left:"2%",
    top:"15%"
},
add:{
    backgroundColor:"#8CDB76",
    width:"28%",
    height:"11%",
    alignContent:"center",
    // paddingVertical:"5%",
    // paddingHorizontal:"3%",
    left:"4%",
    top:"15%"
},
most:{
    backgroundColor:"#CC82EC",
    width:"28%",
    height:"11%",
    // paddingVertical:"5%",
    // paddingHorizontal:"3%",
    left:"6%",
    top:"15%"
},
playlist:{
    flexDirection: 'row',
    backgroundColor:"#0890B6",
    // paddingLeft:"5%",
    // marginHorizontal:"4%",
    // marginVertical:"50%",
    // marginTop:"50%",
    height:"6%",
    elevation:0,
    top:'55%'    
},
icon4:{
    marginLeft:"58%",
    top:"3%",
    justifyContent:'flex-end'
},
icon5:{
    marginLeft:"5%",
    top:"3%"
},
three:{
    flexDirection: 'row',
    height:700,
    bottom:"59%",
},
list:{
    backgroundColor: "#98D0DA",
    width: "28%",
    height: "11%",
    left: "2%",
    justifyContent: "center" ,
    top:"120%"
},
plus:{
    backgroundColor: "#98D0DA",
    width: "28%",
     height: "11%",
       left: "6%",
       justifyContent: "center" ,
    //    paddingLeft:"10%",
       top:"120%"
},
player:{
    flexDirection: 'row',
    height:"8%",
    borderWidth:2,
    borderColor:"grey",
    borderRadius:20,
    bottom:"75%",
}

});
export default HomeScreen;