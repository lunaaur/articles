import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { Button, Input, PasswordInput } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { createTokenAction } from "../../store/actions/userIdAction";
import { useNavigation } from "@react-navigation/native";

export const Signin = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const storeUser = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSubmit = () => {
    let users = storeUser.users;
    let match = users.find((el) => {
      return el.value.login === login && el.value.password === password;
    });
    if (match) {
      dispatch(createTokenAction(match.value.id));
      navigation.navigate("Home");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {/*       <Text style={styles.signupHeader}>Sign in!</Text> */}
      <Input value={login} setValue={setLogin} inputPlaceholder="login" />
      <PasswordInput
        value={password}
        setValue={setPassword}
        inputPlaceholder="password"
      />
      <View style={styles.btnView}>
        <Button text="sign in" handlePress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
};
