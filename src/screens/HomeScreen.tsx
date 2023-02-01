import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ExperienceSection from '../components/experience/ExperienceSection';
import EducationSection from '../components/education/EducationSection';

export default function HomeScreen() {
  const categories = [
    { title: 'Expérience', component: () => <ExperienceSection /> },
    { title: 'Éducation', component: () => <EducationSection /> },
    { title: 'Projets', component: () => <View /> },
  ]
  const [categorySelected, setCategorySelected] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://avatars.githubusercontent.com/u/46174829?v=4',
          }}
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