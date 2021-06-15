import React,{useState} from 'react';
import Icon from 'react-native-vector-icons/Entypo'; //3dots
import Icon1 from 'react-native-vector-icons/AntDesign'; //playnext
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'; //playlist-plus
import Icon3 from 'react-native-vector-icons/FontAwesome';

import {  
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    Modal,
    TouchableOpacity,
 } from 'react-native';


 const styles = StyleSheet.create({
  container: {
    //marginTop: 35,
    //marginBottom: 35,
    paddingTop: "0.1%",
    paddingBottom: "0.1%",
    paddingLeft: "8%",
    borderBottomWidth: 1,
    borderColor: 'grey',
    flexDirection: 'row',
   // justifyContent: 'space-between',
    alignItems:"flex-start",

    //borderWidth:1,
    //borderColor:"black",

    //alignItems: "center",
    // justifyContent: "space-evenly",
  },
  fileName: {
    color: 'white',
   // paddingHorizontal: 70,

    marginTop: "2.5%",
    marginBottom: "2.5%",
    // marginLeft:70,

    //paddingTop: 20,
    //paddingBottom: 8,
    paddingLeft: "1%",
    fontSize: 20,

    //borderWidth:1,
   // borderColor: "black",
  },
    fileName2: {
    fontSize: 15,
    paddingBottom: 10,
    paddingLeft: "1%",
    color: 'white',
  },
  fileNameView: {
    marginLeft:"3%",
   flexDirection: 'column',
   //borderWidth:1,
   //borderColor:"black",
  },
  audioImage: {
    height: 50,
    width: 50,
    borderWidth:1,
    borderColor: "black",
   marginTop: "2.5%",
   marginBottom: "2.5%",
   //paddingVertical: "5%",
  },

  modalViewTop: {
    height: '60%',
  },
  modalViewBottom: {
    height: '40%',
    backgroundColor: '#376f8a',
    padding: '4%',
  },
  ModalHeaderView: {
    alignItems: 'center',
    //paddingLeft:"30%",
    paddingHorizontal: '10%',
    backgroundColor: '#376f8a',
    //marginTop:"5%",
    marginBottom: '5%',
  },
  ModalHeaderText: {
    fontSize: 21,
    color: 'white',
  },
  modalIcon: {
    padding: 20,
    color: 'white',
    //backgroundColor:"yellow",
    //width: "15%",
    //flexDirection: 'row',
  },
  dotIcon: {
    padding: 10,
    marginLeft:"89%",
    marginTop:"2.5%",
    //marginRight:"1%",
    color: 'white',
    width: '15%',
    //borderWidth:1,
    //borderColor:"black",
    position:"absolute",
  },

  IconsRow: {
    backgroundColor: '#376f8a',
    padding: '5%',
  },
  iconText: {
    color: 'white',
  },

});

  const Play = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
      <Modal visible={modalOpen} animationType="slide" transparent={true}>
        <View style={{backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
          <TouchableOpacity
            style={styles.modalViewTop}
            onPress={() => setModalOpen(false)}></TouchableOpacity>
        </View>

        <View style={styles.modalViewBottom}>
          <View style={styles.ModalHeaderView}>
            <Text style={styles.ModalHeaderText}>Audio file.mp4</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View style={styles.IconsRow}>
              <TouchableOpacity>
                <Icon1 name="stepforward" style={styles.modalIcon} size={20} />
                <Text style={styles.iconText}>Play Next</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Icon3 name="cut" style={styles.modalIcon} size={20} />
                <Text style={styles.iconText}> Trim</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.IconsRow}>
              <TouchableOpacity>
                <Icon1 name="plussquareo" style={styles.modalIcon} size={20} />
                <Text style={styles.iconText}> Add To</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Icon2 name="image" style={styles.modalIcon} size={20} />
                <Text style={styles.iconText}> ArtWork</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.IconsRow}>
              <TouchableOpacity>
                <Icon2
                  name="playlist-plus"
                  style={styles.modalIcon}
                  size={20}
                />
                <Text style={styles.iconText}> Enqueue</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Icon1 name="sharealt" style={styles.modalIcon} size={20} />
                <Text style={styles.iconText}> Share</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.IconsRow}>
              <TouchableOpacity>
                <Icon1 name="bells" style={styles.modalIcon} size={20} />
                <Text style={styles.iconText}>ringtone</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Icon1 name="delete" style={styles.modalIcon} size={20} />
                <Text style={styles.iconText}> delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
     <View>
      <Image source={require('../../assets/mostPlayedBg.jpg')} style={{ position:"absolute", width: "100%", height:"100%"}} />

      <ScrollView style={{backgroundColor:'#376f8aba',height:"100%"}}>
      
        <TouchableOpacity>
          <View style={styles.container}>
            <Image
              source={{
                uri: 'https://i.pinimg.com/originals/cf/a6/bb/cfa6bb1e13fcbcf23aead5028fc4d0e3.jpg',
              }}
              style={styles.audioImage}
            />
            <View style={styles.fileNameView}>
              <Text style={styles.fileName}>Audio file1.mp4</Text>
              <Text style={styles.fileName2}>Album name</Text>
            </View>

            <Icon
              name="dots-three-vertical"
              style={styles.dotIcon}
              size={20}
              onPress={() => setModalOpen(true)}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.container}>
            <Image
              source={{
                uri: 'https://i.pinimg.com/originals/cf/a6/bb/cfa6bb1e13fcbcf23aead5028fc4d0e3.jpg',
              }}
              style={styles.audioImage}
            />
            <View style={styles.fileNameView}>
              <Text style={styles.fileName}>Audio file2.mp4</Text>
              <Text style={styles.fileName2}>Album name</Text>
            </View>

            <Icon
              name="dots-three-vertical"
              style={styles.dotIcon}
              size={20}
              onPress={() => setModalOpen(true)}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.container}>
            <Image
              source={{
                uri: 'https://i.pinimg.com/originals/cf/a6/bb/cfa6bb1e13fcbcf23aead5028fc4d0e3.jpg',
              }}
              style={styles.audioImage}
            />
            <View style={styles.fileNameView}>
              <Text style={styles.fileName}>Audio file3.mp4</Text>
              <Text style={styles.fileName2}>Album name</Text>
            </View>

            <Icon
              name="dots-three-vertical"
              style={styles.dotIcon}
              size={20}
              onPress={() => setModalOpen(true)}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.container}>
            <Image
              source={{
                uri: 'https://i.pinimg.com/originals/cf/a6/bb/cfa6bb1e13fcbcf23aead5028fc4d0e3.jpg',
              }}
              style={styles.audioImage}
            />
            <View style={styles.fileNameView}>
              <Text style={styles.fileName}>Audio file4.mp4</Text>
              <Text style={styles.fileName2}>Album name</Text>
            </View>

            <Icon
              name="dots-three-vertical"
              style={styles.dotIcon}
              size={20}
              onPress={() => setModalOpen(true)}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.container}>
            <Image
              source={{
                uri: 'https://i.pinimg.com/originals/cf/a6/bb/cfa6bb1e13fcbcf23aead5028fc4d0e3.jpg',
              }}
              style={styles.audioImage}
            />
            <View style={styles.fileNameView}>
              <Text style={styles.fileName}>Audio file5.mp4</Text>
              <Text style={styles.fileName2}>Album name</Text>
            </View>

            <Icon
              name="dots-three-vertical"
              style={styles.dotIcon}
              size={20}
              onPress={() => setModalOpen(true)}
            />
          </View>
        </TouchableOpacity>

     <TouchableOpacity>
          <View style={styles.container}>
            <Image
              source={{
                uri: 'https://i.pinimg.com/originals/cf/a6/bb/cfa6bb1e13fcbcf23aead5028fc4d0e3.jpg',
              }}
              style={styles.audioImage}
            />
            <View style={styles.fileNameView}>
              <Text style={styles.fileName}>Audio file6.mp4</Text>
              <Text style={styles.fileName2}>Album name</Text>
            </View>

            <Icon
              name="dots-three-vertical"
              style={styles.dotIcon}
              size={20}
              onPress={() => setModalOpen(true)}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.container}>
            <Image
              source={{
                uri: 'https://i.pinimg.com/originals/cf/a6/bb/cfa6bb1e13fcbcf23aead5028fc4d0e3.jpg',
              }}
              style={styles.audioImage}
            />
            <View style={styles.fileNameView}>
              <Text style={styles.fileName}>Audio file7.mp4</Text>
              <Text style={styles.fileName2}>Album name</Text>
            </View>

            <Icon
              name="dots-three-vertical"
              style={styles.dotIcon}
              size={20}
              onPress={() => setModalOpen(true)}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.container}>
            <Image
              source={{
                uri: 'https://i.pinimg.com/originals/cf/a6/bb/cfa6bb1e13fcbcf23aead5028fc4d0e3.jpg',
              }}
              style={styles.audioImage}
            />
            <View style={styles.fileNameView}>
              <Text style={styles.fileName}>Audio file8.mp4</Text>
              <Text style={styles.fileName2}>Album name</Text>
            </View>

            <Icon
              name="dots-three-vertical"
              style={styles.dotIcon}
              size={20}
              onPress={() => setModalOpen(true)}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.container}>
            <Image
              source={{
                uri: 'https://i.pinimg.com/originals/cf/a6/bb/cfa6bb1e13fcbcf23aead5028fc4d0e3.jpg',
              }}
              style={styles.audioImage}
            />
            <View style={styles.fileNameView}>
              <Text style={styles.fileName}>Audio file9.mp4</Text>
              <Text style={styles.fileName2}>Album name</Text>
            </View>

            <Icon
              name="dots-three-vertical"
              style={styles.dotIcon}
              size={20}
              onPress={() => setModalOpen(true)}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.container}>
            <Image
              source={{
                uri: 'https://i.pinimg.com/originals/cf/a6/bb/cfa6bb1e13fcbcf23aead5028fc4d0e3.jpg',
              }}
              style={styles.audioImage}
            />
            <View style={styles.fileNameView}>
              <Text style={styles.fileName}>Audio file10.mp4</Text>
              <Text style={styles.fileName2}>Album name</Text>
            </View>

            <Icon
              name="dots-three-vertical"
              style={styles.dotIcon}
              size={20}
              onPress={() => setModalOpen(true)}
            />
          </View>
        </TouchableOpacity>


      </ScrollView>
      </View>
    </>
  
    );
}

export default Play;
