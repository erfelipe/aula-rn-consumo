import { View, Text } from 'react-native'
import React from 'react'

export default function Feedback(props) {
  return (
    <View>
      <Text>Feedback</Text>
      <Text>Os dados para feedback: {props.route.params.q1} </Text>
      <Text>Os dados para feedback: {props.route.params.q2} </Text>
      <Text>Os dados para feedback: {props.route.params.q3} </Text>
      <Text>Os dados para feedback: {props.route.params.q4} </Text>
      <Text>Os dados para feedback: {props.route.params.q5} </Text>
      <Text>Os dados para feedback: {props.route.params.q6} </Text>
    </View>
  )
}