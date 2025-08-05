import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

import {
  useFonts as useInterFonts,
  Inter_400Regular,
} from '@expo-google-fonts/inter';
import {
  useFonts as usePlayfairFonts,
  PlayfairDisplay_700Bold,
} from '@expo-google-fonts/playfair-display';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [interLoaded] = useInterFonts({
    Inter_400Regular,
  });

  const [playfairLoaded] = usePlayfairFonts({
    PlayfairDisplay_700Bold,
  });

  const fontsLoaded = interLoaded && playfairLoaded;

  if (!fontsLoaded) {
    return null; // Fonts still loading
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
