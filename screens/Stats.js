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
import { getLast6Months } from '../utils';


export default function Stats() {
    const [isLoading, setisLoading] = useState(true);
    const [recipes, setRecipes] = useState([]);
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [{ data: [] }]
    });

    const totalRecipes = recipes.length;


    useFocusEffect(
        useCallback(() => {
            const months = getLast6Months();
            const recipeCount = {};

            months.forEach(month => {
                recipeCount[month.key] = 0;
            });

            const getRecipes = async () => {
                try {
                    const existingRecipes = await AsyncStorage.getItem('recipes');
                    const parsed = existingRecipes ? JSON.parse(existingRecipes) : [];
                    setRecipes(parsed);

                    parsed.forEach(recipe => {
                        if (!recipe.date) return;

                        const date = new Date(recipe.date);
                        const key = `${date.getFullYear()}-${date.getMonth()}`;

                        if (recipeCount[key] !== undefined) {
                            recipeCount[key]++;
                        }
                    });

                    const labels = months.map(month => month.label)
                    const data = months.map(month => recipeCount[month.key] || 0);

                    setChartData({
                        labels,
                        datasets: [{ data }]
                    });



                    setisLoading(false);
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
                <View style={styles.divider} />
                <StatsCard header={"Number of recipes"} data={totalRecipes} />
                {isLoading ? (
                    <View>
                        <Text>
                            Loading...
                        </Text>
                    </View>
                ) :
                    <View style={styles.graphContainer}>
                        <Text style={styles.graphHeader}>Recipes uploaded</Text>
                        <LineChart
                            data={chartData}
                            width={screenWidth - 50}
                            height={220}
                            yAxisSuffix=""
                            chartConfig={{
                                backgroundColor: colors.border,
                                backgroundGradientFrom: colors.surface,
                                backgroundGradientTo: colors.surface,
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
                }
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
        paddingTop: 0,
        padding: 20,
        gap: 10,
        backgroundColor: colors.background,
        justifyContent: 'flex-start',

    },

    header: {
        fontSize: 25,
        color: colors.text
    },

    divider: {
        borderWidth: 0.5,
        borderColor: colors.border
    },

    graphContainer: {
        alignItems: "center",
        borderRadius: 10,
        gap: 10,
        backgroundColor: colors.surface
    },

    graphHeader: {
        fontSize: 20,
        color: colors.text
    }

})