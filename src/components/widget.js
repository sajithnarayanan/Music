import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
const Widget = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#376f8aaa'}}>
     <View style={{ height:"8%",
    flexDirection:"row",
    flexWrap:"wrap",
    alignContent:"center",
    justifyContent:"space-around",
    alignItems:"center",
    backgroundColor: '#376f8aef'}}>
                <Icon  name="arrow-left" size={30} color="#fff"  style={{width:"10%",}}  onPress={() => navigation.goBack()} />
                <Text style={{color:"#fff", fontFamily: "italic", fontWeight: "bold", fontSize: 20,marginTop:"1%" }}>Widget</Text>
<View style={{height:"100%",width:"50%",flexDirection:"row", flexWrap:"wrap", alignContent:"center",justifyContent:"flex-end",}}>
<View style={{height:"100%",width:"43%",flexDirection:"row", flexWrap:"wrap",alignItems:"center", alignContent:"center",justifyContent:"flex-end", }}>
                <IconM name="card-giftcard" size={30} color="#fff"  onPress={() => navigation.navigate('Ads')} />
                </View>
                </View>
            </View>
      <View style={styles.row1}>
        <View style={styles.box1}>
        <Image
        source={{ uri: 'https://cdn.dribbble.com/users/1983013/screenshots/6862618/800x600.png?compress=1&resize=400x300',}}
        style={{ width: '80%', height: '80%'}}
      />
        </View>
        <View style={styles.box1}>
        <Image
        source={{ uri: 'https://docs.tizen.org/static/browse_samples/overview/native/Music_Player_Widget/images/music_widget_wearable_sd.png',}}
        style={{ width: '80%', height: '80%'}}
      />
        </View>
      </View>
      <View style={styles.row1}>
      <View style={styles.box1}>
      <Image
        source={{ uri: 'https://cdn.dribbble.com/users/44365/screenshots/1245394/mini_music_player___byjad.png',}}
        style={{ width: '80%', height: '80%'}}
      />
        </View>
        <View style={styles.box1}>
        <Image
        source={{ uri: 'https://i.pinimg.com/236x/27/06/f2/2706f23dece5d96352d829dccb996a30.jpg',}}
        style={{ width: '80%', height: '80%'}}
      />
        </View>
      </View>
      <View style={styles.row1}>
      <View style={styles.box1}>
      <Image
        source={{ uri: 'https://i.pinimg.com/originals/2c/00/d4/2c00d47d9e0c7a1ea5fefd12a083d46c.png',}}
        style={{ width: '80%', height: '80%'}}
      />
        </View>
        <View style={styles.box1}>
        <Image
        source={{ uri: 'https://i.pinimg.com/originals/32/06/bf/3206bfae6c0213cc160668606a1d2e26.jpg',}}
        style={{ width: '80%', height: '80%'}}
      />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  row1: {
    height: '26%',
    width: '100%',
    marginTop: '5%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:"center",
    alignContent:"center"
  },
  box1: {
    height: '100%',
    width: '40%',
    margin: '3%',
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#70D4FA99",
    borderRadius:10
  },
});
export default Widget;
