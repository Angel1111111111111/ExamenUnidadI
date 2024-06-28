import {Pressable, Text, View} from 'react-native';
import { styles } from '../../config/app-theme';

interface Props {
  onPress: () => void;
}

export const TemperaturaMax = ({onPress}: Props) => {
  return (
    <Pressable style={styles.buttonMax} onPress={onPress}>
      <Text style={styles.text}>+</Text>
    </Pressable>
  );
};