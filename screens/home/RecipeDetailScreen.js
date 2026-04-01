import { View, Text, StyleSheet } from 'react-native';
import { colors } from "../../theme/colors"



export default function RecipeDetailScreen({ route }) {
    const { recipe } = route.params;

    return (
        <View style={styles.container}>
            <Text>{recipe.title}</Text>
            <Text>{recipe.description}</Text>
            <Text>{recipe.instructions}</Text>
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