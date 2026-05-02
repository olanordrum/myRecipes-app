import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import OnboardingOne from './screens/onboarding/OnboardingOne';
import OnboardingTwo from './screens/onboarding/OnboardingTwo';
import OnboardingThree from './screens/onboarding/OnboardingThree';
import MainTabs from "./navigation/MainTabs";


const OnboardingStack = createNativeStackNavigator();

export default function App() {
  const [username, setUsername] = useState('');
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const onboardingValue = await AsyncStorage.getItem('hasOnboarded');
        setIsFirstLaunch(onboardingValue !== 'true');

        const storedUsername = await AsyncStorage.getItem('username');
        setUsername(storedUsername ?? '');

      } catch (e) {
        console.log("Error reading onboarding status", e);
        setIsFirstLaunch(true);
      };
    }

    loadData();
  }, []);

  if (isFirstLaunch === null) return null;
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <OnboardingStack.Navigator
          initialRouteName={isFirstLaunch ? "OnboardingOne" : "MainTabs"}
          screenOptions={{ headerShown: false }}
        >

          <OnboardingStack.Screen
            name="OnboardingOne"
            component={OnboardingOne}
          />

          <OnboardingStack.Screen
            name="OnboardingTwo"
            component={OnboardingTwo}
          />

          <OnboardingStack.Screen
            name="OnboardingThree"
          >
            {() => (
              <OnboardingThree
                username={username}
                setUsername={setUsername}
              />
            )}

          </OnboardingStack.Screen>


          <OnboardingStack.Screen name="MainTabs" >
            {() => (
              <MainTabs
                username={username}
                setUsername={setUsername}
              />
            )}
          </OnboardingStack.Screen>

        </OnboardingStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

