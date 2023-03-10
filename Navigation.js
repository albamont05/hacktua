import React, { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Screens for Stack
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import RecoveryAccountScreen from "./screens/RecoveryAccountScreen";
import MenuScreen from "./screens/MenuScreen";
import NutritionScreen from "./screens/NutritionScreen";
import ProfileScreen from "./screens/ProfileScreen";
import HabitDairyScreen from "./screens/HabitDairyScreen";
import SplashScreen from "./screens/SplashScreen";


// Stack
const Stack = createStackNavigator();

function MainStack() {
  const { userInfo, splashLoading, isLogged } = useContext(AuthContext);

  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* SPLASH */}
      {splashLoading ? (
        <Stack.Screen name="Splash" component={SplashScreen} />
      ) : (

        userInfo.success ? (
          <>
            <Stack.Screen name="Menu" component={MenuScreen} />
            <Stack.Screen name="Nutrition" component={NutritionScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="HabitDairy" component={HabitDairyScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="RecoveryAccount" component={RecoveryAccountScreen} />
          </>
        )

      )}
      {/* END SPLASH */}

    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
