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
        height:"5%"}}>
          <Icon name="arrow-left" size={20}style={{top:10,left:10}} onPress={()=>navigation.goBack()} />
          <Text style={{left:50,fontWeight:"bold",top:-8}}>WHATSAPP</Text>
          <Icon1 name="search" size={25} color="black" style={{ top:-32, left: "80%" }} onPress={() => navigation.goBack()} />
                <Icon1 name="card-giftcard" size={25} color="black" style={{ top:-57, left: "68%" }} onPress={() => navigation.navigate('Ads')} />
            <Icon2 name="dots-three-vertical" size={22} style={{left:"91%",top:-82,marginBottom:-50}} />
            </View>
          <View style={{top:"2%",left:"3%"}}>
          <Pressable><Icon name="music" size={25} style={{top:20,left:10}} />
          <Text style={{left:50,bottom:2}}>Audio.mp3</Text>
          <AntDesign name="barchart" size={30} style={{left:220,bottom:27}}/>
          <Icon2 name="dots-three-vertical" size={25} style={{left:"88%",bottom:"55%"}}/>
          </Pressable>
          </View>
          <View style={{bottom:"5%",left:"3%"}}>
          <Icon name="music" size={25} style={{top:30,left:10}} />
          <Text style={{left:50,top:10}}>Audio1.mp3</Text>
          <AntDesign name="barchart" size={30} style={{left:220,top:-10}}/>
          <Icon2 name="dots-three-vertical" size={25} style={{left:"88%",bottom:"40%"}}/>
          </View>
          <View style={{bottom:"9%",left:"3%"}}>
          <Icon name="music" size={25} style={{top:30,left:10}} />
          <Text style={{left:50,top:10}}>Title track1.mp3</Text>
          <AntDesign name="barchart" size={30} style={{left:220,top:-20}}/>
          <Icon2 name="dots-three-vertical" size={25} style={{left:"88%",bottom:"48%"}}/>
          </View>
          <View style={{bottom:"13%",left:"3%"}}>
          <Icon name="music" size={25} style={{top:30,left:10}} />
          <Text style={{left:50,top:10}}>Title track2.mp3</Text>
          <AntDesign name="barchart" size={30} style={{left:220,top:-20}}/>
          <Icon2 name="dots-three-vertical" size={25} style={{left:"88%",bottom:"48%"}}/>
          </View>
          <View style={{bottom:"17%",left:"3%"}}>
          <Icon name="music" size={25} style={{top:30,left:10}} />
          <Text style={{left:50,top:10}}>Title track3.mp3</Text>
          <AntDesign name="barchart" size={30} style={{left:220,top:-20}}/>
          <Icon2 name="dots-three-vertical" size={25} style={{left:"88%",bottom:"45%"}}/>
          </View>
          <View style={{bottom:"22%",left:"3%"}}>
          <Icon name="music" size={25} style={{top:30,left:10}} />
          <Text style={{left:50,top:10}}>Download track1.mp3</Text>
          <AntDesign name="barchart" size={30} style={{left:220,top:-20}}/>
          <Icon2 name="dots-three-vertical" size={25} style={{left:"88%",bottom:"45%"}}/>
          </View>
        </View>
    );
}

export default Recent;