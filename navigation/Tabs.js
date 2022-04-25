import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreens from "../screens/LandingScreens";
import AddScreen from "../screens/AddScreen";

const Stack = createNativeStackNavigator();

const Stacks = () => {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="Landing"
        component={LandingScreens}
        options={{ title: "Landing", header: () => null }}
      />

      <Stack.Screen
        name="AddScreen"
        component={AddScreen}
        options={{ title: "AddScreen", header: () => null }}
      />
    </Stack.Navigator>
  );
};
export default Stacks;
