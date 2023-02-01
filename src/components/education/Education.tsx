import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IEducation } from '../../types/education.type';

interface IProps {
  education: IEducation;
}

export default function Education({ education }: IProps) {
  return (
    <View style={styles.container}>
      <Text>{education.school}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})