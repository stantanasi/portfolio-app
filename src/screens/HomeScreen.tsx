import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function HomeScreen() {
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
        <Pressable style={styles.category} onPress={() => setCategorySelected(0)}>
          <Text>Expérience</Text>
        </Pressable>
        <Pressable style={styles.category} onPress={() => setCategorySelected(1)}>
          <Text>Éducation</Text>
        </Pressable>
        <Pressable style={styles.category} onPress={() => setCategorySelected(2)}>
          <Text>Projets</Text>
        </Pressable>
      </View>
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