import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./appNavigator";

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};
