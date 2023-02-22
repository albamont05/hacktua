import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { Text, View, TouchableOpacity, Image } from "react-native";

// Fonts
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
  });

  return (
    <View
      className="flex-1 items-center bg-background-dark justify-center"
      style={{ fontFamily: "Roboto" }}
    >
      {/* Shadow box effect */}
      <View className="h-10 bg-white opacity-40 w-[93%]  mt-24 rounded-t-3xl"></View>

      {/* Body */}
      <View className="flex-1 items-center bg-white w-full -mt-7 rounded-t-3xl">
        <Image
          className="my-20 h-[50px] w-[250px]"
          source={require("./assets/images/logo-bg-removed.png")}
        />

        <Text className="text-2xl text-gray-600 text-center w-40">¿Qué te trae a Hacktua?</Text>
      </View>


      <StatusBar style="auto" />
    </View>
  );
}
