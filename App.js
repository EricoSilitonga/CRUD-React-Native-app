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
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Alert,
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
    namaKaryawan : "Temp",
    roleKaryawan : "Temp",
    nik : "00"
  });


  useEffect(()=>{fetchData()},[]);


const fetchData = ()=>{
  axios.post('https://www.raksa-test.com/prog-x/api/form_req/testApi.php')
.then((responseJson) => {
  // setNama(responseJson.data.data[0].nama_karyawan);
  // console.log("aaababbaa",responseJson.data);
// console.log(responseJson.data.data[0].nama_karyawan);

  setData(responseJson.data.data);

  
  })
  .catch(function (error) {
      console.log(error)
  });
}
  return (
    
  <>
      {/* Jalanin const berdasarkan length si data */}
      <View style = {styles.container}>
      <Text>Nama Karyawan:</Text>
      <TextInput
        style={styles.input}
        value={data.namaKaryawan}
        onChangeText={(text) => setNamaKaryawan(text)}
      />

      <Text>Role Karyawan:</Text>
      <TextInput
        style={styles.input}
        value={data.roleKaryawan}
        onChangeText={(text) => setRoleKaryawan(text)}
      />

      <Text>NIK Karyawan:</Text>
      <TextInput
        style={styles.input}
        value={data.nik}
        onChangeText={(text) => setNik(text)}
      />

      <TouchableOpacity style={styles.button} onPress={Alert.alert("Is pressed")}>
        <Text style={styles.buttonText}>Upload Data</Text>
      </TouchableOpacity>
      </View>
    </>
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
