import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from "./theme/colors"


import HomeStackNavigator from './HomeStackNavigator';
import CreateRecipe from './screens/CreateRecipe';
import Profile from "./screens/Profile";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.textSecondary,
          tabBarStyle: { position: 'absolute' },
        }}
      >
        <Tab.Screen
          name="HomeStackNavigator"
          component={HomeStackNavigator}
          options={{ title: 'Home', tabBarIcon: ({ color }) => <Ionicons name="home" size={20} color={color} />, tabBarAccessibilityLabel: 'Homescreen tab' }}
        />
        <Tab.Screen
          name="Create recipe"
          component={CreateRecipe}
          options={{ title: 'Create Recipe', tabBarIcon: ({ color }) => <Ionicons name="pencil" size={20} color={color} />, tabBarAccessibilityLabel: 'Create recipe tab' }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{ title: 'Profile', tabBarIcon: ({ color }) => <Ionicons name="person" size={20} color={color} />, tabBarAccessibilityLabel: 'Profile tab' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

