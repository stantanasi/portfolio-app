import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IExperience } from '../../types/experience.type';

interface IProps {
  experience: IExperience;
}

export default function Experience({ experience }: IProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{experience.title}</Text>
      <Text style={styles.subtitle}>{experience.companyName} • {experience.employementType}</Text>
      <Text style={styles.dates}>{experience.startDate} - {experience.endDate}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#000',
  },
  dates: {
    color: '#888'
  },
})