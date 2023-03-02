import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity, Image, SafeAreaView, ScrollView } from "react-native";
// Fonts
import { useFonts } from "expo-font";

export default function NutritionScreen({ navigation }) {
    const [fontsLoaded] = useFonts({
        Roboto: require("../assets/fonts/Roboto-Regular.ttf"),
    });

    return (
        <View className="flex-1 bg-background-dark">
            <SafeAreaView className="flex-1">
                <ScrollView className="flex-1">
                    <View
                        className="flex-1 items-center justify-center"
                        style={{ fontFamily: "Roboto" }}
                    >
                        <StatusBar style="auto" />

                        {/* Shadow box effect */}
                        <View className="h-10 bg-white opacity-40 w-11/12 mt-20 rounded-t-3xl"></View>

                        {/* Body */}
                        <View className="flex-1 items-center w-full bg-white -mt-7 rounded-t-3xl">

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

                            <SafeAreaView className="flex-1">
                                <ScrollView className="flex-1 mt-10 px-2" horizontal>

                                    {/* OBJETIVE CARD */}
                                    <View
                                        className="bg-white h-80 w-80 m-2 py-6 rounded-xl shadow-xl shadow-gray-500"
                                    >
                                        {/* HEADER CARD */}
                                        <Text
                                            className="text-background-dark text-base font-semibold pb-6 mx-6 mb-6 border-b border-gray-100 tracking-widest"
                                        >OBJETIVOS
                                        </Text>
                                        {/* END HEADER CARD */}

                                        {/* BODY CARD OPTIONS */}
                                        <TouchableOpacity
                                            className="flex flex-row items-center justify-between py-2 px-5 mx-6 mb-5 rounded-xl bg-green-light"
                                        >
                                            {/* ICON - TEXT */}
                                            <View
                                                className="flex flex-row items-center justify-between"
                                            >
                                                <Image
                                                    className="h-[30px] w-[30px] mr-3"
                                                    source={require("../assets/images/avatar.png")}
                                                />

                                                <Text>Perder grasa</Text>
                                            </View>
                                            {/* END ICON - TEXT */}

                                            <View
                                                className="px-4 py-2 bg-background-dark rounded-xl"
                                            >
                                                <Text
                                                    className="italic text-xs text-white">Nuevo</Text>
                                            </View>

                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            className="flex flex-row items-center justify-between py-2 px-5 mx-6 mb-5 rounded-xl bg-green-light"
                                        >
                                            {/* ICON - TEXT */}
                                            <View
                                                className="flex flex-row items-center justify-between"
                                            >
                                                <Image
                                                    className="h-[30px] w-[30px] mr-3"
                                                    source={require("../assets/images/avatar.png")}
                                                />

                                                <Text>Perder volumen</Text>
                                            </View>
                                            {/* END ICON - TEXT */}
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            className="flex flex-row items-center justify-between py-2 px-5 mx-6 mb-5 rounded-xl bg-green-light"
                                        >
                                            {/* ICON - TEXT */}
                                            <View
                                                className="flex flex-row items-center justify-between"
                                            >
                                                <Image
                                                    className="h-[30px] w-[30px] mr-3"
                                                    source={require("../assets/images/avatar.png")}
                                                />

                                                <Text>Mejorar digestión</Text>
                                            </View>
                                            {/* END ICON - TEXT */}

                                            <View
                                                className="px-4 py-2 bg-background-dark rounded-xl"
                                            >
                                                <Text
                                                    className="italic text-xs text-white">Nuevo</Text>
                                            </View>

                                        </TouchableOpacity>
                                        {/* END BODY CARD */}
                                    </View>
                                    {/* END OBJETIVE CARD */}


                                    {/* OBJETIVE CARD */}
                                    <View
                                        className="bg-white h-80 w-80 m-2 py-6 rounded-xl shadow-xl shadow-gray-500 mr-6"
                                    >
                                        {/* HEADER CARD */}
                                        <Text
                                            className="text-background-dark text-base font-semibold pb-6 mx-6 mb-6 border-b border-gray-100 tracking-widest"
                                        >OBJETIVOS
                                        </Text>
                                        {/* END HEADER CARD */}

                                        {/* BODY CARD OPTIONS */}
                                        <TouchableOpacity
                                            className="flex flex-row items-center justify-between py-2 px-5 mx-6 mb-5 rounded-xl bg-green-light"
                                        >
                                            {/* ICON - TEXT */}
                                            <View
                                                className="flex flex-row items-center justify-between"
                                            >
                                                <Image
                                                    className="h-[30px] w-[30px] mr-3"
                                                    source={require("../assets/images/avatar.png")}
                                                />

                                                <Text>Perder grasa</Text>
                                            </View>
                                            {/* END ICON - TEXT */}

                                            <View
                                                className="px-4 py-2 bg-background-dark rounded-xl"
                                            >
                                                <Text
                                                    className="italic text-xs text-white">Nuevo</Text>
                                            </View>

                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            className="flex flex-row items-center justify-between py-2 px-5 mx-6 mb-5 rounded-xl bg-green-light"
                                        >
                                            {/* ICON - TEXT */}
                                            <View
                                                className="flex flex-row items-center justify-between"
                                            >
                                                <Image
                                                    className="h-[30px] w-[30px] mr-3"
                                                    source={require("../assets/images/avatar.png")}
                                                />

                                                <Text>Perder volumen</Text>
                                            </View>
                                            {/* END ICON - TEXT */}
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            className="flex flex-row items-center justify-between py-2 px-5 mx-6 mb-5 rounded-xl bg-green-light"
                                        >
                                            {/* ICON - TEXT */}
                                            <View
                                                className="flex flex-row items-center justify-between"
                                            >
                                                <Image
                                                    className="h-[30px] w-[30px] mr-3"
                                                    source={require("../assets/images/avatar.png")}
                                                />

                                                <Text>Mejorar digestión</Text>
                                            </View>
                                            {/* END ICON - TEXT */}

                                            <View
                                                className="px-4 py-2 bg-background-dark rounded-xl"
                                            >
                                                <Text
                                                    className="italic text-xs text-white">Nuevo</Text>
                                            </View>

                                        </TouchableOpacity>
                                        {/* END BODY CARD */}
                                    </View>
                                    {/* END OBJETIVE CARD */}
                                </ScrollView>
                            </SafeAreaView>

                            <Text
                                className="my-10 -ml-10 text-lg"
                            >Otros usuarios estan consiguiendo</Text>

                            {/* OBJETIVE CARD */}
                            <View
                                className="bg-white h-80 w-80 m-2 py-8 rounded-xl shadow-xl shadow-gray-500 ml-3 mb-10"
                            >
                                {/* BADGE */}
                                <TouchableOpacity className="flex flex-row px-6 mb-6 items-center justify-center rounded-r-xl">
                                    <View className="h-12 w-2 rounded-l-xl bg-green-dark"></View>

                                    <View
                                        className="h-12 w-full flex px-5 flex-row items-center justify-between rounded-r-xl bg-green-light"
                                    >
                                        {/* ICON - TEXT */}
                                        <View
                                            className="flex flex-row items-center justify-between"
                                        >
                                            <Image
                                                className="h-[30px] w-[30px] mr-3"
                                                source={require("../assets/images/avatar.png")}
                                            />

                                            <Text>Perder grasa</Text>
                                        </View>
                                        {/* END ICON - TEXT */}
                                    </View>
                                </TouchableOpacity>
                                {/* END BADGE */}

                                {/* BADGE */}
                                <TouchableOpacity className="flex flex-row px-6 mb-6 items-center justify-center rounded-r-xl">
                                    <View className="h-12 w-2 rounded-l-xl bg-blue-dark"></View>

                                    <View
                                        className="h-12 w-full flex px-5 flex-row items-center justify-between rounded-r-xl bg-blue-light"
                                    >
                                        {/* ICON - TEXT */}
                                        <View
                                            className="flex flex-row items-center justify-between"
                                        >
                                            <Image
                                                className="h-[30px] w-[30px] mr-3"
                                                source={require("../assets/images/avatar.png")}
                                            />

                                            <Text>Tener más energía</Text>
                                        </View>
                                        {/* END ICON - TEXT */}
                                    </View>
                                </TouchableOpacity>
                                {/* END BADGE */}

                                {/* BADGE */}
                                <TouchableOpacity className="flex flex-row px-6 mb-6 items-center justify-center rounded-r-xl">
                                    <View className="h-12 w-2 rounded-l-xl bg-green-dark"></View>

                                    <View
                                        className="h-12 w-full flex px-5 flex-row items-center justify-between rounded-r-xl bg-green-light"
                                    >
                                        {/* ICON - TEXT */}
                                        <View
                                            className="flex flex-row items-center justify-between"
                                        >
                                            <Image
                                                className="h-[30px] w-[30px] mr-3"
                                                source={require("../assets/images/avatar.png")}
                                            />

                                            <Text>Perder grasa</Text>
                                        </View>
                                        {/* END ICON - TEXT */}
                                    </View>
                                </TouchableOpacity>
                                {/* END BADGE */}

                                {/* BADGE */}
                                <TouchableOpacity className="flex flex-row px-6 mb-6 items-center justify-center rounded-r-xl">
                                    <View className="h-12 w-2 rounded-l-xl bg-blue-dark"></View>

                                    <View
                                        className="h-12 w-full flex px-5 flex-row items-center justify-between rounded-r-xl bg-blue-light"
                                    >
                                        {/* ICON - TEXT */}
                                        <View
                                            className="flex flex-row items-center justify-between"
                                        >
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
                              
                            </View>
                            {/* END OBJETIVE CARD */}
                        </View>

                        {/* END BODY */}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}
