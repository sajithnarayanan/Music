import React from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Entypo';
import IconM from 'react-native-vector-icons/MaterialIcons';
const Recent = ({navigation}) => {
    return (
        <View style={{backgroundColor:"skyblue",height:"100%"}}>
         <View style={{ height:"8%",
    flexDirection:"row",
    flexWrap:"wrap",
    alignContent:"center",
    justifyContent:"space-around",
    alignItems:"center",
    backgroundColor: '#376f8aef'}}>
                <Icon  name="arrow-left" size={25} color="#fff"  style={{width:"10%",}}  onPress={() => navigation.goBack()} />
                <Text style={{color:"#fff", fontFamily: "italic", fontWeight: "bold", fontSize: 20,marginTop:"1%",right:"25%" }}>Recent Play</Text>
<View style={{height:"100%",width:"50%",flexDirection:"row", flexWrap:"wrap", alignContent:"center",justifyContent:"flex-end",}}>
<View style={{height:"100%",width:"43%",flexDirection:"row", flexWrap:"wrap",alignItems:"center", alignContent:"center",justifyContent:"flex-end", }}>
<AntDesign name="search1" size={30} color="#fff"  style={{right:"20%"}} onPress={()=>navigation.goBack()}/>
                <IconM name="card-giftcard" size={30} color="#fff" style={{left:"10%"}} onPress={() => navigation.navigate('Ads')} />
                </View>
                </View>
            </View>
            <View style={{justifycontent:"center",bottom:"2%",paddingHorizontal:"4%"}}>
        <Pressable><Icon name="music" size={25} style={{top:45}} />
          <Text style={{left:50,top:25}}>Audio.mp3</Text>
          <AntDesign name="barchart" size={30} style={{left:220}}/>
          <Icon1 name="dots-three-vertical" size={25} style={{left:310,top:-25}} />
          </Pressable>
          </View>
          <View  style={{justifycontent:"center",bottom:"2%",paddingHorizontal:"4%"}}>
          <Icon name="music" size={25} style={{top:35}} />
          <Text style={{left:50,top:15}}>Audio1.mp3</Text>
          <AntDesign name="barchart" size={30} style={{left:220,top:-10}}/>
          <Icon1 name="dots-three-vertical" size={25} style={{left:310,top:-35}} />
          </View>
          <View  style={{justifycontent:"center",bottom:"2%",paddingHorizontal:"4%"}}>
          <Icon name="music" size={25} style={{top:35}} />
          <Text style={{left:50,top:15}}>Title track1.mp3</Text>
          <AntDesign name="barchart" size={30} style={{left:220,top:-10}}/>
          <Icon1 name="dots-three-vertical" size={25} style={{left:310,top:-35}} />
          </View>
          <View  style={{justifycontent:"center",bottom:"2%",paddingHorizontal:"4%"}}>
          <Icon name="music" size={25} style={{top:35}} />
          <Text style={{left:50,top:15}}>Title track2.mp3</Text>
          <AntDesign name="barchart" size={30} style={{left:220,top:-10}}/>
          <Icon1 name="dots-three-vertical" size={25} style={{left:310,top:-35}} />
          </View>
          <View  style={{justifycontent:"center",bottom:"2%",paddingHorizontal:"4%"}}>
          <Icon name="music" size={25} style={{top:35}} />
          <Text style={{left:50,top:15}}>Title track3.mp3</Text>
          <AntDesign name="barchart" size={30} style={{left:220,top:-10}}/>
          <Icon1 name="dots-three-vertical" size={25} style={{left:310,top:-35}} />
          </View>
          <View  style={{justifycontent:"center",bottom:"2%",paddingHorizontal:"4%"}}>
          <Icon name="music" size={25} style={{top:35}} />
          <Text style={{left:50,top:15}}>Download track1.mp3</Text>
          <AntDesign name="barchart" size={30} style={{left:220,top:-10}}/>
          <Icon1 name="dots-three-vertical" size={25} style={{left:310,top:-35}} />
          </View>
        </View>
    );
}
export default Recent;