import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Post = ({ post }) => {
  return (
    <View
      style={{
        borderTopWidth: 1,
        borderTopColor: "gray",
        activeOpacity: 0.1,
        marginBottom: 30,
      }}
    >
      <PostHeader post={post} />
      <PostImage post={post} />
    </View>
  );
};

export default Post;

let PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      margin: 5,
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={{ uri: post.profile_picture }} style={styles.story} />
      <Text
        style={{
          color: "white",
          fontWeight: "700",
          marginLeft: 5,
        }}
      >
        {post.user}
      </Text>
    </View>
    <Text style={{ color: "white", fontWeight: "900" }}>...</Text>
  </View>
);

let PostImage = ({ post }) => (
  <View style={{ height: 450, width: "100%" }}>
    <Image
      source={{ uri: post.imageUrl }}
      style={{ width: "100%", height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 40,
    marginLeft: 7,
    borderWidth: 1.6,
    borderColor: "orange",
  },
});
