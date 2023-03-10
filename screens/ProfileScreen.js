import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TabBar from "../components/TabBar";
// Fonts
import { useFonts } from "expo-font";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Spinner from "react-native-loading-spinner-overlay";

export default function ProfileScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    Roboto: require("../assets/fonts/Roboto-Regular.ttf"),
  });

  const {userInfo, logout, isLoading} = useContext(AuthContext);

  return (
    <View className="flex-1 bg-background-dark">
      <SafeAreaView className="flex-1">
        <ScrollView className="flex-1">
          <View
            className="flex-1 items-center justify-center"
            style={{
              fontFamily: "Roboto",
            }}
          >
            <Spinner
                  visible={isLoading}
                  color="#4AB5A9"
                  overlayColor="rgba(0, 0, 0, 0.1)"
                />
            <StatusBar style="auto" />

            {/* Shadow box effect */}
            <View className="h-10 bg-white opacity-40 w-11/12 mt-20 rounded-t-3xl"></View>

            {/* Body */}
            <View className="flex-1 items-center w-full -mt-7 rounded-t-3xl bg-white">
              <LinearGradient
                className="flex-1 px-6 w-full rounded-t-3xl relative pb-10"
                colors={["rgba(255,255,255,1)", "rgba(45,49,66,0.1)"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
              >
                {/* AVATAR */}
                <Image
                  className="h-[60px] w-[60px] -mt-2 ml-1"
                  source={require("../assets/images/avatar.png")}
                />

                {/* PROFILE NAME */}
                <View className="flex flex-row mt-4 items-center justify-between">
                  <View className="flex flex-column w-[75%]">
                    <Text className="capitalize text-xl italic mb-1">
                      {userInfo.user.name}
                    </Text>
                    <Text className="uppercase tracking-widest italic text-sm text-background-dark font-semibold">
                    {userInfo.user.details.sex  ? userInfo.user.details.sex  : "Por especificar"}
                    </Text>
                  </View>

                  <TouchableOpacity className="px-5 py-3.5 bg-background-dark rounded-xl">
                    <Text className="text-white italic">Editar</Text>
                  </TouchableOpacity>
                </View>
                {/* END PROFILE NAME */}

                {/* DESCRIPTION */}
                <Text className="my-6 text-sm text-slate-500 italic font-medium">
                  Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum
                </Text>
                {/* END DESCRIPTION */}

                {/* WIDGETS */}
                <View className="flex flex-row justify-between items-center">
                  {/* WEIGHT */}
                  <View className="flex flex-column">
                    <Text className="uppercase tracking-widest italic text-sm text-background-dark">
                      Peso
                    </Text>
                    <View className="flex flex-row items-end">
                      <Text className="text-2xl">{userInfo.user.details.weight  ? userInfo.user.details.weight  : "0"}</Text>
                      <Text className="ml-1 mb-0.5">kg</Text>
                    </View>
                  </View>

                  {/* AGE */}
                  <View className="flex flex-column">
                    <Text className="uppercase tracking-widest italic text-sm text-background-dark">
                      Edad
                    </Text>
                    <View className="flex flex-row items-end">
                      <Text className="text-2xl">{userInfo.user.calulated_age}</Text>
                      <Text className="ml-1 mb-0.5">yo</Text>
                    </View>
                  </View>

                  {/* HEITH */}
                  <View className="flex flex-column">
                    <Text className="uppercase tracking-widest italic text-sm text-background-dark">
                      Altura
                    </Text>
                    <View className="flex flex-row items-end">
                      <Text className="text-2xl">{userInfo.user.details.height ? userInfo.user.details.height : "0"}</Text>
                      <Text className="ml-1 mb-0.5">cm</Text>
                    </View>
                  </View>
                </View>
                {/* END WIDGETS */}

                <Text className="my-7 italic text-lg">
                  Mis recursos favoritos
                </Text>

                {/* OBJECTIVE CARD */}
                <View className="bg-white h-80 py-8 rounded-xl shadow-xl shadow-gray-500 mb-10">
                  {/* BADGE */}
                  <TouchableOpacity className="flex flex-row px-6 mb-6 items-center justify-center rounded-r-xl">
                    <View className="h-12 w-2 rounded-l-xl bg-green-dark"></View>

                    <View className="h-12 w-full flex px-5 flex-row items-center justify-between rounded-r-xl bg-gray-light">
                      {/* ICON - TEXT */}
                      <View className="flex flex-row items-center justify-between">
                        <Image
                          className="h-[30px] w-[30px] mr-3"
                          source={require("../assets/images/avatar.png")}
                        />

                        <Text>Ayuno 16/8</Text>
                      </View>
                      {/* END ICON - TEXT */}
                    </View>
                  </TouchableOpacity>
                  {/* END BADGE */}

                  {/* BADGE */}
                  <TouchableOpacity className="flex flex-row px-6 mb-6 items-center justify-center rounded-r-xl">
                    <View className="h-12 w-2 rounded-l-xl bg-blue-dark"></View>

                    <View className="h-12 w-full flex px-5 flex-row items-center justify-between rounded-r-xl bg-gray-light">
                      {/* ICON - TEXT */}
                      <View className="flex flex-row items-center justify-between">
                        <Image
                          className="h-[30px] w-[30px] mr-3"
                          source={require("../assets/images/avatar.png")}
                        />

                        <Text>Aumentar liquidez mental</Text>
                      </View>
                      {/* END ICON - TEXT */}
                    </View>
                  </TouchableOpacity>
                  {/* END BADGE */}

                  {/* BADGE */}
                  <TouchableOpacity className="flex flex-row px-6 mb-6 items-center justify-center rounded-r-xl">
                    <View className="h-12 w-2 rounded-l-xl bg-green-dark"></View>

                    <View className="h-12 w-full flex px-5 flex-row items-center justify-between rounded-r-xl bg-gray-light">
                      {/* ICON - TEXT */}
                      <View className="flex flex-row items-center justify-between">
                        <Image
                          className="h-[30px] w-[30px] mr-3"
                          source={require("../assets/images/avatar.png")}
                        />

                        <Text>Ayuno 16/8</Text>
                      </View>
                      {/* END ICON - TEXT */}
                    </View>
                  </TouchableOpacity>
                  {/* END BADGE */}

                  {/* BADGE */}
                  <TouchableOpacity className="flex flex-row px-6 mb-6 items-center justify-center rounded-r-xl">
                    <View className="h-12 w-2 rounded-l-xl bg-blue-dark"></View>

                    <View className="h-12 w-full flex px-5 flex-row items-center justify-between rounded-r-xl bg-gray-light">
                      {/* ICON - TEXT */}
                      <View className="flex flex-row items-center justify-between">
                        <Image
                          className="h-[30px] w-[30px] mr-3"
                          source={require("../assets/images/avatar.png")}
                        />

                        <Text>Exposición</Text>
                      </View>
                      {/* END ICON - TEXT */}
                    </View>
                  </TouchableOpacity>
                  {/* END BADGE */}
                </View>
                {/* END OBJECTIVE CARD */}

                {/* SUBMIT BUTTON */}
                <View className="mb-10">
                  <TouchableOpacity
                    onPress={() => {logout(), navigation.navigate("Welcome");}}
                    className="flex items-center mb-5 px-5 py-3.5 bg-background-dark rounded-xl"
                  >
                    <Text className="text-white italic font-semibold">
                      Cerrar Sesión
                    </Text>
                  </TouchableOpacity>
                </View>
              </LinearGradient>
            </View>
            {/* END BODY */}
          </View>
        </ScrollView>
        {/* TAB_BAR */}
        <TabBar action={navigation} />
        {/* END TAB_BAR */}
      </SafeAreaView>
    </View>
  );
}
