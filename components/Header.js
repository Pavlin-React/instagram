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

const Header = () => {
  let [fontsLoaded] = useFonts({
    AguafinaScript_400Regular,
  });
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
          }}
        >
          <TouchableOpacity>
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
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({});
