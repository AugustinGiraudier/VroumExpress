import AsyncStorage from "@react-native-async-storage/async-storage";


const addItemToStorage = async (key : string, item) => {
    try {
        const jsonItem = JSON.stringify(item)
        await AsyncStorage.setItem(key, jsonItem);
    } catch (e) {
        console.log("An error occurred", e);
    }
}

const getItemFromStorage = async (key : string) => {
    try {
        const jsonItem = await AsyncStorage.getItem(key)
        return jsonItem != null ? JSON.parse(jsonItem) : null;
    } catch(e) {
        console.log("An error occurred", e);
    }
}

const removeItemFromStorage = async (key : string) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch(e) {
        console.log("An error occurred", e);
    }
}

export const isItemInLocalStorage = async (key : string) => {
    return await getItemFromStorage(key) !== null;
}

export const toggleItemInStorage = async (key : string) => {
    if(await isItemInLocalStorage(key)){
        await removeItemFromStorage(key);
    }else{
        await addItemToStorage(key, key);
    }
}