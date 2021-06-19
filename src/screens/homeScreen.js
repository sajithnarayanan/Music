import React from 'react';
import { View, Text,Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import normalize from 'react-native-normalize';

const HomeScreen = () => {
    const navigation = useNavigation();
   
    return (
        <View style={styles.container}>
            <View style={styles.one}>
        <Icon name="menu" size={30} style={{top:"2%"}} onPress={() => navigation.openDrawer()}/>
        <Text style={{left:"12%",bottom:"21%",fontWeight:"bold"}}>Music Player</Text>
        <Icon name="search" size={30} style={styles.icon1} onPress={() => navigation.navigation('Settings')}/>
        <Icon name="card-giftcard" size={25} style={styles.icon2}  onPress={() => navigation.navigate('Ads')}/>
            </View>
            <View style={{flexDirection:"column",flex: 1,}}>
            <View style={styles.first}>
            <View style={styles.library}>
                <Icon name="music-note" size={25} style={{left:"24%"}} onPress={() => navigation.navigate('Library')}/>
                <Text style={{left:"8%"}}>LIBRARY</Text>
            </View>
            <View style={styles.folder}>
        <Icon name="folder" size={25} style={{left:"29%"}}  onPress={() => navigation.navigate('Folder')} />
        <Text style={{left:"12%"}}>FOLDER</Text>
            </View>
            <View style={styles.favorite}>
        <Icon name="favorite-outline" size={25} style={{left:"30%"}}onPress={() => navigation.navigate('Favorite')}/>
        <Text style={{left:"12%"}}>FAVORITE</Text>
            </View>
            </View>
            <View style={styles.two}>
                <View style={styles.play}>
                <Icon name="anchor" size={25} style={{left:"29%"}} onPress={() => navigation.navigate('Recent Play')}/>
            <Text style={{left:"18%"}}>RECENT PLAY</Text>
                </View>
                <View style={styles.add}>
                <Icon name="sync" size={25} style={{left:"29%"}}onPress={() => navigation.navigate('Recent add')}/>
            <Text style={{left:"15%"}}>RECENT ADD</Text>
                </View>
                <View style={styles.most}>
                <Icon name="favorite-outline" size={25} style={{left:"29%"}}onPress={() => navigation.navigate('Most Play')}/>
            <Text style={{left:"4%"}}>MOST PLAY</Text>
                </View>
            </View>
            </View>
            <View style={styles.playlist}>
            <Text style={{top:"3.5%",color:"#fff",fontWeight:"bold"}}>PLAYLIST(2)</Text>
            <Icon name="add" size={20} style={styles.icon4} onPress={() => navigation.navigate('Most Play')}  />
            <Icon name="arrow-right" size={20} style={styles.icon5} onPress={()=>navigation.navigate('ModalStack')}/> 
            </View>
            <View style={styles.three}>
            <View style={styles.list}>
        <Icon name="music-note" size={30} style={{left:"35%"}}/>
        <Text style={{left:"20%"}}>Default List</Text>
            </View>
            <View style={styles.plus}>
        <Icon name="add" size={30} onPress={() => navigation.navigate('ModalStack')}/>
        </View>
            </View>
        <Icon name="shuffle" size={30} style={{left:"85%",bottom:"88%"}} onPress={()=>navigation.navigate('Library')}/>
                    <View style={styles.player}>
            <Icon name="music-note" size={30} style={{top:"5%"}}/>
            <Text style={{top:"10%"}}>Change Song by swap</Text>
            <Icon name="play-arrow" size={30} style={{top:"5%",left:"70%"}}/>
            <Icon name="fast-forward" size={30} style={{top:"5%",left:"90%"}}/>
            <Icon name="snippet-folder" size={30}style={{top:"5%",left:"145%"}} />
            </View>
                  </View>
    );
}
const styles=StyleSheet.create({
container:{
    height:"100%",
    flex:1,
    paddingTop:"10%",
    backgroundColor:"skyblue",
},
one:{
    left:"2%",
    bottom:"5%"
},
icon1:{
    left:"85%",
    bottom:"41%"
},
icon2:{
    bottom:"69%",
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
    bottom:"10%",
    paddingLeft:"5%",
    paddingTop:"5%",
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
    paddingVertical:"5%",
    paddingHorizontal:"5%",
},
favorite:{
    backgroundColor:"#DA98B8",
    width:"28%",
    height:"11%",
    paddingVertical:"5%",
    paddingHorizontal:"3%",
    left:"7%",
    top:"5%",
},
two:{
    flexDirection:"row",
    height:700,
    bottom:normalize(660 ,'height')
    
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
    backgroundColor:"#8CDB76",
    width:"28%",
    height:"11%",
    paddingVertical:"5%",
    paddingHorizontal:"3%",
    left:"4%",
    top:"15%"
},
most:{
    backgroundColor:"#CC82EC",
    width:"28%",
    height:"11%",
    paddingVertical:"5%",
    paddingHorizontal:"3%",
    left:"7%",
    top:"15%"
},
playlist:{
    flexDirection: 'row',
    backgroundColor:"skyblue",
    paddingLeft:"5%",
    marginHorizontal:"4%",
    marginVertical:"50%",
    marginTop:"50%",
    height:"6%",
    elevation:2
},
icon4:{
    marginLeft:"50%",
    top:"2%"
},
icon5:{
    marginLeft:"10%",
    top:"2%"
},
three:{
    flexDirection: 'row',
    height:700,
    bottom:"59%",
},
list:{
    backgroundColor: "#54CFF1",
     width: "30%",
      height: "10%",
        left: "2%",
        justifyContent: "center" ,
        top:"25%"
},
plus:{
    backgroundColor: "#54CFF1",
    width: "30%",
     height: "10%",
       left: "4%",
       justifyContent: "center" ,
       paddingLeft:"10%",
       top:"25%"
},
player:{
    flexDirection: 'row',
   height:"10%",
   borderWidth:2,
   borderColor:"grey",
   borderRadius:20,
   bottom:"170%"
}

});
export default HomeScreen;