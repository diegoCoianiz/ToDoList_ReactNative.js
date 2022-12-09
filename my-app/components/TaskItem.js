import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const TaskItem = ( {task, handleDelete} ) => {

  const navigation = useNavigation()
  return (
    <View style={styles.itemContainer}>

      <TouchableOpacity onPress={() => navigation.navigate("TaskFormScreen", {id:task.id})}>
      <Text style={styles.itemTitle}>{task.title}</Text>
      <Text style={styles.itemTitle}>{task.description}</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={{backgroundColor:"#786353", padding:15, borderRadius:15}}
      onPress={() => handleDelete(task.id)}>
        <Text style={{color: "#ffffff"}}>Delete</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: "#536872",
        padding: 20,
        marginVertical: 8,  
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center"
    },
    itemTitle: {
        color: "#ffffff"
    }
})


export default TaskItem