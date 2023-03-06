import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
} from "react-native";

// Fonts
import { useFonts } from "expo-font";

export default function LoginScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    Roboto: require("../assets/fonts/Roboto-Regular.ttf"),
  });

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(true);

  return (
    <View
      className="flex-1 items-center justify-center bg-white"
      style={{ fontFamily: "Roboto" }}
    >
      <Image
        className="mt-6 mb-10 h-[40px] w-[210px]"
        source={require("../assets/images/logo-bg-removed.png")}
      />

      <SafeAreaView className="w-[80%]">
        <Text className="mb-2 text-base font-medium italic text-slate-400">
          Introduce el nombre
        </Text>

        <View className="flex flex-row justify-between items-center bg-white shadow-lg shadow-gray-400 rounded-xl px-3 py-2">
          <TextInput
            className="italic font-semibold w-[90%]"
            onChangeText={(newText) => setName(newText)}
            defaultValue={name}
          />
        </View>

        <Text className="mt-8 mb-2 text-base font-medium italic text-slate-400">
          Introduce la contraseña
        </Text>

        <View className="flex flex-row justify-between items-center bg-white shadow-lg shadow-gray-400 rounded-xl px-3 py-2">
          <TextInput
            className="italic font-semibold w-[90%]"
            onChangeText={(newText) => setPassword(newText)}
            value={password}
            name="password"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="newPassword"
            secureTextEntry={passwordVisible}
            enablesReturnKeyAutomatically
          />

          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Image
              className="h-4 w-5"
              source={
                passwordVisible
                  ? require("../assets/images/footer_icons/eye-remove.png")
                  : require("../assets/images/footer_icons/eye-active.png")
              }
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <TouchableOpacity
        onPress={() => navigation.navigate("Menu")}
        className="mt-10 bg-background-dark px-20 py-4 rounded-xl"
      >
        <Text className="text-white font-medium">Iniciar Sesión</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
