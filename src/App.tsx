import { Text, View } from "react-native";
import React from "react";
import { commonStyles } from "./utils/common/Styles";
import GoogleSignInButton from "./module/signIn/SignInScreen";

const App = () => {
  return (
    <View style={commonStyles.container}>
      <GoogleSignInButton />
    </View>
  );
};

export default App;
