import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from "@react-navigation/native";

import { useState, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from "../theme/colors"
import StatsCard from '../components/StatsCard';


export default function Stats() {
    const [recipes, setRecipes] = useState([]);
    const totalRecipes = recipes.length;

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
        <SafeAreaView style={styles.SafeAreaView}>
            <View style={styles.container}>
                <Text style={styles.header} accessibilityRole="header"> Statistics</Text>
                <StatsCard header={"Number of recipes"} data={totalRecipes} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
        backgroundColor: colors.background
    },

    container: {
        flex: 1,
        padding: 10,
        gap: 10,
        backgroundColor: colors.background,
        justifyContent: 'flex-start',

    },

    header: {
        fontSize: 25,
        color: colors.text
    },
})