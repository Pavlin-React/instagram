import React, { useState } from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";

export let bottomTabIcons = [
  {
    name: "Home",
    active: "https://img.icons8.com/color/344/home.png",
    inactive: "https://img.icons8.com/fluency/344/home.png",
  },
  {
    name: "Search",
    active:
      "https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/344/external-search-project-work-icongeek26-outline-gradient-icongeek26-1.png",
    inactive: "https://img.icons8.com/fluency/344/search.png",
  },
  {
    name: "Reels",
    active: "https://img.icons8.com/color/344/instagram.png",
    inactive: "https://img.icons8.com/color/344/instagram-reel.png",
  },
  {
    name: "Shop",
    active:
      "https://img.icons8.com/fluency-systems-filled/48/ffffff/shopping-bag-full.png",

    inactive:
      "https://img.icons8.com/fluency-systems-regular/48/ffffff/shopping-bag-full.png",
  },
  {
    name: "Profile",
    active: "https://www.freeiconspng.com/uploads/face-png-image-0.png",
    inactive: "https://thumbs.dreamstime.com/x/sour-face-11002856.jpg",
  },
];
let BottomTabs = ({ icons }) => {
  let [activeTab, setActiveTab] = useState("Home");
  let Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
        style={[
          styles.icon,
          icon.name === "Profile" ? styles.profile() : null,
          activeTab === 'Profile' && icon.name === activeTab
          ]}
      />
    </TouchableOpacity>
  );
  return (
    <View style={styles.wrapper}>
      <Divider orientation="vertical" width={1} />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

let styles = StyleSheet.create({
  icon: {
    width: 35,
    height: 35,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    height: 50
  },
  wrapper: {
    position: "absolute",
    width: "100%",
    bottom: "3%",
    backgroundColor: "#121212",
    zIndex: 999,
  },
  profile: (activeTab = "") => ({
    borderRadius: 50,
    backgroundColor: "white",
    borderWith: activeTab === "Profile" ? 2 : 0,
  }),
});

export default BottomTabs;
