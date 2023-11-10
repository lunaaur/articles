import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Home, User, PlusCircle } from "lucide-react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const navigation = useNavigation();
  const [userId, setUserId] = useState<string | null>(null);
  const store = useSelector((store) => store.token);
  const getData = async () => {
    try {
      if (store.user?.value) {
        setUserId(store.user.value);
      } else {
        setUserId(store.user.id);
      }
    } catch (e) {}
  };
  useEffect(() => {
    getData();
    console.log(store, "store");
  }, [store]);

  return (
    <View style={styles.container}>
      <View style={styles.elems}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Home color="#6757ff" size={41} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ArticleForm")}>
          <PlusCircle color="#6757ff" size={41} />
        </TouchableOpacity>
        {userId ? (
          <TouchableOpacity onPress={() => navigation.navigate("Account")}>
            <User color="#6757ff" size={41} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => navigation.navigate("Sign up")}>
            <User color="#6757ff" size={41} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
