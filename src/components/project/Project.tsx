import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IProject } from '../../types/project.type'

interface IProps {
  project: IProject;
}

export default function Project({ project }: IProps) {
  const star_icon = require('../../../assets/icons/star.png');
  const fork_icon = require('../../../assets/icons/fork.png');

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{project.name}</Text>
      <Text style={styles.description}>{project.description}</Text>

      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginBottom: 10,
          marginTop: 20,
        }}
      />

      <View style={styles.statsList}>
        <View style={styles.stats}>
          <Image
            source={star_icon}
            style={styles.statsIcon}
          />
          <Text style={styles.statsCount}>{project.stargazers_count}</Text>
        </View>
        <View style={styles.stats}>
          <Image
            source={fork_icon}
            style={styles.statsIcon}
          />
          <Text style={styles.statsCount}>{project.forks_count}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEE',
    borderRadius: 25,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    color: '#888',
  },
  statsList: {
    flexDirection: 'row',
  },
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginEnd: 14,
  },
  statsCount: {
    color: '#57606a',
    fontSize: 16,
  },
  statsIcon: {
    width: 16,
    height: 16,
    marginEnd: 2,
    tintColor: '#57606a',
  },
})