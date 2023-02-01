import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IExperience } from '../../data/experiences'

interface IProps {
  experience: IExperience;
}

export default function Experience({ experience }: IProps) {
  return (
    <View style={styles.container}>
      <Text>{experience.title}</Text>
      <Text>{experience.companyName} • {experience.employementType}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})