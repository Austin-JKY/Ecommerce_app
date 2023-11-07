import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigation from './src/compments/BottomNav'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'

const App = () => {
  return (
      <Provider store={store}>
          <Navigation/>
      </Provider>
  )
}

export default App

const styles = StyleSheet.create({})