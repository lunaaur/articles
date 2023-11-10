import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
export const Main = () => {
  const storeUser = useSelector((store) => store.user);
  const storeArticles = useSelector((store) => store.articles.articles);

  useEffect(() => {
    console.log(storeArticles, "<< storeArticles");
  }, [storeArticles]);

  return (
    <SafeAreaView style={styles.container}>
        {storeArticles.map((article) => (
          <View key={article.id} style={styles.articles}>
            <View style={styles.textView}>
              <Text style={styles.text}>{article.header}</Text>
              <Text>{article.content}</Text>
            </View>
            <View style={{ marginTop: "1%" }}>
              <Image
                key={article.id}
                source={require(`../../static/images/flight.jpg`)}
                style={{
                  width: 150,
                  height: 150,
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                }}
                />
            </View>
          </View>
        ))}
    </SafeAreaView>
  );
};
