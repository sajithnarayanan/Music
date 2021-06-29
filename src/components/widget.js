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
import Icon2 from 'react-native-vector-icons/Entypo';
const Widget = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#376f8aaa'}}>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: '5%',
          paddingBottom: '3%',
          alignContent: 'space-between',
          flexWrap: 'wrap',
          backgroundColor: '#376f8aff',
        }}>
        <Icon
          name="arrow-left"
          size={20}
          style={{left: '5%', top: '1%', color: 'black'}}
         onPress={()=>navigation.goBack()}
        />
        <Text
          style={{
            left: 40,
            fontWeight: 'bold',
            fontSize: 20,
            top: '1%',
            width: '50%',
            color: '#fff',
          }}>
          Widgets
        </Text>
      </View>
      <View style={styles.row1}>
        <View style={styles.box1}>
        <Image
        source={{ uri: 'http://adrianoreyes.com/wp-content/uploads/Widget.jpg',}}
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
