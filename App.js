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

const[editIndex, setEditIndex] = useState(null);
const[isTextInputVisible, setIsTextInputVisible] = useState(false);
const[namaKaryawan, setNamaKaryawan] = useState('');
const[roleKaryawan, setRoleKaryawan] = useState('');
const[nikKaryawan,setNikKaryawan] = useState('');
const[data, setData] = useState([]);

const editData = (index) =>{
  setEditIndex(index);
  setNamaKaryawan(data[index].nama_karyawan);
  setRoleKaryawan(data[index].role_karyawan);
  setNikKaryawan(data[index].nik);
  setIsTextInputVisible(true);
}

const saveData = () =>{
  const requestData = {
    role_karyawan: roleKaryawan,
    nama_karyawan: namaKaryawan,
    nik: nikKaryawan,
    key_id: 'EFOSEfhosSEfSf'
  };

  axios.post('https://www.raksa-test.com/prog-x/api/form_req/apiRico.php', JSON.stringify(requestData))
    .then((response) => {
      if (response.data && response.data.status === 1) {
        // Data was successfully updated on the server
        Alert.alert('Data dirubah');
      } else {
        // Handle the case where the update was not successful
        Alert.alert('Failed to update data');
      }
    })
    .catch(function (error) {
      console.log(error);
      // Handle the error
      Alert.alert('Failed to update data');
    });
}

const seeData = () =>{
  const requestData = {
    role_karyawan: roleKaryawan,
    nama_karyawan: namaKaryawan,
    nik: nikKaryawan,
    key_id: 'fhwejlakflawekb'
  };
  axios.post('https://www.raksa-test.com/prog-x/api/form_req/apiRico.php',JSON.stringify(requestData))
  .then((response) =>{
    setData(response.data.data);
  })
  .catch(function(error){
    console.log(error)
  });
}

const addData = () => { 
  const requestData = {
    role_karyawan: roleKaryawan,
    nama_karyawan: namaKaryawan,
    nik: nikKaryawan,
    key_id: 'asfnSFEefsefSE'
  };
  
  axios.post('https://www.raksa-test.com/prog-x/api/form_req/apiRico.php',JSON.stringify(requestData))
  .then((response) => {
    console.log('API Response: ', response.data);
    Alert.alert('Data berhasil diupload!');
    })
    .catch(function (error) {
        console.log(error)
    });
}

const deleteData = (index) =>{
  const nikToDelete = data[index].nik;
  const requestData = {
    role_karyawan: roleKaryawan,
    nama_karyawan: namaKaryawan,
    nik: nikToDelete,
    key_id: 'SDFOJo324efwe'
  };

  axios.post('https://www.raksa-test.com/prog-x/api/form_req/apiRico.php',JSON.stringify(requestData))
  .then((response) => {
    console.log('API Response: ', response.data);
    Alert.alert('Data berhasil dihapus!');
    })
    .catch(function (error) {
        console.log(error)
    });
}
  return (
    
  <>
      <ScrollView contentContainerStyle = {styles.container}>
        <Text>Nama Karyawan:</Text>
        <TextInput
          style={styles.input}
          value={namaKaryawan}
          onChangeText={(text) => setNamaKaryawan(text)}
        />

        <Text>Role Karyawan:</Text>
        <TextInput
          style={styles.input}
          value={roleKaryawan}
          onChangeText={(text) => setRoleKaryawan(text)}
        />

        <Text>NIK Karyawan:</Text>
        <TextInput
          style={styles.input}
          value={nikKaryawan}
          onChangeText={(text) => setNikKaryawan(text)}
          placeholder="useless placeholder"
        />

        <TouchableOpacity style={styles.button} onPress={() => addData()}>
          <Text style={styles.buttonText}>Upload Data</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => seeData()}>
          <Text style={styles.buttonText}>See Data</Text> 
        </TouchableOpacity>
        <View>
              {data.map((number, index)=>{
                return(
                  <ScrollView key = {index}>
                    <Text>Nama Karyawan: {number.nama_karyawan}</Text>
                    <Text>Role Karyawan: {number.role_karyawan}</Text>
                    <Text>NIK Karyawan: {number.nik}</Text>
                    
                    <TouchableOpacity style={styles.button2} onPress={()=> editData(index)}>
                      <Text style={styles.buttonText}>Edit Data</Text> 
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.button2} onPress={()=> deleteData(index)}>
                      <Text style={styles.buttonText}>Delete Data</Text> 
                    </TouchableOpacity> 
                      { isTextInputVisible && editIndex === index && (
                        <>
                          <Text>Enter Data: </Text>
                          <Text>Nama Karyawan:</Text>
                          <TextInput
                            style={styles.input}
                            value={namaKaryawan}
                            onChangeText={(text) => setNamaKaryawan(text)}
                          />

                          <Text>Role Karyawan:</Text>
                          <TextInput
                            style={styles.input}
                            value={roleKaryawan}
                            onChangeText={(text) => setRoleKaryawan(text)}
                          />

                        <TouchableOpacity style={styles.button2} onPress={()=> saveData()}>
                          <Text style={styles.buttonText}>Save</Text> 
                        </TouchableOpacity> 
                        </>
              )}
                  </ScrollView>
                )
              })}
            </View>
      </ScrollView>
    </>
  );
}

//Styles
const styles = StyleSheet.create({
  container:{
    padding: 16,
    alignItems: 'center', // Align items horizontally in the center
    justifyContent: 'center', // Align items vertically in the center
  },
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
  input: {
    height: 40,
    width: 100,
    margin: 12,
    padding: 10,
    borderWidth: 1
  },
  button:{
    backgroundColor: '#3498db',
    width: 300,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  button2:{
    backgroundColor: '#3498db',
    width: 100,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default App;
