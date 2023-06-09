import { useState } from 'react'

import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import uuid from 'react-native-uuid'

import { styles } from './styles'
import { Task } from '../../components/Tasks';
import { ListEmpty } from '../../components/ListEmpty';
import { TaskCounter } from '../../components/TaskCounter';


// type Props = {
//   name: string;
//   onRemove: () => void;
//   onCheckChanged: (name: string) => void;
// }

export interface TaskProps {
  id: string;
  title: string;
  isDone: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [taskName, setTaskName] = useState('')

  function handleAddTask() {
    if (!taskName.trim()) return

    const newTask = {
      id: uuid.v4() as string,
      title: taskName,
      isDone: false,
    }

    setTasks(prevState => [...prevState, newTask])
    setTaskName('')
  }

  function handleRemoveTask(id: string) {
    // Alert.alert("Excluir", `Excluir a tarefa ${name}?`, [
    //   {
    //     text: 'Sim',
    //     onPress: () => setTasks(prevState => prevState.filter(task => task !== name))
    //   },
    //   {
    //     text: 'Não',
    //     style: 'cancel'
    //   }
    // ])
    setTasks(prevState => prevState.filter(task => task.id !== id))
    }

  function handleCheckTask(id: string) {
    setTasks(state => state.map(task => {
      if (task.id === id) return { ...task, isDone: !task.isDone }

      return task;
    }))
  }

  const finishCount = tasks.reduce((count, task) => {
    if (task.isDone) count++;

    return count;
  }, 0)

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('@assets/logo.png')}
          />
        </View>
        <View style={styles.inputComponent}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            onChangeText={setTaskName}
            value={taskName}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleAddTask}
          >
            <AntDesign name="pluscircleo" size={16} color="white"/>
          </TouchableOpacity>
        </View>
        <TaskCounter createdCount={tasks.length} finishCount={finishCount}/>
        <FlatList
          data={tasks}
          style={styles.list}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Task
              key={item.id}
              task={item}
              // onRemove={() => handleRemoveTask(item)}
              onRemove={handleRemoveTask}
              onCheckChanged={handleCheckTask}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <ListEmpty />
        )}
        />

        {/* {Boolean(tasks.length) ? (
          <View style={styles.list}>
            {tasks.map(task => (
              <Task
                key={task.id}
                task={task}
                onCheckChanged={handleCheckTask}
                onRemove={handleRemoveTask}
              />
            ))}
          </View>
        ) : (
            <Text></Text>
        )} */}

      </View>

    </>
  )
}
