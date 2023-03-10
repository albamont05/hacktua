import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../src/config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isMessage, setIsMessage] = useState("");
  const [splashLoading, setSplashLoading] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const register = (
    name,
    last_name,
    username,
    email,
    password,
    weight,
    height,
    sex,
    country_id,
    city_id,
    phone,
    postal_code,
    born_date,
    navigation
  ) => {
    setIsLoading(true);
    axios
      .post(`https://roadbook.guru/hactuaback/public/api/register-user`, {
        name,
        last_name,
        username,
        email,
        password,
        weight,
        height,
        sex,
        country_id,
        city_id,
        phone,
        postal_code,
        born_date,
      })
      .then((res) => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        setIsLoading(false);
        navigation.navigate("Menu");
        console.log(userInfo);
      })
      .catch((e) => {
        console.log(`Error al registrarse ${e}`);
        setIsLoading(false);
      });
  };

  const login = (username, password, navigation) => {
    setIsLoading(true);
    setIsMessage("");
    axios
      .post(`https://roadbook.guru/hactuaback/public/api/login-user`, {
        username,
        password,
      })
      .then((res) => {
        let userInfo = res.data;

        if (userInfo.success == true) {
          setUserInfo(userInfo);
          AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
          //   navigation.navigate("Menu");
        } else {
          setIsMessage(userInfo.user);
        }

        setIsLoading(false);
        console.log(userInfo);
      })
      .catch((e) => {
        setIsMessage("Datos incorrectos");
        console.log(`Error al logearse ${e}`);
        setIsLoading(false);
      });
  };

  const removeUser = async () => {
    try {
      await AsyncStorage.removeItem("userInfo");
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    setIsLoading(true);
    AsyncStorage.removeItem("userInfo");
    removeUser
    // setUserInfo('');
    setIsLoading(false);
    console.log("Sesión terminada");
    // navigation.navigate("Login");
    setIsLogged(false);
  };

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);
      let userInfo = await AsyncStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
        console.log("logeado por storage");
      }
      setIsLogged(true);
      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log(`Error al logearse ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, [isLogged]);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        isMessage,
        splashLoading,
        isLogged,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
