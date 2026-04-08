import { createNativeStackNavigator } from '@react-navigation/native-stack';


import OneboardingOne from './screens/onboarding/OnboardingOne';
import OneboardingTwo from './screens/onboarding/OnboardingTwo';


const OnboardingStack = createNativeStackNavigator();

export default function OnboardingStackOld() {
    return (
        <OnboardingStack.Navigator>
            <OnboardingStack.Screen
                name="OnboardingOne"
                component={OneboardingOne}
                options={{ title: 'OnboardingOne', headerShown: false }}
            />
            <OnboardingStack.Screen
                name="OnboardingTwo"
                component={OneboardingTwo}
                options={{ title: 'OnboardingTwo', headerShown: false }}
            />
        </OnboardingStack.Navigator>
    );
}
