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
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function Insert_Row() {
    const[data, setData] = useState([]);
    // const navigation = useNavigation();
  
    useEffect(()=>{fetchData()},[]);
  
  
  const fetchData = ()=>{
    axios.post('https://www.raksa-test.com/prog-x/api/form_req/testApi.php')
  .then((responseJson) => {
    // setNama(responseJson.data.data[0].nama_karyawan);
    // console.log("aaababbaa",responseJson.data);
  // console.log(responseJson.data.data[0].nama_karyawan);
  
    setData(responseJson.data.data);
    //Masukin data ke array of strings disini
    //Munculin data di return text
    })
    .catch(function (error) {
        console.log(error)
    });
  }
    return (
      <View></View>
    );
    
  }

  export default Insert_Row;