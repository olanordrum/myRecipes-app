import { ScrollView, View, Text, TextInput, StyleSheet, Pressable, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { colors } from "../theme/colors"
import IngredientInput from '../components/IngredientInput';
import Ionicons from '@expo/vector-icons/Ionicons';
import { BottomTabBar } from '@react-navigation/bottom-tabs';



export default function CreateRecipe() {
    const [recipeName, setRecipeName] = useState("");
    const [recipeDescription, setRecipeDescription] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [recipeInstructions, setRecipeInstructions] = useState("");
    let isValid = recipeName.trim() !== "";


    const saveRecipe = async () => {
        Keyboard.dismiss();
        try {
            const existingRecipes = await AsyncStorage.getItem('recipes');
            let recipes = existingRecipes ? JSON.parse(existingRecipes) : [];

            recipes.push({
                id: Date.now().toString(),
                title: recipeName,
                description: recipeDescription,
                ingredients: ingredients,
                instructions: recipeInstructions,
                date: new Date().toISOString()
            });

            await AsyncStorage.setItem('recipes', JSON.stringify(recipes));

            //Erasing the states
            setRecipeName('');
            setRecipeDescription('');
            setRecipeInstructions('');
            setIngredients("");
            alert("Recipe saved!");
        } catch (error) {
            console.log("Error saving recipe", error);
        }
    }


    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Recipe name</Text>
            <TextInput
                placeholder="Recipe name"
                value={recipeName}
                onChangeText={setRecipeName}
                autoCapitalize='sentences'
                style={styles.input}
                returnKeyType="done"
                onSubmitEditing={Keyboard.dismiss}
            />

            <Text style={styles.header}>Recipe decription</Text>
            <TextInput
                placeholder='Short recipe description'
                value={recipeDescription}
                onChangeText={setRecipeDescription}
                autoCapitalize='sentences'
                style={[styles.input, styles.multilineTextShort]}
                multiline
                returnKeyType="done"
                onSubmitEditing={Keyboard.dismiss}
                submitBehavior={'blurAndSubmit'}

            />
            <Text style={styles.header}>Ingredients</Text>
            <IngredientInput onAdd={(ingredient) => {
                setIngredients(prev => [...prev, ingredient]);
            }} />

            <View style={styles.ingredientContainer}>
                {ingredients && ingredients.map((item, index) => (
                    <View key={index} style={styles.ingredientRow}>
                        <View style={styles.name}><Text>{item.name}</Text></View>
                        <View style={styles.measure}><Text>{item.measure}</Text></View>
                        <Pressable
                            style={styles.deleteButton}
                            onPress={
                                () => setIngredients(ingredientsList => ingredientsList.filter((_, i) => i !== index))
                            }>
                            <Ionicons name="close" size={20} color={"red"} />
                        </Pressable>
                    </View>
                ))
                }
            </View>

            <Text style={styles.header}>Recipe instructions</Text>
            <TextInput
                placeholder='Recipe instructions'
                value={recipeInstructions}
                onChangeText={setRecipeInstructions}
                autoCapitalize='sentences'
                style={[styles.input, styles.multilineText]}
                multiline
                returnKeyType="done"
                onSubmitEditing={Keyboard.dismiss}
                submitBehavior={'blurAndSubmit'}
            />
            <Pressable
                style={isValid ? styles.pressable : [styles.pressable, styles.disabled]}
                disabled={!isValid}
                onPress={() => saveRecipe()}
            >
                <Text style={styles.pressableText}>
                    Save recipe
                </Text>
            </Pressable>

        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        gap: 10,
        backgroundColor: colors.background,
        paddingBottom: 100
    },

    header: {
        color: colors.text,
        fontSize: 20
    },

    input: {
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.border,
        backgroundColor: colors.surface
    },

    multilineTextShort: {
        minHeight: 75,
    },

    multilineText: {
        minHeight: 100,
    },

    ingredientContainer: {
        gap: 10
    },

    ingredientRow: {
        flexDirection: "row",
        alignItems: 'flex-start',
        gap: 10,
    },

    measure: {
        flex: 1,
        padding: 10,
        borderRadius: 5,
        color: colors.textSecondary,
        backgroundColor: colors.surface,
    },

    name: {
        flex: 1,
        padding: 10,
        borderRadius: 5,
        color: colors.text,
        fontWeight: "500",
        backgroundColor: colors.surface,

    },

    deleteButton: {
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: colors.surface,
        justifyContent: "center",
        alignSelf: "stretch"
    },

    pressable: {
        padding: 10,
        alignItems: "center",
        borderRadius: 3,
        backgroundColor: colors.primary,
    },

    disabled: {
        backgroundColor: colors.disabled
    },

    pressableText: {
        fontWeight: "bold",
        color: colors.primaryText
    }
})