import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';


import Home from './screens/Home';
import CreateRecipe from './screens/CreateRecipe';
import Profile from "./screens/Profile";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home', tabBarIcon: () => <Ionicons name="home" size={20} />, tabBarAccessibilityLabel: 'Homescreen tab' }}
        />
        <Tab.Screen
          name="Create recipe"
          component={CreateRecipe}
          options={{ title: 'Create Recipe', tabBarIcon: () => <Ionicons name="pencil" size={20} />, tabBarAccessibilityLabel: 'Create recipe tab' }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{ title: 'Profile', tabBarIcon: () => <Ionicons name="person" size={20} />, tabBarAccessibilityLabel: 'Profile tab' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

