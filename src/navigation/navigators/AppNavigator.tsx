import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ExampleScreen } from "../../screens";
import { Routes } from "../routes";

const AppStack = createNativeStackNavigator();

export const AppNavigation: React.FC = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name={Routes.EXAMPLE}
        component={ExampleScreen}
        options={{ headerShown: false }}
      />
    </AppStack.Navigator>
  );
};
