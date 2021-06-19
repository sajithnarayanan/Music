import React from 'react';
import { View, Text,Button,StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon1 from 'react-native-vector-icons/Entypo';
const Folder = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <AntDesign name="arrowleft" size={25} style={styles.antdesign} onPress={()=>navigation.goBack()} />
                <Text style={styles.home}>Home</Text>
                <AntDesign name="search1" size={22} style={styles.antdesign1}/>
                <Icon1 name="dots-three-vertical" size={20} style={styles.dots}/>
            </View>
            <View style={styles.content}>
            <Icon name="folder-open" size={35} style={{top:"9.5%",left:"3%"}} onPress={()=>navigation.navigate('Audio')}/>
            <Text style={{left:"20%",top:50}}>audio</Text>
            <Text style={{left:"75%",top:35}}>10 song</Text>
            <Icon1 name="dots-three-vertical" size={25} style={{left:"90%",top:"12%"}} />
            <Icon name="folder-open" size={35} style={{top:50,left:10}} onPress={()=>navigation.navigate('Music')}/>
            <Text style={{left:"20%",top:25}}>Download</Text>
            <Text style={{left:"75%",top:10}}>1 song</Text>
            <Icon1 name="dots-three-vertical" size={30} style={{left:"90%",top:-15}} />
            <Icon name="folder-open" size={35} style={{top:15,left:10}} onPress={()=>navigation.navigate('Download')}/>
            <Text style={{left:"20%",top:-12}}>Music</Text>
            <Text style={{left:"75%",top:-25}}>10 song</Text>
            <Icon1 name="dots-three-vertical" size={30} style={{left:"90%",top:-50}} />
            <Icon name="folder-open" size={35} style={{top:-15,left:10}} onPress={()=>navigation.navigate('Audio')}/>
            <Text style={{left:"20%",top:-42}}>My favorite</Text>
            <Text style={{left:"75%",top:-55}}>10 song</Text>
            <Icon1 name="dots-three-vertical" size={30} style={{left:"90%",top:-80}} />
            <Icon name="folder-open" size={35} style={{top:-43,left:10}} onPress={()=>navigation.navigate('Whatsapp')}/>
            <Text style={{left:"20%",top:-67}}>Whatsapp Audio</Text>
            <Text style={{left:"75%",top:-85}}>10 song</Text>
            <Icon1 name="dots-three-vertical" size={30} style={{left:"90%",top:-110}} />
            </View>
        </View>

        );
}
const styles=StyleSheet.create({
container:{
    backgroundColor:"#C2E2EF",
    height:1000
},
main:{
    marginTop:".1%"
},
content:{
    height:"80%",
    bottom:"8%"
},
antdesign:{
    left:10,
    top:15
},
home:{
    fontWeight:"bold",
    left:55,
    top:-8,
    fontSize:15
},
antdesign1:{
    left:"70%",
    bottom:"30%"
},
dots:{
    left:"87%",
    bottom:"54%"
}
})
export default Folder;