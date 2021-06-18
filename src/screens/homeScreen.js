import React from 'react';
import { View, Text,Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();
   
    return (
        <View style={styles.container}>
            <View style={styles.one}>
        <Icon name="menu" size={30} style={{top:2}} onPress={() => navigation.openDrawer()}/>
        <Text style={{left:"12%",top:-21,fontWeight:"bold"}}>Music Player</Text>
        <Icon name="search" size={30} style={styles.icon1} onPress={() => navigation.navigation('Settings')}/>
        <Icon name="card-giftcard" size={25} style={styles.icon2}  onPress={() => navigation.navigate('Ads')}/>
            </View>
            <View style={{flexDirection:"column",flex: 1,}}>
            <View style={styles.first}>
            <View style={styles.library}>
                <Icon name="music-note" size={25} style={{left:20}} onPress={() => navigation.navigate('Library')}/>
                <Text style={{left:8}}>LIBRARY</Text>
            </View>
            <View style={styles.folder}>
        <Icon name="folder" size={25} style={{left:20}}  onPress={() => navigation.navigate('Folder')} />
        <Text style={{left:10}}>FOLDER</Text>
            </View>
            <View style={styles.favorite}>
        <Icon name="favorite-outline" size={25} style={{left:25}}onPress={() => navigation.navigate('Favorite')}/>
        <Text style={{left:12}}>FAVORITE</Text>
            </View>
            </View>
            <View style={styles.two}>
                <View style={styles.play}>
                <Icon name="anchor" size={25} style={{left:25}} onPress={() => navigation.navigate('Recent Play')}/>
            <Text>RECENT PLAY</Text>
                </View>
                <View style={styles.add}>
                <Icon name="sync" size={25} style={{left:25}}onPress={() => navigation.navigate('Recent add')}/>
            <Text>RECENT ADD</Text>
                </View>
                <View style={styles.most}>
                <Icon name="favorite-outline" size={25} style={{left:25}}onPress={() => navigation.navigate('Most Play')}/>
            <Text style={{left:10}}>MOST PLAY</Text>
                </View>
            </View>
            </View>
            <View style={styles.playlist}>
            <Text style={{top:"1%"}}>PLAYLIST(2)</Text>
            <Icon name="add" size={20} style={styles.icon4} onPress={() => navigation.navigate('Most Play')}  />
            <Icon name="arrow-right" size={20} style={styles.icon5} onPress={()=>navigation.navigate('ModalStack')}/> 
            </View>
            <View style={styles.three}>
            <View style={styles.list}>
        <Icon name="music-note" size={30} style={{left:35}}/>
        <Text style={{left:20}}>Default List</Text>
            </View>
            <View style={styles.plus}>
        <Icon name="add" size={30} onPress={() => navigation.navigate('ModalStack')}/>
        </View>
            </View>
            <View style={styles.player}>
            <Icon name="music-note" size={30} style={{top:"5%"}}/>
            <Text style={{top:"10%"}}>Change Song by swap</Text>
            <Icon name="play-arrow" size={30} style={{top:"5%",left:"70%"}}/>
            <Icon name="fast-forward" size={30} style={{top:"5%",left:"80%"}}/>
            <Icon name="snippet-folder" size={30}style={{top:"5%",left:"100%"}} />
            </View>
                  </View>
    );
}
const styles=StyleSheet.create({
container:{
    flex:1,
    paddingTop:"10%",
    backgroundColor:"skyblue",
},
one:{
    left:"2%",
    top:"-5%"
},
icon1:{
    left:"85%",
    top:-40
},
icon2:{
    top:-68,
    left:"75%"
},
first:{
    flexDirection:"row",
    height:700,
    bottom:"25%",
    marginBottom:"1%"
},
library:{
    backgroundColor:"#BFE7F2",
    height:"11%",
    width:"28%",
    left:"2%",
    top:"5%",
    bottom:"160%",
    paddingLeft:"5%",
    paddingTop:"5%",
},
icon3:{
    left:"15%"
},
folder:{
    backgroundColor:"#F5910B",
    height:"11%",
    left:"6%",
    top:"5%",
    width:"28%",
    paddingVertical:"5%",
    paddingHorizontal:"5%",
},
favorite:{
    backgroundColor:"#DA98B8",
    width:"28%",
    height:"11%",
    paddingVertical:"5%",
    paddingHorizontal:"3%",
    left:"9%",
    top:"5%",
},
two:{
    flexDirection:"row",
    height:700,
    bottom:"204%",


},
play:{
    backgroundColor:"#98D0DA",
    width:"28%",
    height:"11%",
    paddingVertical:"5%",
    paddingHorizontal:"3%",
    left:"2%",
    top:"15%"
},
add:{
    backgroundColor:"#7DF976",
    width:"28%",
    height:"11%",
    paddingVertical:"5%",
    paddingHorizontal:"3%",
    left:"6%",
    top:"15%"
},
most:{
    backgroundColor:"#D876F9",
    width:"28%",
    height:"11%",
    paddingVertical:"5%",
    paddingHorizontal:"3%",
    left:"9%",
    top:"15%"
},
playlist:{
    flexDirection: 'row',
    backgroundColor:"cyan",
    paddingLeft:"5%",
    marginHorizontal:"5%",
    marginVertical:"70%",
    marginTop:"50%"
},
icon4:{
    marginLeft:"50%"
},
icon5:{
    marginLeft:"10%"
},
three:{
    flexDirection: 'row',
    height:700,
    marginTop:"1%",
    bottom:"59%",
},
list:{
    backgroundColor: "#D876F9",
     width: "30%",
      height: "10%",
        left: "1%",
    marginBottom:"50%",
        justifyContent: "center" ,
},
plus:{
    backgroundColor: "#D876F9",
    width: "30%",
     height: "10%",
       left: "4%",
   marginBottom:"10%",
       justifyContent: "center" ,
       paddingLeft:"10%"
},
player:{
    flexDirection: 'row',
   height:"10%",
   marginLeft:"2%",
   borderWidth:2,
   borderColor:"grey",
   borderRadius:20,
   bottom:"175%"
}

});
export default HomeScreen;