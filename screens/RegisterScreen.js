import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
  Platform,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import DateTimePicker from "@react-native-community/datetimepicker";
import Moment from "moment";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

// Fonts
import { useFonts } from "expo-font";

export default function RegisterScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    Roboto: require("../assets/fonts/Roboto-Regular.ttf"),
  });

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = React.useState("");
  const gender_data = [
    { key: "1", value: "Femenino" },
    { key: "2", value: "Masculino" },
  ];
  const [country, setCountry] = React.useState("");
  const [city, setCity] = React.useState("");
  const country_data = [
    { key: "1", value: "España" },
    { key: "2", value: "Francia" },
  ];
  const city_data = [
    { key: "1", value: "Madrid" },
    { key: "2", value: "Málaga" },
  ];
  const [phone, setPhone] = useState("");
  const [postal_code, setPostal_code] = useState("");

  const [date, setDate] = useState(new Date());
  const [birthday, setBirthday] = useState();
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    setBirthday(Moment(currentDate).format("DD/MM/YYYY"));
  };

  const showMode = (currentMode) => {
    if (Platform.OS === "ios") {
      setShow();
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    setShow(true);
    showMode("date");
  };

  // FORMIK
  const { values, isSubmitting, setFieldValue } = Formik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      width: "",
      height: "",
      gender: "",
      country: "",
      city: "",
      phone: "",
      postal_code: "",
      birthday: "",
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const registerValidationSchema = yup.object().shape({
    name: yup.string().required("El nombre es requiredo"),
    email: yup
      .string()
      .email("Por favor ingrese un correo valido")
      .required("El correo electrónico es requerido"),
  });

  return (
    <View className="flex-1 b-white">
      <Formik
        validationSchema={registerValidationSchema}
        initialValues={{
          name: "",
          lastname: "",
          email: "",
          width: "",
          height: "",
          gender: "",
          country: "",
          city: "",
          phone: "",
          postal_code: "",
          birthday: "",
        }}
        onSubmit={(values) => navigation.navigate("Menu")}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <SafeAreaView className="flex-1">
            <ScrollView className="flex-1">
              <View
                className="flex-1 py-10 items-center justify-center bg-white"
                style={{ fontFamily: "Roboto" }}
              >
                <StatusBar style="auto" />

                <Image
                  className="mt-6 mb-10 h-[40px] w-[210px]"
                  source={require("../assets/images/logo-bg-removed.png")}
                />

                <View className="w-[80%]">
                  {/* FIRST NAME */}
                  <Text className="mb-2 text-base font-medium italic text-slate-400">
                    Introduce el nombre (*)
                  </Text>

                  <TextInput
                    className="italic font-semibold bg-white shadow-lg shadow-gray-400 rounded-xl px-3 py-2"
                    onChangeText={handleChange("name")}
                    onBlur={handleBlur("name")}
                    value={values.name}
                  />
                  {errors.name && (
                    <Text className="mt-2 text-xs text-red-500">
                      {errors.name}
                    </Text>
                  )}

                  {/* END FIRST NAME */}

                  {/* LAST NAME */}
                  <Text className="mt-8 mb-2 text-base font-medium italic text-slate-400">
                    Introduce el apellido
                  </Text>

                  <TextInput
                    className="italic font-semibold bg-white shadow-lg shadow-gray-400 rounded-xl px-3 py-2"
                    onChangeText={handleChange("lastname")}
                    onBlur={handleBlur("lastname")}
                    value={values.lastname}
                  />
                  {errors.lastname && (
                    <Text className="mt-2 text-xs text-red-500">
                      {errors.lastname}
                    </Text>
                  )}
                  {/* END LAST NAME */}

                  {/* EMAIL */}
                  <Text className="mt-8 mb-2 text-base font-medium italic text-slate-400">
                    Correo electrónico (*)
                  </Text>

                  <TextInput
                    className="italic font-semibold bg-white shadow-lg shadow-gray-400 rounded-xl px-3 py-2"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                  />
                  {errors.email && (
                    <Text className="mt-2 text-xs text-red-500">
                      {errors.email}
                    </Text>
                  )}
                  {/* END EMAIL */}

                  {/* WEIGHT */}
                  <Text className="mt-8 mb-2 text-base font-medium italic text-slate-400">
                    Peso
                  </Text>

                  <TextInput
                    className="italic font-semibold bg-white shadow-lg shadow-gray-400 rounded-xl px-3 py-2"
                    onChangeText={handleChange("width")}
                    onBlur={handleBlur("width")}
                    value={values.width}
                  />
                  {errors.width && (
                    <Text className="mt-2 text-xs text-red-500">
                      {errors.width}
                    </Text>
                  )}
                  {/* END WEIGHT */}

                  {/* HEIGHT */}
                  <Text className="mt-8 mb-2 text-base font-medium italic text-slate-400">
                    Altura
                  </Text>

                  <TextInput
                    className="italic font-semibold bg-white shadow-lg shadow-gray-400 rounded-xl px-3 py-2"
                    onChangeText={handleChange("height")}
                    onBlur={handleBlur("height")}
                    value={values.height}
                  />
                  {errors.height && (
                    <Text className="mt-2 text-xs text-red-500">
                      {errors.height}
                    </Text>
                  )}
                  {/* END HEIGHT */}

                  {/* SEX */}
                  <Text className="mt-8 mb-2 text-base font-medium italic text-slate-400">
                    Sexo
                  </Text>

                  <SelectList
                    setSelected={(val) => setGender(val)}
                    data={gender_data}
                    save="value"
                    search={false}
                    boxStyles={styles.shadow}
                    placeholder="Seleccionar"
                  />
                  {errors.gender && (
                    <Text className="mt-2 text-xs text-red-500">
                      {errors.gender}
                    </Text>
                  )}
                  {/* END SEX */}

                  {/* COUNTRY */}
                  <Text className="mt-8 mb-2 text-base font-medium italic text-slate-400">
                    País
                  </Text>

                  <SelectList
                    setSelected={(val) => setCountry(val)}
                    data={country_data}
                    save="value"
                    search={false}
                    boxStyles={styles.shadow}
                    placeholder="Seleccionar"
                  />
                  {errors.country && (
                    <Text className="mt-2 text-xs text-red-500">
                      {errors.country}
                    </Text>
                  )}
                  {/* END COUNTRY */}

                  {/* CITY */}
                  <Text className="mt-8 mb-2 text-base font-medium italic text-slate-400">
                    Ciudad
                  </Text>

                  <SelectList
                    setSelected={(val) => setCity(val)}
                    data={city_data}
                    save="value"
                    search={false}
                    boxStyles={styles.shadow}
                    placeholder="Seleccionar"
                  />
                  {errors.city && (
                    <Text className="mt-2 text-xs text-red-500">
                      {errors.city}
                    </Text>
                  )}
                  {/* END CITY */}

                  {/* POSTAL CODE */}
                  <Text className="mt-8 mb-2 text-base font-medium italic text-slate-400">
                    Código postal
                  </Text>

                  <TextInput
                    className="italic font-semibold bg-white shadow-lg shadow-gray-400 rounded-xl px-3 py-2"
                    onChangeText={handleChange("postal_code")}
                    onBlur={handleBlur("postal_code")}
                    value={values.postal_code}
                  />
                  {errors.postal_code && (
                    <Text className="mt-2 text-xs text-red-500">
                      {errors.postal_code}
                    </Text>
                  )}
                  {/* END POSTAL CODE */}

                  {/* PHONE */}
                  <Text className="mt-8 mb-2 text-base font-medium italic text-slate-400">
                    Teléfono
                  </Text>

                  <TextInput
                    className="italic font-semibold bg-white shadow-lg shadow-gray-400 rounded-xl px-3 py-2"
                    onChangeText={handleChange("phone")}
                    onBlur={handleBlur("phone")}
                    value={values.phone}
                  />
                  {errors.phone && (
                    <Text className="mt-2 text-xs text-red-500">
                      {errors.phone}
                    </Text>
                  )}
                  {/* END PHONE */}

                  {/* BIRTHDAY */}
                  <Text className="mt-8 mb-2 text-base font-medium italic text-slate-400">
                    Fecha de nacimiento
                  </Text>
                  <TouchableOpacity
                    onPress={showDatepicker}
                    className="bg-white shadow-lg shadow-gray-400 rounded-xl px-3 py-3"
                  >
                    <Text className="italic font-semibold ">{birthday}</Text>
                  </TouchableOpacity>

                  {show && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      timeZoneOffsetInMinutes={0}
                      value={date}
                      mode={mode}
                      minimumDate={
                        new Date(
                          Moment().subtract(100, "years").format("DD/MM/YYYY")
                        )
                      }
                      maximumDate={
                        new Date(
                          Moment().subtract(18, "years").format("DD/MM/YYYY")
                        )
                      }
                      is24Hour={true}
                      onChange={onChange}
                      display="calendar"
                    />
                  )}
                  {/* END BIRTHDAY */}
                  {errors.birthday && (
                    <Text className="mt-2 text-xs text-red-500">
                      {errors.birthday}
                    </Text>
                  )}
                </View>
                {/* END BODY */}

                <TouchableOpacity
                  onPress={handleSubmit}
                  className="mt-10 bg-background-dark px-20 py-4 rounded-xl"
                >
                  <Text className="text-white font-medium">Registrarse</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </SafeAreaView>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#9CA3AF",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 6,
    backgroundColor: "#fff",
    borderColor: 0,
  },
});
