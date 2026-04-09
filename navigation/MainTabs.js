import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../theme/colors'
import { HomeStack } from '../navigation/HomeStack';
import CreateRecipe from '../screens/CreateRecipe';
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.textSecondary,
                tabBarStyle: { position: 'absolute' },
            }}
        >
            <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                screenOptions={{ headerShown: false }}
                options={{ title: 'Home', tabBarIcon: ({ color }) => <Ionicons name="home" size={20} color={color} />, tabBarAccessibilityLabel: 'Navigates to homescreen' }}
            />
            <Tab.Screen
                name="Create recipe"
                component={CreateRecipe}
                options={{ title: 'Create Recipe', tabBarIcon: ({ color }) => <Ionicons name="pencil" size={20} color={color} />, tabBarAccessibilityLabel: 'Navigates to create recipe tab' }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{ title: 'Profile', tabBarIcon: ({ color }) => <Ionicons name="person" size={20} color={color} />, tabBarAccessibilityLabel: 'Navigates to profile tab ' }}
            />
        </Tab.Navigator >
    )
}
