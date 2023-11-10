import { View, Text, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Input } from "../../components";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { createArticleAction } from "../../store/actions/articleAction";

export const ArticleForm = () => {
  const [header, setHeader] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const storeToken = useSelector((store) => store.token);

  console.log(storeToken)
  const handleSubmit = () => {
    if (storeToken?.user?.value) {
      const newArticle = {
        header: header,
        content: content,
      };
      dispatch(createArticleAction(newArticle));
      navigation.navigate("Home");
    } else {
      Alert.alert("Authorize to add article");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Input value={header} setValue={setHeader} inputPlaceholder="header" />
      <Input value={content} setValue={setContent} inputPlaceholder="content" />
      <View style={styles.btnView}>
        <Button text="add" handlePress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
};
