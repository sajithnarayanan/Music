import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
 
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Entypo'; //3dots
import Icon1 from 'react-native-vector-icons/AntDesign'; //playnext
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'; //playlist-plus
import Icon3 from 'react-native-vector-icons/FontAwesome';
const Tab = createMaterialTopTabNavigator();

function MyTabs({navigation}) {
  const insets = useSafeAreaInsets();
  return (

    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#f4ce5e',
        labelStyle: {fontSize: 12},
        style: {backgroundColor: '#376f8a'},
      }}>
      <Tab.Screen
        name="Tracks"
        component={Tracks}
        options={{tabBarLabels: 'Tracks' }}/>
      <Tab.Screen
        name="Artists"
        component={Artists}
        options={{tabBarLabels: 'Artists'}}
      />
      <Tab.Screen
        name="Albums"
        component={Albums}
        options={{tabBarLabels: 'Albums'}}
      />

      <Tab.Screen
        name="Genres"
        component={Genres}
        options={{tabBarLabels: 'Genres'}}
      />
    </Tab.Navigator>
    
  );
}
export default MyTabs;
//**********************************************Stylesheet starts here************************************************

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
//*************************************Stylesheet finished*****************************************************/
function Tracks({navigation}) {
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
     <Image source={require('../assets/bg3.jpg')} style={{ position:"absolute", width: "100%", height:"100%"}} />


      <ScrollView style={{backgroundColor:'#376f8aba',height:"100%"}}>
     {/* <AntDesign name="arrowleft" size={25} style={{left:10}} onPress={()=>navigation.navigate('Home')} /> */}

        <TouchableOpacity>
          <View style={styles.container}>
            <Image
              source={{
                uri: 'https://static.toiimg.com/photo/msid-63565937/63565937.jpg?102139',
              }}
              style={styles.audioImage}
            />
            <View style={styles.fileNameView}>
              <Text style={styles.fileName}>01-Ranam Track1.mp4</Text>
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
                uri: 'https://static.toiimg.com/photo/msid-63565937/63565937.jpg?102139',
              }}
              style={styles.audioImage}
            />
            <View style={styles.fileNameView}>
              <Text style={styles.fileName}>02-Pathiye.mp4</Text>
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
                uri: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1579520415/srch_muzik247_FT1012354.jpg',
              }}
              style={styles.audioImage}
            />
            <View style={styles.fileNameView}>
              <Text style={styles.fileName}>03-Uyire.mp4</Text>
              <Text style={styles.fileName2}>Gauthamante Radham</Text>
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
                uri: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1557654158/srch_pplmumbai_INA981900144.jpg',
              }}
              style={styles.audioImage}
            />
            <View style={styles.fileNameView}>
              <Text style={styles.fileName}>04-Parayuvaan.mp4</Text>
              <Text style={styles.fileName2}>Ishq</Text>
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
                uri: 'https://img.wynk.in/unsafe/150x150/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1554901912/srch_pplmumbai_IND291816203.jpg',
              }}
              style={styles.audioImage}
            />
            <View style={styles.fileNameView}>
              <Text style={styles.fileName}>05-Pavizha Mazha.mp4</Text>
              <Text style={styles.fileName2}>Athiran</Text>
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
                uri: 'https://img.wynk.in/unsafe/150x150/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1576839751/srch_muzik247_FT1012345.jpg',
              }}
              style={styles.audioImage}
            />
            <View style={styles.fileNameView}>
              <Text style={styles.fileName}>06-Kamini.mp4</Text>
              <Text style={styles.fileName2}>Anugraheethan Antony</Text>
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
                uri: 'https://img.wynk.in/unsafe/150x150/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1548665784/srch_pplmumbai_IND291815596.jpg',
              }}
              style={styles.audioImage}
            />
            <View style={styles.fileNameView}>
              <Text style={styles.fileName}>07-Uyiril Thodum.mp4</Text>
              <Text style={styles.fileName2}>Kumbalangi Nights</Text>
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
                uri: 'https://img.wynk.in/unsafe/150x150/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1561544428/srch_muzik247_FT1012253.jpg',
              }}
              style={styles.audioImage}
            />
            <View style={styles.fileNameView}>
              <Text style={styles.fileName}>08-Neeyilla neram.mp4</Text>
              <Text style={styles.fileName2}>Luca</Text>
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
                uri: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1513936828/srch_pplmumbai_INA981700082.jpg',
              }}
              style={styles.audioImage}
            />
            <View style={styles.fileNameView}>
              <Text style={styles.fileName}>09-Mizhiyil.mp4</Text>
              <Text style={styles.fileName2}>Mayanadhi</Text>
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
                uri: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1564576154/srch_pplmumbai_INA981900673.jpg',
              }}
              style={styles.audioImage}
            />
            <View style={styles.fileNameView}>
              <Text style={styles.fileName}>10-Aaraadhike.mp4</Text>
              <Text style={styles.fileName2}>Ambili</Text>
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
//*****************************************************************************************************************/

function Artists() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
   <Modal visible={modalOpen} animationType="slide" transparent={true}>
        <TouchableOpacity
          style={styles.modalViewTop}
          onPress={() => setModalOpen(false)}></TouchableOpacity>

        <View style={styles.modalViewBottom}>
          <View style={styles.ModalHeaderView}>
            <Text style={styles.ModalHeaderText}>Artist</Text>
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
   <Image source={require('../assets/bg3.jpg')} style={{ position:"absolute", width: "100%", height:"100%"}} />

   <ScrollView style={{backgroundColor:'#376f8aba',height:"100%"}}>

    
      <TouchableOpacity>
        <View style={styles.container}>
          <Image
            source={{
              uri: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/Artist-of-the-Year-Arijit-Singh-300x300final1.png',
            }}
            style={styles.audioImage}
          />
          <View style={styles.fileNameView}>
            <Text style={styles.fileName}>Arjith Singh</Text>
            <Text style={styles.fileName2}>3songs | 1 album</Text>
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
              uri: 'https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/AR_Rahman_1200.jpg?itok=UHKerXfT',
            }}
            style={styles.audioImage}
          />
           <View style={styles.fileNameView}>
            <Text style={styles.fileName}>AR Rahman</Text>
            <Text style={styles.fileName2}> 4songs | 2 album</Text>
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
              uri: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/Eminem-300x300hits.png',
            }}
            style={styles.audioImage}
          />
         <View style={styles.fileNameView}>
            <Text style={styles.fileName}>Eminem</Text>
            <Text style={styles.fileName2}>3songs | 1 album</Text>
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
              uri: 'https://resize.indiatvnews.com/en/resize/oldbucket/715_-/entertainmentbollywood/Hariharan_not_g5440.jpg',
            }}
            style={styles.audioImage}
          />
           <View style={styles.fileNameView}>
            <Text style={styles.fileName}>Hariharan</Text>
            <Text style={styles.fileName2}>3songs | 2 album</Text>
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
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/S_Janaki_in_Pune%2C_India_2007.JPG/220px-S_Janaki_in_Pune%2C_India_2007.JPG',
            }}
            style={styles.audioImage}
          />
       <View style={styles.fileNameView}>
            <Text style={styles.fileName}>Janaki</Text>
            <Text style={styles.fileName2}>3songs | 1 album</Text>
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
               uri: 'https://i.pinimg.com/originals/fe/3d/83/fe3d83621c1225bdd005ee9124d9ff6d.jpg',            }}
            style={styles.audioImage}
          />
           <View style={styles.fileNameView}>
            <Text style={styles.fileName}>Maroon 5</Text>
            <Text style={styles.fileName2}>3songs | 3 album</Text>
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
               uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Live_on_stage_at_The_Celebrate_Keralam_Festival_%28photographed_by_Anand_Menon%29_2014-07-05_11-34.jpg/220px-Live_on_stage_at_The_Celebrate_Keralam_Festival_%28photographed_by_Anand_Menon%29_2014-07-05_11-34.jpg',            }}
            style={styles.audioImage}
          />
          <View style={styles.fileNameView}>
            <Text style={styles.fileName}>Rex Vijayan</Text>
            <Text style={styles.fileName2}>5songs | 2 album</Text>
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
              uri: 'https://www.biography.com/.image/t_share/MTgwODI3ODAxNjAxOTc1Mzg0/rihanna.jpg',
            }}
            style={styles.audioImage}
          />
           <View style={styles.fileNameView}>
            <Text style={styles.fileName}>Rihanna</Text>
            <Text style={styles.fileName2}>1song | 1 album</Text>
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
               uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Shankar_Mahadevan.jpg/220px-Shankar_Mahadevan.jpg',            }}
            style={styles.audioImage}
          />
           <View style={styles.fileNameView}>
            <Text style={styles.fileName}>Shankar Mahadevan</Text>
            <Text style={styles.fileName2}>2songs | 1 album</Text>
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

//*****************************************************************************************************************/

function Albums() {

  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
    <Modal visible={modalOpen} animationType="slide" transparent={true}>
        <TouchableOpacity
          style={styles.modalViewTop}
          onPress={() => setModalOpen(false)}></TouchableOpacity>

        <View style={styles.modalViewBottom}>
          <View style={styles.ModalHeaderView}>
            <Text style={styles.ModalHeaderText}>Album</Text>
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
   <Image source={require('../assets/bg3.jpg')} style={{ position:"absolute", width: "100%", height:"100%"}} />

   <ScrollView style={{backgroundColor:'#376f8aba',height:"100%"}}>

    
      <TouchableOpacity>
        <View style={styles.container}>
          <Image
            source={{
              uri: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1564056384/srch_pplmumbai_INA981900583.jpg',
            }}
            style={styles.audioImage}
          />
          <View style={styles.fileNameView}>
            <Text style={styles.fileName}>Ambili</Text>
            <Text style={styles.fileName2}> 4 songs</Text>
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
               uri: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1557654158/srch_pplmumbai_INA981900144.jpg',
            }}
            style={styles.audioImage}
          />
          <View style={styles.fileNameView}>
            <Text style={styles.fileName}>Ishq</Text>
            <Text style={styles.fileName2}> 3 songs</Text>
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
               uri: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1561544428/srch_muzik247_FT1012253.jpg',
            }}
            style={styles.audioImage}
          />
        <View style={styles.fileNameView}>
            <Text style={styles.fileName}>Luca</Text>
            <Text style={styles.fileName2}> 4 songs</Text>
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
               uri: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_sonymusic/music/srch_sonymusic_A10328E0008931863G.jpg',
            }}
            style={styles.audioImage}
          />
         <View style={styles.fileNameView}>
            <Text style={styles.fileName}>9 Movie</Text>
            <Text style={styles.fileName2}> 4 songs</Text>
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
               uri: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1481272360/srch_muzik247_FT1011466.jpg',
            }}
            style={styles.audioImage}
          />
         <View style={styles.fileNameView}>
            <Text style={styles.fileName}>Ezra</Text>
            <Text style={styles.fileName2}> 4 songs</Text>
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
               uri: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1491808039/srch_simca_INM441601775.png',
            }}
            style={styles.audioImage}
          />
         <View style={styles.fileNameView}>
            <Text style={styles.fileName}>Godha</Text>
            <Text style={styles.fileName2}> 4 songs</Text>
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
               uri: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1513936828/srch_pplmumbai_INA981700082.jpg',
            }}
            style={styles.audioImage}
          />
         <View style={styles.fileNameView}>
            <Text style={styles.fileName}>Mayanadhi</Text>
            <Text style={styles.fileName2}> 5 songs</Text>
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
               uri: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1548665784/srch_pplmumbai_IND291815595.jpg',
            }}
            style={styles.audioImage}
          />
          <View style={styles.fileNameView}>
            <Text style={styles.fileName}>Kumbalangi Nights</Text>
            <Text style={styles.fileName2}> 4 songs</Text>
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
               uri: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1487071056/srch_pplmumbai_IN-S39-16-00272.jpg',
            }}
            style={styles.audioImage}
          />
      <View style={styles.fileNameView}>
            <Text style={styles.fileName}>Guppy</Text>
            <Text style={styles.fileName2}> 4 songs</Text>
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

//*****************************************************************************************************************/

function Genres() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
     <Modal visible={modalOpen} animationType="slide" transparent={true}>
        <TouchableOpacity
          style={styles.modalViewTop}
          onPress={() => setModalOpen(false)}></TouchableOpacity>

        <View style={styles.modalViewBottom}>
          <View style={styles.ModalHeaderView}>
            <Text style={styles.ModalHeaderText}>Genere</Text>
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
     <Image source={require('../assets/bg3.jpg')} style={{ position:"absolute", width: "100%", height:"100%"}} />

     <ScrollView style={{backgroundColor:'#376f8aba',height:"100%"}}>

      
        <TouchableOpacity>
          <View style={styles.container}>
            <Image
              source={{
                uri: 'data:image/png;base64,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',
              }}
              style={styles.audioImage}
            />
            <View style={styles.fileNameView}>
              <Text style={styles.fileName}>Blues</Text>
              <Text style={styles.fileName2}>3 songs</Text>
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
              <Text style={styles.fileName}>Pop</Text>
              <Text style={styles.fileName2}>3 songs</Text>
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
                 uri: 'https://www.roadiemusic.com/blog/wp-content/uploads/2020/02/Is-Rock-Music-Dead.png',
              }}
              style={styles.audioImage}
            />
             <View style={styles.fileNameView}>
              <Text style={styles.fileName}>Rock</Text>
              <Text style={styles.fileName2}>5 songs</Text>
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
              <Text style={styles.fileName}>Indo-western</Text>
              <Text style={styles.fileName2}>1 song</Text>
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
              <Text style={styles.fileName}>Retro</Text>
              <Text style={styles.fileName2}>1 songs</Text>
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
                 uri: 'https://static.toiimg.com/photo/msid-73808968/73808968.jpg?116093',
              }}
              style={styles.audioImage}
            />
              <View style={styles.fileNameView}>
              <Text style={styles.fileName}>
                Classical
              </Text>
              <Text style={styles.fileName2}>5 songs</Text>
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
                 uri: 'https://images-na.ssl-images-amazon.com/images/I/A1+lQQtxoNL.jpg',
              }}
              style={styles.audioImage}
            />
            <View style={styles.fileNameView}>
              <Text style={styles.fileName}>Indian</Text>
              <Text style={styles.fileName2}>5 songs</Text>
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
                 uri: 'https://cdn1.vectorstock.com/i/thumb-large/44/45/guitar-icon-vector-6664445.jpg',
              }}
              style={styles.audioImage}
            />
           <View style={styles.fileNameView}>
              <Text style={styles.fileName}>Other</Text>
              <Text style={styles.fileName2}>3 songs</Text>
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
              <Text style={styles.fileName}>Western</Text>
              <Text style={styles.fileName2}>9 songs</Text>
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