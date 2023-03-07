import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import {
  Text,
  View,
  TextInput,
  ActivityIndicator
} from "react-native";
import axios from "axios";

// Fonts
import { useFonts } from "expo-font";

export default function TestScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    Roboto: require("../assets/fonts/Roboto-Regular.ttf"),
  });

  let [Loading, setLoading] = useState(true);
  let [error, setError] = useState();
  let [response, setResponse] = useState();

//   useEffect(() => {
//     fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//     .then(res => res.json())
//     .then(
//         (result) => {
//             setsetLoading(false);
//             setResponse(result);
//         },
//         (error) => {
//             setsetLoading(false);
//             setError(error);
//         }
//     )
//   }, []);

//  const getContent = () => {

//     if (setLoading) {
//         return <ActivityIndicator className="" size="large" />;
//     }
//     else {
//         return (
//         <Text>text</Text>
//         );

//     }
//  }

// con fetch

const getData = () => {

  setLoading(false);
    
    axios.get("https://pokeapi.co/api/v2/pokemon")
        .then(response => {
                setResponse(response.data);
        })
        .catch(error => {
            console.log(error);
        });
}

  return (
    <View
      className="flex-1 items-center justify-center bg-white"
      style={{ fontFamily: "Roboto" }}
    >
      <Text className="text-2xl mb-20">TestScreen</Text>

        {getData()}
    </View>
  );
}
