import { FlatList, RefreshControl } from 'react-native'
import React, {useEffect, useState} from 'react'
import { useIsFocused } from '@react-navigation/native'
import TaskItem from './TaskItem'
import { getTasks, deleteTask } from '../api'

const TasksLists = () => {

  const [tasks, setTasks] = useState([])
  const [refresing, setRefresing] = useState(false)
  
  const IsFocused = useIsFocused()

  const loadTasks = async () => {
    const data = await getTasks()
    setTasks(data)
  }

  useEffect(() => {
    loadTasks()

  }, [IsFocused])

  const handleDelete = async(id) => {
    await deleteTask(id)
    await loadTasks()
  }

  const renderItem =( { item } ) => {
      return <TaskItem task={item} handleDelete={handleDelete}/>
  }


  const onRefresh = React.useCallback(async () => {
    setRefresing(true)
    await loadTasks()
    setRefresing(false)
  })

  return (
    <FlatList 
      style={{ width:"100%"}}
      data={tasks}
      keyExtractor={(item) => item.id + ""} //String required for ReactNative
      renderItem = {renderItem}
      RefreshControl={
        <RefreshControl
        refreshing= {refresing}
          onRefresh={() => onRefresh}
          progressBackgroundColor="#000"
        />
      }
    />
  )
}

export default TasksLists