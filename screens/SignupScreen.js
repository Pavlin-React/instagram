import { StyleSheet, Image, View } from "react-native";
import React from "react";
import SignupForm from "../components/signupScreen/SignupForm";

let INSTAGRAM_LOGO =
  "https://ecole-m-coiffure.com/wp-content/uploads/2019/05/instagram-logo-1-1024x1022.png";

const SignupScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{ uri: INSTAGRAM_LOGO, width: 100, height: 100 }} />
      </View>
      <SignupForm/>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  logoContainer: {
    marginTop: 50,
    alignItems: "center",
  },
});
