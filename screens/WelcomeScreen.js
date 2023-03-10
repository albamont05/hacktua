import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { Text, View, TouchableOpacity, Image } from "react-native";

// Fonts
import { useFonts } from "expo-font";

export default function WelcomeScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    Roboto: require("../assets/fonts/Roboto-Regular.ttf"),
  });

  return (
    <View
      className="flex-1 items-center justify-center bg-white"
      style={{ fontFamily: "Roboto" }}
    >
      <Text className="text-3xl text-slate-700">Bienvenid@ a</Text>

      <Image
        className="mt-4 h-[40px] w-[210px]"
        source={require("../assets/images/logo-bg-removed.png")}
      />

      <Text className="my-10 w-60 text-center text-lg italic text-slate-400">
        Lleva tu estado físico y mental a otro nivel
      </Text>

      <Image
        className="mt-4 h-[270px] w-[270px]"
        source={require("../assets/images/mujer.png")}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        className="mt-10 bg-background-dark px-20 py-4 rounded-xl"
      >
        <Text className="text-white">Iniciar Sesión</Text>
      </TouchableOpacity>

      <View className="flex flex-row justify-center mt-5">
        <Text className="text-slate-400 mr-2">¿No tienes una cuenta?</Text>

        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text className="text-background-dark">Crear Cuenta</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
