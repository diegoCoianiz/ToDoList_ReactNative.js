//CSS FONDO
import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'

const Layout = ({children}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#344147" />
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#344147",
        padding: 20,
        flex: 1,
        alignItems: "center"
    }
})

export default Layout