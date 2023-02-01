import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ExperienceSection from '../components/experience/ExperienceSection';
import EducationSection from '../components/education/EducationSection';
import ProjectSection from '../components/project/ProjectSection';

export default function HomeScreen() {
  const profile_pic = require('../../assets/images/profile-pic.jpg')
  const categories = [
    { title: 'Expérience', component: () => <ExperienceSection /> },
    { title: 'Éducation', component: () => <EducationSection /> },
    { title: 'Projets', component: () => <ProjectSection /> },
  ]
  const [categorySelected, setCategorySelected] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={profile_pic}
          style={styles.profilePic}
        />
        <Text style={styles.name}>Lory-Stan TANASI</Text>
        <Text style={styles.headline}>Développeur full stack mobile/web chez 42c</Text>
      </View>
      <View style={styles.categories}>
        {categories.map((category, index) => (
          <Pressable
            key={index}
            style={styles.category}
            onPress={() => setCategorySelected(index)}
          >
            <Text>{category.title}</Text>
          </Pressable>
        ))}
      </View>
      {categories[categorySelected].component()}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  header: {},
  profilePic: {
    width: 150,
    height: 150,
  },
  name: {},
  headline: {},
  categories: {
    flexDirection: 'row',
  },
  category: {
    alignItems: 'center',
    flex: 1,
  },
})