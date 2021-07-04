import React,{useState} from 'react';
import Icon from 'react-native-vector-icons/Entypo'; //3dots
import Icon1 from 'react-native-vector-icons/AntDesign'; //playnext
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'; //playlist-plus
import Icon3 from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialIcons';

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
  fileNameView: {
    marginLeft: '4%',
    marginTop:"2%",
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

const Recentadd = ({navigation}) => {
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
        </View>
      </Modal>

     <View>

     
      <Image source={require('../../assets/RecentBg.jpg')} style={{ position:"absolute", width: "100%", height:"100%"}} />


      <View style={{  height:"8%",
    flexDirection:"row",
    flexWrap:"wrap",
    alignContent:"center",
    justifyContent:"space-between",
    alignItems:"center",
    backgroundColor: '#376f8aef'}}>
               <Icon name="arrow-left" size={25} style={{left: '5%', top: '1%', color: '#fff'}} onPress={() => navigation.goBack()}/>
                <Text style={{color:"#fff", fontFamily: "italic", fontWeight: "bold", fontSize: 20,marginTop:"1%" }}>Recent Add</Text>
<View style={{height:"100%",width:"60%",flexDirection:"row", flexWrap:"wrap", alignContent:"center",justifyContent:"flex-end",}}>
<View style={{height:"100%",width:"30%",flexDirection:"row", flexWrap:"wrap",alignItems:"center", alignContent:"center",justifyContent:"space-between", }}>
                <IconM name="card-giftcard" size={30} color="#fff"  onPress={() => navigation.navigate('Ads')} />
                <IconM name="search" size={30} color="#fff"  />
                </View>
                </View>
            </View>

      <ScrollView style={{backgroundColor:'#376f8aba',height:"100%"}}>
      
        <TouchableOpacity>
          <View style={styles.container}>
            <Image
              source={{
                uri: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1615974690/srch_pplmumbai_INO332100012.jpg',
              }}
              style={styles.audioImage}
            />
            <View style={styles.fileNameView}>
              <Text style={styles.fileName}>Narabali.mp4</Text>
              <Text style={styles.fileName2}>Nayattu</Text>
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
                uri: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1615974690/srch_pplmumbai_INO332100012.jpg',
              }}
              style={styles.audioImage}
            />
            <View style={styles.fileNameView}>
              <Text style={styles.fileName}>Appalaale.mp4</Text>
              <Text style={styles.fileName2}>Nayattu</Text>
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
                uri: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1617960621/srch_pplmumbai_INA982100172.jpg',
              }}
              style={styles.audioImage}
            />
            <View style={styles.fileNameView}>
              <Text style={styles.fileName}>Innale Mellane.mp4</Text>
              <Text style={styles.fileName2}>nizhal</Text>
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
                uri: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1616652788/srch_pplmumbai_INO332100022.jpg',
              }}
              style={styles.audioImage}
            />
            <View style={styles.fileNameView}>
              <Text style={styles.fileName}>Did She Catch Me.mp4</Text>
              <Text style={styles.fileName2}>Kho Kho</Text>
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
                uri: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_believe/music/3616550816984/1605791727/srch_believe_A10320WT036744131A.jpg',
              }}
              style={styles.audioImage}
            />
            <View style={styles.fileNameView}>
              <Text style={styles.fileName}>Stereo Hearts.mp4</Text>
              <Text style={styles.fileName2}>Gym-class heroes</Text>
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
                uri: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1610458255/srch_pplmumbai_INA982100009.jpg',
              }}
              style={styles.audioImage}
            />
            <View style={styles.fileNameView}>
              <Text style={styles.fileName}>Chekuthan.mp4</Text>
              <Text style={styles.fileName2}>Chekuthan</Text>
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
                uri: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1579607248/srch_pplmumbai_INA982000101.jpg',
              }}
              style={styles.audioImage}
            />
            <View style={styles.fileNameView}>
              <Text style={styles.fileName}>Kollappedum.mp4</Text>
              <Text style={styles.fileName2}>Ribin Richard-ft.Nihal Sadiq</Text>
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
                uri: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1623413343/srch_pplmumbai_INM202130052.jpg',
              }}
              style={styles.audioImage}
            />
            <View style={styles.fileNameView}>
              <Text style={styles.fileName}>Oblivion.mp4</Text>
              <Text style={styles.fileName2}>Oblivion</Text>
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
                uri: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1622960070/srch_pplmumbai_IND292101374.jpg',
              }}
              style={styles.audioImage}
            />
            <View style={styles.fileNameView}>
              <Text style={styles.fileName}>Life Of Charlie.mp4</Text>
              <Text style={styles.fileName2}>777 Charlie (Malayalam)</Text>
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
              <Text style={styles.fileName}>24k Magic.mp4</Text>
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

      </ScrollView>
      </View>
    </>
  
    );
}

export default Recentadd;