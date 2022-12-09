import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator} from "@react-navigation/native-stack"
import { Text, TouchableOpacity } from "react-native";

import HomeScreen from "./screens/HomeScreen"
import TaskFormScreen from "./screens/TaskFormScreen";

const Stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
      <Stack.Screen name="HomeScreen" 
                    component={HomeScreen} 
                    options={({navigation}) => ({
                      title: "Tareas a realizar:",
                      headerStyle: { backgroundColor: "#151A1D" },
                      headerTitleStyle: { color: "#ffffff"},
                      headerRight: () => (
                        <TouchableOpacity 
                          onPress={() => navigation.navigate("TaskFormScreen")}>
                          <Text style={{color:"white",
                                        marginRight: 20,
                                        fontSize:15}}
                          >Crear</Text>
                        </TouchableOpacity>
                      )
                  })}/>
      <Stack.Screen name="TaskFormScreen" 
                    component={TaskFormScreen}
                    options= {{
                      title: "Nueva tarea:",
                      headerStyle: {
                        backgroundColor: "#151A1D"},
                        headerTitleStyle: { color: "#ffffff"},
                        headerTintColor: "#ffffff"
                  }}/>
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App