import React from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
const Recent = ({navigation}) => {
    return (
        <View style={{backgroundColor:"skyblue",height:"100%"}}>
          <View style={{ backgroundColor:"#0890B6",
    height:"5%"}}><Icon name="arrow-left" size={20}style={{top:10,left:10}} onPress={()=>navigation.goBack()} />
    <Text style={{left:50,fontWeight:"bold",top:-8}}>RECENT PLAY</Text>
    <Icon1 name="search" size={25} color="black" style={{ top:-31, left: "80%" }} onPress={() => navigation.goBack()} />
          <Icon1 name="card-giftcard" size={25} color="black" style={{ top:-58, left: "68%" }} onPress={() => navigation.navigate('Ads')} />
      <Icon2 name="dots-three-vertical" size={25} style={{left:"92%",top:-82,marginBottom:-50}} /></View>
          
        <Pressable><Icon name="music" size={25} style={{top:40,left:10}} />
          <Text style={{left:50,top:20}}>Audio.mp3</Text>
          <AntDesign name="barchart" size={30} style={{left:225,bottom:"10%"}}/>
          <Icon2 name="dots-three-vertical" size={20} style={{left:"90%",bottom:"38.0%"}} />
          </Pressable>
          <Icon name="music" size={25} style={{top:30,left:10}} />
          <Text style={{left:50,top:10}}>Audio1.mp3</Text>
          <AntDesign name="barchart" size={30} style={{left:225,bottom:"2.5%"}}/>
          <Icon2 name="dots-three-vertical" size={20} style={{left:"90%",bottom:"6.0%"}} />
          <Icon name="music" size={25} style={{top:30,left:10}} />
          <Text style={{left:50,top:10}}>Title track1.mp3</Text>
          <AntDesign name="barchart" size={30} style={{left:225,bottom:"2.5%"}}/>
          <Icon2 name="dots-three-vertical" size={20} style={{left:"90%",bottom:"6.0%"}} />
          <Icon name="music" size={25} style={{top:30,left:10}} />
          <Text style={{left:50,top:10}}>Title track2.mp3</Text>
          <AntDesign name="barchart" size={30} style={{left:225,bottom:"3%"}}/>
          <Icon2 name="dots-three-vertical" size={20} style={{left:"90%",bottom:"6.0%"}} />
          <Icon name="music" size={25} style={{top:30,left:10}} />
          <Text style={{left:50,top:10}}>Title track3.mp3</Text>
          <AntDesign name="barchart" size={30} style={{left:225,bottom:"3%"}}/>
          <Icon2 name="dots-three-vertical" size={20} style={{left:"90%",bottom:"6.0%"}} />
          <Icon name="music" size={25} style={{top:30,left:10}} />
          <Text style={{left:50,top:10}}>Download track1.mp3</Text>
          <AntDesign name="barchart" size={30} style={{left:225,bottom:"2%"}}/>
          <Icon2 name="dots-three-vertical" size={20} style={{left:"90%",bottom:"6.0%"}} />
        </View>
    );
}

export default Recent;