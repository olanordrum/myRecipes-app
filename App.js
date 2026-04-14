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
    const checkOnboarding = async () => {
      try {
        const value = await AsyncStorage.getItem('hasOnboarded');
        setIsFirstLaunch(value !== 'true');
      } catch (e) {
        console.log("Error reading onboarding status", e);
        setIsFirstLaunch(true);
      };
    }

    checkOnboarding();
  }, []);

  if (isFirstLaunch === null) return null;
  return (
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
  );
}

