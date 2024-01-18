/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
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
} from 'react-native';
import axios from 'axios';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



function App() {
  const[data, setData] = useState({
    nik : "",
    nama : "",
    role : ""
  });


  useEffect(()=>{fetchData()},[]);


const fetchData = ()=>{
  axios.post('https://www.raksa-test.com/prog-x/api/form_req/testApi.php')
.then((responseJson) => {
  // setNama(responseJson.data.data[0].nama_karyawan);
  // console.log("aaababbaa",responseJson.data);
  setData(responseJson.data.data);


  //Masukin data ke array of strings disini
  //Munculin data di return text
  })
  .catch(function (error) {
      console.log(error)
  });
}
  return (
    //Jalanin const berdasarkan length si data
  <View>
    <Text>Test</Text>
    <Text>Nama Karyawan: {data.nama}</Text>
    <Text>Role Karyawan: {data.role}</Text>
    <Text>NIK Karyawan: {data.nik}</Text>
  </View>
  );
}

//Looping data


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
