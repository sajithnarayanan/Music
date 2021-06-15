import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ModalStack from '../components/modal1';
import Recent from '../screens/Recent Play';
import Favorite from '../screens/Fav';
import Folder from '../screens/Folder';
import Add from '../screens/Add';
import Play from '../screens/Play'
import Setting from '../components/setting';
const Stack = createStackNavigator();

const MainNav = ({navigation}) => {
    return (
            <Stack.Navigator>
              <Stack.Screen name="Library" component={Library} options={{headerTitleAlign:"left", headerLeft: () => (
                   <View style={{justifyContent:"space-between",flexDirection:"row"}}>
                   <Stack.Screen name="Folder" component={Folder} />
                   <Stack.Screen name="Favorite" component={Favorite} />
                   <Stack.Screen name="Recent" component={Recent} />
                   <Stack.Screen name="Add" component={Add} />
                   <Stack.Screen name="Most Play" component={Play} />
                   <Stack.Screen name="Settings" component={Setting} />
                   <Stack.Screen name="MainNav" component={MainNav} />



                   </View>
                 )   }}  />
        
            </Stack.Navigator>)}

export default MainNav; 