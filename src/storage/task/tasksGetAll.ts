import AsyncStorage from "@react-native-async-storage/async-storage";
import { TASK_COLLECTION } from "../storageConfig";

export async function taskGetAll() {
  try {
    const storage = await AsyncStorage.getItem(TASK_COLLECTION);

    const tasks: string[] = storage ? JSON.parse(storage) : [];

    return tasks;
  } catch (error) {
    throw error;
  }
}