import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HomeScreen() {
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
})