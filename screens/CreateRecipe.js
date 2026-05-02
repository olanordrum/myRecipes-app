import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, View, Text, TextInput, StyleSheet, Pressable, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { colors } from "../theme/colors"
import IngredientInput from '../components/IngredientInput';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";



export default function CreateRecipe() {
    const navigation = useNavigation();

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
            setIngredients([]);
            alert("Recipe saved!");
            navigation.goBack();
        } catch (error) {
            console.log("Error saving recipe", error);
        }
    }


    return (
        <SafeAreaView style={styles.SafeAreaView}>
            <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.container} accessibilityRole="header" accessibilityLabel='Create a recipe' >
                <Text style={styles.h1} accessibilityRole="header">Create recipe</Text>
                <Text style={styles.h2}>Recipe name</Text>
                <TextInput
                    placeholder="Recipe name"
                    value={recipeName}
                    onChangeText={setRecipeName}
                    autoCapitalize='sentences'
                    style={styles.input}
                    returnKeyType="done"
                    onSubmitEditing={Keyboard.dismiss}
                    accessibilityRole="text"
                    accessibilityLabel="Recipe name, required"
                    accessibilityHint="Sets recipe name"
                />

                <Text style={styles.h2}>Description</Text>
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
                    accessibilityRole="text"
                    accessibilityLabel="Short recipe description"
                    accessibilityHint="Sets recipe description "
                />
                <Text style={styles.h2}>Ingredients</Text>
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
                                }
                                accessibilityRole="button"
                                accessibilityHint="Deletes ingredient from ingredient list"
                            >
                                <Ionicons name="close" size={20} color={"red"} />
                            </Pressable>
                        </View>
                    ))
                    }
                </View>

                <Text style={styles.h2}>Instructions</Text>
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
                    accessibilityRole="text"
                    accessibilityLabel="Recipe instructions"
                    accessibilityHint="Sets instructions for recipe "
                />
                <Pressable
                    style={isValid ? styles.pressable : [styles.pressable, styles.disabled]}
                    disabled={!isValid}
                    onPress={() => saveRecipe()}
                    accessibilityRole="button"
                    accessibilityHint="Saves recipe"
                >
                    <Text style={styles.pressableText}>
                        Save recipe
                    </Text>
                </Pressable>

            </ScrollView >
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
        backgroundColor: colors.background
    },

    scrollContainer: {
        backgroundColor: colors.background,
    },

    container: {
        padding: 20,
        gap: 10,
        backgroundColor: colors.background,
        paddingBottom: 100
    },

    h1: {
        fontSize: 30,
        fontWeight: 500,
        color: colors.text,
    },

    h2: {
        color: colors.textSecondary,
        fontSize: 17
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