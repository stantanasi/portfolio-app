import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { IProject } from '../../types/project.type';

export default function ProjectSection() {
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/stantanasi/repos?sort=pushed&direction=desc')
      .then((response) => response.json())
      .then((data) => setProjects(data))
  })

  return (
    <View style={styles.container}>
      <Text>ProjectSection</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})