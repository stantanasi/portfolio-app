import { StyleSheet, View } from 'react-native'
import React from 'react'
import Experience from './Experience'
import experiences from '../../data/experiences'

export default function ExperienceSection() {
  return (
    <View style={styles.container}>
      {experiences.map((experience, index) => (
        <Experience key={index} experience={experience} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
}) 