import React from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from '../../config/app-theme';

interface Props {
  onPress: () => void;
}

export const TemperaturaMin = ({onPress}: Props) => {
  return (
    <Pressable style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.text}>-</Text>
    </Pressable>
  );
};
