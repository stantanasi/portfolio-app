import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IEducation } from '../../types/education.type';

interface IProps {
  education: IEducation;
}

export default function Education({ education }: IProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.school}>{education.school}</Text>
      <Text style={styles.degree}>{education.degree}</Text>
      <Text style={styles.dates}>{education.startDate} - {education.endDate}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  school: {
    color: '#000',
    fontWeight: 'bold',
  },
  degree: {
    color: '#000',
  },
  dates: {
    color: '#888',
  },
})