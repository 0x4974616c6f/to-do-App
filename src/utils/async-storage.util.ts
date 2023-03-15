import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeDate = async (key: string, value: any): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    console.log("Data seved sucessfully");
  } catch (e) {
    console.log("Error saving data", e);
  }
};

export const getData = async <T>(key: string): Promise<T | undefined> => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log("Data retrieved successfully", value);
      return JSON.parse(value) as T;
    }
  } catch (e) {
    console.log("Error retrieving data", e);
  }
};

export const updateData = async (key: string, value: any): Promise<void> => {
  try {
    await AsyncStorage.mergeItem(key, JSON.stringify(value));
    console.log("Data updated successfully");
  } catch (e) {
    console.log("Error updating data", e);
  }
};

export const removeData = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
    console.log("Data removed successfully");
  } catch (e) {
    console.log("Error removing data", e);
  }
};
