import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from "react";

import OnboardingOne from './screens/onboarding/OnboardingOne';
import OnboardingTwo from './screens/onboarding/OnboardingTwo';
import OnboardingThree from './screens/onboarding/OnboardingThree';
import MainTabs from "./navigation/MainTabs";


const OnboardingStack = createNativeStackNavigator();

export default function App() {
  const [username, setUsername] = useState('');
  return (
    <NavigationContainer>

      <OnboardingStack.Navigator
        initialRouteName="OnboardingOne"
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

