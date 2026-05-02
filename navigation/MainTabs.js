import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../theme/colors'
import { HomeStack } from '../navigation/HomeStack';
import CreateRecipe from '../screens/CreateRecipe';
import Stats from "../screens/Stats";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

export default function MainTabs({ username, setUsername }) {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.textSecondary,
                tabBarStyle: { position: 'absolute' },
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="HomeStack"
                options={{ title: 'Home', tabBarIcon: ({ color }) => <Ionicons name="home" size={20} color={color} />, tabBarAccessibilityLabel: 'Navigates to homescreen' }}
            >
                {() => (
                    <HomeStack
                        username={username}
                    />
                )}
            </Tab.Screen>
            <Tab.Screen
                name="Create recipe"
                component={CreateRecipe}
                options={{ title: 'Create Recipe', tabBarIcon: ({ color }) => <Ionicons name="pencil" size={20} color={color} />, tabBarAccessibilityLabel: 'Navigates to create recipe tab' }}
            />
            <Tab.Screen
                name="Stats"
                component={Stats}
                options={{ title: 'Stats', tabBarIcon: ({ color }) => <Ionicons name="analytics-outline" size={20} color={color} />, tabBarAccessibilityLabel: 'Navigates to Stats tab' }}
            />
            <Tab.Screen
                name="Profile"
                options={{ title: 'Profile', tabBarIcon: ({ color }) => <Ionicons name="person" size={20} color={color} />, tabBarAccessibilityLabel: 'Navigates to profile tab ' }}
            >
                {() => (
                    <Profile
                        username={username}
                        setUsername={setUsername}
                    />
                )}
            </Tab.Screen>
        </Tab.Navigator >
    )
}
