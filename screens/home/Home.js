import { useState, useCallback } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import RecipeCard from '../../components/RecipeCard';
import { colors } from "../../theme/colors"


export default function Home() {
    const navigation = useNavigation();
    const [recipes, setRecipes] = useState([]);

    useFocusEffect(
        useCallback(() => {
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
        }, []))
        ;

    return (
        <FlatList
            data={[...recipes].reverse()}
            renderItem={({ item }) => <RecipeCard recipe={item} onPress={() => navigation.navigate("Recipe", { recipe: item })} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.container}

        />
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 10,
        padding: 10,
        backgroundColor: colors.background,
        paddingBottom: 150
    },
})