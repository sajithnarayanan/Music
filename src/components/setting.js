import React,{ useState } from 'react';
import { View, Text,ScrollView,Switch,TouchableOpacity, Pressable } from 'react-native';
import {CheckBox} from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Entypo';

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
    return (
      <ScrollView>
       <View style={{backgroundColor:"#C2E2EF",height:1020}}>
       <View style={{height:30,marginBottom:-20,backgroundColor:"#0890B6",height:"5%",}}>
                <AntDesign name="arrowleft" size={25} style={{left:10,top:15}} onPress={()=>navigation.goBack()} />
                <Text style={{fontWeight:"bold",left:55,top:-8,fontSize:15}}>Home</Text>
                <AntDesign name="search1" size={22} style={{left:320,top:-27}}/>
                <Icon1 name="dots-three-vertical" size={20} style={{left:375,top:-47}}/>
            </View>
                   <Text style={{color:"yellow",top:40,paddingLeft:20,backgroundColor:"#9BD3E9",marginBottom:40}}>Normal Settings</Text>
                  <View>
                       <Text style={{top:25,left:20,fontSize:14}}>Desktop Irc</Text>
                   <Text style={{top:25,left:20,fontSize:13}}>Desktop Lyrics closed</Text>
                   <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
                   </View>
                   <Text style={{top:30,left:20}}>Lock screen playing</Text>
                   <Text style={{top:32,left:20,fontSize:13}}>Show nowplaying when lock screen</Text>
                   <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch1}
        value={isDisabled}
      />
      <Text style={{left:20,top:23}}>Volume fade in and fade out</Text>
      <Text style={{top:25,left:20,fontSize:13}}>Switch songs, the volume smooth transition</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={main ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch3}
        value={main}
      />
            <Text style={{left:20,top:23}}>Change song by shaking</Text>
            <Text style={{left:20,top:23,fontSize:13}}>Shake to next song</Text>
            <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={value ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch2}
        value={value}
      />
      <Text style={{left:20,top:23}}>Opne now playing on play</Text>
            <Text style={{left:22,top:23,fontSize:13}}>If this option is enable, click song will enter now {"\n"} palying page.</Text>
            <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={first ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch4}
        value={first}
      />
        <Text style={{left:20,top:23}}>Click tracks add to current que</Text>
            <Text style={{left:20,top:23,fontSize:13}}>Click one song will only add the song into current{"\n"}que, will not add/change other songs in current{'\n'}que.</Text>
            <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={two ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch0}
        value={two}
      />
      <Text style={{left:25,fontSize:15,top:15}}>Show shuffle button</Text>
      <Text style={{top:20,left:25}}>Custom shuffle button show on list pages or not.</Text>
    <CheckBox 
    containerStyle={{marginLeft:0,width:"100%",left:"88%",bottom:"3.5%"}}
    checked={checkboxValue}
    onPress={()=>setcheckboxValue(!checkboxValue)}
    />
  <Text style={{top:10,left:20}}>Time format</Text>
  <Text style={{top:10,left:20,fontSize:13}}>Choose 12/24h time format on lock screen page clock</Text>
  <TouchableOpacity><Icon name="arrow-right" size={35} style={{left:"90%",bottom:"96%"}} /></TouchableOpacity>
  <Text style={{left:"5%",top:"1%"}}>Smart playlist track limit</Text>
  <Text style={{left:"5%",top:10,fontSize:13}}>Set the limit number for the Recent play& Recent{"\n"}add& Most play</Text>
  <Text style={{left:300,top:-40}}> No limit</Text>
  <View style={{height:100}}>
    <Text style={{color:"yellow",paddingLeft:20,marginTop:10,backgroundColor: "#9BD3E9",}}>Headset Settings</Text>
  </View>
  <Text style={{left:20,top:-60}}>Play when inserted</Text>
            <Text style={{left:20,top:-55,fontSize:13}}>Auto start playing when a wired headset is inserted</Text>
            <Switch
            style={{top:-90}}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={inserted ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch5}
        value={inserted}
      />
      <Text style={{left:20,top:-50}}>Paused when unplugged</Text>
      <Text style={{left:20,top:-50,fontSize:13}}>Auto stop playing when a wired Headset is unplugged</Text>
      <Switch
      style={{top:-90}}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={select ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch6}
        value={select}
      />
      <View style={{height:100}}>
        <Text style={{color:"yellow",top:-60,paddingLeft:20,backgroundColor:"#9BD3E9"}}>Others</Text>
      </View>
      <TouchableOpacity><Text style={{left:20,top:-120,fontWeight:"bold"}}>Stop Ads</Text></TouchableOpacity>
      <Pressable><Text style={{left:20,top:-120,fontWeight:"bold"}}>Rate for us</Text></Pressable>
      <TouchableOpacity><Text style={{left:20,top:-120,fontWeight:"bold"}}>Share to my friends</Text></TouchableOpacity>

       </View>
       </ScrollView>
    );
}

export default Setting;