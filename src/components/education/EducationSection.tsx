import { StyleSheet, View } from 'react-native'
import React from 'react'
import Education from './Education'
import educations from '../../data/educations'

export default function EducationSection() {
  return (
    <View style={styles.container}>
      {educations.map((education) => (
        <Education education={education} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})