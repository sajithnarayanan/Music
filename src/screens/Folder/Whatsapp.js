import React from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
const Recent = ({navigation}) => {
    return (
        <View style={{backgroundColor:"skyblue",height:"100%"}}>
          <Icon name="arrow-left" size={20}style={{top:10,left:10}} onPress={()=>navigation.goBack()} />
          <Text style={{left:50,fontWeight:"bold",top:-8}}>WHATSAPP</Text>
          <Icon1 name="search" size={25} color="black" style={{ top:-25, left: "80%" }} onPress={() => navigation.goBack()} />
                <Icon1 name="card-giftcard" size={25} color="black" style={{ top:-50, left: "68%" }} onPress={() => navigation.navigate('Ads')} />
            <Icon2 name="dots-three-vertical" size={25} style={{left:"92%",top:-75,marginBottom:-50}} />
        <Pressable><Icon name="music" size={25} style={{top:40,left:10}} />
          <Text style={{left:50,top:20}}>Audio.mp3</Text>
          <AntDesign name="barchart" size={30} style={{left:220}}/>
          <Icon2 name="dots-three-vertical" size={25} style={{left:"92%",top:-75,marginBottom:-50}} />
          </Pressable>
          <Icon name="music" size={25} style={{top:30,left:10}} />
          <Text style={{left:50,top:10}}>Audio1.mp3</Text>
          <AntDesign name="barchart" size={30} style={{left:220,top:-10}}/>
          <Icon2 name="dots-three-vertical" size={25} style={{left:"92%",top:-75,marginBottom:-50}} />
          <Icon name="music" size={25} style={{top:30,left:10}} />
          <Text style={{left:50,top:10}}>Title track1.mp3</Text>
          <AntDesign name="barchart" size={30} style={{left:220,top:-10}}/>
          <Icon2 name="dots-three-vertical" size={25} style={{left:"92%",top:-75,marginBottom:-50}} />
          <Icon name="music" size={25} style={{top:30,left:10}} />
          <Text style={{left:50,top:10}}>Title track2.mp3</Text>
          <AntDesign name="barchart" size={30} style={{left:220,top:-10}}/>
          <Icon2 name="dots-three-vertical" size={25} style={{left:"92%",top:-75,marginBottom:-50}} />
          <Icon name="music" size={25} style={{top:30,left:10}} />
          <Text style={{left:50,top:10}}>Title track3.mp3</Text>
          <AntDesign name="barchart" size={30} style={{left:220,top:-10}}/>
          <Icon2 name="dots-three-vertical" size={25} style={{left:"92%",top:-40,marginBottom:-50}} />
          <Icon name="music" size={25} style={{top:30,left:10}} />
          <Text style={{left:50,top:10}}>Download track1.mp3</Text>
          <AntDesign name="barchart" size={30} style={{left:220,top:-10}}/>
          <Icon2 name="dots-three-vertical" size={25} style={{left:"92%",top:-40,marginBottom:-50}} />
        </View>
    );
}

export default Recent;