import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@rneui/base'

export default function Intro(props) {
  return (
    <View>
      <Text>Bem vindo, etc...</Text>
      <Button title="Começar" onPress={ () => props.navigation.navigate("Questoes")} />
    </View>
  )
} 