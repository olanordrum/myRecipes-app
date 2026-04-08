import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/home/Home';
import RecipeDetailSreen from '../screens/home/RecipeDetailScreen'

const HomeStackNav = createNativeStackNavigator();

export function HomeStack() {
    return (
        <HomeStackNav.Navigator>
            <HomeStackNav.Screen
                name="Home"
                component={Home}
                options={{ title: 'Home', headerShown: false }}
            />
            <HomeStackNav.Screen
                name="Recipe"
                component={RecipeDetailSreen}
                options={{ title: 'Recipe', headerShown: true, presentation: 'modal', animation: 'slide_from_bottom' }}
            />
        </HomeStackNav.Navigator>
    );
}
