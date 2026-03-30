import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
                <Text>
                    {recipe.title}
                </Text>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background
    }
})