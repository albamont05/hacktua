import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TabBar from "../components/TabBar";
// Fonts
import { useFonts } from "expo-font";

export default function HabitDairyScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    Roboto: require("../assets/fonts/Roboto-Regular.ttf"),
  });

  return (
    <View className="flex-1">
      <SafeAreaView className="flex-1">
        <ScrollView className="flex-1">
          <View
            className="flex-1 items-center justify-center pb-5"
            style={{
              fontFamily: "Roboto",
            }}
          >
            <StatusBar style="auto" />

            {/* Body */}
            <View className="flex-1 items-center w-full">
              <LinearGradient
                className={
                  "flex-1 px-6 w-full rounded-t-3xl relative pt-2 pb-40"
                }
                colors={["rgba(255,255,255,1)", "rgba(45,49,66,0.1)"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
              >
                {/* TITLE */}
                <Text className="my-10 text-2xl">Diario de Hábitos</Text>

                {/* HABITS CARD */}
                <View className="bg-white w-full py-6 rounded-xl shadow-xl shadow-gray-500">
                  <SafeAreaView className="flex-1 bg-red-40">
                    <ScrollView className="flex-1" horizontal>
                      {/* BODY CARD OPTIONS */}
                      <View className="flex-1">
                        {/* WEEKENG */}
                        <View className="flex flex-row justify-between items-center px-6 mb-4">
                          {/* PLUS BUTTON */}
                          <TouchableOpacity className="mr-1">
                            <Image
                              className="h-[16px] w-[16px]"
                              source={require("../assets/images/journey_icons/plus.png")}
                            />
                          </TouchableOpacity>
                          {/* END PLUS BUTTON */}

                          {/* DAYS */}
                          <View className="flex flex-row justify-between ml-32">
                            <Text className="text-sm text-center font-semibold text-slate-500 italic  mx-2">
                              Lun
                            </Text>
                            <Text className="text-sm text-center font-semibold text-slate-500 italic  mx-2">
                              Mar
                            </Text>
                            <Text className="text-sm text-center font-semibold text-slate-500 italic  mx-2">
                              Mie
                            </Text>
                            <Text className="text-sm text-center font-semibold text-slate-500 italic  mx-2">
                              Jue
                            </Text>
                            <Text className="text-sm text-center font-semibold text-slate-500 italic  mx-2">
                              Vie
                            </Text>
                            <Text className="text-sm text-center font-semibold text-slate-500 italic  mx-2">
                              Sáb
                            </Text>
                            <Text className="text-sm text-center font-semibold text-slate-500 italic  mx-2">
                              Dom
                            </Text>
                          </View>
                        </View>
                        {/* END WEEKENG */}

                        <View className="flex w-full">
                          {/* BADGE */}
                          <TouchableOpacity className="flex flex-row px-6 my-2 items-center justify-center rounded-r-xl">
                            <View className="h-12 w-2 rounded-l-xl bg-green-dark"></View>

                            <View className="h-12 w-full flex flex-row justify-between rounded-r-xl bg-gray-light">
                              {/* ICON - TEXT */}
                              <View className="flex flex-row items-center w-full">
                                <Image
                                  className="h-[16px] w-[16px] ml-2"
                                  source={require("../assets/images/journey_icons/opacity.png")}
                                />

                                <Text className="w-[45%] ml-2 ">
                                  Limpiar lengua
                                </Text>

                                <View className="flex flex-row items-center justify-between px-2 absolute -right-2 ">
                                  <Image
                                    className="h-[14px] w-[17px]  mx-3"
                                    source={require("../assets/images/journey_icons/check_success.png")}
                                  />
                                  <Image
                                    className="h-[14px] w-[14px]  mx-3"
                                    source={require("../assets/images/journey_icons/check_error.png")}
                                  />
                                  <Image
                                    className="h-[14px] w-[17px]  mx-3"
                                    source={require("../assets/images/journey_icons/check_success.png")}
                                  />
                                  <Image
                                    className="h-[14px] w-[14px]  mx-3"
                                    source={require("../assets/images/journey_icons/check_error.png")}
                                  />
                                  <Image
                                    className="h-[14px] w-[17px]  mx-3"
                                    source={require("../assets/images/journey_icons/check_success.png")}
                                  />
                                  <Image
                                    className="h-[14px] w-[14px]  mx-3"
                                    source={require("../assets/images/journey_icons/check_error.png")}
                                  />
                                  <Image
                                    className="h-[14px] w-[14px]  mx-3"
                                    source={require("../assets/images/journey_icons/check_error.png")}
                                  />
                                </View>
                              </View>
                              {/* END ICON - TEXT */}
                            </View>
                          </TouchableOpacity>
                          {/* END BADGE */}

                          {/* BADGE */}
                          <TouchableOpacity className="flex flex-row px-6 my-2 items-center justify-center rounded-r-xl">
                            <View className="h-12 w-2 rounded-l-xl bg-blue-dark"></View>

                            <View className="h-12 w-full flex flex-row justify-between rounded-r-xl bg-gray-light">
                              {/* ICON - TEXT */}
                              <View className="flex flex-row items-center w-full">
                                <Image
                                  className="h-[16px] w-[16px] ml-2"
                                  source={require("../assets/images/journey_icons/opacity.png")}
                                />

                                <Text className="w-[45%] ml-2 ">
                                  Exposición
                                </Text>

                                <View className="flex flex-row items-center justify-between px-2 absolute -right-2 ">
                                <Image
                                    className="h-[14px] w-[14px]  mx-3"
                                    source={require("../assets/images/journey_icons/check_error.png")}
                                  />
                                  <Image
                                    className="h-[14px] w-[14px]  mx-3"
                                    source={require("../assets/images/journey_icons/check_error.png")}
                                  />
                                  <Image
                                    className="h-[14px] w-[17px]  mx-3"
                                    source={require("../assets/images/journey_icons/check_success.png")}
                                  />
                                  <Image
                                    className="h-[14px] w-[14px]  mx-3"
                                    source={require("../assets/images/journey_icons/check_error.png")}
                                  />
                                  <Image
                                    className="h-[14px] w-[17px]  mx-3"
                                    source={require("../assets/images/journey_icons/check_success.png")}
                                  />
                                  <Image
                                    className="h-[14px] w-[14px]  mx-3"
                                    source={require("../assets/images/journey_icons/check_error.png")}
                                  />
                                  <Image
                                    className="h-[14px] w-[14px]  mx-3"
                                    source={require("../assets/images/journey_icons/check_error.png")}
                                  />
                                </View>
                              </View>
                              {/* END ICON - TEXT */}
                            </View>
                          </TouchableOpacity>
                          {/* END BADGE */}

                          {/* BADGE */}
                          <TouchableOpacity className="flex flex-row px-6 my-2 items-center justify-center rounded-r-xl">
                            <View className="h-12 w-2 rounded-l-xl bg-blue-dark"></View>

                            <View className="h-12 w-full flex flex-row justify-between rounded-r-xl bg-gray-light">
                              {/* ICON - TEXT */}
                              <View className="flex flex-row items-center w-full">
                                <Image
                                  className="h-[16px] w-[16px] ml-2"
                                  source={require("../assets/images/journey_icons/opacity.png")}
                                />

                                <Text className="w-[45%] ml-2 ">
                                  Aumentar Liquidez
                                </Text>

                                <View className="flex flex-row items-center justify-between px-2 absolute -right-2 ">
                                <Image
                                    className="h-[14px] w-[17px]  mx-3"
                                    source={require("../assets/images/journey_icons/check_success.png")}
                                  />
                                  <Image
                                    className="h-[14px] w-[17px]  mx-3"
                                    source={require("../assets/images/journey_icons/check_success.png")}
                                  />
                                  <Image
                                    className="h-[14px] w-[14px]  mx-3"
                                    source={require("../assets/images/journey_icons/check_error.png")}
                                  />
                                  <Image
                                    className="h-[14px] w-[17px]  mx-3"
                                    source={require("../assets/images/journey_icons/check_success.png")}
                                  />
                                  <Image
                                    className="h-[14px] w-[14px]  mx-3"
                                    source={require("../assets/images/journey_icons/check_error.png")}
                                  />
                                  <Image
                                    className="h-[14px] w-[14px]  mx-3"
                                    source={require("../assets/images/journey_icons/check_error.png")}
                                  />
                                </View>
                              </View>
                              {/* END ICON - TEXT */}
                            </View>
                          </TouchableOpacity>
                          {/* END BADGE */}

                          {/* BADGE */}
                          <TouchableOpacity className="flex flex-row px-6 my-2 items-center justify-center rounded-r-xl">
                            <View className="h-12 w-2 rounded-l-xl bg-green-dark"></View>

                            <View className="h-12 w-full flex flex-row justify-between rounded-r-xl bg-gray-light">
                              {/* ICON - TEXT */}
                              <View className="flex flex-row items-center w-full">
                                <Image
                                  className="h-[16px] w-[16px] ml-2"
                                  source={require("../assets/images/journey_icons/opacity.png")}
                                />

                                <Text className="w-[45%] ml-2 ">
                                  Ayuno 16/8
                                </Text>

                                <View className="flex flex-row items-center justify-between px-2 absolute -right-2 ">
                                <Image
                                    className="h-[14px] w-[14px]  mx-3"
                                    source={require("../assets/images/journey_icons/check_error.png")}
                                  />
                                  <Image
                                    className="h-[14px] w-[14px]  mx-3"
                                    source={require("../assets/images/journey_icons/check_error.png")}
                                  />
                                  <Image
                                    className="h-[14px] w-[17px]  mx-3"
                                    source={require("../assets/images/journey_icons/check_success.png")}
                                  />
                                  <Image
                                    className="h-[14px] w-[14px]  mx-3"
                                    source={require("../assets/images/journey_icons/check_error.png")}
                                  />
                                  <Image
                                    className="h-[14px] w-[17px]  mx-3"
                                    source={require("../assets/images/journey_icons/check_success.png")}
                                  />
                                  <Image
                                    className="h-[14px] w-[14px]  mx-3"
                                    source={require("../assets/images/journey_icons/check_error.png")}
                                  />
                                  <Image
                                    className="h-[14px] w-[14px]  mx-3"
                                    source={require("../assets/images/journey_icons/check_error.png")}
                                  />
                                </View>
                              </View>
                              {/* END ICON - TEXT */}
                            </View>
                          </TouchableOpacity>
                          {/* END BADGE */}

                          {/* BADGE */}
                          <TouchableOpacity className="flex flex-row px-6 my-2 items-center justify-center rounded-r-xl">
                            <View className="h-12 w-2 rounded-l-xl bg-blue-dark"></View>

                            <View className="h-12 w-full flex flex-row justify-between rounded-r-xl bg-gray-light">
                              {/* ICON - TEXT */}
                              <View className="flex flex-row items-center w-full">
                                <Image
                                  className="h-[16px] w-[16px] ml-2"
                                  source={require("../assets/images/journey_icons/opacity.png")}
                                />

                                <Text className="w-[45%] ml-2">
                                  Ritual de sueño
                                </Text>

                                <View className="flex flex-row items-center justify-between px-2 absolute -right-2 ">
                                <Image
                                    className="h-[14px] w-[14px]  mx-3"
                                    source={require("../assets/images/journey_icons/check_error.png")}
                                  />
                                  <Image
                                    className="h-[14px] w-[14px]  mx-3"
                                    source={require("../assets/images/journey_icons/check_error.png")}
                                  />
                                  <Image
                                    className="h-[14px] w-[17px]  mx-3"
                                    source={require("../assets/images/journey_icons/check_success.png")}
                                  />
                                  <Image
                                    className="h-[14px] w-[14px]  mx-3"
                                    source={require("../assets/images/journey_icons/check_error.png")}
                                  />
                                  <Image
                                    className="h-[14px] w-[17px]  mx-3"
                                    source={require("../assets/images/journey_icons/check_success.png")}
                                  />
                                  <Image
                                    className="h-[14px] w-[14px]  mx-3"
                                    source={require("../assets/images/journey_icons/check_error.png")}
                                  />
                                  <Image
                                    className="h-[14px] w-[14px]  mx-3"
                                    source={require("../assets/images/journey_icons/check_error.png")}
                                  />
                                </View>
                              </View>
                              {/* END ICON - TEXT */}
                            </View>
                          </TouchableOpacity>
                          {/* END BADGE */}
                        </View>
                      </View>
                      {/* END BODY CARD */}
                    </ScrollView>
                  </SafeAreaView>

                  {/* REGISTER BUTTON */}
                  <TouchableOpacity className="flex justify-center items-center bg-background-dark py-4 mt-6 mx-8 rounded-xl">
                    <Text className="text-white font-medium">
                      Registrar peso diario
                    </Text>
                  </TouchableOpacity>
                </View>
                {/* END HABITS CARD */}

                {/* END HABITS */}
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
