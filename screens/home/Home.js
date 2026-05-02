import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useCallback } from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import RecipeCard from '../../components/RecipeCard';
import { colors } from "../../theme/colors"


export default function Home({ username }) {
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
        <SafeAreaView style={styles.SafeAreaView}>
            <View style={styles.container}>
                <Text style={styles.header} accessibilityRole="header"> Hello {username}</Text>
                <FlatList
                    data={[...recipes].reverse()}
                    renderItem={({ item }) => <RecipeCard recipe={item} onPress={() => navigation.navigate("Recipe", { recipe: item })} />}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.flatListContainer}

                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
        backgroundColor: colors.background,
    },

    container: {
        flex: 1,
        gap: 10,
        padding: 10,
        backgroundColor: colors.background,
    },

    header: {
        fontSize: 25,
        color: colors.text
    },

    flatListContainer: {
        gap: 10,
        backgroundColor: colors.background,
        paddingBottom: 150
    },
})