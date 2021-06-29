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
const Drawer = createDrawerNavigator();

// const HomeStackScreen = ({navigation})=>(
//     <HomeStack.Navigator>
//         <HomeStack.Screen name="Profile" component={stack}  options={{
//             title:"Home"
//         }} />
//     </HomeStack.Navigator>
// );



const Main = ({ navigation }) => {
    const[main,Setmain]=useState('Shuffle');
    const clickHandler=() =>{
        Setmain('Order');

    }
    return (

        <Drawer.Navigator initialRouteName=""  headerMode={false}>
            <Drawer.Screen name="Home" component={HomeStack} options={{
                headerLeft: () => (
                    <AntDesign name="search1" size={40} width={60} height={60} color="black" backgroundColor="red" onPress={() => navigation.navigate('stack')}></AntDesign>
                )
            }} />
            <Drawer.Screen name="Scan Libraries" component={Scan} options={{
                 headerLeft: () => (
                    <Icon.Button name="lens" size={20} width={60} height={60} style={{ marginRight: 20 }} color="black" backgroundColor="#fff" onPress={() => navigation.navigate('default')}></Icon.Button>
                )
            }} />
            <Drawer.Screen name="Orders" component={Equalizer} options={{
                title: "Equalizer", headerLeft: () => (
                    <Icon.Button name="menu-unfold" size={40} width={60} height={60} color="black" backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
                )
            }} />
            <Drawer.Screen name="Shuffle" component={HomeScreen} options={{
                headerLeft: () => (
                        onPress={clickHandler}
                        )
            }} />
            <Drawer.Screen name="Theme" component={Themes} options={{
                headerLeft: () => (
                    <Icon.Button name="search2" size={40} width={60} height={60} color="black" backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
                )
            }} />
            <Drawer.Screen name="Widget" component={Widget} options={{
                headerLeft: () => (
                    <Icon.Button name="youtube" size={40} width={60} height={60} color="black" backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
                )
            }} />
            <Drawer.Screen name="Sleep Timer" component={Timer} options={{
                headerLeft: () => (
                    <Icon.Button name="youtube" size={40} width={60} height={60} color="black" backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
                )
            }} />
            <Drawer.Screen name="Drive mode" component={Drive} options={{
                headerLeft: () => (
                    <Icon.Button name="youtube" size={40} width={60} height={60} color="black" backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
                )
            }} />
            <Drawer.Screen name="Hidden feautres" component={Hidden} options={{
                headerLeft: () => (
                    <Icon.Button name="youtube" size={40} width={60} height={60} color="black" backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
                )
            }} />
            <Drawer.Screen name="Settings" component={Setting} options={{
                headerLeft: () => (
                    <Icon.Button name="gear" size={40} width={60} height={60} style={{ left: 10 }} color="black" backgroundColor="red" onPress={() => navigation.openDrawer()}></Icon.Button>
                )
            }} />

        </Drawer.Navigator>


    );
}


export default Main;
