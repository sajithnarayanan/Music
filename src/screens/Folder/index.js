import React from 'react';
import { View, Text,Button } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon1 from 'react-native-vector-icons/Entypo';
const Folder = ({navigation}) => {
    return (
        <View style={{backgroundColor:"#C2E2EF",height:1000}}>
            <View style={{height:30,marginBottom:-20}}>
                <AntDesign name="arrowleft" size={25} style={{left:10,top:15}} onPress={()=>navigation.goBack()} />
                <Text style={{fontWeight:"bold",left:55,top:-8,fontSize:15}}>Home</Text>
                <AntDesign name="search1" size={22} style={{left:280,top:-25}}/>
                <Icon1 name="dots-three-vertical" size={20} style={{left:325,top:-45}}/>
            </View>
            <Icon name="folder-open" size={35} style={{top:75}} onPress={()=>navigation.navigate('Audio')}/>
            <Text style={{left:56,top:50}}>audio</Text>
            <Text style={{left:250,top:35}}>10 song</Text>
            <Icon1 name="dots-three-vertical" size={25} style={{right:-320,top:12}} />
            <Icon name="folder-open" size={35} style={{top:50}} onPress={()=>navigation.navigate('Music')}/>
            <Text style={{left:56,top:25}}>Download</Text>
            <Text style={{left:250,top:10}}>1 song</Text>
            <Icon1 name="dots-three-vertical" size={30} style={{right:-318,top:-15}} />
            <Icon name="folder-open" size={35} style={{top:15}} onPress={()=>navigation.navigate('Download')}/>
            <Text style={{left:56,top:-12}}>Music</Text>
            <Text style={{left:245,top:-25}}>10 song</Text>
            <Icon1 name="dots-three-vertical" size={30} style={{right:-316,top:-50}} />
            <Icon name="folder-open" size={35} style={{top:-15}} onPress={()=>navigation.navigate('Audio')}/>
            <Text style={{left:56,top:-42}}>My favorite</Text>
            <Text style={{left:244,top:-55}}>10 song</Text>
            <Icon1 name="dots-three-vertical" size={30} style={{right:-314,top:-80}} />
            <Icon name="folder-open" size={35} style={{top:-40}} onPress={()=>navigation.navigate('Audio')}/>
            <Text style={{left:56,top:-67}}>Whatsapp Audio</Text>
            <Text style={{left:243,top:-85}}>10 song</Text>
            <Icon1 name="dots-three-vertical" size={30} style={{right:-312,top:-110}} />
        </View>

        );
}

export default Folder;