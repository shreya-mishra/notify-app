import React, { useEffect } from "react";
import { View, Button } from "react-native";
import { GoogleSignin, GoogleSigninButton } from "react-native-google-signin";

const SignInScreen = () => {
  useEffect(() => {
    // Initialize GoogleSignin
    GoogleSignin.configure({
      webClientId: "YOUR_WEB_CLIENT_ID", // Get this from the Google Cloud Console
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log("Google Sign-In Success:", userInfo);
      // You can handle the signed-in user info here
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  return (
    <View>
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
      />
    </View>
  );
};

export default SignInScreen;
