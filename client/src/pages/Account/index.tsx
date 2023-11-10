import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { Button, ModalWindow } from "../../components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { removeTokenAction } from "../../store/actions/userIdAction";
import { Pencil } from "lucide-react-native";
import { editUserAction } from "../../store/actions/userAction";

export const Account = () => {
  const storeToken = useSelector((store) => store.token);
  const storeUser = useSelector((store) => store.user);
  const [visible, setVisible] = useState<boolean>(false);
  const navigation = useNavigation();
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  const [newName, setNewName] = useState<string>("");

  const handleButton = async () => {
    try {
      const emptyToken = { token: 0 };
      await AsyncStorage.removeItem("user");
      dispatch(removeTokenAction(emptyToken.token));
      navigation.navigate("Home");
    } catch (error) {}
  };

  const getUser = () => {
    if (storeUser.users.length >= 1) {
      let users = storeUser.users;
      let user = users.find((el) => {
        return el.value.id === storeToken.user.value;
      });
      setUser(user);
    } else {
      console.log(storeUser.users, "?");
      setUser(storeUser.users);
    }
  };

  const handleModalBtn = () => {
    console.log(newName, "newName!");
    const editedUser = {
      id: user.value.id,
      name: newName,
      login: user.value.login,
      password: user.value.password,
    };
    dispatch(editUserAction(editedUser));
    console.log(editedUser, '!!!')
    setVisible(false);
  };

  useEffect(() => {
    console.log(storeToken, "storeToken in acc");
    console.log(storeUser.users, "storeUser in acc");
    getUser();
  }, [storeToken, user]);
  console.log(user, "!");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.block}>
        <View style={styles.profile}>
          <Text style={styles.header}>User information</Text>
          <View style={styles.textView}>
            <Text style={styles.text}>Login: {user.value?.login}</Text>
          </View>
          <View style={styles.textViewEditable}>
            <Text style={styles.text}>Name: {user.value?.name}</Text>
            <TouchableOpacity onPress={() => setVisible(!visible)}>
              <Pencil color="gray" />
            </TouchableOpacity>
          </View>
        </View>
        <Button text="log out" handlePress={() => handleButton()} />
        <ModalWindow
          title="Edit name"
          visible={visible}
          setVisible={setVisible}
        >
          <View style={{ justifyContent: "center" }}>
            <View
              style={{
                width: "100%",
                height: 80,
                alignItems: "flex-start",
                marginRight: 20,
              }}
            >
              <TextInput
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  height: 40,
                  borderRadius: 9,
                }}
                value={newName}
                onChangeText={(value) => setNewName(value)}
                placeholder=""
              ></TextInput>
            </View>
            <View style={{ width: "100%", height: 80 }}>
              <Button text="OK" handlePress={() => handleModalBtn()} />
            </View>
          </View>
        </ModalWindow>
      </View>
    </SafeAreaView>
  );
};
