import React, {useState} from 'react';
import { View, Text,Modal,StyleSheet,Pressable, TextInput,Button,Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const ModalStack = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
         
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
         <Text>Create a new playlist</Text>
        <TextInput placeholder="Enter your playlist here!"   style={{borderWidth:1,borderColor:"gray", width:"100%",height:40,borderRadius:10,marginBottom:10}} maxLength={10}></TextInput>
        <Pressable ><Text style={{color:"cyan",left:130}}onPress={()=>setModalVisible(true)}>CANCEL</Text></Pressable>
        <Pressable><Text style={{color:"cyan",left:220,top:-18}} onPress={()=>navigation.navigate('HomeScreen')}>OK</Text></Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 42
  },
  modalView: {
    margin: 10,
    bottom:50,
    width:"80%",
    height:"20%",
    backgroundColor: "grey",
    padding: 30,
 
    },
 
  

});

export default ModalStack;