import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import OneboardingOne from './screens/onboarding/OnboardingOne';
import OneboardingTwo from './screens/onboarding/OnboardingTwo';
import MainTabs from "./navigation/MainTabs";


const OnboardingStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <OnboardingStack.Navigator
        initialRouteName="OnboardingOne"
        screenOptions={{ headerShown: false }}
      >

        <OnboardingStack.Screen
          name="OnboardingOne"
          component={OneboardingOne}
        />

        <OnboardingStack.Screen
          name="OnboardingTwo"
          component={OneboardingTwo}
        />

        <OnboardingStack.Screen
          name="MainTabs"
          component={MainTabs} />

      </OnboardingStack.Navigator>
    </NavigationContainer>
  );
}

