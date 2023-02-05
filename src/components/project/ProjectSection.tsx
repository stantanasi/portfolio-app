import { ActivityIndicator, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { IProject } from '../../types/project.type';
import Project from './Project';

export default function ProjectSection() {
  const [isLoading, setIsLoading] = useState(false)
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    setIsLoading(true);

    fetch('https://api.github.com/users/stantanasi/repos?sort=pushed&direction=desc')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data)
        setIsLoading(false)
      })
  }, [])

  return (
    <View style={styles.container}>
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
      {isLoading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  loading: {},
})