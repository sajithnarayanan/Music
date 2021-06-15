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
import AntDesign from 'react-native-vector-icons/AntDesign';
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
        style: {backgroundColor: '#376f8a',top:10,paddingLeft:5},
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
//************************************************Stylesheet finished*****************************************************/
function Tracks({navigation}) {
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
     <Image source={require('../assets/bg3.jpg')} style={{ position:"absolute", width: "100%", height:"100%"}} />

      <ScrollView style={{backgroundColor:'#376f8aba',height:"100%",top:10}}>
      <AntDesign name="arrowleft" size={25} style={{left:10}} onPress={()=>navigation.navigate('Home')} />

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
      <View style={{backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
        <TouchableOpacity
          style={styles.modalViewTop}
          onPress={() => setModalOpen(false)}></TouchableOpacity>
      </View>

      <View style={styles.modalViewBottom}>
        <View style={styles.ModalHeaderView}>
          <Text style={styles.ModalHeaderText}>Artist Details</Text>
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
   <Image source={require('../assets/bg3.jpg')} style={{ position:"absolute", width: "100%", height:"100%"}} />

   <ScrollView style={{backgroundColor:'#376f8aba',height:"100%",top:10}}>

    
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
               uri: 'data:image/jpeg;base64,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',            }}
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
      <View style={{backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
        <TouchableOpacity
          style={styles.modalViewTop}
          onPress={() => setModalOpen(false)}></TouchableOpacity>
      </View>

      <View style={styles.modalViewBottom}>
        <View style={styles.ModalHeaderView}>
          <Text style={styles.ModalHeaderText}>Album Name.mp4</Text>
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
   <Image source={require('../assets/bg3.jpg')} style={{ position:"absolute", width: "100%", height:"100%"}} />

   <ScrollView style={{backgroundColor:'#376f8aba',height:"100%",top:10}}>

    
      <TouchableOpacity>
        <View style={styles.container}>
          <Image
            source={{
              uri: 'https://img.freepik.com/free-vector/cd-mock-up_1017-6857.jpg?size=338&ext=jpg',
            }}
            style={styles.audioImage}
          />
          <View style={styles.fileNameView}>
            <Text style={styles.fileName}>Album name</Text>
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
               uri: 'https://img.freepik.com/free-vector/cd-mock-up_1017-6857.jpg?size=338&ext=jpg',
            }}
            style={styles.audioImage}
          />
          <View style={styles.fileNameView}>
            <Text style={styles.fileName}>Album name</Text>
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
               uri: 'https://img.freepik.com/free-vector/cd-mock-up_1017-6857.jpg?size=338&ext=jpg',
            }}
            style={styles.audioImage}
          />
        <View style={styles.fileNameView}>
            <Text style={styles.fileName}>Album name</Text>
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
               uri: 'https://img.freepik.com/free-vector/cd-mock-up_1017-6857.jpg?size=338&ext=jpg',
            }}
            style={styles.audioImage}
          />
         <View style={styles.fileNameView}>
            <Text style={styles.fileName}>Album name</Text>
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
               uri: 'https://img.freepik.com/free-vector/cd-mock-up_1017-6857.jpg?size=338&ext=jpg',
            }}
            style={styles.audioImage}
          />
         <View style={styles.fileNameView}>
            <Text style={styles.fileName}>Album name</Text>
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
               uri: 'https://img.freepik.com/free-vector/cd-mock-up_1017-6857.jpg?size=338&ext=jpg',
            }}
            style={styles.audioImage}
          />
         <View style={styles.fileNameView}>
            <Text style={styles.fileName}>Album name</Text>
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
               uri: 'https://img.freepik.com/free-vector/cd-mock-up_1017-6857.jpg?size=338&ext=jpg',
            }}
            style={styles.audioImage}
          />
         <View style={styles.fileNameView}>
            <Text style={styles.fileName}>Album name</Text>
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
               uri: 'https://img.freepik.com/free-vector/cd-mock-up_1017-6857.jpg?size=338&ext=jpg',
            }}
            style={styles.audioImage}
          />
          <View style={styles.fileNameView}>
            <Text style={styles.fileName}>Album name</Text>
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
               uri: 'https://img.freepik.com/free-vector/cd-mock-up_1017-6857.jpg?size=338&ext=jpg',
            }}
            style={styles.audioImage}
          />
      <View style={styles.fileNameView}>
            <Text style={styles.fileName}>Album name</Text>
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
        <View style={{backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
          <TouchableOpacity
            style={styles.modalViewTop}
            onPress={() => setModalOpen(false)}></TouchableOpacity>
        </View>

        <View style={styles.modalViewBottom}>
          <View style={styles.ModalHeaderView}>
            <Text style={styles.ModalHeaderText}>Genre</Text>
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
     <Image source={require('../assets/bg3.jpg')} style={{ position:"absolute", width: "100%", height:"100%"}} />

     <ScrollView style={{backgroundColor:'#376f8aba',height:"100%",top:10}}>

      
        <TouchableOpacity>
          <View style={styles.container}>
            <Image
              source={{
                uri: 'https://cdn1.vectorstock.com/i/thumb-large/44/45/guitar-icon-vector-6664445.jpg',
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
                 uri: 'https://cdn1.vectorstock.com/i/thumb-large/44/45/guitar-icon-vector-6664445.jpg',
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
                 uri: 'https://cdn1.vectorstock.com/i/thumb-large/44/45/guitar-icon-vector-6664445.jpg',
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
                 uri: 'https://cdn1.vectorstock.com/i/thumb-large/44/45/guitar-icon-vector-6664445.jpg',
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
                 uri: 'https://cdn1.vectorstock.com/i/thumb-large/44/45/guitar-icon-vector-6664445.jpg',
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
                 uri: 'https://cdn1.vectorstock.com/i/thumb-large/44/45/guitar-icon-vector-6664445.jpg',
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

        <TouchableOpacity>
          <View style={styles.container}>
            <Image
              source={{
                 uri: 'https://cdn1.vectorstock.com/i/thumb-large/44/45/guitar-icon-vector-6664445.jpg',
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

      </ScrollView>
      </View>
    </>
  
  );
}

// Top navigation color: "#376f8a"
//flotting button color: "#ffd04e"
//backgroung image color: "#468aaf"

// const [songs, setSongs] = useState([
//   { name: 'song1', key: '1'},{ name: 'song2', key: '2'},{ name: 'song3', key: '3'},{ name: 'song4', key: '5'},
//   { name: 'song6', key: '6'},{ name: 'song7', key: '7'},{ name: 'song8', key: '8'},{ name: 'song9', key: '9'},
// ])

// <View>

// {
// songs.map((item)=> {
//   return(

//     <View key={item.key}>
//       <Text>{item.text}</Text>
//     </View>
//   )
// })
// }

// </View>
