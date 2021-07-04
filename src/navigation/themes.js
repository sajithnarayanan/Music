import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
const Themes = ({navigation}) => {
  return (
<>
    
<View style={{ height:"8%",
    flexDirection:"row",
    flexWrap:"wrap",
    alignContent:"center",
    justifyContent:"space-around",
    alignItems:"center",
    backgroundColor: '#376f8aef'}}>
                <Icon  name="arrow-left" size={30} color="#fff"  style={{width:"10%",}}  onPress={() => navigation.goBack()} />
                <Text style={{color:"#fff", fontFamily: "italic", fontWeight: "bold", fontSize: 20,marginTop:"1%" }}>Themes</Text>
<View style={{height:"100%",width:"50%",flexDirection:"row", flexWrap:"wrap", alignContent:"center",justifyContent:"flex-end",}}>
<View style={{height:"100%",width:"43%",flexDirection:"row", flexWrap:"wrap",alignItems:"center", alignContent:"center",justifyContent:"flex-end", }}>
                <IconM name="card-giftcard" size={30} color="#fff"  onPress={() => navigation.navigate('Ads')} />
                </View>
                </View>
            </View>
<View style={{height:"92%", backgroundColor: '#376f8aaa',justifyContent:"space-around"}}>
      <View style={styles.row1}>
        <View style={styles.box1}>
        <Image
        style={{ width: '100%', height: '100%', justifyContent:"center"}}
        source={require('../assets/themes/one.jpg')} />
        <AntDesign name="download" size={20} color="red" style={{position:"absolute"}}/>
        </View>
        <View style={styles.box1}>
        <Image
        style={{ width: '100%', height: '100%', justifyContent:"center"}}
        source={require('../assets/themes/two.jpg')} />
        <AntDesign name="download" size={20} color="red" style={{position:"absolute"}}/>
        </View>
        <View style={styles.box1}>
        <Image
        style={{ width: '100%', height: '100%', justifyContent:"center"}}
        source={require('../assets/themes/three.jpg')} />
        <AntDesign name="download" size={20} color="red" style={{position:"absolute"}}/>
        </View>
      </View>
      <View style={styles.row1}>
        <View style={styles.box1}>
        <Image
        style={{ width: '100%', height: '100%', justifyContent:"center"}}
        source={require('../assets/themes/four.jpg')} />
        <AntDesign name="download" size={20} color="red" style={{position:"absolute"}}/>
        </View>
        <View style={styles.box1}>
        <Image
        style={{ width: '100%', height: '100%', justifyContent:"center"}}
        source={require('../assets/themes/five.jpg')} />
        <AntDesign name="download" size={20} color="red" style={{position:"absolute"}}/>
        </View>
        <View style={styles.box1}>
        <Image
        style={{ width: '100%', height: '100%', justifyContent:"center"}}
        source={require('../assets/themes/six.jpg')} />
        <AntDesign name="download" size={20} color="red" style={{position:"absolute"}}/>
        </View>
      </View>
      <View style={styles.row1}>
        <View style={styles.box1}>
        <Image
        style={{ width: '100%', height: '100%', justifyContent:"center"}}
        source={require('../assets/themes/one.jpg')} />
        <AntDesign name="download" size={20} color="red" style={{position:"absolute"}}/>
        </View>
        <View style={styles.box1}>
        <Image
        style={{ width: '100%', height: '100%', justifyContent:"center"}}
        source={require('../assets/themes/main.jpg')} />
        <AntDesign name="download" size={20} color="red" style={{position:"absolute"}}/>
        </View>
        <View style={styles.box1}>
        <Image
        style={{ width: '100%', height: '100%', justifyContent:"center"}}
        source={require('../assets/themes/main2.jpg')} />
        <AntDesign name="download" size={20} color="red" style={{position:"absolute"}}/>
        </View>
      </View>
      </View>
     </>
  );
};
const styles = StyleSheet.create({
  row1: {
    height: '30%',
    width: '100%',
   // marginTop: '5%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:"space-around",
    alignContent:"center",
  },
  box1: {
    height: '100%',
    width: '30%',
   // margin: '3%',
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#70D4FA99",
    
  },
});
export default Themes;