import AsyncStorage from "@react-native-async-storage/async-storage";
import { taskGetAll } from "./tasksGetAll";
import { TASK_COLLECTION } from "../storageConfig";

export async function taskCreate(newTask: string) {
  try {
    const storedTasks = await taskGetAll();

    const taskAlreadyExists = storedTasks.includes(newTask);

    if (taskAlreadyExists) {
      throw new AppError('Task already exists')
    }

    const storage = JSON.stringify([...storedTasks, newTask])
    await AsyncStorage.setItem(TASK_COLLECTION, storage)
  } catch (error) {
    throw error;
  }
}