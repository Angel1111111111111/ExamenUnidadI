import React from 'react';
import { Text } from 'react-native';
import { styles } from '../../config/app-theme';

interface Props {
  result: number;
}

const getTemperatureColor = (temp: number): string => {
  if (temp < 15) return 'blue';
  if (temp <= 25) return 'green';
  return 'red';
};

export const TemperaturaResult: React.FC<Props> = ({ result }) => {
  return (
    <Text style={{ ...styles.temperatureText, color: getTemperatureColor(result) }}>
      {result}°C
    </Text>
  );
};
