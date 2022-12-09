import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import {createTask, getTask, updateTask} from '../api'
import Layout from '../components/Layout'


const TaskFormScreen = ({navigation, route}) => {

  const [task, setTasks] = useState({
    title: "",
    description: ""
  })
  const [editing, setEditing] = useState(false)

  const handleChange = (inputName, inputValue) => setTasks({...task, [inputName]: inputValue})
  const handleSummit = async () => {
    try {
      if(!editing){
        await createTask(task)
      } else {
        updateTask(route.params.id, task)
      }
    } catch (e) {
      console.error(e)
    }
    navigation.navigate("HomeScreen")
  }

  
  useEffect(() => {
    if(route.params && route.params.id){
      navigation.setOptions({headerTitle: "Modificación de tarea"});
      (async () => {
      const task = await getTask(route.params.id)
      setTasks({title: task.title, description: task.description})
      setEditing(true)
      })();
    }
  }, [])
  return (
    <Layout>
      <TextInput
      style={style.input}
        placeholder='Titulo:'
        placeholderTextColor="#546574"
        onChangeText={(text) => handleChange("title", text)}
        value={task.title}
      />
      <TextInput
      style={style.input}
        placeholder='Descripción:'
        placeholderTextColor="#546574"
        onChangeText={(text) => handleChange("description", text)}
        value={task.description}
      />   

    {
      !editing ? (
        <TouchableOpacity style={style.buttonSave} onPress={handleSummit}>
        <Text style={style.buttonText}>Añadir</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={style.buttonUpdated} onPress={handleSummit}>
        <Text style={style.buttonText}>Modificar</Text>
        </TouchableOpacity>
      )
    }
    
    </Layout>
  )
}

const style = StyleSheet.create({
  input: {
    width: "90%",
    marginBottom: 7,
    fontSize: 25,
    borderWidth: 1,
    borderColor: "#10ac84",
    height: 35,
    color: "#ffffff",
    padding: 20,
    borderRadius: 5
  },
  buttonSave: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "#10ac84",
    width:"90%"
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
  },
  buttonUpdated: {
    padding: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 3,
    backgroundColor: "#10ac84",
    width:"90%"
  }
})

export default TaskFormScreen