import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity, Image } from "react-native";

// Fonts
import { useFonts } from "expo-font";

export default function MenuScreen({ navigation}) {
    const [fontsLoaded] = useFonts({
        Roboto: require("../assets/fonts/Roboto-Regular.ttf"),
    });

    return (
        <View
            className="flex-1 items-center bg-background-dark justify-center"
            style={{ fontFamily: "Roboto" }}
        >
            {/* Shadow box effect */}
            <View className="h-10 bg-white opacity-40 w-[93%] mt-20 rounded-t-3xl"></View>

            {/* Body */}
            <View className="flex-1 items-center bg-white w-full -mt-7 rounded-t-3xl">
                <Image
                    className="mt-12 mb-12 h-[50px] w-[250px]"
                    source={require("../assets/images/logo-bg-removed.png")}
                />

                <Text className="text-2xl text-gray-600 text-center w-40">
                    ¿Qué te trae a Hacktua?
                </Text>

                {/* Container Buttons */}
                <View className="mt-12 w-[85%]">
                    {/* BUTTON NUTRITION */}
                    <TouchableOpacity 
                    onPress={() => navigation.navigate("Nutrition")}
                    className="my-1.5"
                    >
                        <View className="flex flex-row items-center justify-center rounded-r-xl">
                            <View className={`h-16 w-2 rounded-l-xl bg-green-dark`}></View>
                            <View className={`h-16 w-[98%] flex flex-row items-center justify-center rounded-r-xl bg-green-light`}>
                                <Text className="text-xl font-bold w-48 mr-4">
                                    Nutrición
                                </Text>
                                <Image
                                    className="h-7 w-7"
                                    source={require("../assets/images/black_icons/apple.png")}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* END BUTTON NUTRITION */}

                    {/* END BUTTON SLEEP */}
                    <TouchableOpacity className="my-1.5">
                        <View className="flex flex-row items-center justify-center rounded-r-xl">
                            <View className={`h-16 w-2 rounded-l-xl bg-blue-dark`}></View>
                            <View className={`h-16 w-[98%] flex flex-row items-center justify-center rounded-r-xl bg-blue-light`}>
                                <Text className="text-xl font-bold w-48 mr-4">
                                    Sueño
                                </Text>
                                <Image
                                    className="h-7 w-7"
                                    source={require("../assets/images/black_icons/moon.png")}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* END BUTTON SLEEP */}

                    {/* BUTTON EXERCISES */}
                    <TouchableOpacity className="my-1.5">
                        <View className="flex flex-row items-center justify-center rounded-r-xl">
                            <View className={`h-16 w-2 rounded-l-xl bg-red-dark`}></View>
                            <View className={`h-16 w-[98%] flex flex-row items-center justify-center rounded-r-xl bg-red-light`}>
                                <Text className="text-xl font-bold w-48 mr-4">
                                    Ejercicio
                                </Text>
                                <Image
                                    className="h-7 w-7"
                                    source={require("../assets/images/black_icons/gym.png")}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* END BUTTON EXERCISES */}

                    {/* BUTTON MIND */}
                    <TouchableOpacity className="my-1.5">
                        <View className="flex flex-row items-center justify-center rounded-r-xl">
                            <View className={`h-16 w-2 rounded-l-xl bg-purple-dark`}></View>
                            <View className={`h-16 w-[98%] flex flex-row items-center justify-center rounded-r-xl bg-purple-light`}>
                                <Text className="text-xl font-bold w-48 mr-4">
                                    Mente
                                </Text>
                                <Image
                                    className="h-7 w-7"
                                    source={require("../assets/images/black_icons/brain.png")}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* END BUTTON MIND */}

                    {/* BUTTON WORK */}
                    <TouchableOpacity className="my-1.5">
                        <View className="flex flex-row items-center justify-center rounded-r-xl">
                            <View className={`h-16 w-2 rounded-l-xl bg-orange-dark`}></View>
                            <View className={`h-16 w-[98%] flex flex-row items-center justify-center rounded-r-xl bg-orange-light`}>
                                <Text className="text-xl font-bold w-48 mr-4">
                                    Trabajo
                                </Text>
                                <Image
                                    className="h-7 w-[30px]"
                                    source={require("../assets/images/black_icons/computer.png")}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* END BUTTON WORK */}
                </View>
                {/* End Container */}
            </View>
            {/* End Body */}
            <StatusBar style="auto" />
        </View>
    );
}
