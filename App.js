import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';

// Fonts
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto': require("./assets/fonts/Roboto-Regular.ttf"),
  })

  return (
    <View className="flex-1 items-center justify-center" style={{ fontFamily: 'Roboto' }}>
      <Text className="font-semibold text-2xl" >¿Qué te trae a Hacktua?</Text>

      <StatusBar style="auto" />
    </View>
  );
}
