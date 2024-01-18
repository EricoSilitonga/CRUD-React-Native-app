/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React,{useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { useNavigation } from '@react-navigation/native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//Screen stuff
import Insert_Row from './component/Insert_Row.js';

function App() {
//   const[data, setData] = useState([]);
//   // const navigation = useNavigation();

//   useEffect(()=>{fetchData()},[]);


// const fetchData = ()=>{
//   axios.post('https://www.raksa-test.com/prog-x/api/form_req/testApi.php')
// .then((responseJson) => {
//   // setNama(responseJson.data.data[0].nama_karyawan);
//   // console.log("aaababbaa",responseJson.data);
// // console.log(responseJson.data.data[0].nama_karyawan);

//   setData(responseJson.data.data);
//   //Masukin data ke array of strings disini
//   //Munculin data di return text
//   })
//   .catch(function (error) {
//       console.log(error)
//   });

const Stack=createNativeStackNavigator();
 
  return (
    
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Insert_Row">
      <Stack.Screen name="Insert_Row"   component={Insert_Row}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

//Looping data

function addData(){

}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
