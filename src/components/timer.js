import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
  Switch
} from 'react-native';
import {Value} from 'react-native-reanimated';
//import RadioButtonRN from 'radio-buttons-react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Timer = ({navigation}) => {
  var radio_props = [{label: '', value: 1}];
  const [checkboxValue, setcheckboxValue] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [number, onChangeNumber] = React.useState(null);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isDisabled, setIsDisabled] = useState(true);
  return (
    <View style={{flex: 1, backgroundColor: 'grey',}}>
      <Image
        source={require('../assets/sleeptimerBg.jpg')}
        style={{position: 'absolute', width: '100%', height: '100%'}}
      />
      <View style={{height:"5%",top:"5%"}}>
        <AntDesign name="arrowleft" size={20} style={{bottom:"80%"}} onPress={()=>navigation.goBack()}/>
      </View>
      <ScrollView style={{backgroundColor: '#376f8aba', height: '100%'}}>
        <View>
          <View style={styles.container}>
            <Text style={styles.TextStyle}>Close Sleep Mode</Text>
            <RadioForm
              radio_props={radio_props}
              initial={-1}
              buttonSize={10}
              onPress={value => {}}
              buttonColor={'#ffffff'}
              selectedButtonColor={'#ffffff'}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.TextStyle}>10 mins</Text>
            <RadioForm
              radio_props={radio_props}
              initial={-1}
              buttonSize={10}
              onPress={value => {}}
              buttonColor={'#ffffff'}
              selectedButtonColor={'#ffffff'}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.TextStyle}>20 mins</Text> 
            <RadioForm
              radio_props={radio_props}
              initial={-1}
              buttonSize={10}
              onPress={value => {}}
              buttonColor={'#ffffff'}
              selectedButtonColor={'#ffffff'}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.TextStyle}>30 mins</Text>
            <RadioForm
              radio_props={radio_props}
              initial={-1}
              buttonSize={10}
              onPress={value => {}}
              buttonColor={'#ffffff'}
              selectedButtonColor={'#ffffff'}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.TextStyle}>40 mins</Text>
            <RadioForm
              radio_props={radio_props}
              initial={-1}
              buttonSize={10}
              onPress={value => {}}
              buttonColor={'#ffffff'}
              selectedButtonColor={'#ffffff'}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.TextStyle}>60 mins</Text>
            <RadioForm
              radio_props={radio_props}
              initial={-1}
              buttonSize={10}
              onPress={value => {}}
              buttonColor={'#ffffff'}
              selectedButtonColor={'#ffffff'}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.TextStyle}>90 mins</Text>
            <RadioForm
              radio_props={radio_props}
              initial={-1}
              buttonSize={10}
              onPress={value => {}}
              buttonColor={'#ffffff'}
              selectedButtonColor={'#ffffff'}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.TextStyle}>Manual input</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              keyboardType="numeric"
              placeholder="60"
              maxLength={2}
            />
            <Text style={styles.TextStyle}>Mins</Text>
          </View>
          </View>
        <View style={styles.BottomView}>
          <View style={styles.container}>
            <Text style={styles.TextStyle}>After the sleep timer end</Text>
            <Text style={styles.TextStyle1}>Exit player</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.TextStyle}>
              Play to the end regardless of Timer
            </Text>
            <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: '5%',
    paddingBottom: '2%',
    paddingLeft: '5%',
    borderBottomWidth: 1,
    borderColor: 'grey',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent:"space-between",
  },
  inputContainer: {
    width: '100%',
    paddingTop: '2%',
    paddingBottom: '2%',
    paddingLeft: '5%',
    borderBottomWidth: 1,
    borderColor: 'grey',
    flexDirection: 'row',
  },
  BottomView: {
    marginTop: '8%',
  },
  TextStyle: {
    color: 'white',
    fontSize: 15,
    paddingTop: '1%',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'white',
    color: 'white',
    height: '65%',
    flexWrap: 'wrap',
    paddingBottom: 0,
  },
  TextStyle1:{
    right:"10%",
    paddingTop: '1%',
  }
  
});
export default Timer;