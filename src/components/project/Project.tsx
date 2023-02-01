import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IProject } from '../../types/project.type'

interface IProps {
  project: IProject;
}

export default function Project({ project }: IProps) {
  return (
    <View style={styles.container}>
      <Text>{project.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})