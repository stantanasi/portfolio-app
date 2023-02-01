import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IExperience } from '../../data/experiences'

interface IProps {
  experience: IExperience;
}

export default function Experience({ experience }: IProps) {
  return (
    <View>
      <Text>Experience</Text>
    </View>
  )
}

const styles = StyleSheet.create({})