import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Switch,
  TouchableOpacity,
  Pressable,
  Image,
  Modal,
  StyleSheet,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Divider} from 'react-native-paper';
const Setting = ({navigation}) => {
  const [checkboxValue, setcheckboxValue] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isDisabled, setIsDisabled] = useState(true);
  const toggleSwitch1 = () => setIsDisabled(previousState => !previousState);
  const [main, setmain] = useState(false);
  const toggleSwitch3 = () => setmain(previousState => !previousState);
  const [value, setvalue] = useState(false);
  const toggleSwitch2 = () => setvalue(previousState => !previousState);
  const [first, setFirst] = useState(false);
  const toggleSwitch4 = () => setFirst(previousState => !previousState);
  const [two, settwo] = useState(false);
  const toggleSwitch0 = () => settwo(previousState => !previousState);
  const [inserted, setinserted] = useState(false);
  const toggleSwitch5 = () => setinserted(previousState => !previousState);
  const [select, setselect] = useState(true);
  const toggleSwitch6 = () => setselect(previousState => !previousState);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Image
        style={{height: '100%', width: '100%', position: 'absolute'}}
        source={require('../assets/bg3.jpg')}
      />
      <Modal visible={modalOpen} animationType="slide" transparent={false}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>12 hours</Text>
            <Text>24 hours</Text>
          </View>
        </View>
      </Modal>
      <View style={{height: 30, backgroundColor: '#0890B6', height: '7%'}}>
        <AntDesign
          name="arrowleft"
          size={25}
          style={{left: 10, top: 15, color: '#fff'}}
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            fontWeight: 'bold',
            left: 55,
            top: -8,
            fontSize: 15,
            color: '#fff',
          }}>
          Home
        </Text>
        <AntDesign
          name="search1"
          size={22}
          style={{left: 320, top: -27, color: '#fff'}}
        />
      </View>
      <ScrollView style={{height: '100%'}}>
        <View
          style={{backgroundColor: '#C2E2EF', height: '100%', opacity: 0.7}}>
          <Text
            style={{
              color: 'yellow',
              top: 20,
              paddingLeft: 20,
              backgroundColor: '#7E9BF2',
              marginBottom: 40,
            }}>
            Normal Settings
          </Text>
          <View style={{bottom: '2%',right:"1%"}}>
            <Text style={{top: 25, left: 20, fontSize: 14}}>Desktop Irc</Text>
            <Text style={{top: 25, left: 20, fontSize: 13}}>
              Desktop Lyrics closed
            </Text>
            <Switch
              style={{bottom: '15%'}}
              trackColor={{false: '#767577', true: '#FFD700'}}
              thumbColor={isEnabled ? 'yellow' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <Divider style={{backgroundColor: '#fff', bottom: '1%'}} />
          <View style={{bottom: '2%',right:"1%"}}>
            <Text style={{top: 30, left: 20}}>Lock screen playing</Text>
            <Text style={{top: 32, left: 20, fontSize: 13}}>
              Show nowplaying when lock screen
            </Text>
            <Switch
              style={{bottom: '13%'}}
              trackColor={{false: '#767577', true: '#FFD700'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch1}
              value={isDisabled}
            />
          </View>
          <Divider style={{backgroundColor: '#fff', bottom: '1%'}} />
          <View style={{bottom: '2%',right:"1%"}}>
            <Text style={{left: 20, top: 23}}>Volume fade in and fade out</Text>
            <Text style={{top: 25, left: 20, fontSize: 13}}>
              Switch songs, the volume smooth transition
            </Text>
            <Switch
              style={{bottom: '13%'}}
              trackColor={{false: '#767577', true: '#FFD700'}}
              thumbColor={main ? 'yellow' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch3}
              value={main}
            />
          </View>
          <Divider style={{backgroundColor: '#fff', bottom: '1%'}} />
          <View style={{bottom: '2%',right:"1%"}}>
            <Text style={{left: 20, top: 23}}>Change song by shaking</Text>
            <Text style={{left: 20, top: 23, fontSize: 13}}>
              Shake to next song
            </Text>
            <Switch
              style={{bottom: '18%'}}
              trackColor={{false: '#767577', true: '#FFD700'}}
              thumbColor={value ? '#FFD700' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch2}
              value={value}
            />
          </View>
          <Divider style={{backgroundColor: '#fff', bottom: '1%'}} />
          <View style={{bottom: '2%',right:"1%"}}>
            <Text style={{left: 20, top: 23}}>Open now playing on play</Text>
            <Text style={{left: 22, top: 23, fontSize: 13}}>
              If this option is enable, click song will enter now {'\n'} palying
              page.
            </Text>
            <Switch
            style={{bottom: '33%'}}
              trackColor={{false: '#767577', true: '#FFD700'}}
              thumbColor={first ? 'yellow' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch4}
              value={first}
            />
          </View>
          <Divider style={{backgroundColor: '#fff', bottom: '1%'}} />
          <View style={{bottom: '2%',right:"1%"}}>
          <Text style={{left: 20, top: 23}}>
            Click tracks add to current que
          </Text>
          <Text style={{left: 20, top: 23, fontSize: 13}}>
            Click one song will only add the song into current{'\n'}que, will
            not add/change other songs in current{'\n'}que.
          </Text>
          <Switch
          style={{bottom: '50%'}}
            trackColor={{false: '#767577', true: '#FFD700'}}
            thumbColor={two ? 'yellow' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch0}
            value={two}
          />
          </View>
          <Divider style={{backgroundColor: '#fff', bottom: '1%'}} />
          <View  style={{bottom: '1%',right:"1%"}}>
          <Text style={{left: 25, fontSize: 15, top: 15}}>
            Show shuffle button
          </Text>
          <Text style={{top: 20, left: 25}}>
            Custom shuffle button show on list pages or not.
          </Text>
          <CheckBox
            containerStyle={{
              marginLeft: 0,
              width: '100%',
              left: '88%',
              bottom: '42.5%',
            }}
            checked={checkboxValue}        
            onPress={() => setcheckboxValue(!checkboxValue)}
          />
          </View>
          <Divider style={{backgroundColor: '#fff', bottom: '3%'}} />
          <View style={{bottom: '2%',right:"2%"}}>
          <Text style={{top: 10, left: 20}}>Time format</Text>
          <Text style={{top: 10, left: 20, fontSize: 13}}>
            Choose 12/24h time format on lock screen page clock
          </Text>
          <TouchableOpacity>
            <Icon
              name="arrow-right"
              size={30}
              style={{left: '90%', bottom: '90%'}}
              onPress={() => setModalOpen(true)}
            />
          </TouchableOpacity>
          </View>
          <Divider style={{backgroundColor: '#fff', bottom: '2%'}} />
          <View style={{bottom: '.5%',right:"1%"}}>
          <Text style={{left: '5%', top: '1%'}}>
            Smart playlist track limit
          </Text>
          <Text style={{left: '5%', top: 5, fontSize: 13}}>
            Set the limit number for the Recent play& Recent{'\n'}add& Most play
          </Text>
          <Text style={{left: '85%', top: -45}}> No limit</Text>
          </View>
          <Divider style={{backgroundColor: '#fff', bottom: '1%'}} />
          <View style={{height: 100}}>
            <Text
              style={{
                color: 'yellow',
                paddingLeft: 20,
                marginTop: 10,
                backgroundColor: '#7E9BF2',
              }}>
              Headset Settings
            </Text>
          </View>
          <View style={{top: '.5%',right:"1%"}}>
          <Text style={{left: 20, top: -60}}>Play when inserted</Text>
          <Text style={{left: 20, top: -55, fontSize: 13}}>
            Auto start playing when a wired headset is inserted
          </Text>
          <Divider style={{backgroundColor: '#fff', bottom: '85%'}} />
          <Switch
            style={{top: -90}}
            trackColor={{false: '#767577', true: '#FFD700'}}
            thumbColor={inserted ? 'yellow' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch5}
            value={inserted}
          />
          </View>
          <View style={{bottom: '.5%',right:"1%"}}>
          <Text style={{left: 20, top: -50}}>Paused when unplugged</Text>
          <Text style={{left: 20, top: -50, fontSize: 13}}>
            Auto stop playing when a wired Headset is unplugged
          </Text>
          <Switch
            style={{top: -90}}
            trackColor={{false: '#767577', true: '#FFD700'}}
            thumbColor={select ? 'yellow' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch6}
            value={select}
          />
          </View>
          <View style={{height: 100}}>
            <Text
              style={{
                color: 'yellow',
                top: -60,
                paddingLeft: 20,
                backgroundColor: '#7E9BF2',
              }}>
              Others
            </Text>
          </View>
          <TouchableOpacity>
            <Text style={{left: 20, top: -125, fontWeight: 'bold'}}>
              Stop Ads
            </Text>
          </TouchableOpacity>
          <Divider style={{backgroundColor: '#fff', bottom: '9.8%'}} />
          <Pressable>
            <Text style={{left: 20, top: -120, fontWeight: 'bold'}}>
              Rate for us
            </Text>
          </Pressable>
          <Divider style={{backgroundColor: '#fff', bottom: '13.8%'}} />
          <TouchableOpacity>
            <Text style={{left: 20, top: -115, fontWeight: 'bold'}}>
              Share to my friends
            </Text>
          </TouchableOpacity>
          <Divider style={{backgroundColor: '#fff', bottom: '11%'}} />
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 42,
  },
  modalView: {
    margin: 10,
    bottom: 50,
    width: '80%',
    height: '20%',
    backgroundColor: '#fff',
    padding: 30,
  },
});
export default Setting;
