import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={{height:"100%"}}>
            <View>
                <Icon name="menu" size={30} color="black" style={{ top: 5 }} onPress={() => navigation.openDrawer()} />
                <Text style={{ fontFamily: "italic", left: 80, top: -22, fontWeight: "bold", fontSize: 20 }}>Music Player</Text>
                <Icon name="search" size={30} color="black" style={{ top: -47, left: 320 }} onPress={() => navigation.goBack('Recent')} />
                <Icon name="card-giftcard" size={30} color="black" style={{ top: -80, left: 280 }} onPress={() => navigation.navigate('Ads')} />

            </View>
            <Image source={require('../assets/bg1.jpg')} style={{ height: 1000, width: "100%", top: -70 }} />
            <View style={{ backgroundColor: "#BFE7F2", width: "30%", height: "10%", bottom: "137%", left: "3%", justifyContent: "center" }}>
                <TouchableOpacity><Icon name="music-note" size={40} style={{ left: 30, top: 10 }} color="#fff" onPress={() => navigation.navigate('Library')} />
                    <Text style={{ color: "white", left: 90, top: -35 }}>12</Text>
                    <Text style={{ left: 15, top: -10, fontSize: 18, color: "white" }}>LIBRARY</Text></TouchableOpacity>
            </View>
            <View style={{ backgroundColor: "#F5910B", width: "30%", height: "10%", bottom: "147%", left: "37%", justifyContent: "center" }}>
                <TouchableOpacity><Icon name="folder" size={40} style={{ left: 35, top: 10 }} color="#fff" onPress={() => navigation.navigate('Folder')}/>
                    <Text style={{ color: "white", left: 95, top: -35 }}>5</Text>
                    <Text style={{ left: 20, top: -10, fontSize: 18, color: "white" }}>FOLDER</Text></TouchableOpacity>
            </View>
            <View style={{ backgroundColor: "#DA98B8", width: "30%", height: "10%", bottom: "157%", left: "69%", justifyContent: "center" }}>
                <TouchableOpacity><Icon name="favorite-outline" size={40} style={{ left: 35, top: 10 }} color="#fff" onPress={() => navigation.navigate('Favorite')}/>
                    <Text style={{ color: "white", left: 95, top: -35 }}>0</Text>
                    <Text style={{ left: 20, top: -10, fontSize: 18, color: "white" }}>FAVORITE</Text></TouchableOpacity>
            </View>
            <View style={{ backgroundColor: "#98D0DA", width: "30%", height: "10%", bottom: "154%", left: "3%", justifyContent: "center"  }}>
                <TouchableOpacity><Icon name="anchor" size={40} style={{ left: 35, top: 10 }} color="#fff" onPress={() => navigation.navigate('Recent Play')}/>
                    <Text style={{ color: "white", left: 100, top: -35 }}>5</Text>
                    <Text style={{ left: 5, top: -10, fontSize: 18, color: "white" }}>RECENT PLAY</Text></TouchableOpacity>
            </View>
            <View style={{ backgroundColor: "#7DF976", width: "30%", height: "10%", bottom: "164%", left: "37%", justifyContent: "center" }}>
                <TouchableOpacity><Icon name="sync" size={40} style={{ left: 35, top: 10 }} color="#fff" onPress={() => navigation.navigate('Recent add')} />
                    <Text style={{ color: "white", left: 95, top: -35 }}>5</Text>
                    <Text style={{ left: 5, top: -10, fontSize: 18, color: "white" }}>RECENT ADD</Text></TouchableOpacity>
            </View>
            <View style={{ backgroundColor: "#D876F9", width: "30%", height: "10%", bottom: "174%", left: "69%", justifyContent: "center" }}>
                <TouchableOpacity><Icon name="favorite-outline" size={40} style={{ left: 35, top: 10 }} color="#fff" onPress={() => navigation.navigate('Most Play')}/>
                    <Text style={{ color: "white", left: 100, top: -35 }}>5</Text>
                    <Text style={{ left: 20, top: -10, fontSize: 18, color: "white" }}>MOST PLAY</Text></TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", bottom: "190%", backgroundColor: "#fff", height: 40 }}>
                <Icon name='add' size={30} style={{ left: 280, bottom: "140%" }} onPress={() => navigation.navigate('Most Play')} />
                <Icon name='arrow-right' size={30} style={{ left: 290, bottom: "140%"  }} onPress={()=>navigation.navigate('ModalStack')} />

                <Text style={{ paddingLeft:1,bottom: "140%" , fontSize: 15 }}>PLAYLIST(1)</Text>
            </View>
            <View style={{ backgroundColor: "#D876F9", width: "30%", height: "10%", bottom:"154%", left: "5%", justifyContent: "center" }}>
                <TouchableOpacity><Icon name="music-note" size={30} color="white" height="20%" style={{ bottom: -18, left: 38 }} />
                    <Icon name="menu" size={30} color="white" height="20%" style={{ bottom: 10, left: 20 }} />
                    <Text style={{ backgroundColor: "#C5C4C6",paddingLeft:15 }}>Default list</Text>
                    <Text style={{ left: 95, top: -65 }}>0</Text>
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: "#D876F9", width: "30%", height: "10%", bottom: "164%", left: "40%", justifyContent: "center" }}>
                <TouchableOpacity>
                    <Icon name="add" size={50} style={{ left: 30 }} onPress={() => navigation.navigate('ModalStack')} />
                </TouchableOpacity>
            </View>
            <View style={{bottom:"145%",height:"10%",borderWidth:2,borderColor:"grey",borderRadius:20,marginLeft:"5%"}}>
                <Icon name="music-note"size={30} style={{left:"10%",color:"grey",top:"23%"}} />
                <Text style={{color:"#fff",top:"15%"}}>Change song by swap</Text>
            <Icon name="play-arrow" size={30} style={{left:"40%",color:"red",bottom:"35%"}}/>
            <Icon name="fast-forward" size={30} style={{left:"55%",color:"red",bottom:"75%"}} />
            <Icon name="snippet-folder" size={30} style={{left:"90%",color:"red",bottom:"110%"}} />

        </View>
        </View>
    );
}

export default HomeScreen;