import React, {useState} from 'react';
import {View, Button} from 'react-native';
import { styles } from '../../config/app-theme';

export const ColoresScreen = () => {
  const [backgroundColor, setBackgroundColor] = useState<string>('#FFFFFF');

  const changeBackgroundColor = () => {
    setBackgroundColor(generateRandomHexColor());
  };

  const generateRandomHexColor = (): string => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  return (
    <View style={[styles.containerColor, {backgroundColor}]}>
      <View style={styles.buttonContainerColor}>
        <Button title="Cargar color" onPress={changeBackgroundColor} />
      </View>
    </View>
  );
};
