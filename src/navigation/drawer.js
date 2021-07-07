import React,{useState} from 'react';
import { View, Text } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeStack from './homeStack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import favoriteStack from './favoriteStack';
import folderStack from './folderStack';
import LibraryStack from './libraryStack';
import MostStack from './mostStack';
import RecentStack from './RecentStack';
import Setting from '../components/setting';
import HomeScreen from '../screens/homeScreen';
import Scan from '../components/scan';
import Equalizer from '../components/equalizer';
import Drive from '../components/drive';
import Hidden from '../components/hidden';
import Themes from './themes';
import Timer from '../components/timer';
import Widget from '../components/widget';
import { color } from 'react-native-elements/dist/helpers';
const Drawer = createDrawerNavigator();

// const HomeStackScreen = ({navigation})=>(
//     <HomeStack.Navigator>
//         <HomeStack.Screen name="Profile" component={stack}  options={{
//             title:"Home"
//         }} />
//     </HomeStack.Navigator>
// );



const Main = ({ navigation }) => {
   
    return (

        <Drawer.Navigator initialRouteName="" >
            <Drawer.Screen name="Home" component={HomeStack} style={{height:"100%",color:"red"}}/>
            <Drawer.Screen name="Scan Libraries" component={Scan} />
            <Drawer.Screen name="Orders" component={Equalizer} />
            <Drawer.Screen name="Shuffle" component={HomeScreen} />
            <Drawer.Screen name="Theme" component={Themes} />
            <Drawer.Screen name="Widget" component={Widget} />
            <Drawer.Screen name="Sleep Timer" component={Timer} />
            <Drawer.Screen name="Drive mode" component={Drive} />
            <Drawer.Screen name="Hidden feautres" component={Hidden} />
            <Drawer.Screen name="Settings" component={Setting} />

        </Drawer.Navigator>


    );
}


export default Main;
