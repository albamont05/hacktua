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
  Button,
  Platform,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import DateTimePicker from "@react-native-community/datetimepicker";
import Moment from "moment";

// Fonts
import { useFonts } from "expo-font";

export default function RegisterScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    Roboto: require("../assets/fonts/Roboto-Regular.ttf"),
  });

  const [name, setName] = useState("");
  const [gender, setGender] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [city, setCity] = React.useState("");
  const gender_data = [
    { key: "1", value: "Femenino" },
    { key: "2", value: "Masculino" },
  ];

  const country_data = [
    { key: "1", value: "España" },
    { key: "2", value: "Francia" },
  ];

  const city_data = [
    { key: "1", value: "Madrid" },
    { key: "2", value: "Málaga" },
  ];

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

  return (
    <View className="flex-1 b-white">
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
                onChangeText={(newText) => setName(newText)}
                defaultValue={name}
              />
              {/* END FIRST NAME */}

              {/* LAST NAME */}
              <Text className="mt-8 mb-2 text-base font-medium italic text-slate-400">
                Introduce el apellido
              </Text>

              <TextInput
                className="italic font-semibold bg-white shadow-lg shadow-gray-400 rounded-xl px-3 py-2"
                onChangeText={(newText) => setName(newText)}
                defaultValue={name}
              />
              {/* END LAST NAME */}

              {/* EMAIL */}
              <Text className="mt-8 mb-2 text-base font-medium italic text-slate-400">
                Correo electrónico (*)
              </Text>

              <TextInput className="italic font-semibold bg-white shadow-lg shadow-gray-400 rounded-xl px-3 py-2" />
              {/* END EMAIL */}

              {/* WEIGHT */}
              <Text className="mt-8 mb-2 text-base font-medium italic text-slate-400">
                Peso
              </Text>

              <TextInput className="italic font-semibold bg-white shadow-lg shadow-gray-400 rounded-xl px-3 py-2" />
              {/* END WEIGHT */}

              {/* HEIGHT */}
              <Text className="mt-8 mb-2 text-base font-medium italic text-slate-400">
                Altura
              </Text>

              <TextInput className="italic font-semibold bg-white shadow-lg shadow-gray-400 rounded-xl px-3 py-2" />
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
              {/* END CITY */}

              {/* POSTAL CODE */}
              <Text className="mt-8 mb-2 text-base font-medium italic text-slate-400">
                Código postal
              </Text>

              <TextInput className="italic font-semibold bg-white shadow-lg shadow-gray-400 rounded-xl px-3 py-2" />
              {/* END POSTAL CODE */}

              {/* PHONE */}
              <Text className="mt-8 mb-2 text-base font-medium italic text-slate-400">
                Teléfono
              </Text>

              <TextInput className="italic font-semibold bg-white shadow-lg shadow-gray-400 rounded-xl px-3 py-2" />
              {/* END PHONE */}

              {/* BIRTHDAY */}
              <Text className="mt-8 mb-2 text-base font-medium italic text-slate-400">
                Fecha de nacimiento
              </Text>
                <TouchableOpacity onPress={showDatepicker} className="bg-white shadow-lg shadow-gray-400 rounded-xl px-3 py-3">
                  <Text className="italic font-semibold ">
                    {birthday}
                  </Text>
                </TouchableOpacity>

                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    timeZoneOffsetInMinutes={0}
                    value={date}
                    mode={mode}
                    minimumDate={new Date(Moment().subtract(100, 'years').format("DD/MM/YYYY"))}
                    maximumDate={new Date(Moment().subtract(18, 'years').format("DD/MM/YYYY"))}
                    is24Hour={true}
                    onChange={onChange}
                    display="calendar"
                  />
                )}
              {/* END BIRTHDAY */}
            </View>
            {/* END BODY */}

            <TouchableOpacity
              onPress={() => navigation.navigate("Menu")}
              className="mt-10 bg-background-dark px-20 py-4 rounded-xl"
            >
              <Text className="text-white font-medium">Registrarse</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
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
