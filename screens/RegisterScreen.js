import React, { useContext, useEffect, useState } from "react";
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
import { Formik } from "formik";
import * as yup from "yup";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import Spinner from "react-native-loading-spinner-overlay";

// Fonts
import { useFonts } from "expo-font";

export default function RegisterScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    Roboto: require("../assets/fonts/Roboto-Regular.ttf"),
  });

  // LOAD COUNTRIES
  useEffect(() => getCountries(), []);

  const [name, setName] = useState("");
  const [last_name, setlast_name] = useState("");
  const [email, setEmail] = useState("");
  const [weight, setweight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");
  const gender_data = [
    { key: "1", value: "Femenino" },
    { key: "2", value: "Masculino" },
  ];
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);

  // GET CITIES FUNCTION
  function getCountries() {
    axios
      .get("https://roadbook.guru/hactuaback/public/api/get-countries")
      .then((response) => {
        let newArray = response.data.countries.map((item) => {
          return { key: item.PaisCodigo, value: item.PaisNombre };
        });
        setCountries(newArray);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  // FUCTION TO LOAD CITIES ACCORDING TO COUNTRY
  function city_data(cityCode) {
    axios
      .get(`https://roadbook.guru/hactuaback/public/api/get-cities/${cityCode}`)
      .then((response) => {
        let newArray = response.data.cities.map((item) => {
          return { key: item.CiudadID, value: item.CiudadNombre };
        });
        setCities(newArray);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  const [phone, setPhone] = useState("");
  const [postal_code, setPostal_code] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(true);

  const [date, setDate] = useState(new Date());
  const [birthday, setBirthday] = useState();
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setBirthday(Moment(currentDate).format("DD/MM/YYYY"));
  };

  const showMode = (currentMode) => {
    if (Platform.OS === "ios") {
      setShow();
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    setShow(true);
    showMode("date");
  };

  // DEFINE CONSTANT REGISTER
  const { isLoading, register } = useContext(AuthContext);

  // FORMIK
  const { values, isSubmitting, setFieldValue } = Formik({
    initialValues: {
      name: "",
      last_name: "",
      email: "",
      weight: "",
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
    name: yup.string().required("El nombre es requerido"),
    // birthday: yup.string().required("La fecha de nacimiento es requerida"),
    email: yup
      .string()
      .email("Por favor ingrese un correo valido")
      .required("El correo electrónico es requerido"),
    password: yup
      .string()
      .min(6, "La contraseña debe contener 6 caracteres")
      .required("La contraseña es requerida"),
  });

  return (
    <View className="flex-1">
      <Formik
        validationSchema={registerValidationSchema}
        initialValues={{
          name: "",
          last_name: "",
          username: "",
          email: "",
          password: "",
          weight: "",
          height: "",
          gender: "",
          country: "",
          city: "",
          phone: "",
          postal_code: "",
          birthday: "",
        }}
        onSubmit={(values) => {
          values.birthday = Moment(birthday).format("YYYY-MM-DD");
          register(
            values.name,
            values.last_name,
            values.username,
            values.email,
            values.password,
            values.weight,
            values.height,
            values.gender,
            values.country,
            values.city,
            values.phone,
            values.postal_code,
            values.birthday,
            navigation
          );
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <SafeAreaView className="flex-1">
            <ScrollView className="flex-1">
              <View
                className="flex-1 py-10 items-center justify-center bg-white"
                style={{ fontFamily: "Roboto" }}
              >
                <Spinner
                  visible={isLoading}
                  color="#4AB5A9"
                  overlayColor="rgba(0, 0, 0, 0.1)"
                />
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
                    onChangeText={handleChange("last_name")}
                    onBlur={handleBlur("last_name")}
                    value={values.last_name}
                  />
                  {errors.last_name && (
                    <Text className="mt-2 text-xs text-red-500">
                      {errors.last_name}
                    </Text>
                  )}
                  {/* END LAST NAME */}

                  {/* USERNAME */}
                  <Text className="mt-8 mb-2 text-base font-medium italic text-slate-400">
                    Introduce el usuario (*)
                  </Text>

                  <TextInput
                    className="italic font-semibold bg-white shadow-lg shadow-gray-400 rounded-xl px-3 py-2"
                    onChangeText={handleChange("username")}
                    onBlur={handleBlur("username")}
                    value={values.username}
                  />
                  {errors.username && (
                    <Text className="mt-2 text-xs text-red-500">
                      {errors.username}
                    </Text>
                  )}
                  {/* END USERNAME */}

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

                  {/* PASSWORD */}
                  <Text className="mt-8 mb-2 text-base font-medium italic text-slate-400">
                    Introduce la contraseña (*)
                  </Text>

                  <View className="flex flex-row justify-between items-center bg-white shadow-lg shadow-gray-400 rounded-xl px-3 py-2">
                    <TextInput
                      className="italic font-semibold w-[90%]"
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                      name="password"
                      autoCapitalize="none"
                      autoCorrect={false}
                      textContentType="newPassword"
                      secureTextEntry={passwordVisible}
                      enablesReturnKeyAutomatically
                    />

                    <TouchableOpacity
                      onPress={() => setPasswordVisible(!passwordVisible)}
                    >
                      <Image
                        className="h-4 w-5"
                        source={
                          passwordVisible
                            ? require("../assets/images/footer_icons/eye-remove.png")
                            : require("../assets/images/footer_icons/eye-active.png")
                        }
                      />
                    </TouchableOpacity>
                  </View>
                  {errors.password && (
                    <Text className="mt-2 text-xs text-red-500">
                      {errors.password}
                    </Text>
                  )}
                  {/* END PASSWORD */}
                  {/* WEIGHT */}
                  <Text className="mt-8 mb-2 text-base font-medium italic text-slate-400">
                    Peso
                  </Text>

                  <TextInput
                    className="italic font-semibold bg-white shadow-lg shadow-gray-400 rounded-xl px-3 py-2"
                    onChangeText={handleChange("weight")}
                    onBlur={handleBlur("weight")}
                    value={values.weight}
                  />
                  {errors.weight && (
                    <Text className="mt-2 text-xs text-red-500">
                      {errors.weight}
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
                    setSelected={(val) => {
                      setGender(val),
                        (values.gender = val),
                        handleBlur("gender"),
                        handleChange("gender");
                    }}
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
                    setSelected={(val) => {
                      setCountry(val),
                        city_data(val),
                        (values.country = val),
                        handleBlur("country"),
                        handleChange("country");
                    }}
                    data={countries}
                    save="key"
                    search={true}
                    searchPlaceholder="Buscar"
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
                    setSelected={(val) => {
                      setCity(val),
                        (values.city = val),
                        handleBlur("city"),
                        handleChange("city");
                    }}
                    data={cities}
                    save="key"
                    search={true}
                    searchPlaceholder="Buscar"
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
                    Fecha de nacimiento (*)
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
      weight: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 6,
    backgroundColor: "#fff",
    borderColor: 0,
  },
});
