import { View, Text, Modal, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";

interface ModalWindowProps {
  visible: boolean;
  setVisible?: (value: boolean) => void;
  children: React.ReactNode;
  title?: string;
}
export const ModalWindow = ({
  visible,
  setVisible,
  title,
  children,
}: ModalWindowProps) => {
  
  return (
    <View>
      {visible && (
        <Modal
          animationType="slide"
          transparent={false}
          visible={visible}
          onRequestClose={() => {
            setVisible(!visible);
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={styles.modalWindow}>
              <View style={styles.modal}>
                <Text style={{ fontWeight: "600", fontSize: 17 }}>{title}</Text>
              </View>
              <View style={styles.elem}>{children}</View>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};
