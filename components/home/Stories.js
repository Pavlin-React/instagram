import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { USERS } from "../../data/users";

const Stories = () => {
  return (
    <View style={{ marginTop: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View key={index} style={{ alignItems: "center" }}>
            <Image source={{ uri: story.image }} style={styles.story} />
            <View style={{ alignItems: "center", marginTop: 3 }}>
              <Text style={{ color: "white" }}>
                {story.user.length > 11
                  ? story.user.slice(0, 10).toLowerCase() + "..."
                  : story.user.toLowerCase()}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  story: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginLeft: 7,
    borderWidth: 3,
    borderColor: "orange",
  },
});
