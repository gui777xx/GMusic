import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {
    Dimensions,
    Image,
    SafeAreaView, 
    StyleSheet,
    Text,
    TouchableOpacity,
    View } from 'react-native'
import Slider from '@react-native-community/slider'
import { Ionicons } from '@expo/vector-icons'

const { width, height } = Dimensions.get('window')

const MusicPlayer = () => {
  return (
  <SafeAreaView style={styles.container}>
        <View style={styles.main}>
          <View style={[styles.imageWrapper, styles.elevation]}/>
            <Image
            source={require('../assets/img/gallo1.png')}
            style={styles.musicImage}
            />
        </View>
        <View style={styles.footer}>
          <View style={styles.iconWrapper}>
            <TouchableOpacity>
              <Ionicons name='heart-outline' size={30} color="#888888"/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name='repeat' size={30} color="#888888"/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name='share-outline' size={30} color="#888888"/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name='ellipsis-horizontal' size={30} color="#888888"/>
            </TouchableOpacity>
          </View>

        </View>
      <StatusBar style='light'/>
    </SafeAreaView>
  )
}

export default MusicPlayer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222831',
    },
    main:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },
    footer: {
        width: width,
        alignItems: 'center',
        paddingVertical: 15,
        borderTopColor: '#393E45',
        borderWidth: 1,
    },
    iconWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
    },
})