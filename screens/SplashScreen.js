import React from "react";
import { ActivityIndicator, View } from "react-native";

const SplashScreen = () => {
  return (
    <View className="flex-1 justify-center bg-slate-50">
      <ActivityIndicator size="large" color="#4AB5A9" />
    </View>
  );
};

export default SplashScreen;
