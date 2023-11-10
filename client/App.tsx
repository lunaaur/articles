import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Account, ArticleForm, Main, Signin, Signup } from "./src/pages";
import { Navbar } from "./src/components";
import { Provider } from "react-redux";
import { store } from "./src/store";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Main} />
          <Stack.Screen
            name="Sign up"
            component={Signup}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Sign in"
            component={Signin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Account"
            component={Account}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ArticleForm"
            component={ArticleForm}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        <SafeAreaView style={{ height: "9%", width: "100%" }}>
          <Navbar />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}
