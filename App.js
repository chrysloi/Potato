import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootNavigator } from "./src/navigation/rootNavigator";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs();

export default function App() {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_500Medium });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </SafeAreaProvider>
  );
}
