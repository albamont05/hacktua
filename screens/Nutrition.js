import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity, Image } from "react-native";
// Fonts
import { useFonts } from "expo-font";

export default function NutritionScreen({ navigation }) {
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

                {/* BADGE */}
                <View className="flex flex-row w-[80%] mt-8 items-center justify-center rounded-r-xl">
                    <View className="h-14 w-2 rounded-l-xl bg-green-dark"></View>
                    <View className="h-14 w-[60%] flex flex-row items-center justify-center rounded-r-xl bg-green-light">
                        <Text className="text-2xl font-bold mr-4">
                            Nutrición
                        </Text>
                    </View>
                </View>
                {/* END BADGE */}

                <Text className="text-2xl mt-6">
                    ¿Qué quieres conseguir?
                </Text>

                {/* OBJETIVE CARD */}
                <View
                    className="bg-white w-[90%] mt-10 py-6 rounded-xl shadow-xl shadow-gray-500"
                >
                    {/* HEADER CARD */}
                    <Text
                        className="text-background-dark text-base pb-6 mx-6 border-b border-gray-100 tracking-widest"
                    >OBJETIVOS</Text>
                    {/* END HEADER CARD */}

                    {/* BODY CARD */}
                    
                    {/* END BODY CARD */}
                </View>
                {/* END OBJETIVE CARD */}

                

            </View>
            {/* End Body */}
            <StatusBar style="auto" />
        </View >
    );
}
