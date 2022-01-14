import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

let postFooterIcons = [
  {
    name: "Like",
    imageUrl: "https://img.icons8.com/emoji/344/purple-heart.png",
    likedImageUrl: "https://img.icons8.com/nolan/344/add-to-favorites.png",
  },
  {
    name: "Comment",
    imageUrl: "https://img.icons8.com/color/344/comments--v1.png",
  },
  {
    name: "Share",
    imageUrl: "https://img.icons8.com/emoji/344/purple-circle-emoji.png",
  },
  {
    name: "Save",
    imageUrl: "https://img.icons8.com/nolan/344/save.png",
  },
];

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
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter />
        <Likes post={post} />
        <Caption post={post} />
        <CommentSection post={post} />
      </View>
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

let PostFooter = () => (
  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
    <View style={{ flexDirection: "row" }}>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} />
      <Icon
        imgStyle={styles.footerIcon1}
        imgUrl={postFooterIcons[1].imageUrl}
      />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].imageUrl} />
    </View>
    <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl} />
  </View>
);

let Icon = ({ imgStyle, imgUrl }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
);

let Likes = ({ post }) => (
  <View style={{ marginTop: 4, flexDirection: "row" }}>
    <Text style={{ color: "white", fontWeight: "600" }}>
      {post.likes.toLocaleString("en")} {post.likes > 1 ? "likes" : "like"}
    </Text>
  </View>
);

let Caption = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    <Text style={{ color: "white" }}>
      <Text style={{ fontWeight: "600" }}>{post.user}</Text>
      <Text> {post.caption}</Text>
    </Text>
  </View>
);

let CommentSection = ({ post }) => {
  return (
    <View style={{ marginTop: 5 }}>
      {!!post.comments.length && (
        <Text style={{ color: "gray" }}>
          View {post.comments.length > 1 ? "all" : ""} {post.comments.length}
          {post.comments.length > 1 ? " comments" : " comment"}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 40,
    marginLeft: 7,
    borderWidth: 1.6,
    borderColor: "orange",
  },
  footerIcon: {
    width: 33,
    height: 33,
  },
  footerIcon1: {
    width: 33,
    height: 33,
    marginHorizontal: 5,
  },
});
