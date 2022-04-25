import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreens from "../screens/LandingScreens";


const Stack = createNativeStackNavigator();

const Stacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Landing"
        component={LandingScreens}
        options={{ title: "Login", header: () => null }}
      />

    
    </Stack.Navigator>
  );
};
export default Stacks;
