import React from 'react';
import { View } from 'react-native';
import { TemperaturaMax } from '../components/TemperaturaMax';
import { useTemperatura } from '../hooks/useTemperatura';
import { TemperaturaResult } from '../components/TemperaturaResult';
import { TemperaturaMin } from '../components/TemperaturaMin';
import { styles } from '../../config/app-theme';

export const TemperaturaScreen: React.FC = () => {
  const { temperatura, setTemperatura } = useTemperatura();

  return (
    <View style={styles.container}>
      <TemperaturaMax onPress={() => setTemperatura(temperatura + 1)} />
      <TemperaturaMin onPress={() => setTemperatura(temperatura - 1)} />
      <TemperaturaResult result={temperatura} />
    </View>
  );
};
