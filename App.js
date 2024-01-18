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
  Button,
} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



function App() {
  const[data, setData] = useState([]);
  const navigation = useNavigation();

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
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="Menu_Login"
      // initialRouteName="Menu_Pertama"
    >
      <Stack.Screen name="Menu_Login"   component={Menu_Login}/>
      <Stack.Screen name="Menu_Awal"    component={Menu_Awal}/>
      <Stack.Screen name="Menu_Pertama"    component={Menu_Pertama}/>
      <Stack.Screen name="DetailSlideShow"    component={DetailSlideShow}/>


      {/* MENU MKG */}
      <Stack.Screen name="Halaman_Awal"       component={Halaman_Awal}/>
      <Stack.Screen name="Input_Data"         component={Input_Data}/>
       <Stack.Screen name="View_Data"          component={View_Data}/>
       <Stack.Screen name="Edit_Data"          component={Edit_Data}/>
      
      {/* <Stack.Screen name="History"            component={History}/> */}
     
      <Stack.Screen name="Cari_History"       component={Cari_History}/>
      <Stack.Screen name="Monitoring"         component={Monitoring}/>
      <Stack.Screen name="Hasil_Monitoring"   component={Hasil_Monitoring}/>
      <Stack.Screen name="Detail_Data"        component={Detail_Data}/>

       {/* MENU Surveyor */}
       <Stack.Screen name="CheckInOut"                   component={CheckInOut}/>
       <Stack.Screen name="Cari_History_CheckInOut"      component={Cari_History_CheckInOut}/>
        <Stack.Screen name="Detail_CheckInOut"            component={Detail_CheckInOut}/>
        <Stack.Screen name="Monitoring_ChechkInOut"       component={Monitoring_ChechkInOut}/>
      <Stack.Screen name="Hasil_Monitoring_CheckInOut"  component={Hasil_Monitoring_CheckInOut}/>

      {/* Menu Req Form */}
      <Stack.Screen name="Pilih_Form"                     component={Pilih_Form}/>
      <Stack.Screen name="Permintaan_Tinta"                     component={Permintaan_Tinta}/>
      <Stack.Screen name="IncomingApproval"                     component={IncomingApproval}/>
      <Stack.Screen name="Menu_Req"                     component={Menu_Req}/>
      <Stack.Screen name="Detail_Req"                     component={Detail_Req}/>
      <Stack.Screen name="Detail_History"                     component={Detail_History}/>
      <Stack.Screen name="Req_History"                     component={Req_History}/>
      <Stack.Screen name="KartuNama"                     component={KartuNama}/>
      <Stack.Screen name="ProgressReq"                     component={ProgressReq}/>
      <Stack.Screen name="Stationary"                     component={Stationary}/>
      <Stack.Screen name="DetailStation"                     component={DetailStation}/>
      <Stack.Screen name="DetailReqStation"                     component={DetailReqStation}/>
      <Stack.Screen name="PermintaanGrab"                     component={PermintaanGrab}/>
      <Stack.Screen name="PenolakanTips"                     component={PenolakanTips}/>
      <Stack.Screen name="PajakReklame"                     component={PajakReklame}/>
      <Stack.Screen name="DetailReqGrab"                     component={DetailReqGrab}/>
      <Stack.Screen name="DetailGrab"                     component={DetailGrab}/> 
      <Stack.Screen name="DetailReqTips"                     component={DetailReqTips}/>
      <Stack.Screen name="DetailReqPajak"                     component={DetailReqPajak}/> 
      <Stack.Screen name="DetailTips"                     component={DetailTips}/>
      <Stack.Screen name="DetailPajak"                     component={DetailPajak}/> 
      <Stack.Screen name="EDocument"                        component={EDocument} />
      <Stack.Screen name="EdocHistory"                        component={EdocHistory} />
      <Stack.Screen name="EDocDetail"                       component={EDocDetail} />
      {/* {/* <Stack.Screen name="PajakReklame"                     component={PajakReklame}/> */}

      {/* Bukaan */}
      <Stack.Screen name="History_detail" component={History_detail}/> 
      <Stack.Screen name="History" component={History}/>        
      <Stack.Screen name="Progress_detail" component={Progress_detail}/>      
      <Stack.Screen name="Progres_bukaan" component={Progres_bukaan}/>
      <Stack.Screen name="PilihanBukaan" component={PilihanBukaan}/>
      <Stack.Screen name="List_bukaan" component={List_bukaan}/>  
      <Stack.Screen name="Approval_FormBukaan" component={Approval_FormBukaan}/>  
      <Stack.Screen name="BukaanTest" component={Bukaantest}/>

      <Stack.Screen name="BukaanScreen" component={BukaanScreen}/>
      <Stack.Screen name="List_Bukaan_V2" component={List_Bukaan_V2}/>
      <Stack.Screen name="Approval_V2" component={Approval_V2}/>
      <Stack.Screen name="List_progress_V2" component={List_progress_V2}/>
      <Stack.Screen name="Progress_Bukaan_V2" component={Progress_Bukaan_V2}/>
      <Stack.Screen name="List_History_V2" component={List_History_V2}/>

      

      






      {/* ex gratia */}
      <Stack.Screen name="ExGratia" component={ExGratia}/>
      <Stack.Screen name="Ex_Gratia" component={Ex_Gratia}/>
      <Stack.Screen name="listExGratia" component={listExGratia}/>
      <Stack.Screen name="ExGratia_History_List" component={ExGratia_History_List}/>
      <Stack.Screen name="ExGratia_History" component={ExGratia_History}/>
      <Stack.Screen name="ExGratia_Pic" component={ExGratia_Pic}/>
      <Stack.Screen name="ExGratia_Progres" component={ExGratia_Progres}/>
      <Stack.Screen name="ExGratia_Progres_List" component={ExGratia_Progres_List}/>

      {/* CAR */}
      <Stack.Screen name="CAR_Screen" component={CAR_Screen} />
      <Stack.Screen name="CAR_Approval" component={CAR_Approval} />
      <Stack.Screen name="CAR_Approval_list" component={CAR_Approval_list} />
      <Stack.Screen name="CAR_Progress_list" component={CAR_Progress_list} />
      <Stack.Screen name="CAR_Realization" component={CAR_Realization} />
      <Stack.Screen name="CAR_Approval_Split_Screen" component={CAR_Approval_Split_Screen}/>
      <Stack.Screen name="CAR_History_list" component={CAR_History_list}/>
      
      {/* Lelang */}
      <Stack.Screen name="Lelang" component={Lelang} />
      <Stack.Screen name="MenuLelang" component={Menulelang} />
      <Stack.Screen name="LelangAdmin" component={LelangAdmin} />

      
      {/* Menu Delivery */}
      <Stack.Screen name="Incoming_Deliv"                     component={Incoming_Deliv}/> 
      <Stack.Screen name="MenuDeliv"                     component={MenuDeliv}/> 
      <Stack.Screen name="DetailMyjob"                     component={DetailMyjob}/> 
      <Stack.Screen name="DetailMyJobKirim"                     component={DetailMyJobKirim}/> 
      <Stack.Screen name="DetailHistory"                     component={DetailHistory}/> 
      <Stack.Screen name="DetailIncomingJob"                     component={DetailIncomingJob}/> 
      <Stack.Screen name="DetailNewJob"                     component={DetailNewJob}/> 

      {/* Menu HRD */}
      <Stack.Screen name="KumpulTugas"                     component={KumpulTugas}/> 
      <Stack.Screen name="MenuNilai"                     component={MenuNilai}/> 
      <Stack.Screen name="AddNilai"                     component={AddNilai}/> 
      <Stack.Screen name="ListNilai"                     component={ListNilai}/>

      <Stack.Screen name="Absen"                     component={Absen}/>
      <Stack.Screen name="HRD_Screen"                component={HRD_Screen}/>
      <Stack.Screen name="Absen_History"                component={Absen_History}/>
      <Stack.Screen name="Absen_History_7"                component={Absen_History_7}/>
      <Stack.Screen name="LemburDriver"                component={LemburDriver}/>
      <Stack.Screen name="LemburDriverList"                component={LemburDriverList}/>
      <Stack.Screen name="webview_driver" component={webview_driver} />
      <Stack.Screen name="ListSppm" component={ListSppm} />
      <Stack.Screen name="DetailSppm" component={DetailSppm} />
      <Stack.Screen name="ViewSppm" component={ViewSppm} />

      


      

      

      {/* KASBON */}
      <Stack.Screen name="KasbonScreen"                component={KasbonScreen}/>
      <Stack.Screen name="KasbonApproval"                component={KasbonApproval}/>
      <Stack.Screen name="KasbonApprovalList"                component={KasbonApprovalList}/>
      <Stack.Screen name="KasbonProgressList"                component={KasbonProgressList}/>
      <Stack.Screen name="KasbonProgress"                component={KasbonProgress}/>
      <Stack.Screen name="KasbonPenyelesaian"                component={KasbonPenyelesaian}/>
      <Stack.Screen name="KasbonPenyelesaianList"                component={KasbonPenyelesaianList}/>
      <Stack.Screen name="KasbonApprovalPenyelesaianList"                component={KasbonApprovalPenyelesaianList}/>
      <Stack.Screen name="KasbonApprovalScreenSplit"                component={KasbonApprovalScreenSplit}/>
      <Stack.Screen name="KasbonApprovalPenyelesaian"                component={KasbonApprovalPenyelesaian}/>
      <Stack.Screen name="KasbonProgressScreenSplit"                component={KasbonProgressScreenSplit}/>
      <Stack.Screen name="KasbonHistoryList"                component={KasbonHistoryList}/>
      
      {/* FOBOB */}
      <Stack.Screen name="Fobob"                     component={Fobob}/>
      
      {/* input lelang */}
      <Stack.Screen name="input_lelang"              component={input_lelang}/>

      
      {/* All- rounder */}
      <Stack.Screen name="Pan_Zoom"                     component={Pan_Zoom}/>
      <Stack.Screen name="All_Incoming_Req"                     component={All_Incoming_Req}/>
      <Stack.Screen name='Pdf_Viewer'                   component={Pdf_Viewer}/>
      <Stack.Screen name="voting_setting"               component={voting_setting}/>


      {/* Menu Approval */}
      <Stack.Screen name="MenuApproval"                     component={MenuApproval}/> 
      <Stack.Screen name="DetailApproval"                     component={DetailApproval}/> 
      <Stack.Screen name="RejectSpk"                     component={RejectSpk}/> 
      <Stack.Screen name="EditPart"                     component={EditPart}/> 

      {/* Edit Data */}
      <Stack.Screen name="form_edit_data_screen"                     component={form_edit_data_screen}/> 
      <Stack.Screen name="list_edit_data"                     component={list_edit_data}/>
      <Stack.Screen name="Approval_edit_data"                     component={Approval_edit_data}/>
      <Stack.Screen name="list_progress_edit_data"                     component={list_progress_edit_data}/>    
      <Stack.Screen name="progress_edit_data"                     component={progress_edit_data}/>
      <Stack.Screen name="list_history_edit_data"                     component={list_history_edit_data}/>

      {/* Login Aegis */}
      <Stack.Screen name="Approval_list_login_aegis"                     component={Approval_list_login_aegis}/>
      <Stack.Screen name="Approval_login_aegis"                     component={Approval_login_aegis}/>
      {/* Login Email */}
      <Stack.Screen name="Approval_list_email"                     component={list_approval_email}/>
      <Stack.Screen name="Approval_email"                     component={Approval_email}/>

      {/* Reimburse */}
      <Stack.Screen name="reimburse_screen"                     component={reimburse_screen}/>
      <Stack.Screen name="reimburse_approval_list"                     component={reimburse_approval_list}/>
      <Stack.Screen name="reimburse_progress_list"                     component={reimburse_progress_list}/>
      <Stack.Screen name="reimburse_history_list"                     component={reimburse_history_list}/>
      
      <Stack.Screen name="reimburse_progress"                     component={reimburse_progress}/>
      <Stack.Screen name="reimburse_approval"                     component={reimburse_approval}/>
      <Stack.Screen name="reimburse_preview_dtl"                     component={reimburse_preview_dtl}/>
      {/* Penutupan login */}
      <Stack.Screen name="Approval_list_penutupan_login"                     component={Approval_list_penutupan_login}/>
      <Stack.Screen name="Approval_penutupan_login"                     component={Approval_penutupan_login}/>
      
      <Stack.Screen name="Menu_awal_UI_baru"                     component={Menu_awal_UI_baru}/>
      <Stack.Screen name="EFinnace"                     component={EFinnace}/>
      <Stack.Screen name="EGeneral"                     component={EGeneral}/>
      <Stack.Screen name="IT_req"                     component={IT_req}/>
      <Stack.Screen name="EDoc"                     component={EDoc}/>
      <Stack.Screen name="list_progress_stationary"                     component={list_progress_stationary}/>
      <Stack.Screen name="list_progress_penolakan_tips"                     component={list_progress_penolakan_tips}/>
      <Stack.Screen name="list_progress_pajak_reklame"                     component={list_progress_pajak_reklame}/>
      <Stack.Screen name="list_progress_permintaan_grab"                     component={list_progress_permintaan_grab}/>
      <Stack.Screen name="list_progress_kartu_nama"                     component={list_progress_kartu_nama}/>
      <Stack.Screen name="list_history_kartu_nama"                     component={list_history_kartu_nama}/>
      
      <Stack.Screen name="list_history_stationary"                     component={list_history_stationary}/>
      <Stack.Screen name="list_history_pajak_reklame"                     component={list_history_pajak_reklame}/>
      <Stack.Screen name="list_history_penolakan_tips"                     component={list_history_penolakan_tips}/>
      <Stack.Screen name="list_history_permintaan_grab"                     component={list_history_permintaan_grab}/>
      <Stack.Screen name="Profile"                     component={Profile}/>
      <Stack.Screen name="Bottom_tabs"                     component={Bottom_tabs}/>

      <Stack.Screen name="HomeCarousel"                     component={HomeCarousel}/>

      
      
      
      {/* UnderCostruction */}
      {/* buat maintain */}
      <Stack.Screen name="UnderCostruction"                     component={UnderCostruction}/>  

      
    </Stack.Navigator>
  </NavigationContainer>
  <>
      {/* Jalanin const berdasarkan length si data */}
      <View style = {styles.container}>
        <ScrollView>
            {data.map((number, index)=>{
              return(
                  <View key = {index}>
                    <Text>Nama Karyawan: {number.nama_karyawan}</Text>
                    <Text>Role Karyawan: {number.role_karyawan}</Text>
                    <Text>NIK Karyawan: {number.nik}</Text>
                    <Text> </Text>
                </View> 
              )
            })}
                <Button title="Add stuff" onPress={() => navigation.navigate('AddDetails')}/>
        </ScrollView>
      </View>
    </>
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
