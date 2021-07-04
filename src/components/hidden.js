import React, {useState} from 'react';
import {CheckBox} from 'react-native-elements';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
const Hidden = ({navigation}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [checkboxValue1, setcheckboxValue1] = useState(false);
  const [checkboxValue2, setcheckboxValue2] = useState(false);
  return (
    <View>
      <Modal visible={modalOpen} animationType="slide">
        <View style={{backgroundColor: '#376f8aef', height: '100%'}}>
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
              size={25}
              style={{left: '5%', top: '1%', color: '#fff'}}
              onPress={() => setModalOpen(false)}
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
              Add Hidden Folders
            </Text>
            <Icon2
              name="check"
              size={25}
              style={{color: '#fff', top: '1%', marginLeft: '35%'}}
              onPress={() =>
                ToastAndroid.show(
                  'Please select a folder to hide!!',
                  ToastAndroid.SHORT,
                )
              }
            />
          </View>
          <TouchableOpacity>
            <View style={styles.container1}>
              <CheckBox
                containerStyle={{marginLeft: '1%'}}
                checked={checkboxValue1}
                onPress={() => setcheckboxValue1(!checkboxValue1)}
              />
              <Image
                source={{
                  uri: 'https://thumb1.shutterstock.com/image-photo/stock-vector-vector-illustration-of-folder-icon-in-grey-250nw-599718644.jpg',
                }}
                style={styles.audioImage}
              />
              <View style={styles.fileNameView}>
                <Text style={styles.fileName}>Whatsapp Audio</Text>
                <Text style={styles.fileName2}>
                  /storage/emulated/0/Whatsap
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.container1}>
              <CheckBox
                containerStyle={{marginLeft: '1%'}}
                checked={checkboxValue2}
                onPress={() => setcheckboxValue2(!checkboxValue2)}
              />
              <Image
                source={{
                  uri: 'https://thumb1.shutterstock.com/image-photo/stock-vector-vector-illustration-of-folder-icon-in-grey-250nw-599718644.jpg',
                }}
                style={styles.audioImage}
              />
              <View style={styles.fileNameView}>
                <Text style={styles.fileName}>Folder</Text>
                <Text style={styles.fileName2}>
                  /storage/emulated../0/music
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
      <Image
        source={require('../assets/hiddenBG.jpg')}
        style={{position: 'absolute', width: '100%', height: '100%'}}
      />
      <View style={{backgroundColor: '#376f8aef', height: '100%'}}>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: '5%',
            flexWrap: 'wrap',
          }}>
          <Icon
            name="arrow-left"
            size={20}
            style={{left: '5%', top: '1%', color: '#fff'}}
            onPress={() => navigation.goBack()}
          />
          <Text
            style={{
              left: 65,
              fontWeight: 'bold',
              fontSize: 20,
              top: '1%',
              width: '50%',
              color: '#fff',
            }}>
            Hidden Folders
          </Text>
          <TouchableOpacity style={{width: '40%', alignItems: 'flex-end'}}>
            <Icon2
              name="plus"
              size={30}
              style={{
                color: '#fff',
                top: '1%',
                marginLeft: '40%',
                width: '20%',
              }}
              onPress={() => setModalOpen(true)}
            />
          </TouchableOpacity>
        </View>
        
        <Icon1
          name="folder-open"
          size={60}
          style={{left: '42%', top: '30%', color: '#fff'}}
        />
        <Text style={{left: '35%', top: '32%', color: '#fff'}}>
          No folder found
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container1: {
    paddingTop: '0.1%',
    paddingBottom: '0.1%',
    paddingLeft: '8%',
    borderBottomWidth: 1,
    borderColor: 'grey',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  fileNameView: {
    marginLeft: '4%',
    marginTop: '2%',
    flexDirection: 'column',
  },
  fileName: {
    color: 'white',
    marginTop: '2.5%',
    marginBottom: '2.5%',
    fontSize: 18,
  },
  fileName2: {
    fontSize: 15,
    color: 'white',
  },
  audioImage: {
    height: 50,
    width: 50,
    marginTop: '2.5%',
    marginBottom: '2.5%',
  },
  button: {},
});
export default Hidden;