import React, { useEffect, useState } from "react";
import PushNotification from "react-native-push-notification";
import messaging, { firebase } from '@react-native-firebase/messaging';
import { PermissionsAndroid } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    getFCMToken()
  }

}
async function getFCMToken() {

  let fcmtoken = await AsyncStorage.getItem("fcmtoken");
  try {
    if (!fcmtoken) {
      const fcmToken_ = await firebase.messaging().getToken();
      console.log('fcmToken_', fcmToken_)

    } else {
      //
      console.log('inside else')
    }
  } catch (error) {
    console.log(error, 'error in fcm token')
  }

}

export const notificationListener = () => {
  messaging().onMessage((notification) => {
    if (notification) {
      const { title, body } = notification;

      console.log('msg here', { title, body });
    }

  });
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log('inside on notification open app')
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });
  messaging().getInitialNotification().then(remoteMessage => {
    if (remoteMessage) {
      console.log('notification caused app to open from quit state', remoteMessage.notification)
    }
  })

  messaging().onMessage(async remoteMessage => {
    console.log("notification on foreground state.....", remoteMessage)
  })
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('msg handled in the background', remoteMessage)
  })


}

// FCM LIB --> SEND
// REFRESH fcm TOKEN 