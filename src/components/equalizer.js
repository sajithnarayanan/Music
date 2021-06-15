import React,{ useState } from 'react';
import { View, Text,Switch } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Slider from '@react-native-community/slider';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Equalizer = ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [sliderValue, setSliderValue] = useState(10);
    const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Custom', value: 'apple'},
    {label: 'Normal', value: 'new'},
    {label: 'Folk', value: 'one'},
    {label: 'Classical', value: 'two'},
    {label: 'Dance', value: 'three'},
    {label: 'Hip Hop', value: 'four'}

  ]);
 
    return (
        <View style={{backgroundColor:"grey",height:"100%"}}>
                          <AntDesign name="arrowleft" size={25} style={{left:10,top:15}} onPress={()=>navigation.goBack()} />
            <Text style={{left:30,top:50}}>EQ</Text>
           <Switch
           style={{left:-250,top:26}}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
       <DropDownPicker
       style={{width:"30%",left:"400%",backgroundColor:"cyan",top:-10,height:40}}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
      <Text style={{left:30,top:"40%"}}>-15</Text>
      <Text style={{left:30,top:"26%"}}>-0</Text>
      <Text style={{left:30,top:"16%"}}>-15</Text>
      <Text style={{top:"42%",left:73}}>60HZ</Text>
    <View style={{transform:[{rotate: "-90deg"}]}}>
  <Slider 
  style={{left:-100,top:-90,width:"60%"}}
          maximumValue={100}
          minimumValue={0}
          minimumTrackTintColor="red"
          maximumTrackTintColor="#fff"
          step={1}
          value={sliderValue}
          onValueChange={
            (sliderValue) => setSliderValue(sliderValue)
          }
        />
        </View>
        <Text style={{left:110,top:"30%"}}>-15</Text>
      <Text style={{left:110,top:"17%"}}>-0</Text>
      <Text style={{left:110,top:"6%"}}>-15</Text>
      <Text style={{top:"31%",left:120}}>230HZ</Text>

        <View style={{transform:[{rotate: "-90deg"}]}}>
  <Slider 
  style={{left:-20,top:-35,width:"60%"}}
          maximumValue={100}
          minimumValue={0}
          minimumTrackTintColor="red"
          maximumTrackTintColor="#fff"
          step={1}
          value={sliderValue}
          onValueChange={
            (sliderValue) => setSliderValue(sliderValue)
          }
        />
        </View>
        <Text style={{left:185,top:"21%"}}>-15</Text>
      <Text style={{left:185,top:"6%"}}>-0</Text>
      <Text style={{left:185,top:-35}}>-15</Text>
      <Text style={{top:"20%",left:200}}>230HZ</Text>

        <View style={{transform:[{rotate: "-90deg"}]}}>
  <Slider 
  style={{left:65,top:30,width:"60%"}}
          maximumValue={100}
          minimumValue={0}
          minimumTrackTintColor="red"
          maximumTrackTintColor="#fff"
          step={1}
          value={sliderValue}
          onValueChange={
            (sliderValue) => setSliderValue(sliderValue)
          }
        />
        </View>
        </View>
    );
}

export default Equalizer;