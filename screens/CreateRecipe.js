import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { colors } from "../theme/colors"


export default function CreateRecipe() {
    const [recipeName, setRecipeName] = useState("");
    const [recipeDescription, setRecipeDescription] = useState("");


    const saveRecipe = async () => {
        try {
            const existingRecipes = await AsyncStorage.getItem('recipes');
            let recipes = existingRecipes ? JSON.parse(existingRecipes) : [];

            recipes.push({
                id: Date.now().toString(),
                title: recipeName,
                description: recipeDescription,
                date: new Date().toISOString()
            });

            await AsyncStorage.setItem('recipes', JSON.stringify(recipes));

            //Erasing the states
            setRecipeName('');
            alert("Recipe saved!");
        } catch (error) {
            console.log("Error saving recipe", error);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Recipe name</Text>
            <TextInput
                placeholder="Recipe name"
                value={recipeName}
                onChangeText={setRecipeName}
                autoCapitalize='sentences'
                style={styles.input}
            />

            <Text style={styles.header}>Recipe</Text>
            <TextInput
                placeholder='Recipe description'
                value={recipeDescription}
                onChangeText={setRecipeDescription}
                autoCapitalize='sentences'
                style={[styles.input, styles.multilineText]}
                multiline
            />
            <Pressable
                style={styles.pressable}
                onPress={() => saveRecipe()}
            >
                <Text style={styles.pressableText}>
                    Save recipe
                </Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        gap: 10,
        backgroundColor: colors.background
    },
    header: {
        color: colors.text,
        fontSize: 20
    },

    input: {
        padding: 10,
        borderRadius: 5,
        borderWidth: 3,
        borderColor: colors.border,
        backgroundColor: colors.surface
    },

    multilineText: {
        minHeight: 100,
    },

    pressable: {
        padding: 10,
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: colors.primary
    },

    pressableText: {
        fontWeight: "bold",
        color: colors.primaryText
    }
})