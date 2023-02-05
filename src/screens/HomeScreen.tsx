import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
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
    <ScrollView style={styles.container}>
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
            style={[styles.category, { backgroundColor: categorySelected === index ? '#FFF' : '#FFFFFF00' }]}
            onPress={() => setCategorySelected(index)}
          >
            <Text
              style={[styles.categoryText, { color: categorySelected === index ? '#000' : '#888' }]}
            >
              {category.title}
            </Text>
          </Pressable>
        ))}
      </View>
      {categories[categorySelected].component()}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    margin: 20,
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 20,
  },
  name: {
    fontSize: 30,
    fontWeight: '800',
    marginTop: 12,
    marginBottom: 4,
  },
  headline: {
    color: '#808080',
    fontSize: 14,
    fontWeight: '600',
  },
  categories: {
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  category: {
    alignItems: 'center',
    borderRadius: 8,
    flex: 1,
    margin: 4,
    padding: 5,
  },
  categoryText: {
    fontWeight: 'bold',
  },
})