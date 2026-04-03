import { useState, useEffect } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import RecipeCard from '../../components/RecipeCard';
import { colors } from "../../theme/colors"


export default function Home() {
    const navigation = useNavigation();
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const getRecipes = async () => {
            try {
                const existingRecipes = await AsyncStorage.getItem('recipes');
                const parsed = existingRecipes ? JSON.parse(existingRecipes) : [];
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
                <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    onPress={() => navigation.navigate("Recipe", { recipe })}
                />
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