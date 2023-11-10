import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";

interface ButtonProps {
  text: string;
  handlePress?: () => void;
}

export const Button = ({ text, handlePress }: ButtonProps) => {
  return (
      <TouchableOpacity onPress={() => handlePress()} style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
  );
};
