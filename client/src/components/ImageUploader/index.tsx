import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { Button } from "../Button";
import * as ImagePicker from "expo-image-picker";

interface ImageUploaderProps {
  image: null | string;
  setImage: (result: any) => void;
}

export const ImageUploader = ({ image, setImage }: ImageUploaderProps) => {
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View>
      <Button text="Pick an image" handlePress={pickImage} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  );
};
