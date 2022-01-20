import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import { AguafinaScript_400Regular } from "@expo-google-fonts/aguafina-script";
import { StatusBar } from "expo-status-bar";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";



const Header = () => {
  let [fontsLoaded, error] = useFonts({
    AguafinaScript_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  let navigation = useNavigation()

  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity>
          <View style={{ width: 150, height: 30 }}>
            <Text
              style={{
                fontFamily: "AguafinaScript_400Regular",
                color: "white",
                fontSize: 30,
                letterSpacing: 3,
              }}
            >
              Instagram
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            width: 120,
            justifyContent: "space-between",
            marginRight: 7
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate('NewPostScreen')} >
            <Feather name="plus-square" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5 name="heart" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5 name="facebook-messenger" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          right: 0,
          top: -10,
          backgroundColor: "red",
          paddingHorizontal: 5,
          borderRadius: 10,
          zIndex: 100
        }}
      >
        <Text style={{ color: "white" }}>11</Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({});
