import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { Eye, EyeOff } from "lucide-react-native";

interface InputProps {
  value: string;
  setValue: (value: string) => void;
  isError?: boolean;
  rightElement?: React.ReactNode;
  inputPlaceholder?: string;
}

export const Input = ({
  value,
  setValue,
  isError,
  rightElement,
  inputPlaceholder,
  ...props
}: InputProps) => {
  const onChangeTextHandler = (value: string) => {
    setValue(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputViewElems}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder={(inputPlaceholder && inputPlaceholder) || ""}
            value={value}
            onChangeText={(value) => onChangeTextHandler(value)}
            {...props}
          />
        </View>
        <View>
          {rightElement && (
            <View style={styles.rightElement}>{rightElement}</View>
          )}
        </View>
      </View>
    </View>
  );
};

export const PasswordInput = ({ ...props }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isInputHidden, setIsInputHidden] = useState<boolean>(true);

  const handleInput = () => {
    setIsPasswordVisible(!isPasswordVisible);
    setIsInputHidden(!isInputHidden);
  };

  return (
    <Input
      {...props}
      secureTextEntry={isInputHidden}
      rightElement={
        <TouchableOpacity onPress={() => handleInput()}>
          {(isPasswordVisible && <Eye color="gray" />) || (
            <EyeOff color="gray" />
          )}
        </TouchableOpacity>
      }
    />
  );
};
