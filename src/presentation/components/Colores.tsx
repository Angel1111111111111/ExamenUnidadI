import React from 'react'
import { Pressable, Text } from 'react-native'
import { styles } from '../../config/app-theme'

interface Props {
    onPress: () => void;
  }  

export const Colores = ({onPress}: Props) => {
  return (
    <Pressable style={styles.buttonMax} onPress={onPress}>
      <Text style={styles.text}>Cambiar color</Text>
    </Pressable>
  )
}
