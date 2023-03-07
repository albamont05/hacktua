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
import { Formik } from "formik";
import * as yup from "yup";

// Fonts
import { useFonts } from "expo-font";

export default function RecoveryAccountScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    Roboto: require("../assets/fonts/Roboto-Regular.ttf"),
  });

  const [email, setEmail] = useState("");

  // FORMIK
  const { values, isSubmitting, setFieldValue } = Formik({
    initialValues: {
      email: "",
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const RecoveryValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Por favor ingrese un correo valido")
      .required("El correo electrónico es requerido"),
  });

  return (
    <View
      className="flex-1 items-center justify-center bg-white"
      style={{ fontFamily: "Roboto" }}
    >

      <Formik
        validationSchema={RecoveryValidationSchema}
        initialValues={{
          email: "",
        }}
        onSubmit={(values) => navigation.navigate("Login")}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View className="flex justify-center items-center">
            <Image
              className="mt-6 h-[40px] w-[210px]"
              source={require("../assets/images/logo-bg-removed.png")}
            />

            <Text className="text-slate-400 my-8 mx-5 text-center">
              Se enviará un correo electrónico para la recuperación
            </Text>

            <SafeAreaView className="w-[80%]">
              <Text className="mb-2 text-base font-medium italic text-slate-400">
                Correo electrónico
              </Text>

              <View className="flex flex-row justify-between items-center bg-white shadow-lg shadow-gray-400 rounded-xl px-3 py-2">
                <TextInput
                  className="italic font-semibold w-[90%]"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
              </View>
              {errors.email && (
                <Text className="mt-2 text-xs text-red-500">{errors.email}</Text>
              )}
            </SafeAreaView>

            <TouchableOpacity
              onPress={handleSubmit}
              className="mt-10 bg-background-dark px-20 py-4 rounded-xl"
            >
              <Text className="text-white font-medium">Recuperar</Text>
            </TouchableOpacity>
           
            <StatusBar style="auto" />
          </View>
        )}
      </Formik>
    </View>
  );
}
