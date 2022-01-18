import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import FormikPostUploader from "./FormikPostUploader";

const addNewPost = () => (
  <View>
    <Header />
    <FormikPostUploader/>
  </View>
);

let Header = () => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity>
        <MaterialIcons name="arrow-back-ios" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.headerText}>NEW POST</Text>
      <Text></Text>
    </View>
  );
};

let styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
    marginRight: 27.5
  }
});

export default addNewPost;
