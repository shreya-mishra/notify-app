import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { requestUserPermission, notificationListener } from './PushController'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  useEffect(() => {

    callFcmToken()
    requestUserPermission()
    notificationListener()

  }, [])

  const callFcmToken = async () => {
    let fcmtoken = await AsyncStorage.getItem("fcmtoken");
    console.log('fcmToken', fcmtoken)

    var myHeaders = new Headers();
    myHeaders.append("Cookie", "rds-session-development=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmZUo0OVRqcUhWRzRPMGx1VURseiIsImlhdCI6MTY5ODY3NTIyNiwiZXhwIjoxNzAxMjY3MjI2fQ.RSlSh04Fk2_eLmTEIUNtFC7X7N-g8duNieTXFDStaALHVSI5UmTHajsiLJwMhnxUpZnX2O5s7FFiGIu3MgwmGb9kAkLg3ekvwln3vd4TV6yn0371F917Qmff2U0z-5Rfv836XEP_evl3Mo4Z-EhrBUnqnL_0IptuZtkhQ4Bkj_s");

    myHeaders.append("Content-Type", "application/json");


    var raw = JSON.stringify({
      "fcmToken": fcmtoken,

    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };
    fetch("https://35c8-2406-7400-56-f151-2776-a8c9-36fd-6178.ngrok.io/fcm-token", requestOptions)
      .then(response => JSON.stringify(response))
      .then(result => console.log('res',result))
      .catch(error => console.log('error', error));
  }
  const getNotify = () => {
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "rds-session-development=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmZUo0OVRqcUhWRzRPMGx1VURseiIsImlhdCI6MTY5ODY3NTIyNiwiZXhwIjoxNzAxMjY3MjI2fQ.RSlSh04Fk2_eLmTEIUNtFC7X7N-g8duNieTXFDStaALHVSI5UmTHajsiLJwMhnxUpZnX2O5s7FFiGIu3MgwmGb9kAkLg3ekvwln3vd4TV6yn0371F917Qmff2U0z-5Rfv836XEP_evl3Mo4Z-EhrBUnqnL_0IptuZtkhQ4Bkj_s");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "title": "testing",
      "body": "Helloo world"
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://35c8-2406-7400-56-f151-2776-a8c9-36fd-6178.ngrok.io/notify", requestOptions)
      .then(response =>  JSON.stringify(response))
      .then(result => console.log('resss',result))
      .catch(error => console.log('errorr in second api', error));
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title={"get notify"} onPress={getNotify} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// uninstalling the app, the fcm token should removed if it is not there

title/ event 

Event : date and time notify 
title : onspot notify


descirption 
members + groups 

get all the title and description on notify page 

