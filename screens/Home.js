import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RecipeCard from '../components/RecipeCard';
import { colors } from "../theme/colors"


export default function Home() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const getRecipes = async () => {
            try {
                const existingRecipes = await AsyncStorage.getItem('recipes');
                const parsed = existingRecipes ? JSON.parse(existingRecipes) : [];
                console.log(parsed);
                setRecipes(parsed);
            } catch (error) {
                console.log("Error getting recipes:", error);
            }
        };

        getRecipes();
    }, []);

    return (
        <View style={styles.container}>
            {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: 20,
        gap: 10,
        backgroundColor: colors.background
    }
})