import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from "@react-navigation/native";

import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
const screenWidth = Dimensions.get("window").width;

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

                <LineChart
                    data={{
                        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        datasets: [
                            {
                                data: [2, 5, 3, 8, 4, 3]
                            }
                        ]
                    }}
                    width={screenWidth * 0.9}
                    height={220}
                    yAxisSuffix=""
                    chartConfig={{
                        backgroundColor: colors.border,
                        backgroundGradientFrom: colors.background,
                        backgroundGradientTo: colors.background,
                        decimalPlaces: 0,
                        color: (opacity = 1) => `${colors.primary}${Math.round(opacity * 255).toString(16)}`,
                        labelColor: () => colors.textSecondary,

                        propsForDots: {
                            r: "3",
                            strokeWidth: "1",
                            stroke: colors.primary
                        }
                    }}
                    style={styles.graph}
                />
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

    graph: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: colors.border,
    }
})