import React, {useState} from 'react';
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
    paddingTop: '0.1%',
    paddingBottom: '0.1%',
    paddingLeft: '8%',
    borderBottomWidth: 1,
    borderColor: 'grey',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  fileName: {
    color: 'white',
    marginTop: '2.5%',
    marginBottom: '2.5%',
    paddingLeft: '1%',
    fontSize: 20,
  },
  fileName2: {
    fontSize: 15,
    paddingBottom: '1%',
    paddingLeft: '1%',
    color: 'white',
  },
  fileNameView: {
    marginLeft: '3%',
    flexDirection: 'column',
  },
  audioImage: {
    height: 50,
    width: 50,

    marginTop: '2.5%',
    marginBottom: '2.5%',
  },
  dotIcon: {
    padding: 10,
    marginLeft: '89%',
    marginTop: '2.5%',
    color: 'white',
    width: '15%',
    position: 'absolute',
  },
  modalViewTop: {
    height: '60%',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    flexWrap: 'wrap',
  },
  modalViewBottom: {
  flexWrap: 'wrap',
    height: '40%',
    backgroundColor: '#376f8a',
    justifyContent:"center",
    alignContent:"center",
    alignItems:"center",
    borderWidth:1,
    borderColor:"transparent",
  },
  ModalHeaderView: {
  justifyContent:"center",
    backgroundColor: '#376f8a',
    borderWidth:1,
    borderColor:"transparent",
  },
  ModalHeaderText: {
    fontSize: 21,
    color: 'white',
    borderWidth:1,
    borderColor:"transparent",
    marginBottom:"7%",
  },
  modalIconsContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems:"center",
    justifyContent: "center",
    alignContent:"space-between",
    margin: '1%',
   // marginTop:"7%",
   borderWidth:1,
   borderColor:"transparent",

  },
  IconsRow: {
    backgroundColor: '#376f8a',
    marginLeft: '4%',
   marginRight: '4%',
    alignItems: 'center',
    alignContent:"center",
   justifyContent: 'space-between',
  },
  modalIcon: {
    padding: '5.5%',
    color: 'white',
  },
  iconText: {
    color: 'white',
  },
  IconTouchableOpacity: {
    alignItems: 'center',
  },
});

const Play = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Modal visible={modalOpen} animationType="slide" transparent={true}>
        <TouchableOpacity
          style={styles.modalViewTop}
          onPress={() => setModalOpen(false)}></TouchableOpacity>

        <View style={styles.modalViewBottom}>
          <View style={styles.ModalHeaderView}>
            <Text style={styles.ModalHeaderText}>Audio file.mp4</Text>
          </View>
          <View style={styles.modalIconsContainer}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.IconsRow}>
                <TouchableOpacity style={styles.IconTouchableOpacity}>
                  <Icon1
                    name="stepforward"
                    style={styles.modalIcon}
                    size={20}
                  />
                  <Text style={styles.iconText}>Play Next</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.IconTouchableOpacity}>
                  <Icon3 name="cut" style={styles.modalIcon} size={20} />
                  <Text style={styles.iconText}>Trim</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.IconsRow}>
                <TouchableOpacity style={styles.IconTouchableOpacity}>
                  <Icon1
                    name="plussquareo"
                    style={styles.modalIcon}
                    size={20}
                  />
                  <Text style={styles.iconText}>Add To</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.IconTouchableOpacity}>
                  <Icon2 name="image" style={styles.modalIcon} size={20} />
                  <Text style={styles.iconText}>ArtWork</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.IconsRow}>
                <TouchableOpacity style={styles.IconTouchableOpacity}>
                  <Icon2
                    name="playlist-plus"
                    style={styles.modalIcon}
                    size={20}
                  />
                  <Text style={styles.iconText}> Enqueue</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.IconTouchableOpacity}>
                  <Icon1 name="sharealt" style={styles.modalIcon} size={20} />
                  <Text style={styles.iconText}>Share</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.IconsRow}>
                <TouchableOpacity style={styles.IconTouchableOpacity}>
                  <Icon1 name="bells" style={styles.modalIcon} size={20} />
                  <Text style={styles.iconText}>ringtone</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.IconTouchableOpacity}>
                  <Icon1 name="delete" style={styles.modalIcon} size={20} />
                  <Text style={styles.iconText}>delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <View>
        <Image
          source={require('../../assets/mostPlayedBg.jpg')}
          style={{position: 'absolute', width: '100%', height: '100%'}}
        />

        <ScrollView style={{backgroundColor: '#376f8aba', height: '100%'}}>
          <TouchableOpacity>
            <View style={styles.container}>
              <Image
                source={{
                  uri: 'https://img.youtube.com/vi/4e1yjUBNXm4/0.jpg',
                }}
                style={styles.audioImage}
              />
              <View style={styles.fileNameView}>
                <Text style={styles.fileName}>Kutty Bomma.mp4</Text>
                <Text style={styles.fileName2}>Angu Vaikuntapurathu </Text>
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
                  uri: 'data:image/jpeg;base64,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',
                }}
                style={styles.audioImage}
              />
              <View style={styles.fileNameView}>
                <Text style={styles.fileName}>Ranam Title Track.mp4</Text>
                <Text style={styles.fileName2}>Ranam</Text>
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
                  uri: 'data:image/jpeg;base64,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',
                }}
                style={styles.audioImage}
              />
              <View style={styles.fileNameView}>
                <Text style={styles.fileName}>24 Karrat.mp4</Text>
                <Text style={styles.fileName2}>Bruno Mars</Text>
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
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ16jWWzK-lGTI49_6KTKv7Ap872ujm61xMWp2nzJoEWliLjuFpQYpC_HTe7v7OXFjPKxY&usqp=CAU',
                }}
                style={styles.audioImage}
              />
              <View style={styles.fileNameView}>
                <Text style={styles.fileName}>Lose Yourself.mp4</Text>
                <Text style={styles.fileName2}>Eminem</Text>
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
                  uri: 'data:image/jpeg;base64,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',
                }}
                style={styles.audioImage}
              />
              <View style={styles.fileNameView}>
                <Text style={styles.fileName}>Odey Odey.mp4</Text>
                <Text style={styles.fileName2}>Raja Rani</Text>
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
                  uri: 'data:image/jpeg;base64,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',
                }}
                style={styles.audioImage}
              />
              <View style={styles.fileNameView}>
                <Text style={styles.fileName}>Rowdy baby.mp4</Text>
                <Text style={styles.fileName2}>Mari 2</Text>
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
                  uri: 'https://www.rollingstone.com/wp-content/uploads/2018/06/chester-bennington-linkin-park-obit-a53cd0a0-c57a-484e-b0f6-e52173634d93.jpg',
                }}
                style={styles.audioImage}
              />
              <View style={styles.fileNameView}>
                <Text style={styles.fileName}>Numb.mp4</Text>
                <Text style={styles.fileName2}>Linkin Park</Text>
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
                  uri: 'https://i.ytimg.com/vi/tXKGx_paaLs/maxresdefault.jpg',
                }}
                style={styles.audioImage}
              />
              <View style={styles.fileNameView}>
                <Text style={styles.fileName}>Pani Pali.mp4</Text>
                <Text style={styles.fileName2}>NJ</Text>
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
                  uri: 'https://static.toiimg.com/thumb/msid-63781845,width-800,height-600,resizemode-75,imgsize-66125,pt-32,y_pad-40/63781845.jpg',
                }}
                style={styles.audioImage}
              />
              <View style={styles.fileNameView}>
                <Text style={styles.fileName}>Jeevamshamayi.mp4</Text>
                <Text style={styles.fileName2}>Theevandi</Text>
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
                  uri: 'https://i.scdn.co/image/ab67616d0000b2732e0b98381dd3a041bfb1f6cd',
                }}
                style={styles.audioImage}
              />
              <View style={styles.fileNameView}>
                <Text style={styles.fileName}>Love Story.mp4</Text>
                <Text style={styles.fileName2}>Taylor Swift</Text>
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
};

export default Play;
