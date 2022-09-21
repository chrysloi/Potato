import * as SecureStore from "expo-secure-store";

export const storeToken = async (key, value) => {
  await SecureStore.setItemAsync(key, value);
};

export const getValueForToken = async () => {
  let result = await SecureStore.getItemAsync("token");
  let type = await SecureStore.getItemAsync("userType");
  if (result) {
    return result;
  } else if (type) {
    return type;
  } else {
    return null;
  }
};

export const removerToken = async () => {
  await SecureStore.deleteItemAsync("token");
  await SecureStore.deleteItemAsync("userType");
};
