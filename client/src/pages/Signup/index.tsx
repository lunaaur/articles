import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Input, PasswordInput, ImageUploader } from "../../components";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../store";
import { signupUserAction } from "../../store/actions/userAction";
import { getRandomId } from "../../helpers/getRandomId";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { IUser } from "../../types/user";
import { createTokenAction } from "../../store/actions/userIdAction";

export const Signup = () => {
  const [name, setName] = useState<string>("");
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatedPassword, setRepeatedPassword] = useState<string>("");
  const [image, setImage] = useState<string | null>(null);
  const [erorrMessage, setErrorMessage] = useState<string>("");
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const handleSubmit = async () => {
    try {
      if (password == repeatedPassword) {
        const randomId = getRandomId();
        const newUser = {
          id: randomId,
          name: name,
          login: login,
          password: password,
        };
        dispatch(signupUserAction(newUser));
        dispatch(createTokenAction(newUser.id));
        navigation.navigate("Home");
      } else {
        throw new Error("wrong password");
      }
    } catch (error: any) {
      if (error.message == "wrong password") {
        setErrorMessage("Make sure you entered a correct password");
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Input value={name} setValue={setName} inputPlaceholder="name" />
      <Input value={login} setValue={setLogin} inputPlaceholder="login" />
      <PasswordInput
        value={password}
        setValue={setPassword}
        inputPlaceholder="password"
      />
      <PasswordInput
        value={repeatedPassword}
        setValue={setRepeatedPassword}
        inputPlaceholder="repeat password"
      />
      <TouchableOpacity onPress={() => navigation.navigate("Sign in")}>
        <Text style={styles.signupSubtitle}>Already have an account?</Text>
      </TouchableOpacity>
      <ImageUploader image={image} setImage={setImage} />
      <View style={styles.btnView}>
        <Button text="sign up" handlePress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
};
