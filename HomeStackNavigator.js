import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/home/Home';
import RecipeDetailSreen from './screens/home/RecipeDetailScreen'

const HomeStack = createNativeStackNavigator();

export default function HomeStackNavigator() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Home"
                component={Home}
                options={{ title: 'Home', headerShown: false }}
            />
            <HomeStack.Screen
                name="Recipe"
                component={RecipeDetailSreen}
                options={{ title: 'Recipe', headerShown: true, presentation: 'modal', animation: 'slide_from_bottom' }}
            />
        </HomeStack.Navigator>
    );
}
