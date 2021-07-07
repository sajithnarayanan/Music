import React from 'react';
import { View, Text,Image,ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Ads = ({navigation}) => {
    return (
        <ScrollView>
        <View style={{height:820}}>
        <AntDesign name="arrowleft" size={25} style={{left:10,top:15}} onPress={()=>navigation.goBack()} />        
            <View style={{height:200,borderRadius:25,backgroundColor:"#fff",width:"80%",marginLeft:35,top:20,alignContent:"center",marginBottom:20}}>
            <Text style={{fontWeight:"bold",top:20,left:10}}>Recomended</Text>
                <Image source={require('../assets/ads/1.jpg')} style={{height:50,width:50,borderRadius:25,top:35,left:10}} />
                <Text style={{left:10,top:38,fontStyle:"italic",fontSize:12}}>Music Player</Text>
                <Image source={require('../assets/ads/2.jpg')} style={{height:50,width:60,borderRadius:25,top:-30,left:120}} />
                <Text style={{left:125,top:-27,fontSize:12,fontStyle:"italic"}}>HD Camera</Text>
                <Image source={require('../assets/ads/4.png')} style={{height:60,width:50,borderRadius:25,top:-105,left:220}} />
                <Text style={{left:210,top:-102,fontSize:12}}>Photo Slideshow</Text>
                <Image source={require('../assets/ads/booster.jpg')} style={{height:50,width:50,borderRadius:25,top:-95,left:10}} />
                <Text style={{fontSize:11,left:9,top:-94}}>Volume Booster</Text>
                <Image source={require('../assets/ads/system.jpg')} style={{height:50,width:60,borderRadius:25,top:-160,left:120}} />
                <Text style={{left:125,top:-160,fontSize:12}}>Music Player</Text>
                <Image source={require('../assets/ads/gallery.png')} style={{height:40,width:40,borderRadius:25,top:-220,left:220}} />
                <Text style={{left:227,top:-216,fontSize:12}}>Gallery</Text>
            </View>
            <View style={{height:395,backgroundColor:"#fff",borderRadius:25,marginLeft:35,top:11,width:"80%",paddingVertical:"5%"}}>
                <Text style={{fontWeight:"bold",left:10,top:10}}>Top Rated Apps</Text>
                <Image source={require('../assets/ads/play.jpg')} style={{height:50,width:50,borderRadius:25,top:35,left:10}} />
        <Text style={{left:18,top:35,fontSize:12}}>HD Video</Text>
        <Image source={require('../assets/ads/jelly.jpg')} style={{height:50,width:60,borderRadius:25,top:-32,left:120}} />
        <Text style={{left:125,top:-30,fontSize:12}}>Tiles Match</Text>
        <Image source={require('../assets/ads/weather.png')} style={{height:50,width:60,borderRadius:25,top:-100,left:220}} />
        <Text style={{left:205,top:-95,fontSize:12}}>Weather Forecast</Text>
        <Image source={require('../assets/ads/pics.jpg')} style={{height:60,width:60,borderRadius:25,top:-60,left:10}} />
        <Text style={{left:15,top:-60,fontSize:12}}>Photo Editor</Text>
        <Image source={require('../assets/ads/lock.jpg')} style={{height:50,width:60,borderRadius:25,top:-133,left:120}} />
        <Text style={{left:125,top:-128,fontSize:12}}>Lock Screen</Text>
        <Image source={require('../assets/ads/cleaner.jpg')} style={{height:50,width:60,borderRadius:25,top:-198,left:220}} />
        <Text style={{left:225,top:-195,fontSize:12}}>Phone Cleaner</Text>
        <Image source={require('../assets/ads/cam.jpg')} style={{height:50,width:50,borderRadius:25,top:-150,left:20}} />
        <Text style={{left:22,fontSize:12,top:-145}}>HD Camera</Text>
        <Image source={require('../assets/ads/cutter.png')} style={{height:50,width:50,borderRadius:25,top:-215,left:125}} />
        <Text style={{left:118,top:-210,fontSize:12}}>Ringtone Cutter</Text>
        <Image source={require('../assets/ads/player.jpg')} style={{height:50,width:60,borderRadius:25,top:-280,left:220}} />
        <Text style={{left:230,top:-278,fontSize:12}}>HD Video</Text>
            </View>
            <View style={{height:150,backgroundColor:"#fff",borderRadius:25,marginLeft:35,top:23,width:"80%"}}>
        <Text style={{fontWeight:"bold",left:130,top:10}}>Games</Text>
        <Text style={{top:10,left:10,fontStyle:"italic",marginBottom:10,fontWeight:"bold"}}>Recomended</Text>
        <Image source={require('../assets/ads/tiles.jpg')} style={{height:50,width:50,borderRadius:15,top:20,left:20}} />
        <Text style={{left:20,fontSize:12,top:23}}>Tiles Match</Text>
        <Image source={require('../assets/ads/puzzle.jpg')} style={{height:50,width:50,borderRadius:25,top:-48,left:125}} />
        <Text style={{left:128,top:-42,fontSize:12}}>Block Puzzle</Text>
        <Image source={require('../assets/ads/shooter.jpg')} style={{height:50,width:50,borderRadius:25,top:-115,left:230}} />
        <Text style={{left:218,top:-110,fontSize:12}}>Bubble Shooter</Text>
            </View>
        </View>
        </ScrollView>
    );
}

export default Ads;