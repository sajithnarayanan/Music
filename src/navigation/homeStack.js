import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/homeScreen';
import ff from '../screens/Folder/index';
import LL from '../screens/Library/index'
import ss from '../screens/Favorite/index';
import aa from '../screens/Recent Play/index';
import bb from '../screens/Recent add/index';
import cc from '../screens/Most play/index';
import dd from '../screens/Folder/download';
import ee from '../screens/Folder/download';
import gg from '../components/setting';
import ModalStack from '../components/modal1';
import audio from '../screens/Folder/audio';
import Ads from '../components/ads';
import MyTabs from '../components/new';
import hh from '../screens/Recent Play/index';
import one from '../components/scan';
import two from '../components/equalizer';
import three from '../components/drive';
import four from '../components/hidden';
import five from '../screens/Folder/Whatsapp';
import six from '../screens/Most play/index';
import seven from '../navigation/themes';
import eight from '../components/timer';
import nine from '../components/widget';
import main from '../components/hidden';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Stack = createStackNavigator();

const HomeStack =({navigation}) => {
  return (

    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ModalStack" component={ModalStack} />
      <Stack.Screen name="Library" component={MyTabs} options={{headerLeft:() =>(
        <AntDesign name="arrow-left" size={20} color="grey" style={{left:-12}}/>)}}/> 
      <Stack.Screen name="Folder" component={ff} />
      <Stack.Screen name="Favorite" component={ss} />
      <Stack.Screen name="Recent Play" component={aa} />
      <Stack.Screen name="Recent add" component={bb} />
      <Stack.Screen name="Most Play" component={cc} />
      <Stack.Screen name="Audio" component={audio}/>
      <Stack.Screen name="Download" component={dd}/>
      <Stack.Screen name="Music" component={ee}/>
      <Stack.Screen name="Ads" component={Ads} />
      <Stack.Screen name="Settings" component={gg} />
      <Stack.Screen name="Recent" component={hh} />
      <Stack.Screen name="Scan" component={one} />
      <Stack.Screen name="Equalizer" component={two} />
      <Stack.Screen name="Drive" component={three} />
      <Stack.Screen name="Hidden" component={four} />
      <Stack.Screen name="Whatsapp" component={five} />
      <Stack.Screen name="Play" component={six} />
      <Stack.Screen name="Themes" component={seven} />
      <Stack.Screen name="Timer" component={eight} />
      <Stack.Screen name="Widget" component={nine}/>
    </Stack.Navigator>
  );
};


export default HomeStack;